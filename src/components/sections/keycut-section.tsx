"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function KeycutSection() {
  return (
    <section id="keycut" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>My Work - Keycut</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="p-8 hover:border-primary/50 transition-colors">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Keycut Project</h3>
                  <p className="text-muted-foreground">
                    Professional Key Cutting Service Platform
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A comprehensive digital platform for key cutting services,
                    featuring real-time order tracking, inventory management,
                    and customer relationship tools. Built with modern
                    technologies to streamline the key duplication process.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Next.js
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Firebase
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Tailwind CSS
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Github className="h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden border border-border shadow-xl">
                <Image
                  src="/key-cutting-service-web-application-dashboard.jpg"
                  alt="Keycut Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
