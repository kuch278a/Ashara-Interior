import React, { useEffect, useRef } from 'react';
import asset_1 from '../assets/client_logos/eaii_institute.png';
import asset_2 from '../assets/client_logos/prosperity_party.png';
import asset_3 from '../assets/client_logos/customs_commission.png';
import asset_4 from '../assets/client_logos/fbc_media.png';
import asset_5 from '../assets/client_logos/Ethiopian_Press_Agency.png';
import asset_6 from '../assets/client_logos/bw_policy_studies_institute.jpg';
import asset_7 from '../assets/client_logos/bw_oromia_president_office.jpg';
import asset_8 from '../assets/client_logos/ministry_of_revenues.png';
import asset_9 from '../assets/client_logos/addis_ababa_police.png';
import asset_10 from '../assets/client_logos/oromia_police.png';
import asset_11 from '../assets/client_logos/united_beverages.png';
import asset_12 from '../assets/client_logos/amibara_properties.png';
import asset_13 from '../assets/client_logos/bw_hill_bottom.jpg';
import asset_14 from '../assets/client_logos/bw_mela_muziqa.jpg';

const CLIENTS = [
  { name: 'Artificial Intelligence Institute', image: asset_1, alt: 'Artificial Intelligence Institute' },
  { name: 'Prosperity Party', image: asset_2, alt: 'Prosperity Party' },
  { name: 'Customs Commission', image: asset_3, alt: 'Customs Commission' },
  { name: 'FBC Media', image: asset_4, alt: 'FBC Media' },
  { name: 'Ethiopian Press Agency', image: asset_5, alt: 'Ethiopian Press Agency' },
  { name: 'Policy Studies Institute', image: asset_6, alt: 'Policy Studies Institute' },
  { name: "Oromia President's Office", image: asset_7, alt: "Oromia President's Office" },
  { name: 'Ministry of Revenues', image: asset_8, alt: 'Ministry of Revenues' },
  { name: 'Addis Ababa Police', image: asset_9, alt: 'Addis Ababa Police' },
  { name: 'Oromia Police', image: asset_10, alt: 'Oromia Police' },
  { name: 'United Beverages', image: asset_11, alt: 'United Beverages' },
  { name: 'Amibara Properties', image: asset_12, alt: 'Amibara Properties' },
  { name: 'Hill Bottom Recreation', image: asset_13, alt: 'Hill Bottom Recreation' },
  { name: 'Mela Muziqa', image: asset_14, alt: 'Mela Muziqa' },
];

export default function ClientsSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-4">
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 sm:gap-x-16 sm:gap-y-12">
        {CLIENTS.map((client, index) => (
          <div key={index} className="flex items-center justify-center w-[120px] sm:w-[150px]">
            <img
              src={client.image}
              alt={client.alt}
              loading="lazy"
              decoding="async"
              className="h-16 sm:h-24 w-full object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 dark:grayscale-0 dark:opacity-80 dark:brightness-125 dark:hover:opacity-100 dark:hover:brightness-150 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

