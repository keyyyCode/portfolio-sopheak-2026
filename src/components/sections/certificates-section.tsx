"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { CertificateCard } from "@/components/ui/certificate-card";

const certificates = [
  {
    title: "Basic Computer/Network & Installation",
    date: "Sep 15, 2022",
    image: "/certificate/ct1.JPG",
    description:
      "Gained foundational knowledge in computer hardware, networking, and system installation, including troubleshooting and maintenance of computer systems.",
  },
  {
    title: "Design Skills",
    date: "Apr 25, 2023",
    image: "/certificate/ct4.JPG",
    description:
      "Developed practical expertise in graphic and digital design using Adobe Photoshop, Adobe Illustrator, CorelDRAW  and professional design workflows for creating high-quality digital content.",
  },
  {
    title: "Basic/Adavance C/C++/OPP ",
    date: "Sep 15, 2022",
    image: "/certificate/ct3.JPG",
    description:
      "Completed a comprehensive program in programming with C and C++, focusing on object-oriented programming concepts, algorithms, and software development principles.",
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
