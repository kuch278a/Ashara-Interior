import os
import json
import fitz  # PyMuPDF

PDF_PATH = r"C:\Users\X\Documents\Ashara CPR.pdf"
OUTPUT_DIR = r"C:\Users\X\Documents\Ashara CPR Images"
ALL_DIR = os.path.join(OUTPUT_DIR, "all_images")
PROJECT_DIR = os.path.join(OUTPUT_DIR, "by_project")
UNIQUE_DIR = os.path.join(OUTPUT_DIR, "unique_images")

# Designated 27 projects matching Ashara CPR.pdf
PAGE_PROJECT_MAP = [
    (1, 14, "00_Brand_and_Company_Profile"),
    (15, 16, "01_Prosperity_Party_Head_Quarter_PM_Office"),
    (17, 18, "02_Amhara_Messob"),
    (19, 20, "03_Bahirdar_Messob"),
    (21, 22, "04_Ethiopian_Artificial_Intelligence_AI_Start_up_Center"),
    (23, 24, "05_Ethiopian_Artificial_Intelligence_Show_Room"),
    (25, 29, "06_FDRE_Ministry_of_Revenue_Minister_Office"),
    (30, 30, "07_United_Beverage"),
    (31, 33, "08_Woldia_City_Administration_Mayors_Office"),
    (34, 34, "09_Hill_Bottom_Outdoor_Lounge"),
    (35, 35, "10_Adama_City_Administration_Mayors_Office"),
    (36, 36, "11_Federal_Police_Commission_Video_Controlling_Room"),
    (37, 38, "12_Addis_Ababa_Police_Commission"),
    (39, 41, "13_Dr_Tilahun_Gessese_Memorial_Landscape"),
    (42, 44, "14_Public_Landscape_Design_Adama"),
    (45, 47, "15_Public_Landscape_Design_Addis_Ababa"),
    (48, 50, "16_Mella_Muziqa_Studio"),
    (51, 56, "17_Ethiopian_Artificial_Intelligence_Incubation_Center"),
    (57, 57, "18_Ethiopian_Artificial_Intelligence_Terrace_Design"),
    (58, 58, "19_Ethiopian_Artificial_Intelligence_Digital_Museum_Hall"),
    (59, 61, "20_Electronic_Cargo_Tracking"),
    (62, 63, "21_Ethiopian_Customs_Commission_Meeting_Room"),
    (64, 66, "22_Ethiopian_Customs_Commission_VIP_Lounge"),
    (67, 67, "23_Minister_of_Revenue_Building_Facad_Design"),
    (68, 69, "24_Ethiopian_Airforce_Landscape_and_Fountain_Design"),
    (70, 71, "25_Apartment_Facad_Design"),
    (72, 72, "26_Residential_Fasad_Design"),
    (73, 74, "27_Landscape_Design"),
    (75, 75, "28_Back_Cover_and_Contact"),
]

def get_project_folder(page_num):
    for start_p, end_p, proj_name in PAGE_PROJECT_MAP:
        if start_p <= page_num <= end_p:
            return proj_name
    return "other"

def main():
    os.makedirs(ALL_DIR, exist_ok=True)
    os.makedirs(PROJECT_DIR, exist_ok=True)
    os.makedirs(UNIQUE_DIR, exist_ok=True)

    doc = fitz.open(PDF_PATH)
    print(f"Loaded PDF: {PDF_PATH} ({len(doc)} pages)")

    xref_cache = {}
    catalog = []
    unique_saved = set()

    for p_idx in range(len(doc)):
        page_num = p_idx + 1
        page = doc[p_idx]
        image_list = page.get_images(full=True)
        proj_name = get_project_folder(page_num)
        proj_folder = os.path.join(PROJECT_DIR, proj_name)
        os.makedirs(proj_folder, exist_ok=True)

        for img_idx, img_info in enumerate(image_list, start=1):
            xref = img_info[0]

            if xref not in xref_cache:
                base_img = doc.extract_image(xref)
                ext = base_img["ext"]
                w = base_img["width"]
                h = base_img["height"]
                smask = base_img.get("smask", 0)

                if smask > 0:
                    pix1 = fitz.Pixmap(doc, xref)
                    pix2 = fitz.Pixmap(doc, smask)
                    pix = fitz.Pixmap(pix1, pix2)
                    if pix.colorspace and pix.colorspace.n >= 4:
                        pix = fitz.Pixmap(fitz.csRGB, pix)
                    data = pix.tobytes("png")
                    ext = "png"
                else:
                    data = base_img["image"]
                    if base_img.get("colorspace") == 4:
                        pix = fitz.Pixmap(doc, xref)
                        pix = fitz.Pixmap(fitz.csRGB, pix)
                        data = pix.tobytes("png")
                        ext = "png"

                xref_cache[xref] = {
                    "data": data,
                    "ext": ext,
                    "width": w,
                    "height": h,
                    "size_bytes": len(data),
                }

            cached = xref_cache[xref]
            ext = cached["ext"]
            w = cached["width"]
            h = cached["height"]
            sz = cached["size_bytes"]

            if xref not in unique_saved:
                unique_filename = f"xref_{xref}_{w}x{h}.{ext}"
                with open(os.path.join(UNIQUE_DIR, unique_filename), "wb") as f:
                    f.write(cached["data"])
                unique_saved.add(xref)

            all_filename = f"page_{page_num:02d}_img_{img_idx:02d}.{ext}"
            all_filepath = os.path.join(ALL_DIR, all_filename)
            with open(all_filepath, "wb") as f:
                f.write(cached["data"])

            proj_filename = f"page_{page_num:02d}_img_{img_idx:02d}.{ext}"
            proj_filepath = os.path.join(proj_folder, proj_filename)
            with open(proj_filepath, "wb") as f:
                f.write(cached["data"])

            catalog.append({
                "page": page_num,
                "image_index_on_page": img_idx,
                "xref": xref,
                "filename": all_filename,
                "project": proj_name,
                "width": w,
                "height": h,
                "format": ext.upper(),
                "size_bytes": sz,
                "size_kb": round(sz / 1024, 1),
            })

    print(f"Extraction complete! {len(catalog)} images assigned to designated projects.")

if __name__ == "__main__":
    main()
