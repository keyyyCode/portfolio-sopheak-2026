"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Send, Facebook, Instagram, Mail, Phone } from "lucide-react";

const contacts = [
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/somartsopheak",
    label: "@samartsopheak",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/174uK5wnAs/?mibextid=wwXIfr",
    label: "Samart Sopheak",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/somartsopheak?igsh=M2UyNjI3dnM5b3Vx&utm_source=qr",
    label: "@samartsopheak",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:samartsopheak1@gmail.com",
    label: "samartsopheak1@gmail.com",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+85581823865",
    label: "+855 81 82 38 65",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto text-balance">
          I am currently looking for new opportunities. My inbox is always open.
          If you have any questions, please contact me, I will do my best to get
          back to you!
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Button
                  variant="outline"
                  className="w-full h-auto p-4 flex flex-col items-center gap-3 hover:border-primary hover:bg-primary/2 transition-colors bg-transparent"
                  asChild
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                    <div className="text-center">
                      <div className="font-semibold">{contact.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {contact.label}
                      </div>
                    </div>
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
