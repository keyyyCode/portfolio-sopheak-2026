"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { CertificateCard } from "@/components/ui/certificate-card";

const certificates = [
  {
    title: "Flutter App Development",
    date: "2024",
    image: "/banking-mobile-app-interface.jpg",
    description:
      "Advanced mobile application development with Flutter framework, including state management and native integrations",
  },
  {
    title: "Laravel Backend Development",
    date: "2023",
    image: "/banking-mobile-app-interface.jpg",
    description:
      "Professional backend development with Laravel, covering RESTful APIs, authentication, and database design",
  },
  {
    title: "Frontend Web Development",
    date: "2023",
    image: "/banking-mobile-app-interface.jpg",
    description:
      "Modern frontend development with React, Next.js, and responsive design principles",
  },
  {
    title: "UI/UX Design Skills",
    date: "2022",
    image: "/banking-mobile-app-interface.jpg",
    description:
      "Comprehensive design training in Figma, Adobe Creative Suite, and user-centered design methodologies",
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Certificates</SectionTitle>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
