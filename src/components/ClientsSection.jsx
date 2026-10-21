import React from 'react';
import asset_1 from '../assets/client_logos/eaii_institute.png';
import asset_2 from '../assets/client_logos/prosperity_party.png';
import asset_3 from '../assets/client_logos/ministry_of_revenues.png';
import asset_4 from '../assets/client_logos/customs_commission.png';
import asset_5 from '../assets/client_logos/fbc_media.png';
import asset_6 from '../assets/client_logos/Ethiopian_Press_Agency.png';
import asset_7 from '../assets/client_logos/bw_policy_studies_institute.png';
import asset_8 from '../assets/client_logos/bw_oromia_president_office.png';
import asset_9 from '../assets/client_logos/addis_ababa_police.png';
import asset_10 from '../assets/client_logos/oromia_police.png';
import asset_11 from '../assets/client_logos/united_beverages.png';
import asset_12 from '../assets/client_logos/amibara_properties.png';
import asset_13 from '../assets/client_logos/bw_hill_bottom.png';
import asset_14 from '../assets/client_logos/bw_mela_muziqa.png';
import asset_15 from '../assets/client_logos/ethiopian_air_force.png';

const CLIENTS = [
  { name: 'Artificial Intelligence Institute', image: asset_1, alt: 'Artificial Intelligence Institute' },
  { name: 'Prosperity Party', image: asset_2, alt: 'Prosperity Party', darkClass: 'dark:brightness-125 dark:drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]' },
  { name: 'Ministry of Revenues', image: asset_3, alt: 'Ministry of Revenues' },
  { name: 'Customs Commission', image: asset_4, alt: 'Customs Commission', darkClass: 'dark:brightness-125 dark:drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]' },
  { name: 'FBC Media', image: asset_5, alt: 'FBC Media' },
  { name: 'Ethiopian Press Agency', image: asset_6, alt: 'Ethiopian Press Agency', darkClass: 'dark:brightness-110' },
  { name: 'Policy Studies Institute', image: asset_7, alt: 'Policy Studies Institute', darkClass: 'dark:brightness-125' },
  { name: "Oromia President's Office", image: asset_8, alt: "Oromia President's Office", darkClass: 'dark:brightness-110' },
  { name: 'Addis Ababa Police', image: asset_9, alt: 'Addis Ababa Police', darkClass: 'dark:brightness-125 dark:contrast-115' },
  { name: 'Oromia Police', image: asset_10, alt: 'Oromia Police', darkClass: 'dark:brightness-125 dark:contrast-115' },
  { name: 'United Beverages', image: asset_11, alt: 'United Beverages', large: true, darkClass: 'dark:brightness-150 dark:contrast-125 dark:drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]' },
  { name: 'Amibara Properties', image: asset_12, alt: 'Amibara Properties', large: true, darkClass: 'dark:brightness-150 dark:contrast-115 dark:drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]' },
  { name: 'Hill Bottom Recreation', image: asset_13, alt: 'Hill Bottom Recreation', darkClass: 'dark:brightness-0 dark:invert dark:opacity-90' },
  { name: 'Mela Muziqa', image: asset_14, alt: 'Mela Muziqa', darkClass: 'dark:brightness-0 dark:invert dark:opacity-90' },
  { name: 'Ethiopian Air Force', image: asset_15, alt: 'Ethiopian Air Force' },
];

export default function ClientsSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-6 sm:gap-x-10 sm:gap-y-8 items-center justify-items-center">
        {CLIENTS.map((client, index) => (
          <div key={index} className="flex items-center justify-center w-full">
            <img
              src={client.image}
              alt={client.alt}
              loading="lazy"
              decoding="async"
              className={`${client.large ? 'h-24 sm:h-32' : 'h-20 sm:h-28'} ${client.darkClass || ''} w-auto max-w-full object-contain transition-all duration-300 hover:scale-110 no-outline client-logo-img outline-none border-0 shadow-none`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
