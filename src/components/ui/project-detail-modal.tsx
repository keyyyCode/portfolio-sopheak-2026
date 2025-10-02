"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>

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
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
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
                  <Github className="h-4 w-4" />
                  View Source Code
                </a>
              </Button>
            ) : (
              <Button disabled className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Design Project (No Source)
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
