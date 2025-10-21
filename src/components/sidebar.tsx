"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  Code,
  Award,
  Trophy,
  Clock,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "skills", label: "Technical Skills", icon: Code },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "experience", label: "Experience", icon: Clock },
  { id: "contact", label: "Contact Me", icon: Mail },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border z-40 lg:translate-x-0 lg:z-30"
      >
        <div className="flex flex-col h-full p-6">
          <div className="mb-8 pt-12 lg:pt-6">
            <h2 className="text-2xl font-bold text-primary">Samart Sopheak</h2>
            <p className="text-sm text-muted-foreground">Portfolio</p>
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              © 2025 Samart Sopheak
            </p>
          </div>
        </div>
      </motion.aside>

      {/* Desktop Sidebar - Always visible */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-card border-r border-border z-30">
        <div className="flex flex-col h-full p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary">Samart Sopheak</h2>
            <p className="text-sm text-muted-foreground">Portfolio</p>
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              © 2025 Samart Sopheak
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
