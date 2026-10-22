"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export function Newexp() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Exp</SectionTitle>
        <div className="mt-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="font-semibold text-xl">
                      Software Development Intern
                    </h3>
                    <p className="text-primary font-medium">Vectorasoft</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>April 2025 – July 2025</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Contributed to the development of web and mobile
                    applications, collaborating with senior developers on
                    feature implementation and bug fixes. Gained hands-on
                    experience with modern development workflows, version
                    control, and agile methodologies. Participated in code
                    reviews and learned best practices for writing maintainable,
                    scalable code.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
