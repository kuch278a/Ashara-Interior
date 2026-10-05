import asset_1 from '../assets/p1_prosperity.png';
import asset_2 from '../assets/client_logos/prosperity_party_hero.png';
import asset_3 from '../assets/client_logos/prosperity_party_hero.png';
import asset_4 from '../assets/client_logos/prosperity_party_main.jpg';
import asset_5 from '../assets/p6_revenues.png';
import asset_6 from '../assets/client_logos/ministry_of_revenues_hero.jpg';
import asset_7 from '../assets/client_logos/ministry_of_revenues_hero.jpg';
import asset_8 from '../assets/client_logos/ministry_of_revenues_auditorium.jpg';

export const DEFAULT_PROJECTS_LIST = [
  {
    id: 1,
    title: 'Prosperity Party Office',
    category: 'INTERIOR',
    subtitle: 'GOVERNMENT SUB-OFFICE',
    image: asset_1,
    fallbackImage: asset_2,
    description: 'Ashara Interiors was commissioned to design a grand presidential state suite and governmental convention headquarters. Integrating monumental Ethiopian historical references with contemporary civic transparency, the project features bespoke coffered timber acoustic domes, structural cantilevered glass staircases, and executive ceremonial boardrooms.',
    gallery: [
      asset_3,
      asset_4,
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 2,
    title: 'Ethiopia Federal Police',
    category: 'ARCHITECTURE',
    subtitle: 'GOVERNMENTAL HEADQUARTERS',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90',
    fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    description: 'A modern, high-security civic campus combining robust raw industrial concrete finishes with acoustic modular panels, advanced climate automation, and efficient spatial routing for federal operations.',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90'
    ]
  },
  {
    id: 3,
    title: 'Fana Broadcasting Corporation',
    category: 'CONSULTANCY',
    subtitle: 'BROADCASTING & MEDIA ATELIER',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    description: 'A cutting-edge television and multimedia broadcast hub featuring circular parametric acoustic galleries, sound-isolated live recording suites, and sunlit collaborative editing studios.',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90',
      'https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90'
    ]
  },
  {
    id: 4,
    title: 'United Beverages',
    category: 'INTERIOR',
    subtitle: 'CORPORATE HEAD OFFICE',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    description: 'A grand neoclassical corporate palace featuring double-height marble entrance colonnades, gilded brass details, and private executive lounges that embody prestige and longevity.',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90'
    ]
  },
  {
    id: 5,
    title: 'Amibara Properties',
    category: 'ARCHITECTURE',
    subtitle: 'COMMERCIAL REAL ESTATE HQ',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    description: 'A dual-level contemporary commercial showpiece with dramatic glass-cantilevered staircase architecture, polished Italian terrazzo flooring, and floor-to-ceiling panoramic facade glazing.',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90'
    ]
  },
  {
    id: 6,
    title: 'Ministry of Revenues',
    category: 'CONSULTANCY',
    subtitle: 'MINISTRY CIVIC COMPLEX',
    image: asset_5,
    fallbackImage: asset_6,
    description: 'A monumental civic dome auditorium incorporating geodesic timber space trusses, ambient indirect circadian lighting, and custom acoustical plasterwork designed for national assemblies.',
    gallery: [
      asset_7,
      asset_8,
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
    ]
  }
];


export const DEFAULT_CONSULTATION_LEADS = [
  {
    id: 'lead_01',
    fullName: 'Dr. Workneh Gebeyehu',
    email: 'w.gebeyehu@igad-diplomacy.org',
    telephone: '+251 91 123 4567',
    enquiry: 'Requesting an architectural consultation for an executive suite and conference hall acoustic redesign in Addis Ababa. We need monumental coffered timber ceiling details and diplomatic VIP hospitality lounges.',
    createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    status: 'new'
  },
  {
    id: 'lead_02',
    fullName: 'Selamawit Tadesse',
    email: 'selam.tadesse@boleluxury.com',
    telephone: '+251 90 763 6463',
    enquiry: 'We recently acquired a 450 sqm penthouse in Bole Atlas. Seeking bespoke interior architecture, custom Ethiopian walnut paneling, circadian ambient lighting, and imported Italian terrazzo finishes.',
    createdAt: new Date(Date.now() - 8 * 3600 * 1000).toISOString(),
    status: 'new'
  },
  {
    id: 'lead_03',
    fullName: 'Abebe Kebede',
    email: 'akebede@cbe-banking.et',
    telephone: '+251 92 345 6789',
    enquiry: 'Commercial Bank executive boardroom renovation. Need integrated biometric security entries, motorized acoustic partition walls, and custom solid brass reception desks for 3 branch headquarters.',
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    status: 'contacted'
  },
  {
    id: 'lead_04',
    fullName: 'Dawit Haile',
    email: 'dawit.haile@midroc-invest.com',
    telephone: '+251 91 456 7890',
    enquiry: 'Headquarters atrium and sky-lounge interior architecture completed in concept stage. Requesting tender proposal review for full turnkey construction and acoustic plaster finishes.',
    createdAt: new Date(Date.now() - 48 * 3600 * 1000).toISOString(),
    status: 'completed'
  }
];

export const DEFAULT_TESTIMONIALS_LIST = [
  {
    id: 'test_1',
    projectId: '1', // Prosperity Party Office
    clientName: "Deputy President's Office",
    role: 'Executive Bureau',
    organization: 'Prosperity Party Headquarters',
    rating: 5,
    quote: 'Ashara Interiors transformed our office space beyond our expectations. Their attention to detail and ability to deliver a luxurious, functional design within an incredibly tight deadline was remarkable.',
    isFeatured: true,
    createdAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString()
  },
  {
    id: 'test_2',
    projectId: '6', // Ministry of Revenues
    clientName: 'Infrastructure Directorate',
    role: 'Facility & Engineering Lead',
    organization: 'Ministry of Revenues',
    rating: 5,
    quote: 'The acoustic precision, custom timber paneling, and grand executive stage in our main auditorium exceeded all engineering standards. Ashara sets the benchmark for institutional interiors.',
    isFeatured: true,
    createdAt: new Date(Date.now() - 10 * 24 * 3600 * 1000).toISOString()
  },
  {
    id: 'test_3',
    projectId: '5', // Amibara Properties
    clientName: 'Project Development Board',
    role: 'Managing Directorate',
    organization: 'Amibara Properties',
    rating: 5,
    quote: 'From initial material curation to the final turnkey handover, Ashara handled our commercial headquarters with supreme professionalism. An unmatched eye for timeless architectural elegance.',
    isFeatured: true,
    createdAt: new Date(Date.now() - 15 * 24 * 3600 * 1000).toISOString()
  }
];

