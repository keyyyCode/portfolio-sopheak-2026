"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Card } from "@/components/ui/card"
import { Trophy, Award, Star, Target } from "lucide-react"

const achievements = [
  {
    title: "Best Developer Award",
    date: "2024",
    description: "Recognized for outstanding contribution to software development projects",
    icon: Trophy,
  },
  {
    title: "Innovation Excellence",
    date: "2023",
    description: "Awarded for innovative solutions in mobile application development",
    icon: Award,
  },
  {
    title: "Top Performer",
    date: "2023",
    description: "Achieved top performance metrics in project delivery and code quality",
    icon: Star,
  },
  {
    title: "Client Satisfaction",
    date: "2022",
    description: "Received exceptional client feedback for project execution and support",
    icon: Target,
  },
]

export function AchievementsSection() {
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
            const Icon = achievement.icon
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
                        <h3 className="font-semibold text-lg">{achievement.title}</h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{achievement.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
