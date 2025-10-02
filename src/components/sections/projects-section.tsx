"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { SectionTitle } from "@/components/ui/section-title"
import { ProjectCard } from "@/components/ui/project-card"

const projects = [
  {
    title: "E-commerce App",
    description:
      "Full-featured mobile shopping application with product catalog, cart management, and secure checkout flow",
    fullDescription:
      "A comprehensive e-commerce mobile application built with Flutter and Firebase. Features include user authentication, product browsing with filters, shopping cart management, secure payment integration, order tracking, and push notifications. The app uses Firebase for real-time database, authentication, and cloud storage.",
    image: "/ecommerce-mobile-app-interface.jpg",
    tech: ["Flutter", "Firebase", "Stripe API", "Push Notifications"],
    category: "app",
    github: "https://github.com/somartsopheak/ecommerce-app",
    features: [
      "User authentication and profile management",
      "Product catalog with search and filters",
      "Shopping cart and wishlist",
      "Secure payment integration",
      "Order tracking and history",
      "Push notifications for orders",
    ],
  },
  {
    title: "Movie App",
    description: "Discover and explore movies with detailed information, ratings, and personalized recommendations",
    fullDescription:
      "A modern movie discovery application that integrates with TMDB API to provide comprehensive movie information. Users can browse trending movies, search by genre, view detailed information including cast and crew, watch trailers, and save favorites. The app features a clean, intuitive interface with smooth animations.",
    image: "/movie-streaming-app-interface.png",
    tech: ["Flutter", "TMDB API", "SQLite", "Video Player"],
    category: "app",
    github: "https://github.com/somartsopheak/movie-app",
    features: [
      "Browse trending and popular movies",
      "Advanced search with filters",
      "Detailed movie information and trailers",
      "Favorites and watchlist",
      "Offline mode with local storage",
      "Personalized recommendations",
    ],
  },
  {
    title: "Bank App",
    description: "Secure banking application with account management, transactions, and financial analytics",
    fullDescription:
      "A secure mobile banking application with comprehensive financial management features. Built with Flutter and implementing industry-standard security practices including biometric authentication, encrypted data storage, and secure API communication. Features real-time transaction updates and detailed financial analytics.",
    image: "/banking-mobile-app-interface.jpg",
    tech: ["Flutter", "Security", "Biometric Auth", "Charts"],
    category: "app",
    github: "https://github.com/somartsopheak/bank-app",
    features: [
      "Biometric authentication (fingerprint/face)",
      "Account balance and transaction history",
      "Fund transfers and bill payments",
      "Financial analytics and reports",
      "Card management",
      "Secure encrypted data storage",
    ],
  },
  {
    title: "Mart Management System",
    description: "Comprehensive inventory and sales management system for retail businesses",
    fullDescription:
      "A full-stack retail management system built with Laravel and MySQL. Provides complete inventory tracking, point-of-sale functionality, sales analytics, and employee management. Features a responsive dashboard with real-time updates and comprehensive reporting tools for business insights.",
    image: "/retail-management-dashboard.jpg",
    tech: ["Laravel", "MySQL", "Bootstrap", "Chart.js"],
    category: "web",
    github: "https://github.com/somartsopheak/mart-management",
    features: [
      "Inventory management with stock alerts",
      "Point of sale (POS) system",
      "Sales analytics and reporting",
      "Employee management and permissions",
      "Supplier and customer management",
      "Invoice generation and printing",
    ],
  },
  {
    title: "Restaurant Food Web App",
    description: "Modern restaurant website with online ordering, menu management, and reservation system",
    fullDescription:
      "A modern restaurant web application built with Next.js and React. Features an interactive menu with high-quality images, online ordering system with real-time order tracking, table reservation management, and customer reviews. The admin panel allows easy menu updates and order management.",
    image: "/restaurant-food-ordering-website.jpg",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    category: "web",
    github: "https://github.com/somartsopheak/restaurant-app",
    features: [
      "Interactive menu with categories",
      "Online ordering and cart system",
      "Table reservation management",
      "Customer reviews and ratings",
      "Admin panel for menu management",
      "Order tracking and notifications",
    ],
  },
  {
    title: "Mall Location Management",
    description: "Interactive mall directory system with store locations, navigation, and event management",
    fullDescription:
      "An interactive mall directory and navigation system designed with Python and modern UI/UX principles. Features an intuitive interface for finding stores, viewing promotions, and navigating the mall. Includes an admin panel for managing store information, events, and promotions. This is a UI/UX design project with interactive prototypes.",
    image: "/mall-directory-interface.jpg",
    tech: ["Python", "UI Design", "Figma", "Interactive Prototype"],
    category: "uiux",
    features: [
      "Interactive mall map with store locations",
      "Store search and filtering",
      "Event and promotion management",
      "Navigation and directions",
      "Store details and operating hours",
      "Admin panel for content management",
    ],
  },
  {
    title: "Library Digital",
    description: "Digital library platform for book cataloging, borrowing, and member management",
    fullDescription:
      "A comprehensive digital library management system built with Vue.js frontend and Laravel backend. Manages book cataloging, member registration, borrowing and returns, fines calculation, and generates reports. Features a user-friendly interface for both librarians and members with advanced search capabilities.",
    image: "/digital-library-interface.jpg",
    tech: ["Vue.js", "Laravel", "MySQL", "PDF Generation"],
    category: "web",
    github: "https://github.com/somartsopheak/library-digital",
    features: [
      "Book cataloging and management",
      "Member registration and profiles",
      "Borrowing and return system",
      "Fine calculation and payment",
      "Advanced search and filters",
      "Reports and analytics",
    ],
  },
  {
    title: "Documents Management System",
    description: "Enterprise document management solution with version control and collaboration features",
    fullDescription:
      "An enterprise-grade document management system built with Next.js. Features secure document storage, version control, access permissions, and collaboration tools. Supports multiple file formats with preview capabilities, advanced search, and audit trails for compliance. Includes role-based access control for security.",
    image: "/document-management-system.png",
    tech: ["Next.js", "PostgreSQL", "AWS S3", "TypeScript"],
    category: "web",
    github: "https://github.com/somartsopheak/document-management",
    features: [
      "Secure document storage and retrieval",
      "Version control and history",
      "Role-based access control",
      "Document preview and editing",
      "Advanced search and tagging",
      "Audit trails and compliance",
    ],
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "app", label: "App Application" },
  { id: "web", label: "Web Design" },
  { id: "uiux", label: "UI/UX" },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Projects</SectionTitle>

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

        <motion.div layout className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
