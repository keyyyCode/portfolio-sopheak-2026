"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Web Developer | Mobile App Developer | UI/UX Designer";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-30 h-40 md:w-70 md:h-70 rounded-full overflow-hidden border-4 border-primary shadow-2xl ">
            <Image
              src="/mee.jpg"
              alt="Samart Sopheak"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_40px_rgba(0,0,0,0.4)]">
            <Image
              src="/mee.jpg"
              alt="Samart Sopheak"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <div className="text-lg md:text-xl font-mono text-primary min-h-[2rem] flex items-center justify-center">
            <span className="relative">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="inline-block w-0.5 h-5 bg-primary ml-1"
              />
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight text-balance">
            Samart Sopheak
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-medium">
            Software Developer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance"
        >
          Building innovative digital experiences through Web development,
          mobile applications, and thoughtful design
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <Link href="/cv">
            <Button size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              View CV
            </Button>
          </Link>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>Explore my work</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
