const CLIENTS = [
  { name: 'Prosperity Party', image: './client_logos/prosperity_party.png', alt: 'Prosperity Party' },
  { name: 'Customs Commission', image: './client_logos/customs_commission.png', alt: 'Customs Commission' },
  { name: 'FBC Media', image: './client_logos/fbc_media.png', alt: 'FBC Media' },
  { name: 'Ethiopian Press Agency', image: './client_logos/Ethiopian_Press_Agency.png', alt: 'Ethiopian Press Agency' },
  { name: 'Policy Studies Institute', image: './client_logos/bw_policy_studies_institute.jpg', alt: 'Policy Studies Institute' },
  { name: "Oromia President's Office", image: './client_logos/bw_oromia_president_office.jpg', alt: "Oromia President's Office" },
  { name: 'Ministry of Revenues', image: './client_logos/ministry_of_revenues.png', alt: 'Ministry of Revenues' },
  { name: 'Artificial Intelligence Institute', image: './client_logos/eaii_institute.png', alt: 'Artificial Intelligence Institute' },
  { name: 'Addis Ababa Police', image: './client_logos/addis_ababa_police.png', alt: 'Addis Ababa Police' },
  { name: 'Oromia Police', image: './client_logos/oromia_police.png', alt: 'Oromia Police' },
  { name: 'United Beverages', image: './client_logos/united_beverages.png', alt: 'United Beverages' },
  { name: 'Amibara Properties', image: './client_logos/amibara_properties.png', alt: 'Amibara Properties' },
  { name: 'Hill Bottom Recreation', image: './client_logos/bw_hill_bottom.jpg', alt: 'Hill Bottom Recreation' },
  { name: 'Mela Muziqa', image: './client_logos/bw_mela_muziqa.jpg', alt: 'Mela Muziqa' },
];

const ROW_1 = CLIENTS.slice(0, 10);
const ROW_2 = CLIENTS.slice(10).concat(CLIENTS.slice(0, 4));

export default function ClientsSection() {
  return (
    <div className="space-y-20 py-8">
      <section className="max-w-6xl mx-auto px-6 sm:px-10 text-center space-y-14">
        <h3 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white font-normal tracking-wide transition-colors duration-300">
          Our Clients
        </h3>

        <div className="relative">
          {/* Row 1 - Left to Right */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee-left whitespace-nowrap will-change-transform" aria-hidden="true">
              {ROW_1.map((client, i) => (
                <div key={`${client.name}-1-${i}`} className="flex-shrink-0 px-8 sm:px-12 py-4">
                  <img
                    src={client.image}
                    alt={client.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-20 sm:h-24 max-w-[200px] object-contain grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-110 dark:grayscale-0 dark:opacity-80 dark:brightness-125 dark:hover:opacity-100 dark:hover:brightness-150"
                  />
                </div>
              ))}
              {ROW_1.map((client, i) => (
                <div key={`${client.name}-1-dup-${i}`} className="flex-shrink-0 px-8 sm:px-12 py-4">
                  <img
                    src={client.image}
                    alt={client.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-20 sm:h-24 max-w-[200px] object-contain grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-110 dark:grayscale-0 dark:opacity-80 dark:brightness-125 dark:hover:opacity-100 dark:hover:brightness-150"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="overflow-hidden mt-12">
            <div className="flex animate-marquee-right whitespace-nowrap will-change-transform" aria-hidden="true">
              {ROW_2.map((client, i) => (
                <div key={`${client.name}-2-${i}`} className="flex-shrink-0 px-8 sm:px-12 py-4">
                  <img
                    src={client.image}
                    alt={client.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-20 sm:h-24 max-w-[200px] object-contain grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-110 dark:grayscale-0 dark:opacity-80 dark:brightness-125 dark:hover:opacity-100 dark:hover:brightness-150"
                  />
                </div>
              ))}
              {ROW_2.map((client, i) => (
                <div key={`${client.name}-2-dup-${i}`} className="flex-shrink-0 px-8 sm:px-12 py-4">
                  <img
                    src={client.image}
                    alt={client.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-20 sm:h-24 max-w-[200px] object-contain grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-110 dark:grayscale-0 dark:opacity-80 dark:brightness-125 dark:hover:opacity-100 dark:hover:brightness-150"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Fade Masks */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-ashara-cream via-transparent to-ashara-cream dark:from-ashara-dark dark:via-transparent dark:to-ashara-dark" style={{ maskImage: 'linear-gradient(to right, black 20%, transparent 50%, black 50%, transparent 80%, black)' }} />
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}