import React from 'react';
import { DOCTOR_PROFILE, FAQ_LIST } from '../data/doctorData';

export const StructuredData: React.FC = () => {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": ["Physician", "MedicalClinic", "LocalBusiness"],
    "name": DOCTOR_PROFILE.name,
    "image": DOCTOR_PROFILE.heroImage,
    "telephone": DOCTOR_PROFILE.phone,
    "description": "Experienced Child Healthcare Medical Practitioner at AI Shifa Children and Maternity Home, Okara, Pakistan with 20+ years of medical practice.",
    "medicalSpecialty": "Pediatric Care",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "AI Shifa Children and Maternity Home",
      "addressLocality": "Okara",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "url": DOCTOR_PROFILE.googleMapsUrl,
    "priceRange": "$$",
    "openingHours": "Mo-Sa 10:00-20:00"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_LIST.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
