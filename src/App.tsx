import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AboutDoctor } from './components/AboutDoctor';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeaturedVideoSection } from './components/FeaturedVideoSection';
import { VideoGallerySection } from './components/VideoGallerySection';
import { HowAppointmentWorks } from './components/HowAppointmentWorks';
import { AppointmentSection } from './components/AppointmentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoLightboxModal } from './components/VideoLightboxModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { StickyMobileActionBar } from './components/StickyMobileActionBar';
import { FloatingWhatsappButton } from './components/FloatingWhatsappButton';
import { StructuredData } from './components/StructuredData';
import { VideoItem } from './types';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [adminModalOpen, setAdminModalOpen] = useState<boolean>(false);
  const [selectedServiceForAppointment, setSelectedServiceForAppointment] = useState<string>('');

  const scrollToAppointment = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForAppointment(serviceTitle);
    }
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      <StructuredData />

      {/* HEADER */}
      <Header
        onOpenAppointment={() => scrollToAppointment()}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* MAIN CONTENT */}
      <main>
        {/* HERO */}
        <Hero onOpenAppointment={() => scrollToAppointment()} />

        {/* TRUST / CREDENTIALS */}
        <TrustSection />

        {/* ABOUT DOCTOR */}
        <AboutDoctor onOpenAppointment={() => scrollToAppointment()} />

        {/* CHILD HEALTHCARE SERVICES */}
        <ServicesSection onOpenAppointment={(service) => scrollToAppointment(service)} />

        {/* WHY CHOOSE US */}
        <WhyChooseUs />

        {/* FEATURED DOCTOR / CLINIC VIDEO */}
        <FeaturedVideoSection onSelectVideo={(video) => setSelectedVideo(video)} />

        {/* CLINIC & VIDEO GALLERY */}
        <VideoGallerySection onSelectVideo={(video) => setSelectedVideo(video)} />

        {/* HOW APPOINTMENT WORKS */}
        <HowAppointmentWorks />

        {/* APPOINTMENT BOOKING */}
        <AppointmentSection initialService={selectedServiceForAppointment} />

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* FAQs */}
        <FaqSection />

        {/* LOCATION */}
        <LocationSection />

        {/* CONTACT */}
        <ContactSection onOpenAppointment={() => scrollToAppointment()} />
      </main>

      {/* FOOTER */}
      <Footer
        onOpenAppointment={() => scrollToAppointment()}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* STICKY MOBILE ACTION BAR */}
      <StickyMobileActionBar onOpenAppointment={() => scrollToAppointment()} />

      {/* FLOATING WHATSAPP BUTTON (DESKTOP) */}
      <FloatingWhatsappButton />

      {/* MODALS */}
      <VideoLightboxModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <AdminDashboardModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />
    </div>
  );
}
