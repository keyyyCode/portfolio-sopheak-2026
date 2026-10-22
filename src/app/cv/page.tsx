"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Printer,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b print:hidden"
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="flex gap-2">
            {/* <Button
              onClick={handlePrint}
              size="sm"
              variant="outline"
              className="gap-2 bg-transparent"
            >
              <Printer className="h-4 w-4" />
              Print
            </Button> */}
            <Button onClick={handleDownload} size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </motion.div>

      {/* CV Content */}
      <div className="max-w-5xl mx-auto p-8 pt-24 print:pt-0 print:p-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-card rounded-xl shadow-2xl print:shadow-none print:rounded-none overflow-hidden"
        >
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-8 print:rounded-none overflow-hidden"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            </div>

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0"
              >
                <Image
                  src="/mee.jpg"
                  alt="Samart Sopheak"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="flex-1 text-center md:text-left text-white">
                <motion.h1
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl font-bold mb-2"
                >
                  Mr. Somart Sopheak
                </motion.h1>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-2xl font-medium mb-4 text-white/90"
                >
                  Software Developer
                </motion.p>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white/90"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>081 82 38 65</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>somartsopheak1@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Chrouy Changvar, Phnom Penh</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="p-8 space-y-8">
            {/* About Me */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
                About Me
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I am a motivated and detail-oriented Software Development
                student with strong expertise in front-end web development and
                UX/UI design. My focus is on building responsive, user-friendly,
                and visually appealing applications using modern technologies
                such as Next.js, Vue.js, Laravel, and Flutter. Through academic
                projects and a professional internship, I have gained hands-on
                experience in developing web and mobile applications, designing
                intuitive interfaces, and collaborating in team-based
                development environments. Passionate about technology and
                continuous learning, I strive to deliver innovative solutions
                that enhance usability, improve performance, and create
                meaningful digital experiences.
              </p>
            </motion.section>

            {/* Education */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
                Education
              </h2>
              <div className="space-y-4">
                {[
                  {
                    school: "Norton University",
                    degree: "Bachelor's in Software Development",
                    period: "2022 – Present",
                  },
                  {
                    school: "Paññāsāstra University of Cambodia",
                    degree: "General English as a Second Language (GESL)",
                    period: "2022 – 2025",
                  },
                  {
                    school: "Serey Saophoan High School",
                    degree: "Graduated",
                    period: "2021",
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    <h3 className="font-semibold text-lg">{edu.school}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            {/* Work Experience */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
                Work Experience
              </h2>
              <Card className="p-6 hover:shadow-lg transition-shadow bg-primary/5 dark:bg-primary/10">
                <h3 className="font-semibold text-lg ">Intern - Vectorasoft</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  April 2 - July 7, 2025
                </p>
                <ul className="space-y-2">
                  {[
                    "Developed front-end components using Next.js and Flutter",
                    "Designed UX/UI for web applications, improving usability and visual appeal",
                    "Collaborated with developers to improve user experience and performance",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow bg-primary/5 dark:bg-primary/10 mt-4">
                <h3 className="font-semibold text-lg ">SystemRollout-Unilever</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  May 15 - Dec 15, 2026
                </p>
                <ul className="space-y-2">
                  {[
                    "Supported the rollout and implementation of DDT and DCODE systems for Unilever, ensuring smooth adoption by field teams.",
                    "Provided on-site and remote technical support, troubleshooting system issues, and assisting users with daily operations.",
                    "Conducted system testing, trained users on new tools and processes, and documented issues and feedback to improve system performance.",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.section>
             {/* <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
                Work Experience
              </h2>
              <Card className="p-6 hover:shadow-lg transition-shadow bg-primary/5 dark:bg-primary/10">
                <h3 className="font-semibold text-lg ">SystemRollout-Unilever</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  May 15 - Dec 15, 2026
                </p>
                <ul className="space-y-2">
                  {[
                    "Supported the rollout and implementation of DDT and DCODE systems for Unilever, ensuring smooth adoption by field teams.",
                    "Provided on-site and remote technical support, troubleshooting system issues, and assisting users with daily operations.",
                    "Conducted system testing, trained users on new tools and processes, and documented issues and feedback to improve system performance.",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.section> */}
            {/* Technical Skills */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Front-End",
                    skills: "Next.js, Vue.js, JavaScript, HTML5, CSS3, Flutter",
                    level: 80,
                  },
                  {
                    title: "Back-End",
                    skills: "Laravel (PHP), Firebase",
                    level: 60,
                  },
                  {
                    title: "UI/UX Design",
                    skills:
                      "Figma, Adobe Illustrator, Photoshop, CorelDRAW, Canva",
                    level: 85,
                  },
                  {
                    title: "Databases",
                    skills: "MySQL, MongoDB",
                    level: 70,
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-all bg-primary/5 dark:bg-primary/10">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold ">{skill.title}</h3>
                        <div className="text-sm text-muted-foreground">
                          {skill.level}%
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {skill.skills}
                      </p>
                      <div className="skill-bar bg-primary/10 rounded-full h-3">
                        <div
                          className="skill-fill h-3 rounded-full bg-primary"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Certificates */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
                Certificates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "App Development (Flutter)",
                    issuer: "Online Course",
                    image: "/flutter-app-development-certificate.jpg",
                  },
                  {
                    title: "Back-end Development (Laravel)",
                    issuer: "Online Course",
                    image: "/laravel-backend-development-certificate.jpg",
                  },
                  {
                    title: "Front-End Web Development",
                    issuer: "Online Course",
                    image: "/frontend-web-development-certificate.jpg",
                  },
                  {
                    title: "Design Skills",
                    issuer: "Addbook Computer Centre",
                    image: "/ui-ux-design-skills-certificate.jpg",
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-all hover:scale-105 bg-primary/5 dark:bg-primary/10">
                      {/* <div className="relative w-full h-32 mb-3 rounded overflow-hidden bg-muted">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          fill
                          className="object-cover"
                        />
                      </div> */}
                      <h3 className="font-semibold">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            {/* Languages */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
                Languages
              </h2>
              <div className="space-y-4">
                {[
                  { name: "Khmer", level: 95 },
                  { name: "English", level: 65 },
                ].map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="text-base px-3 py-1"
                      >
                        {lang.name}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        Level: {lang.level}%
                      </div>
                    </div>
                    <div className="skill-bar bg-primary/10 rounded-full h-3">
                      <div
                        className="skill-fill h-3 rounded-full bg-primary"
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            {/* Projects */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    name: "E-commerce App, Movie App, Bank App",
                    tech: "Flutter",
                  },
                  { name: "Mart Management System", tech: "Laravel + MySQL" },
                  { name: "Restaurant Food Web App", tech: "Next.js" },
                  {
                    name: "Mall Location Management System",
                    tech: "Python + UI",
                  },
                  {
                    name: "Library Digital at Norton University",
                    tech: "Vue + Laravel",
                  },
                  { name: "Documents Management System", tech: "Next.js" },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-all bg-primary/5 dark:bg-primary/10">
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <p className="font-semibold ">{project.name}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {project.tech}
                          </p>
                        </div>
                        {/* <div className="text-sm text-muted-foreground whitespace-nowrap ml-2">
                          <span className="inline-block bg-primary/5 text-primary px-2 py-1 rounded text-xs">
                            PRO
                          </span>
                        </div> */}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Reference */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center gap-2">
                Reference
              </h2>
              <Card className="p-6 hover:shadow-lg transition-shadow bg-primary/5 dark:bg-primary/10">
                <h3 className="font-semibold ">Dr. Sek Socheat</h3>
                <p className="text-muted-foreground mb-3">
                  Lecturer of Norton University
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>E-mail: socheat.sek@gmail.com</p>
                  <p>Mobile: (+855) 17 879 967</p>
                </div>
              </Card>
            </motion.section>
          </div>
        </motion.div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          @page {
            margin: 1cm;
          }
        }
      `}</style>
    </div>
  );
}
