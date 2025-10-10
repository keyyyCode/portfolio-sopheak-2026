"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ProjectDetailModal } from "@/components/ui/project-detail-modal";

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  media?: { type: "image" | "video"; src: string }[];
  tech: string[];
  category: string;
  github?: string;
  features?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [liked, setLiked] = useState(false);
  // avoid initializing with Math.random() during SSR to prevent hydration mismatches
  const [likes, setLikes] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // initialize client-side only
    setLikes(Math.floor(Math.random() * 50) + 10);
    setMounted(true);
  }, []);
  const [showDetails, setShowDetails] = useState(false);

  const handleLike = () => {
    if (likes === null) {
      setLikes(1);
    } else if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <Card className="overflow-hidden group hover:border-primary/50 transition-all duration-300">
          <div
            className="relative aspect-video overflow-hidden bg-muted cursor-pointer"
            onClick={() => setShowDetails(true)}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-2 border-t">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                onClick={handleLike}
              >
                <Heart
                  className={`h-4 w-4 ${
                    liked ? "fill-primary text-primary " : ""
                  }`}
                />
                <span className="text-xs">{likes === null ? "" : likes}</span>
              </Button>
              {/* <Button variant="ghost" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-xs">
                  {Math.floor(Math.random() * 20)}
                </span>
              </Button> */}
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 ml-auto bg-primary text-white hover:bg-primary/90 dark:bg-slate-800 "
                onClick={() => setShowDetails(true)}
              >
                <Eye className="h-4 w-4 " />
                <span className="text-xs">View Details</span>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      <ProjectDetailModal
        project={project}
        open={showDetails}
        onOpenChange={setShowDetails}
      />
    </>
  );
}
