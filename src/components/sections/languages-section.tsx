"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Languages } from "lucide-react";

const languages = [
  { name: "Khmer", level: "Native", percentage: 95 },
  { name: "English", level: "Intermediate", percentage: 65 },
];

export function LanguagesSection() {
  return (
    <section id="languages" className="py-15">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Languages</SectionTitle>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Languages className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{language.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {language.level}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Level</span>
                    <span className="text-xs font-medium">
                      {language.level}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      Proficiency
                    </span>
                    <span className="text-xs font-medium">
                      {language.percentage}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.2,
                        duration: 0.9,
                        ease: "easeOut",
                      }}
                      className={`skill-fill level-${
                        Math.floor(language.percentage / 10) * 10
                      }`}
                      style={{ width: `${language.percentage}%` }}
                    />
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
