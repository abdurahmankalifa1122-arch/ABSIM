import heroDetailingImg from '../assets/images/hero_luxury_detailing_1792227721860.jpg';
import foamWashImg from '../assets/images/foam_wash_process_1792227723837.jpg';
import interiorLeatherImg from '../assets/images/interior_leather_care_1792227723340.jpg';
import wheelCareImg from '../assets/images/wheel_brake_detailing_1792227723262.jpg';
import equipmentImg from '../assets/images/detailing_studio_equipment_1792228177222.jpg';

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Exterior' | 'Interior' | 'Specialist' | 'Comprehensive';
  estimatedDuration: string;
  image: string;
  features: string[];
}

export const BRAND_CONFIG = {
  name: 'ABSIM AUTOMOTIVE',
  tagline: 'PREMIUM AUTOMOTIVE CARE',
  city: 'Addis Ababa',
  country: 'Ethiopia',
  address: 'Behind AMCE, Megenagna, Addis Ababa, Ethiopia',
  landmark: 'Behind AMCE Compound, Megenagna District',
  phoneDisplay: '+251 91 189 3490',
  phoneRaw: '+251911893490',
  whatsappNumber: '251911893490',
  hoursDisplay: 'Mon – Sat: 8:00 AM – 6:30 PM (Appointments Preferred)',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Megenagna+AMCE+Addis+Ababa+Ethiopia',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'premium-wash',
    code: 'A',
    title: 'PREMIUM CAR WASH',
    category: 'Exterior',
    shortDesc: 'Thorough exterior cleaning with attention to the vehicle’s finish and presentation.',
    fullDesc: 'A meticulous multi-stage contact wash using pH-neutral foam, microfiber wash mitts, grit-guard buckets, and warm filtered rinsing to safely lift road grime without inflicting micro-scratches.',
    estimatedDuration: '45 – 60 mins',
    image: foamWashImg,
    features: [
      'High-lubricity snow foam pre-wash soak',
      'Two-bucket gentle hand wash with soft microfibers',
      'Wheel faces, barrels & wheel arches rinsed',
      'Microfiber towel drying & compressed air blow-out',
      'Streak-free exterior glass cleaning',
    ],
  },
  {
    id: 'interior-deep-cleaning',
    code: 'B',
    title: 'INTERIOR DEEP CLEANING',
    category: 'Interior',
    shortDesc: 'Careful cleaning of interior surfaces, carpets, and other suitable materials.',
    fullDesc: 'Comprehensive rejuvenation of the cabin environment. Vacuuming of all carpets and seat crevices, gentle surface shampooing, and dust extraction from vents and compartments.',
    estimatedDuration: '1.5 – 2.5 hours',
    image: interiorLeatherImg,
    features: [
      'Deep high-suction vacuuming across cabin & trunk',
      'Floor mat extraction & carpet spot treatment',
      'Gentle upholstery cleaning for fabric or leather',
      'Interior trim wipe-down and degreasing',
      'Odor neutralisation & air circulation freshening',
    ],
  },
  {
    id: 'exterior-detailing',
    code: 'C',
    title: 'EXTERIOR DETAILING',
    category: 'Exterior',
    shortDesc: 'A more meticulous exterior-cleaning service focused on improving the vehicle’s appearance.',
    fullDesc: 'Beyond a standard wash: fine paint decontamination, glass polishing, chrome and trim restoration, and protective sealant application that enhances depth of color and hydrophobic water beading.',
    estimatedDuration: '3 – 5 hours',
    image: heroDetailingImg,
    features: [
      'Chemical decontamination & clay surface smoothing',
      'Gloss-enhancing machine paint cleanse',
      'Deep rubber, plastics & black trim conditioning',
      'High-gloss hydrophobic sealant protection',
      'Exhaust tip brightening & mirror polishing',
    ],
  },
  {
    id: 'interior-detailing',
    code: 'D',
    title: 'INTERIOR DETAILING',
    category: 'Interior',
    shortDesc: 'Detailed attention to interior surfaces, visible dust, and hard-to-reach areas.',
    fullDesc: 'Fine brush detailing of instrument clusters, leather grain conditioning, piano-black trim care, steering wheel deep de-greasing, and conditioning of high-wear touchpoints.',
    estimatedDuration: '2 – 3 hours',
    image: interiorLeatherImg,
    features: [
      'Precision boars-hair brush detailing of all dash vents & switches',
      'Supple matte conditioning for leather surfaces',
      'Screen-safe optical cleaning for digital cockpit displays',
      'Door jambs & threshold kick plate cleansing',
      'Pedal box & seat rail rail decontamination',
    ],
  },
  {
    id: 'wheel-tyre-care',
    code: 'E',
    title: 'WHEEL & TYRE CARE',
    category: 'Specialist',
    shortDesc: 'Cleaning and finishing for wheels and tyres.',
    fullDesc: 'Dedicated attention to one of the most visible focal points of your automobile. Removal of stubborn baked brake dust, wheel barrel cleaning, and rich satin UV tire dressing that resists sling.',
    estimatedDuration: '45 mins',
    image: wheelCareImg,
    features: [
      'Acid-free pH-balanced brake dust dissolver',
      'Inner wheel barrel & brake caliper cleaning',
      'Tire sidewall scrub & oxidation removal',
      'Dry-touch satin non-greasy tire sealant',
      'Wheel face hydrophobic protective layer',
    ],
  },
  {
    id: 'full-vehicle-care',
    code: 'F',
    title: 'FULL VEHICLE CARE',
    category: 'Comprehensive',
    shortDesc: 'A combined service option for customers who want comprehensive vehicle cleaning.',
    fullDesc: 'Our definitive full-suite package uniting exterior precision washing, wheels treatment, interior rejuvenation, and paint protection in a seamless, unified service visit.',
    estimatedDuration: '4 – 6 hours',
    image: equipmentImg,
    features: [
      'Complete Premium Car Wash + Snow foam prep',
      'Full interior deep clean & dust extraction',
      'Wheels, calipers & tires deep decontamination',
      'Exterior paint gloss enhancement & sealant',
      'Complete final hand inspection with studio lighting',
    ],
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    title: 'Obsidian Clear Coat Studio Inspection',
    category: 'Exterior',
    aspect: '16:9',
    image: heroDetailingImg,
    caption: 'Deep gloss paint finish under diffuse studio lighting inspection lamps.',
  },
  {
    id: 'g2',
    title: 'Multi-Spoke Alloy & Caliper Finishing',
    category: 'Wheels',
    aspect: '4:3',
    image: wheelCareImg,
    caption: 'Clean rim barrel, spotless brake disc, and conditioned satin sidewalls.',
  },
  {
    id: 'g3',
    title: 'Studio Detailing Station & Machine Polisher',
    category: 'Studio Process',
    aspect: '4:3',
    image: equipmentImg,
    caption: 'Dual-action machine polishers, dedicated compounds, and controlled inspection lighting.',
  },
  {
    id: 'g4',
    title: 'Luxury Cabin Leather & Console Detailing',
    category: 'Interior',
    aspect: '4:3',
    image: interiorLeatherImg,
    caption: 'Supple leather conditioning, dust-free vents, and clear display screens.',
  },
  {
    id: 'g5',
    title: 'High-Density Hydrophobic Snow Foam Soak',
    category: 'Exterior',
    aspect: '4:3',
    image: foamWashImg,
    caption: 'Thick pre-wash foam encapsulating grit prior to touchless rinsing.',
  },
];
