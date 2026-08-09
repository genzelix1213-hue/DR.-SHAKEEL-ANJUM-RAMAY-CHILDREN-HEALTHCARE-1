export interface DoctorProfile {
  name: string;
  title: string;
  experienceYears: number;
  location: string;
  experienceSummary: string;
  credentials: string[];
  background: string[];
  phone: string;
  whatsapp: string;
  callUrl: string;
  whatsappUrl: string;
  googleMapsUrl: string;
  heroImage: string;
}

export interface MedicalService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category?: string;
}

export interface VideoItem {
  id: string;
  streamableId: string;
  title: string;
  description: string;
  embedUrl: string;
  pageUrl: string;
  thumbnailUrl: string;
  category: string;
  duration?: string;
  featured?: boolean;
}

export interface ImageItem {
  id: string;
  pageUrl: string;
  directUrl: string;
  alt: string;
  title: string;
  category: 'clinic' | 'about' | 'service' | 'care' | 'gallery';
}

export interface Appointment {
  id: string;
  parentName: string;
  childName: string;
  childAge: string;
  gender: string;
  phone: string;
  whatsapp: string;
  preferredDate: string;
  preferredDay: string;
  preferredTime: string;
  reason: string;
  message?: string;
  status: 'Pending' | 'Confirmed' | 'Rescheduled' | 'Completed' | 'Cancelled';
  createdAt: string;
  location: string;
  notes?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  childInfo?: string;
  comment: string;
  date: string;
  isPlaceholder?: boolean;
}
