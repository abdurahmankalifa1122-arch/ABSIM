import logoImg from '../assets/images/absim_official_logo_cropped.jpg';
import entranceImg from '../assets/images/absim_workshop_entrance.jpg';
import tyreChangerImg from '../assets/images/absim_tyre_changing_machine.jpg';
import wheelBalancerImg from '../assets/images/absim_wheel_balancing_machine.jpg';
import wheelAlignmentImg from '../assets/images/absim_wheel_alignment_equipment.jpg';
import inspectionPitImg from '../assets/images/absim_vehicle_inspection_pit.jpg';
import airCompressorImg from '../assets/images/absim_air_compressor.jpg';

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Tyre & Wheel' | 'Diagnostics' | 'Mechanical' | 'Vehicle Cleaning';
  estimatedDuration: string;
  image: string;
  features: string[];
}

export interface EquipmentItem {
  id: string;
  name: string;
  model: string;
  category: string;
  image: string;
  description: string;
  specifications: string[];
}

export const BRAND_CONFIG = {
  name: 'ABSIM AUTOMOTIVE',
  tagline: 'WORKING HARD, SERVING WELL',
  subheadline: 'Professional Automotive Care You Can Trust.',
  city: 'Addis Ababa',
  country: 'Ethiopia',
  address: 'Behind AMCE, Megenagna, Addis Ababa, Ethiopia',
  landmark: 'Behind AMCE Compound, Megenagna District',
  phoneDisplay: '+251 91 189 3490',
  phoneRaw: '+251911893490',
  whatsappNumber: '251911893490',
  hoursDisplay: 'Mon – Sat: 8:00 AM – 6:30 PM (Walk-ins & Appointments Welcome)',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Megenagna+AMCE+Addis+Ababa+Ethiopia',
  officialLogo: logoImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'tyre-changing',
    code: '01',
    title: 'Tyre Changing',
    category: 'Tyre & Wheel',
    shortDesc: 'Professional tyre mounting and demounting using modern German machinery that protects your rims.',
    fullDesc: 'Using our heavy-duty Twin Busch Germany pneumatic tyre changer, we safely dismount worn tyres and mount new or replacement tyres without rim contact damage, scratching, or bead tearing.',
    estimatedDuration: '20 – 35 mins',
    image: tyreChangerImg,
    features: [
      'Twin Busch Germany precision pneumatic clamp system',
      'Protective rim clamping to prevent scratches on alloy wheels',
      'Accurate tyre bead seating and valve replacement',
      'Thorough inspection of rim bead seats and sidewall condition',
    ],
  },
  {
    id: 'wheel-balancing',
    code: '02',
    title: 'Wheel Balancing',
    category: 'Tyre & Wheel',
    shortDesc: 'Dynamic electronic wheel balancing to eliminate steering wobble and uneven tyre wear.',
    fullDesc: 'Our Twin Busch TW F-150 electronic balancer pinpoints micro-imbalances in rotating tyre and rim assemblies, applying exact counterweights to deliver smooth high-speed stability and prolong tyre lifespan.',
    estimatedDuration: '20 – 30 mins',
    image: wheelBalancerImg,
    features: [
      'Digital multi-plane dynamic balance calibration',
      'Eliminates steering wheel vibrations at highway speeds',
      'Extends tyre tread longevity and protects suspension bushings',
      'Precise clip-on and adhesive weight placement',
    ],
  },
  {
    id: 'wheel-alignment',
    code: '03',
    title: 'Wheel Alignment',
    category: 'Tyre & Wheel',
    shortDesc: 'Computerized multi-angle alignment for straight tracking, confident handling, and fuel economy.',
    fullDesc: 'Utilizing our Italian Corghi digital wheel alignment console with high-precision optical sensor heads, we measure and adjust camber, caster, and toe angles strictly to factory automotive specifications.',
    estimatedDuration: '30 – 45 mins',
    image: wheelAlignmentImg,
    features: [
      'Italian Corghi computerized digital telemetry system',
      'Exact measurement of toe, camber, and caster angles',
      'Corrects vehicle pulling and irregular tread wear',
      'Live vehicle sensor display with real-time calibration',
    ],
  },
  {
    id: 'vehicle-inspection',
    code: '04',
    title: 'Vehicle Inspection',
    category: 'Diagnostics',
    shortDesc: 'Thorough undercarriage and chassis examination using our full-length dedicated inspection pit.',
    fullDesc: 'Our built-in, illuminated workshop inspection pit allows our technicians to walk directly beneath your vehicle for unobstructed inspection of suspension ball joints, control arms, exhaust systems, brake lines, and chassis integrity.',
    estimatedDuration: '30 – 45 mins',
    image: inspectionPitImg,
    features: [
      'Full walk-under inspection pit with safety perimeter',
      'Direct visual check of steering linkages, shocks & bushings',
      'Exhaust leak and underbody corrosion detection',
      'Brake line, fuel line, and fluid leak assessments',
    ],
  },
  {
    id: 'automotive-workshop',
    code: '05',
    title: 'Automotive Workshop Services',
    category: 'Mechanical',
    shortDesc: 'Reliable mechanical servicing and maintenance backed by industrial pneumatic workshop tools.',
    fullDesc: 'General automotive mechanical support, brake pad replacements, suspension servicing, scheduled fluid checks, and component repairs powered by our high-output ABAC industrial air compressor and specialized workshop tools.',
    estimatedDuration: '1 – 3 hours',
    image: airCompressorImg,
    features: [
      'Pneumatic high-torque tools powered by ABAC 270 compressor',
      'Brake disc, pad, and caliper maintenance',
      'Suspension component replacement and tightening',
      'Routine mechanical upkeep and vehicle health checks',
    ],
  },
  {
    id: 'car-laundry',
    code: '06',
    title: 'Car Laundry / Vehicle Cleaning',
    category: 'Vehicle Cleaning',
    shortDesc: 'Complete exterior wash and interior cleaning in our dedicated spacious open compound.',
    fullDesc: 'Our active Car Laundry bay provides thorough exterior washing to remove Addis Ababa road dust and mud, undercarriage rinse, wheel cleaning, and interior vacuuming and wipe-down, leaving your car clean and refreshed.',
    estimatedDuration: '30 – 60 mins',
    image: entranceImg,
    features: [
      'Thorough high-pressure exterior foam wash and rinse',
      'Dedicated wash bay inside our secure gated compound',
      'Interior cabin vacuuming, floor mat care, and dust removal',
      'Streak-free window glass and tyre sidewall cleaning',
    ],
  },
];

export const WORKSHOP_EQUIPMENT: EquipmentItem[] = [
  {
    id: 'eq-tyre-changer',
    name: 'Tyre Changing Machine',
    model: 'Twin Busch Germany TW X-98',
    category: 'Tyre & Rim Service',
    image: tyreChangerImg,
    description: 'Heavy-duty pneumatic tyre changer designed for safe, scratch-free demounting and mounting of standard and low-profile alloy tyres.',
    specifications: [
      'Pneumatic assist arm for rigid sidewalls',
      'Alloy-wheel friendly clamping jaws',
      'Integrated bead breaker with protective rubber pad',
      'German engineered precision and durability',
    ],
  },
  {
    id: 'eq-wheel-balancer',
    name: 'Dynamic Wheel Balancing Machine',
    model: 'Twin Busch Germany TW F-150',
    category: 'Precision Calibration',
    image: wheelBalancerImg,
    description: 'Computer-controlled electronic wheel balancer that measures rotational dynamic unbalance with millimeter-level accuracy.',
    specifications: [
      'High-speed computerized diagnostic spin',
      'Automated distance and diameter input',
      'Dual display for inner and outer balance correction',
      'Protective hood with automatic braking cycle',
    ],
  },
  {
    id: 'eq-wheel-alignment',
    name: 'Digital Wheel Alignment System',
    model: 'Corghi Optical Telemetry',
    category: 'Chassis & Geometry',
    image: wheelAlignmentImg,
    description: 'Italian engineered computerized alignment station with live digital monitor, measuring vehicle steering geometry and axle tracking.',
    specifications: [
      'Multi-axis camera sensor technology',
      'Factory vehicle database for exact angle matching',
      'Real-time live adjustment feedback on screen',
      'Complete printed angle diagnostics report capability',
    ],
  },
  {
    id: 'eq-inspection-pit',
    name: 'Dedicated Vehicle Inspection Pit',
    model: 'Full-Length Reinforced Service Pit',
    category: 'Underbody Diagnostics',
    image: inspectionPitImg,
    description: 'Heavy-duty concrete inspection pit enabling comprehensive, walk-under examination of suspension, exhaust, drive-train, and undercarriage.',
    specifications: [
      'Clear standing height for detailed visual checks',
      'High-visibility yellow safety hazard guide striping',
      'Direct access to suspension joints, steering rack & fluids',
      'Safe, level vehicle positioning in dedicated workshop bay',
    ],
  },
  {
    id: 'eq-air-compressor',
    name: 'High-Capacity Air Compressor',
    model: 'ABAC 270 Hp 3 Industrial Unit',
    category: 'Pneumatic Power',
    image: airCompressorImg,
    description: 'High-volume industrial piston compressor powering all workshop pneumatic wrenches, tyre changers, and pressurized cleaning tools.',
    specifications: [
      '270-litre heavy-duty air storage tank',
      'High-output 3-horsepower motor',
      'Stable pressure delivery for precision tyre inflation',
      'Industrial grade Italian engineering for continuous service',
    ],
  },
];

export const WORKSHOP_GALLERY = [
  {
    id: 'w1',
    title: 'ABSIM AUTOMOTIVE Facility Entrance',
    category: 'Facility & Location',
    image: entranceImg,
    caption: 'Official entrance to ABSIM AUTOMOTIVE with our active "WE ARE OPEN - CAR LAUNDRY" sign and spacious compound in Megenagna.',
  },
  {
    id: 'w2',
    title: 'Computerized Wheel Alignment System',
    category: 'Equipment',
    image: wheelAlignmentImg,
    caption: 'Our Italian Corghi computerized alignment unit with digital vehicle telemetry and precision sensor heads.',
  },
  {
    id: 'w3',
    title: 'Heavy-Duty Tyre Changing Machine',
    category: 'Equipment',
    image: tyreChangerImg,
    caption: 'Twin Busch Germany TW X-98 tyre mounting machine providing scratch-free alloy wheel servicing.',
  },
  {
    id: 'w4',
    title: 'Electronic Wheel Balancing Machine',
    category: 'Equipment',
    image: wheelBalancerImg,
    caption: 'Twin Busch Germany TW F-150 dynamic wheel balancing machine for vibration-free driving.',
  },
  {
    id: 'w5',
    title: 'Dedicated Vehicle Inspection Pit',
    category: 'Workshop Pit',
    image: inspectionPitImg,
    caption: 'Full-length concrete vehicle inspection pit for comprehensive underbody safety and steering checks.',
  },
  {
    id: 'w6',
    title: 'ABAC 270 Industrial Air Compressor',
    category: 'Equipment',
    image: airCompressorImg,
    caption: 'ABAC 270 Hp 3 industrial air compressor powering our pneumatic tools and tyre inflation systems.',
  },
];
