"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { ProjectCard } from "@/components/ui/project-card";

const projects = [
  {
    title: "Pharmacy App",
    description:
      "A clean, responsive Pharmacy mobile UI built with Flutter that showcases prescription management, medicine catalog, order checkout, and pharmacist contact features — designed for fast UX and polished visuals.",
    fullDescription:
      "A modern, production-ready Flutter UI for a pharmacy app focused on clarity, trust, and conversion. The prototype includes a searchable medicine catalog, prescription upload and tracking, cart & checkout flow, refill reminders, and an informative pharmacist contact section. Designed with accessibility and micro-interactions in mind to give users a smooth, trustworthy healthcare experience.",
    image: "/projects/apps/pamaciapp.jpg",
    media: [
      { type: "image" as const, src: "/projects/apps/pamaciapp.jpg" },
      // { type: "image" as const, src: "/projects/uxui/deliveryapp1.png" },
      // { type: "image" as const, src: "/projects/uxui/deliveryapp2.png" },
      // { type: "image" as const, src: "/projects/uxui/deliveryapp3.png" },
    ],
    tech: ["Flutter ", "UX/UI"],
    category: "app",
    // github: "https://github.com/somartsopheak/ecommerce-app",
    features: [
      "Modern pharmacy UI with medicine catalog",
      "prescription upload",
      "cart & checkout",
      "order tracking",
      "reminders",
      "pharmacist contact",
    ],
  },
  {
    title: "Movie App ",
    description:
      "A sleek and responsive Flutter Movie App UI showcasing trending films, detailed movie info, episodes, and personalized watchlists — built for a smooth and cinematic user experience.",
    fullDescription: `The Movie App is a fully designed Flutter UI prototype that delivers a modern, engaging interface for browsing, watching, and managing movies and TV shows.
It focuses on beautiful visuals, fluid animations, and intuitive navigation — simulating a real streaming platform experience.

Users can explore movie categories, view detailed descriptions, watch trailers, and manage their favorite lists. The app also includes a tabbed interface for viewing episodes, downloads, and upcoming movies, making it ideal for showcasing Flutter dynamic UI capabilities.`,
    image: "/projects/apps/movieapp.jpg",
    media: [{ type: "image" as const, src: "/projects/apps/movieapp.jpg" }],
    tech: ["Flutter ", "UX/UI"],
    category: "app",
    // github: "https://github.com/somartsopheak/movie-app",
    features: [
      "Beautiful home screen with dynamic movie categories",
      "Detailed movie info with cast, rating, and description",
      "Episode tabs for series navigation",
      "Favorite and download management",
      "Coming soon and trending sections",
      "Search and filter for quick movie discovery",
    ],
  },
  {
    title: "ACLEDA Bank App",
    description:
      "A modern Flutter-based mobile banking UI inspired by ACLEDA Bank, featuring a secure, user-friendly interface for seamless financial management and digital transactions.",
    fullDescription:
      "The Bank ACLEDA App (Flutter) is a fully designed mobile banking interface that reimagines digital banking with clarity, trust, and simplicity.This project focuses on user experience, visual hierarchy, and accessibility, providing customers with an intuitive way to manage accounts, send money, track expenses, and access banking services anytime, anywhere.Every screen is carefully structured with real-world UX flows — from onboarding and login to account overview, transactions, QR payments, and settings — making it a perfect Flutter showcase for clean and professional finance app design.",
    image: "/projects/apps/aclidabank1.jpg",
    media: [
      { type: "image" as const, src: "/projects/apps/aclidabank1.jpg" },
      { type: "image" as const, src: "/projects/apps/aclidabank2.jpg" },
      { type: "image" as const, src: "/projects/apps/aclidabank3.jpg" },
    ],
    tech: ["Flutter"],
    category: "app",
    github: "https://github.com/keyyyCode/flutter_acleda",
    features: [
      "Secure login with PIN / biometric placeholder",
      "Money transfer & QR payment UI",
      "Transaction history and expense breakdown",
      "Notifications and alerts layout",
      "Profile and account management screens",
      "Responsive and accessible design for all screen sizes",
    ],
  },
  {
    title: "Document Management System",
    description:
      "A comprehensive Document Management and Learning Platform built with Next.js — featuring role-based access for Admins and Users, interactive dashboards, skill tests, learning paths, and employee modules.",
    fullDescription:
      "The Document Management System is a Next.js-powered web platform designed to centralize and simplify the management of digital documents, employee learning, and organizational knowledge.It provides a secure, role-based environment where admins can manage content, users, and analytics, while employees and users can explore documents, follow structured learning paths, complete skill assessments, and track their progress.The platform combines document organization, learning management, and performance tracking into one unified interface — optimized for both productivity and knowledge growth within organizations or academic institutions. ",
    image: "/projects/webs/dbleaningadmin1.png",
    media: [
      { type: "image" as const, src: "/projects/webs/dbleaningadmin1.png" },
      { type: "image" as const, src: "/projects/webs/dbleaningadmin2.png" },
      { type: "image" as const, src: "/projects/webs/dbleaningadmin3.png" },
      { type: "image" as const, src: "/projects/webs/dbleaninguser1.png" },
      { type: "image" as const, src: "/projects/webs/dbleaninguser2.png" },
      { type: "image" as const, src: "/projects/webs/dbleaninguser3.png" },
      { type: "image" as const, src: "/projects/webs/dbleaninguser4.png" },
      { type: "image" as const, src: "/projects/webs/dbleaninguser5.png" },
      { type: "image" as const, src: "/projects/webs/dbleaninguser6.png" },
      { type: "image" as const, src: "/projects/webs/dbleaninguser7.png" },
      { type: "image" as const, src: "/projects/webs/dbleaninguser8.png" },
    ],
    tech: ["Next.js"],
    category: "web",
    // github: "https://github.com/somart-sopheak/Documents-Management-System",
    features: [
      "Role-based access control (Admin, Employee, User)",
      "Interactive dashboard with analytics and activity insights",
      "Document upload, organization, and version control",
      "Knowledge Base with categorized articles and search",
      "Learning Path management for guided skill development",
      "Skill Test module with filtering and progress tracking",
      "My Tasks section for employee assignments and goals",
      "FAQ and Help Center for user support",
      "Employee management (profiles, roles, progress tracking)",
      "Modern UI with responsive, accessible design",
    ],
  },
  {
    title: "Digital Library Management System",
    description:
      "A full-featured Digital Library web platform built with Laravel and Vue.js — empowering users, staff, and administrators to manage books, borrowing, payments, and institutional records through a modern, role-based dashboard.",
    fullDescription:
      "The Digital Library Management System is a comprehensive web application designed to digitalize the library experience for universities and organizations.Built with Laravel (backend) and Vue.js (frontend), it provides seamless management of books, borrowing records, users, and institutional data — all within a secure, responsive, and user-friendly interface.The platform supports multiple roles — Super Admin, Administrator, Staff, and User — each with tailored access permissions and unique dashboards. Users can explore books online, request or return books, manage deposits, and view invoices, while admins oversee all library operations through advanced analytics and management tools.",
    image: "/projects/webs/librarydigitaladmin1.png",
    media: [
      {
        type: "image" as const,
        src: "/projects/webs/librarydigitaladmin1.png",
      },
      {
        type: "image" as const,
        src: "/projects/webs/librarydigitaladmin2.png",
      },
      {
        type: "image" as const,
        src: "/projects/webs/librarydigitaladmin3.png",
      },

      {
        type: "image" as const,
        src: "/projects/webs/librarydigitaladmin4.png",
      },
      {
        type: "image" as const,
        src: "/projects/webs/librarydigitaladmin5.png",
      },
      {
        type: "image" as const,
        src: "/projects/webs/librarydigitaladmin6.png",
      },

      { type: "image" as const, src: "/projects/webs/librarydigitaluser1.png" },
      { type: "image" as const, src: "/projects/webs/librarydigitaluser2.png" },
      { type: "image" as const, src: "/projects/webs/librarydigitaluser3.png" },
    ],
    tech: ["Laravel", "Vue3", "MySQL"],
    category: "web",
    github: "https://github.com/somart-sopheak/nu-digital",
    features: [
      "Role-based access: Super Admin, Administrator, Staff, and User",
      "Online book catalog with search, categories, and filtering",
      "Manage Books, Authors, and Categories",
      "Borrowing records with due-date tracking",
      "Deposits and payment management",
      "Attendance tracking for library visitors or staff",
      "Returned books tracking and invoice generation",
      "Institutions, colleges, and department management",
      "Real-time alerts and issue reporting system",
      "Modern UI with responsive design for desktop and mobile",
    ],
  },
  {
    title: "Express Delivery System",
    description:
      "A multi-role delivery management UX/UI system designed for Drivers, Merchants, and Express Merchants — enabling smooth delivery operations, tracking, payments, and real-time logistics insights.",
    fullDescription:
      "The Express Delivery System is a comprehensive UX/UI design project that redefines digital logistics through three connected mobile applications: Driver App, Merchant App, and Express Merchant App.This system focuses on optimizing delivery operations, ensuring clear communication, and improving efficiency for all stakeholders involved in the delivery process.Each app is designed with user-centered workflows, emphasizing simplicity, clarity, and real-time interaction.The Driver App streamlines task management and delivery tracking, the Merchant App offers complete visibility into earnings and orders, while the Express Merchant App focuses on bookings, stock management, and financial reports — all unified under a consistent design language and experience.",
    image: "/projects/uxui/deliveryapp1.png",
    github:
      " https://www.figma.com/design/urhlxGOFa6eSayK6IHifLs/Hou-Express?node-id=416-3319&p=f&t=m6whZ1FDmfnCiPHf-0",
    media: [
      { type: "image" as const, src: "/projects/uxui/deliveryapp1.png" },
      { type: "image" as const, src: "/projects/uxui/deliveryapp5.png" },
      { type: "image" as const, src: "/projects/uxui/deliveryapp10.png" },
      { type: "image" as const, src: "/projects/uxui/deliveryapp.png" },
      { type: "image" as const, src: "/projects/uxui/deliveryapp4.png" },
      { type: "image" as const, src: "/projects/uxui/deliveryapp9.png" },
    ],
    tech: ["Figma", "UX/UI"],
    category: "uiux",
    features: ["Driver App ", "Merchant App", "Express Merchant App"],
  },
  {
    title: "School Management System",
    description:
      "A complete school ecosystem UX/UI design featuring three connected apps — for Students & Teachers, Parents (Kids App), and Staff/Admin — enabling seamless communication, performance tracking, and digital school management.",
    fullDescription:
      "The Smart School Management System is a multi-level UX/UI design project that reimagines how schools operate digitally.It includes three interconnected applications designed for students & teachers, parents, and administrators/staff, each offering tailored features and experiences suited to their roles.The design focuses on simplicity, clarity, and engagement, creating a cohesive digital environment for learning, communication, and management.With real-time access to announcements, performance analytics, and payments, the system promotes transparency and collaboration across all school levels.",
    image: "/projects/uxui/dbadvanceapp.png",
    media: [
      { type: "image" as const, src: "/projects/uxui/dbadvanceapp.png" },
      { type: "image" as const, src: "/projects/uxui/advanceappmain.png" },
      { type: "image" as const, src: "/projects/uxui/kidappmain.png" },
      { type: "image" as const, src: "/projects/uxui/adanceapp.png" },
      { type: "image" as const, src: "/projects/uxui/kidapp.png" },
    ],
    tech: ["Figma", "UX/UI"],
    category: "uiux",
    github:
      "https://www.figma.com/design/9znwpTZbc9fHF2mbgm4c5w/Advance-App?node-id=14-546&t=WwoCYJAcWmhfzPqs-0",
    features: [
      "Student & Teacher App",
      "Kid App (Parent App)",
      "Staff & Admin Dashboard",
    ],
  },
  {
    title: "Resturants & Food Web",
    description:
      "Enterprise document management solution with version control and collaboration features",
    fullDescription:
      "The Restaurant & Food Service App is a user-centered UX/UI project designed to simplify dining and food ordering for customers while providing clear service management for restaurants.The app provides intuitive navigation, engaging visuals, and interactive elements for browsing menus, making reservations, ordering online, and completing payments. Customers can contact the restaurant, explore dishes, and track their orders — all in one seamless interface.",
    image: "/projects/uxui/webfood1.png",
    media: [
      { type: "image" as const, src: "/projects/uxui/webfood1.png" },
      { type: "image" as const, src: "/projects/uxui/webfood2.png" },
      { type: "image" as const, src: "/projects/uxui/webfood.png" },
    ],
    tech: ["Figma", "UX/UI"],
    github:
      "https://www.figma.com/design/QnrhBRYLWMmEj54TAgGwmB/Untitled?node-id=0-1&p=f&t=A7H8Tlmthl2Fatud-0",
    category: "uiux",

    features: [
      "Browse full restaurant menu with categories and dish details",
      "Order food for dine-in, takeout, or delivery",
      "Contact restaurant directly via chat or call",
      "Promotions, offers, and discounts highlights",
      "Favorites and order history for quick reordering",
      "Ratings and feedback submission for each dish",
    ],
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "app", label: "App Application" },
  { id: "web", label: "Web Design" },
  { id: "uiux", label: "UI/UX" },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Projects</SectionTitle>

        <p className="text-sm text-muted-foreground mt-2">
          Note: some demo videos are .MOV files and may not play in every
          browser. If a video won't play, use the View Details button to Open or
          Download it.
        </p>

        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
