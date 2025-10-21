"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const achievements = [
  {
    title: "Medals & Certificate for Sarana",
    date: "2025",
    description:
      "Recognized for outstanding contribution to software development projects",
    icon: Trophy,
    images: [
      "/achievement/diploma.jpg",
      "/achievement/japan3.jpg",
      "/achievement/medal.jpg",
      "/achievement/russia.jpg",
      "/achievement/russiamedal.jpg",
      "/achievement/wifa.jpg",
      "/achievement/ociip.jpg",
      "/achievement/wico.jpg",
      "/achievement/canada.jpg",
      "/achievement/canada1.jpg",
    ],
  },
];

export function AchievementsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="achievements" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Achievements</SectionTitle>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 hover:border-primary/50 transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-lg">
                          {achievement.title}
                        </h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {achievement.description}
                      </p>
                      <button
                        onClick={() => setActive(index)}
                        className="px-3 py-1 bg-primary text-white dark:bg-slate-800 rounded-lg text-sm hover:bg-primary/80"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement viewer dialog */}
        <Dialog
          open={active !== null}
          onOpenChange={(v) => (v ? null : setActive(null))}
        >
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {active !== null ? achievements[active].title : ""}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              {active !== null &&
                achievements[active].images.map((src, i) => (
                  <div key={i} className="relative w-full h-auto">
                    <Image
                      src={src}
                      alt={`${achievements[active].title} ${i + 1}`}
                      width={800}
                      height={450}
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                ))}

              {active !== null && (
                <p className="text-sm text-muted-foreground mt-2">
                  {achievements[active].description}
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  );
}
