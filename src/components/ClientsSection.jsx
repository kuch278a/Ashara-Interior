import React from 'react';
import asset_1 from '../assets/client_logos/eaii_institute.png';
import asset_2 from '../assets/client_logos/prosperity_party.png';
import asset_2_dark from '../assets/client_logos/prosperity_party_white.png';
import asset_3 from '../assets/client_logos/ministry_of_revenues.png';
import asset_4 from '../assets/client_logos/customs_commission.png';
import asset_4_dark from '../assets/client_logos/customs_commission_white.png';
import asset_5 from '../assets/client_logos/fbc_media.png';
import asset_6 from '../assets/client_logos/Ethiopian_Press_Agency.png';
import asset_7 from '../assets/client_logos/bw_policy_studies_institute.png';
import asset_8 from '../assets/client_logos/bw_oromia_president_office.png';
import asset_9 from '../assets/client_logos/addis_ababa_police.png';
import asset_10 from '../assets/client_logos/oromia_police.png';
import asset_11 from '../assets/client_logos/united_beverages.png';
import asset_11_dark from '../assets/client_logos/united_beverages_white.png';
import asset_12 from '../assets/client_logos/amibara_properties.png';
import asset_12_dark from '../assets/client_logos/amibara_properties_white.png';
import asset_13 from '../assets/client_logos/bw_hill_bottom.png';
import asset_13_dark from '../assets/client_logos/bw_hill_bottom_white.png';
import asset_14 from '../assets/client_logos/bw_mela_muziqa.png';
import asset_14_dark from '../assets/client_logos/bw_mela_muziqa_white.png';
import asset_15 from '../assets/client_logos/ethiopian_air_force.png';

const CLIENTS = [
  { name: 'Artificial Intelligence Institute', image: asset_1, alt: 'Artificial Intelligence Institute' },
  { name: 'Prosperity Party', image: asset_2, darkImage: asset_2_dark, alt: 'Prosperity Party' },
  { name: 'Ministry of Revenues', image: asset_3, alt: 'Ministry of Revenues' },
  { name: 'Customs Commission', image: asset_4, darkImage: asset_4_dark, alt: 'Customs Commission' },
  { name: 'FBC Media', image: asset_5, alt: 'FBC Media' },
  { name: 'Ethiopian Press Agency', image: asset_6, alt: 'Ethiopian Press Agency' },
  { name: 'Policy Studies Institute', image: asset_7, alt: 'Policy Studies Institute' },
  { name: "Oromia President's Office", image: asset_8, alt: "Oromia President's Office" },
  { name: 'Addis Ababa Police', image: asset_9, alt: 'Addis Ababa Police' },
  { name: 'Oromia Police', image: asset_10, alt: 'Oromia Police' },
  { name: 'United Beverages', image: asset_11, darkImage: asset_11_dark, alt: 'United Beverages' },
  { name: 'Amibara Properties', image: asset_12, darkImage: asset_12_dark, alt: 'Amibara Properties' },
  { name: 'Hill Bottom Recreation', image: asset_13, darkImage: asset_13_dark, alt: 'Hill Bottom Recreation' },
  { name: 'Mela Muziqa', image: asset_14, darkImage: asset_14_dark, alt: 'Mela Muziqa' },
  { name: 'Ethiopian Air Force', image: asset_15, alt: 'Ethiopian Air Force' },
];

export default function ClientsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 sm:gap-x-12 sm:gap-y-14 items-center justify-items-center">
        {CLIENTS.map((client, index) => (
          <div
            key={index}
            className={`flex items-center justify-center w-full h-24 sm:h-28 md:h-32 p-2 ${index === CLIENTS.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
          >
            {/* Light Mode image */}
            <img
              src={client.image}
              alt={client.alt}
              loading="lazy"
              decoding="async"
              className={`h-20 sm:h-24 md:h-28 ${client.darkImage ? 'dark:hidden' : ''} w-auto max-w-full object-contain transition-all duration-300 hover:scale-110 no-outline client-logo-img outline-none border-0 shadow-none`}
            />
            {/* Dedicated Dark Mode image for perfect high-contrast vector clarity */}
            {client.darkImage && (
              <img
                src={client.darkImage}
                alt={client.alt}
                loading="lazy"
                decoding="async"
                className={`h-20 sm:h-24 md:h-28 hidden dark:block w-auto max-w-full object-contain transition-all duration-300 hover:scale-110 no-outline client-logo-img outline-none border-0 shadow-none`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
