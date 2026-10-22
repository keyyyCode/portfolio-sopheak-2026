import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { LanguagesSection } from "@/components/sections/languages-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificatesSection } from "@/components/sections/certificates-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { KeycutSection } from "@/components/sections/keycut-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ReferenceSection } from "@/components/sections/reference-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sidebar } from "@/components/sidebar";
import { Newexp } from "@/components/sections/new-exp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Sidebar />

      <div className="lg:ml-64">
        <ThemeToggle />
        <div className="container mx-auto px-4 py-10 md:px-8 lg:px-16 max-w-7xl">
          <HeroSection />
          <AboutSection />
          {/* <LanguagesSection /> */}
          <ProjectsSection />
          <SkillsSection />

          {/* <KeycutSection /> */}
          <CertificatesSection />
          <AchievementsSection />
          <ExperienceSection />
          {/* <Newexp /> */}
          {/* <EducationSection /> */}
          {/* <ReferenceSection /> */}
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
