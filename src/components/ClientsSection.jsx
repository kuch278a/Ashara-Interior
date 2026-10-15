import React from 'react';
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
import asset_15 from '../assets/client_logos/ethiopian_air_force.png';

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
  { name: 'United Beverages', image: asset_11, alt: 'United Beverages', large: true },
  { name: 'Amibara Properties', image: asset_12, alt: 'Amibara Properties', large: true },
  { name: 'Hill Bottom Recreation', image: asset_13, alt: 'Hill Bottom Recreation' },
  { name: 'Mela Muziqa', image: asset_14, alt: 'Mela Muziqa' },
  { name: 'Ethiopian Air Force', image: asset_15, alt: 'Ethiopian Air Force' },
];

export default function ClientsSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-4">
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 sm:gap-x-10 sm:gap-y-8">
        {CLIENTS.map((client, index) => (
          <div key={index} className={`flex items-center justify-center ${client.large ? 'w-[200px] sm:w-[260px]' : 'w-[160px] sm:w-[210px]'}`}>
            <img
              src={client.image}
              alt={client.alt}
              loading="lazy"
              decoding="async"
              className={`${client.large ? 'h-24 sm:h-32' : 'h-20 sm:h-28'} w-auto max-w-full object-contain transition-all duration-300 hover:scale-110`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
