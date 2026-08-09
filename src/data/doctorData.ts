import { DoctorProfile, MedicalService, VideoItem, ImageItem, FaqItem, TestimonialItem } from '../types';

export const DOCTOR_PROFILE: DoctorProfile = {
  name: 'Dr. Shakeel Anjum Ramay',
  nameUrdu: 'ڈاکٹر شکیل انجم رامے',
  title: 'Experienced Child Healthcare Practitioner',
  experienceYears: 20,
  location: 'AI Shifa Children and Maternity Home, Okara',
  experienceSummary: "20+ Years of Experience in Treating Children's Diseases in Okara",
  credentials: [
    'MD (Medicine)',
    'MBBS',
    'RMP',
    'D.A. (PGMI)',
    'Diploma in Child Health'
  ],
  background: [
    'Member Pakistan Pediatric Association Punjab',
    'Ex. Deputy District Health Officer Okara',
    'Ex. General Secretary / Vice President PMA Okara'
  ],
  phone: '+92 344 3335333',
  whatsapp: '+92 344 3335333',
  callUrl: 'tel:+923443335333',
  whatsappUrl: 'https://wa.me/923443335333?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Shakeel%20Anjum%20Ramay.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=AI+Shifa+Children+and+Maternity+Home%2C+Okara%2C+Pakistan&utm_source=chatgpt.com',
  heroImage: 'https://i.ibb.co/5WBTR0WZ/Chat-GPT-Image-Aug-9-2026-10-20-07-PM.png'
};

export const CLINIC_IMAGES: ImageItem[] = [
  {
    id: 'hero',
    pageUrl: 'https://ibb.co/Y7p2LC7g',
    directUrl: 'https://i.ibb.co/5WBTR0WZ/Chat-GPT-Image-Aug-9-2026-10-20-07-PM.png',
    alt: 'Dr. Shakeel Anjum Ramay - Experienced Child Healthcare Practitioner',
    title: 'Dr. Shakeel Anjum Ramay',
    category: 'about'
  },
  {
    id: 'second_doctor_img',
    pageUrl: 'https://ibb.co/dwHwfbSX',
    directUrl: 'https://i.ibb.co/ZpbpfH3v/Whats-App-Image-2026-08-09-at-10-08-54-PM.jpg',
    alt: 'Dr. Shakeel Anjum Ramay - AI Shifa Children and Maternity Home, Okara',
    title: 'Dr. Shakeel Anjum Ramay',
    category: 'about'
  },
  {
    id: 'img1',
    pageUrl: 'https://ibb.co/JjDF7qSc',
    directUrl: 'https://i.ibb.co/yFHBypxN/Whats-App-Image-2026-08-09-at-8-18-08-AM.jpg',
    alt: 'Dr. Shakeel Anjum Ramay Child Healthcare Consultation',
    title: 'Pediatric Care Consultation',
    category: 'care'
  },
  {
    id: 'img2',
    pageUrl: 'https://ibb.co/GQKqcqf4',
    directUrl: 'https://i.ibb.co/N28MZMgd/Whats-App-Image-2026-08-09-at-8-18-19-AM.jpg',
    alt: 'Doctor Examining Child Patient in Okara Clinic',
    title: 'Patient Examination & Diagnosis',
    category: 'care'
  },
  {
    id: 'img3',
    pageUrl: 'https://ibb.co/JRZp4F4p',
    directUrl: 'https://i.ibb.co/3yKFqYqF/Whats-App-Image-2026-08-09-at-8-18-35-AM.jpg',
    alt: 'Child Growth & Healthcare Assessment',
    title: 'Child Health & Growth Monitoring',
    category: 'service'
  },
  {
    id: 'img4',
    pageUrl: 'https://ibb.co/s9c4BMWV',
    directUrl: 'https://i.ibb.co/F4c1PjHD/Whats-App-Image-2026-08-09-at-8-18-49-AM.jpg',
    alt: 'Compassionate Medical Care for Infants & Children',
    title: 'Compassionate Care for Families',
    category: 'care'
  },
  {
    id: 'img5',
    pageUrl: 'https://ibb.co/gMTyTsQF',
    directUrl: 'https://i.ibb.co/1fqZqHBJ/Whats-App-Image-2026-08-09-at-8-19-04-AM.jpg',
    alt: 'AI Shifa Children & Maternity Home Patient Reception & Consultation Area',
    title: 'Clinic Consultation Environment',
    category: 'clinic'
  },
  {
    id: 'img6',
    pageUrl: 'https://ibb.co/Kj7DYDGr',
    directUrl: 'https://i.ibb.co/Lz6rMrPZ/Whats-App-Image-2026-08-09-at-8-19-20-AM.jpg',
    alt: 'Dr. Shakeel Anjum Ramay Advising Parents',
    title: 'Parental Guidance & Consultation',
    category: 'about'
  },
  {
    id: 'img7',
    pageUrl: 'https://ibb.co/NgjLHsp6',
    directUrl: 'https://i.ibb.co/xKjMRDGS/Whats-App-Image-2026-08-09-at-8-19-33-AM.jpg',
    alt: 'Child Healthcare Assessment at AI Shifa Children & Maternity Home',
    title: 'Pediatric Health Checkup',
    category: 'service'
  },
  {
    id: 'img8',
    pageUrl: 'https://ibb.co/8DjgzY84',
    directUrl: 'https://i.ibb.co/99qHwZY3/Whats-App-Image-2026-08-09-at-8-20-12-AM.jpg',
    alt: 'Child Illness Management & Treatment',
    title: 'Child Illness Assessment & Treatment',
    category: 'service'
  },
  {
    id: 'img9',
    pageUrl: 'https://ibb.co/Z1cPm5Wy',
    directUrl: 'https://i.ibb.co/CsVZ2ghx/Whats-App-Image-2026-08-09-at-8-20-25-AM.jpg',
    alt: 'AI Shifa Children & Maternity Home Facility & Equipment',
    title: 'Modern Clinic Facilities',
    category: 'clinic'
  },
  {
    id: 'img10',
    pageUrl: 'https://ibb.co/s0Yqh3V',
    directUrl: 'https://i.ibb.co/rCrHgyw/Whats-App-Image-2026-08-09-at-8-20-38-AM.jpg',
    alt: 'Dr. Shakeel Anjum Ramay with Young Patient',
    title: 'Gentle & Patient-Centered Care',
    category: 'gallery'
  }
];

export const CLINIC_VIDEOS: VideoItem[] = [
  {
    id: 'vid1',
    streamableId: 'v9uwmn',
    title: 'Welcome Message & Doctor Introduction',
    description: 'Dr. Shakeel Anjum Ramay introduces his child healthcare practice at AI Shifa Children and Maternity Home in Okara, highlighting over 20 years of dedicated experience.',
    embedUrl: 'https://streamable.com/e/v9uwmn',
    pageUrl: 'https://streamable.com/v9uwmn',
    thumbnailUrl: 'https://cdn-cf-east.streamable.com/image/v9uwmn.jpg',
    category: 'Doctor Introduction',
    featured: true
  },
  {
    id: 'vid2',
    streamableId: '5s7c56',
    title: 'Comprehensive Child Health Assessment',
    description: 'An overview of routine pediatric health checks, fever evaluation, and childhood illness monitoring at AI Shifa Children and Maternity Home, Okara.',
    embedUrl: 'https://streamable.com/e/5s7c56',
    pageUrl: 'https://streamable.com/5s7c56',
    thumbnailUrl: 'https://cdn-cf-east.streamable.com/image/5s7c56.jpg',
    category: 'Healthcare Overview'
  },
  {
    id: 'vid3',
    streamableId: 'cg5zed',
    title: 'AI Shifa Children & Maternity Home Atmosphere',
    description: 'A walkthrough showing the welcoming, clean, and child-friendly clinical environment designed for young patients and their families.',
    embedUrl: 'https://streamable.com/e/cg5zed',
    pageUrl: 'https://streamable.com/cg5zed',
    thumbnailUrl: 'https://cdn-cf-east.streamable.com/image/cg5zed.jpg',
    category: 'Clinic Tour'
  },
  {
    id: 'vid4',
    streamableId: '0lor93',
    title: 'Gentle Pediatric Physical Examination',
    description: 'Demonstrating patient-centered, friendly diagnostic routines for infants and children experiencing fever, cough, or stomach illness.',
    embedUrl: 'https://streamable.com/e/0lor93',
    pageUrl: 'https://streamable.com/0lor93',
    thumbnailUrl: 'https://cdn-cf-east.streamable.com/image/0lor93.jpg',
    category: 'Clinical Care'
  },
  {
    id: 'vid5',
    streamableId: '43omyz',
    title: 'Managing Seasonal Childhood Illnesses & Coughs',
    description: 'Dr. Shakeel Anjum Ramay shares vital advice on managing respiratory infections, seasonal flu, and respiratory complaints in children.',
    embedUrl: 'https://streamable.com/e/43omyz',
    pageUrl: 'https://streamable.com/43omyz',
    thumbnailUrl: 'https://cdn-cf-east.streamable.com/image/43omyz.jpg',
    category: 'Pediatric Advice'
  },
  {
    id: 'vid6',
    streamableId: '0grwi4',
    title: 'Child Growth & Preventive Healthcare Tips',
    description: 'Essential guidance for parents on monitoring developmental milestones, proper nutrition, and hygiene routines for healthy growth.',
    embedUrl: 'https://streamable.com/e/0grwi4',
    pageUrl: 'https://streamable.com/0grwi4',
    thumbnailUrl: 'https://cdn-cf-east.streamable.com/image/0grwi4.jpg',
    category: 'Preventive Health'
  },
  {
    id: 'vid7',
    streamableId: 'q7g5u1',
    title: 'Parent Guidance & Health Consultation Session',
    description: 'How Dr. Shakeel Anjum Ramay counsels parents during consultations, providing clear instructions and empathetic support.',
    embedUrl: 'https://streamable.com/e/q7g5u1',
    pageUrl: 'https://streamable.com/q7g5u1',
    thumbnailUrl: 'https://cdn-cf-east.streamable.com/image/q7g5u1.jpg',
    category: 'Parent Guidance'
  }
];

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: 'serv-1',
    title: 'General Child Health Consultation',
    description: 'Thorough health checkups, symptom evaluation, and expert medical assessment for infants, toddlers, and young children.',
    iconName: 'Stethoscope'
  },
  {
    id: 'serv-2',
    title: 'Childhood Illness Assessment',
    description: 'Accurate clinical evaluation and treatment planning for common childhood medical conditions and infections.',
    iconName: 'Activity'
  },
  {
    id: 'serv-3',
    title: 'Fever & Common Infections',
    description: 'Prompt diagnosis and management of acute fevers, viral infections, and bacterial illnesses in children.',
    iconName: 'Thermometer'
  },
  {
    id: 'serv-4',
    title: 'Cough, Cold & Respiratory Complaints',
    description: 'Targeted care for pediatric cough, bronchitis, asthma exacerbations, seasonal allergies, and chest congestion.',
    iconName: 'Wind'
  },
  {
    id: 'serv-5',
    title: 'Digestive & Stomach Problems',
    description: 'Careful assessment and treatment for abdominal pain, gastroenteritis, vomiting, diarrhea, and indigestion.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'serv-6',
    title: 'Child Growth & Development Guidance',
    description: 'Tracking weight, height, motor skills, and developmental milestones to ensure healthy growth trajectories.',
    iconName: 'TrendingUp'
  },
  {
    id: 'serv-7',
    title: 'Infant & Child Health Assessment',
    description: 'Specialized checkups for newborn wellness, infant feeding concerns, sleep patterns, and general infant care.',
    iconName: 'Baby'
  },
  {
    id: 'serv-8',
    title: 'Nutrition & Feeding Guidance',
    description: 'Personalized dietary recommendations for picky eaters, iron deficiency, weight management, and healthy eating habits.',
    iconName: 'Apple'
  },
  {
    id: 'serv-9',
    title: 'Allergy-Related Complaints',
    description: 'Diagnosis and management of allergic rhinitis, skin rashes, food sensitivities, and eczema in young patients.',
    iconName: 'Sparkles'
  },
  {
    id: 'serv-10',
    title: 'Preventive Child Healthcare',
    description: 'Proactive guidance on disease prevention, hygiene habits, lifestyle awareness, and immune system support.',
    iconName: 'HeartPulse'
  },
  {
    id: 'serv-11',
    title: 'Follow-up Consultations',
    description: 'Continued monitoring and follow-up reviews to ensure full recovery following acute illnesses.',
    iconName: 'Clock'
  },
  {
    id: 'serv-12',
    title: 'Parent Health Guidance',
    description: 'Empathetic counseling for parents on home care, medication safety, warning signs, and child comfort techniques.',
    iconName: 'Users'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What qualifications does Dr. Shakeel Anjum Ramay have?',
    answer: 'Dr. Shakeel Anjum Ramay holds MD (Medicine), MBBS, RMP, D.A. (PGMI), and a Diploma in Child Health. He is a member of the Pakistan Pediatric Association Punjab, former Deputy District Health Officer Okara, and former General Secretary / Vice President of PMA Okara.'
  },
  {
    id: 'faq-2',
    question: 'How many years of experience does the doctor have?',
    answer: "Dr. Shakeel Anjum Ramay has over 20 years of hands-on medical experience in diagnosing and treating children's diseases at AI Shifa Children and Maternity Home in Okara, Pakistan."
  },
  {
    id: 'faq-3',
    question: "What children's health concerns can I consult the doctor about?",
    answer: 'You can consult Dr. Ramay for general pediatric checkups, acute fevers, respiratory complaints (cough, cold, asthma), digestive issues, growth and developmental tracking, infant nutrition, allergies, and preventive healthcare.'
  },
  {
    id: 'faq-4',
    question: 'Where is the clinic located?',
    answer: 'The clinic is located at AI Shifa Children and Maternity Home, Okara, Pakistan. You can get exact directions via Google Maps using the "Get Directions" link on this website.'
  },
  {
    id: 'faq-5',
    question: 'How can I book an appointment?',
    answer: 'You can request an appointment online through the appointment form on this website, or call directly at +92 344 3335333, or send a message via WhatsApp.'
  },
  {
    id: 'faq-6',
    question: 'Can I contact the clinic through WhatsApp?',
    answer: 'Yes! You can message the clinic directly on WhatsApp at +92 344 3335333 for appointment inquiries and clinic information.'
  },
  {
    id: 'faq-7',
    question: 'Can I choose my preferred appointment time?',
    answer: 'Yes, when filling out the online appointment form, you can select your preferred date, day, and time slot. The clinic staff will review and contact you to confirm availability.'
  },
  {
    id: 'faq-8',
    question: "What should I bring to my child's appointment?",
    answer: "Please bring any previous medical records, prescriptions, test reports, immunization records, and a list of current symptoms or questions you wish to discuss."
  },
  {
    id: 'faq-9',
    question: 'How can I get directions to AI Shifa Children and Maternity Home?',
    answer: 'Click the "Get Directions" button on our location section or footer to open Google Maps directly navigated to AI Shifa Children and Maternity Home, Okara, Pakistan.'
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    parentName: 'Parent Review Placeholder',
    childInfo: 'Verified Patient Parent',
    comment: 'Real parent feedback and patient reviews will appear here following clinic verification.',
    date: 'Recent',
    isPlaceholder: true
  },
  {
    id: 'test-2',
    parentName: 'Parent Review Placeholder',
    childInfo: 'Verified Patient Parent',
    comment: 'Real parent feedback and patient reviews will appear here following clinic verification.',
    date: 'Recent',
    isPlaceholder: true
  },
  {
    id: 'test-3',
    parentName: 'Parent Review Placeholder',
    childInfo: 'Verified Patient Parent',
    comment: 'Real parent feedback and patient reviews will appear here following clinic verification.',
    date: 'Recent',
    isPlaceholder: true
  }
];
