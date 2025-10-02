"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    school: "Norton University",
    degree: "Bachelor of Computer Science",
    period: "2021 – 2025",
    description:
      "Specialized in software engineering and full-stack development",
  },
  {
    school: "High School",
    degree: "Science and Technology",
    period: "2018 – 2021",
    description:
      "Focus on mathematics, physics, and computer science fundamentals",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Education</SectionTitle>
        <div className="mt-8 space-y-6 max-w-3xl">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div>
                      <h3 className="font-semibold text-xl">{edu.school}</h3>
                      <p className="text-foreground font-medium">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
