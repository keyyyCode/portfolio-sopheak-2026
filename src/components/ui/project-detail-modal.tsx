"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  image?: string;
  media?: MediaItem[];
  tech: string[];
  category: string;
  github?: string;
  features?: string[];
}

interface ProjectDetailModalProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailModal({
  project,
  open,
  onOpenChange,
}: ProjectDetailModalProps) {
  const mediaList: MediaItem[] =
    project.media && project.media.length > 0
      ? project.media
      : project.image
      ? [{ type: "image", src: project.image }]
      : [];

  const [index, setIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const next = () => setIndex((i) => (i + 1) % mediaList.length);
  const prev = () =>
    setIndex((i) => (i - 1 + mediaList.length) % mediaList.length);
  const goToMedia = (i: number) => {
    setImageLoading(true);
    setImageError(false);
    setIndex(i);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Media viewer */}
          {mediaList.length > 0 && (
            <div className="relative w-full rounded-lg overflow-hidden bg-muted">
              <div className="relative w-full aspect-video bg-black">
                {mediaList[index].type === "video" ? (
                  (() => {
                    const src = mediaList[index].src;
                    const isMov =
                      src.toLowerCase().endsWith(".mov") ||
                      src.toLowerCase().endsWith(".mov");
                    // Try to render the video element for supported formats. For .MOV (quicktime)
                    // many browsers don't natively play it; provide an Open/Download fallback.
                    if (!isMov) {
                      return (
                        <video
                          src={src}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-contain bg-black"
                        />
                      );
                    }

                    return (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-black text-white">
                        <div className="mb-4">
                          This video is a .MOV file which may not play in all
                          browsers.
                        </div>
                        <div className="flex gap-3">
                          <a
                            href={src}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 bg-primary text-white rounded"
                          >
                            Open
                          </a>
                          <a
                            href={src}
                            download
                            className="px-4 py-2 border border-primary text-primary rounded bg-white/5"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <Image
                    src={mediaList[index].src}
                    alt={`${project.title} media ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                )}

                {/* nav */}
                {mediaList.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {mediaList.length > 1 && (
                <div className="mt-2 flex gap-2 overflow-x-auto py-2">
                  {mediaList.map((m, i) => (
                    <button
                      key={m.src}
                      onClick={() => goToMedia(i)}
                      className={`shrink-0 border-2 rounded transition-all ${
                        i === index
                          ? "border-primary ring-2 ring-primary ring-opacity-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {m.type === "image" ? (
                        <div className="relative w-20 h-12 bg-gray-100">
                          <Image
                            src={m.src}
                            alt={`thumb-${i}`}
                            fill
                            className="object-cover rounded"
                            sizes="80px"
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-12 flex items-center justify-center bg-black text-white rounded">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M7 4v16l13-8z" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Category Badge */}
          <div>
            <Badge variant="secondary" className="text-sm">
              {project.category === "app"
                ? "Mobile Application"
                : project.category === "web"
                ? "Web Application"
                : "UI/UX Design"}
            </Badge>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About This Project</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            {project.github ? (
              <Button asChild className="gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <Github className="h-4 w-4" /> */}
                  View Source Code
                </a>
              </Button>
            ) : (
              <Button disabled className="gap-2">
                <ExternalLink className="h-4 w-4" />
                No Source
              </Button>
            )}
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
