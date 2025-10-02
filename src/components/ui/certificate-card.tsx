"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Calendar, X } from "lucide-react";

interface Certificate {
  title: string;
  date: string;
  description: string;
  image?: string; // optional image path or URL
}

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

export function CertificateCard({ certificate, index }: CertificateCardProps) {
  const [open, setOpen] = useState(false);
  const isPdf = certificate.image?.toLowerCase().endsWith(".pdf");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="p-6 h-full hover:border-primary/50 transition-colors group">
        <div className="flex items-start gap-4">
          <div className="p-1 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors flex items-center justify-center overflow-hidden">
            {certificate.image ? (
              <button
                onClick={() => setOpen(true)}
                className="relative w-12 h-12 p-0 border-0 bg-transparent"
                aria-label={`View ${certificate.title}`}
              >
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={48}
                  height={48}
                  className="object-cover rounded-md"
                />
              </button>
            ) : (
              <div className="p-3 rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
            )}
          </div>
          <div className="space-y-2 flex-1">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {certificate.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{certificate.date}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {certificate.description}
            </p>
            {/* Actions */}
            {certificate.image && (
              <div className="mt-3">
                <button
                  className="px-3 py-1 bg-primary text-white dark:bg-slate-800 rounded-lg text-sm hover:bg-primary/80"
                  onClick={() => setOpen(true)}
                >
                  View
                </button>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Lightbox / Modal */}
      {open && certificate.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-2 right-2 z-50 flex gap-2">
              <button
                className="p-2 rounded bg-white/90 dark:bg-slate-800 shadow"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-2 p-2 pl-5 bg-white/90 dark:bg-slate-900 rounded-t shadow">
              <div className="text-medium font-medium">{certificate.title}</div>
              <div className="flex items-center gap-2 pr-10 ">
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-primary text-white rounded text-sm hover:bg-primary/80"
                >
                  Open
                </a>
                <a
                  href={certificate.image}
                  download
                  className="px-8  py-1 border border-primary text-primary rounded text-sm hover:bg-primary/10"
                >
                  Download
                </a>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-slate-900 rounded-b p-2 max-w-[95vw] max-h-[85vh] overflow-auto">
              {isPdf ? (
                <iframe
                  src={certificate.image}
                  title={certificate.title}
                  className="w-[min(90vw,900px)] h-[min(80vh,800px)]"
                />
              ) : (
                <div className="w-[min(90vw,900px)] h-[min(80vh,800px)] flex items-center justify-center">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={1200}
                    height={900}
                    className="object-contain w-full h-full rounded"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
