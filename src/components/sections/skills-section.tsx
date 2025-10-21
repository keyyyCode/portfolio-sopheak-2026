"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Code, Server, Database, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "Next.js", level: 83 },
      { name: "Vue.js", level: 70 },
      { name: "Flutter", level: 80 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 60 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Laravel", level: 75 },
      { name: "Firebase", level: 65 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 60 },
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: [
      { name: "Figma", level: 90 },
      { name: "Illustrator", level: 80 },
      { name: "Photoshop", level: 75 },
      { name: "CorelDRAW", level: 85 },
      { name: "Canva", level: 90 },
    ],
  },
];

const getSkillColor = (level: number) => {
  if (level >= 90) return "bg-chart-1";
  if (level >= 80) return "bg-chart-2";
  if (level >= 70) return "bg-chart-3";
  return "bg-chart-4";
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.1 + 0.2,
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                            className={`h-full ${getSkillColor(
                              skill.level
                            )} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
