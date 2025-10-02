"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>About Me</SectionTitle>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground max-w-4xl">
          <p>
            I&apos;m a passionate software developer driven by the desire to
            create meaningful digital solutions that make a difference. My
            journey in technology combines technical expertise with creative
            problem-solving, allowing me to build applications that are both
            functional and beautiful.
          </p>
          <p>
            My career goal is to continuously grow as a developer while
            contributing to innovative projects that push the boundaries of
            what&apos;s possible with modern technology. I believe in writing
            clean, maintainable code and creating user experiences that delight
            and inspire.
          </p>
          <p>
            Whether it&apos;s developing mobile applications with Flutter,
            building robust backend systems with Laravel, or crafting responsive
            web interfaces with Next.js, I approach each project with dedication
            and attention to detail.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
