export interface Skill {
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  years: number
}

export interface TechnologyStack {
  backend: string[]
  frontend: string[]
  tools: string[]
}

export interface Project {
  name: string
  type: string
  image?: string
  github?: string
  github_backend?: string
  github_frontend?: string
  github_capi_service?: string
  live_demo?: string
  description: string
  long_description?: string
  technologies: TechnologyStack | string[]
  features?: string[]
  achievements?: string[]
  status: 'Completed' | 'In Progress' | 'Maintenance'
}

export interface Education {
  degree: string
  institution: string
  year: string
  description: string
}

export interface Experience {
  position: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export interface GalleryItem {
  image: string
  caption: string
  alt: string
}

export interface Contact {
  email: string
  formspree_id?: string
  emailjs_service_id?: string
  emailjs_template_id?: string
}

export interface Social {
  github: string
  linkedin?: string
  instagram?: string
  whatsapp: string
  youtube?: string
}

export interface Design {
  theme: 'light' | 'dark' | 'auto'
  accent_color: string
  font_family: 'Inter' | 'Poppins' | 'Roboto' | 'Open Sans'
  animation: boolean
  show_photos: boolean
}

export interface PortfolioData {
  name: string
  title: string
  tagline: string
  age: number
  location: string
  email: string
  phone?: string
  github: string
  linkedin?: string
  instagram?: string
  website: string
  about: string
  education: Education[]
  experience: Experience[]
  skills: {
    backend: Skill[]
    frontend: Skill[]
    tools: Skill[]
    other: Skill[]
  }
  major_projects: Project[]
  other_projects: Project[]
  gallery: GalleryItem[]
  contact: Contact
  social: Social
  design: Design
  notes?: string
  birthdate: string
}

/**
 * Calculate age from birthdate
 * @param birthdate - Date string in format "YYYY-MM-DD"
 * @returns Age in years
 */
function calculateAge(birthdate: string): number {
  const today = new Date()
  const birthDate = new Date(birthdate)
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  
  // Adjust age if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  
  return age
}

export const portfolioData: PortfolioData = {
  name: "Hilmi Abdurrahim",
  title: "Full-stack Web Developer",
  tagline: "Building modern web applications with passion and precision",
  age: calculateAge("2000-05-03"),
  birthdate: "2000-05-03",
  location: "Indonesia",
  email: "hilmiabdurrahim@gmail.com",
  phone: "+62895395755317",
  github: "https://github.com/helmetabd",
  linkedin: "https://linkedin.com/in/hilmi-abdurrahim-985280167",
  instagram: "https://www.instagram.com/hilmiabdurrahim",
  website: "https://helmetabd.github.io",
  about: "A passionate full-stack developer with expertise in building modern web applications using Laravel, Vue.js, React, and TypeScript. I love solving complex problems and creating elegant solutions that make a difference. With experience in both backend and frontend development, I bring a comprehensive understanding of the entire development process.",
  education: [
    {
      degree: "Associate's Degree in Computer Control Engineering",
      institution: "State Polytechnic of Madiun",
      year: "2018 - 2021",
      description: "Specialized in the design, development, and implementation of computer-based control and automation systems for industrial and technological applications"
    }
  ],
  experience: [
    {
      position: "Full-stack Developer",
      company: "PT. Gawebecik Nadhah Anugrah",
      period: "December 2023 - Present",
      description: "Developing and maintaining web applications using Laravel and Vue.js",
      achievements: [
        "Built a complete ERP system from scratch",
        "Improved application performance by 40%",
        "Working together on projects of 3 developers"
      ]
    }
  ],
  skills: {
    backend: [
      { name: "Laravel", level: "Advanced", years: 2 },
      { name: "PHP", level: "Advanced", years: 3 },
      { name: "MySQL", level: "Advanced", years: 2 },
      { name: "PostgreSQL", level: "Intermediate", years: 1 },
      { name: "REST API", level: "Advanced", years: 2 }
    ],
    frontend: [
      { name: "Vue.js", level: "Advanced", years: 2 },
      { name: "React", level: "Intermediate", years: 1 },
      { name: "TypeScript", level: "Intermediate", years: 1 },
      { name: "JavaScript (ES6+)", level: "Advanced", years: 3 },
      { name: "HTML5/CSS3", level: "Advanced", years: 3 },
      { name: "Tailwind CSS", level: "Intermediate", years: 1 }
    ],
    tools: [
      { name: "Git", level: "Advanced", years: 2 },
      { name: "Docker", level: "Intermediate", years: 1 },
      { name: "VS Code", level: "Advanced", years: 3 },
      { name: "Postman", level: "Advanced", years: 2 }
    ],
    other: [
      { name: "Agile/Scrum", level: "Intermediate", years: 1 },
      { name: "Problem Solving", level: "Advanced", years: 3 },
      { name: "Team Collaboration", level: "Advanced", years: 2 }
    ]
  },
  major_projects: [
    {
      name: "Arjuna",
      type: "Enterprise Sales & Order Management System",
      image: "https://placehold.co/600x400/3B82F6/3B82F6?text=Arjuna",
      github_backend: "https://github.com/helmetabd/Arjuna-Backend-V3",
      github_frontend: "https://github.com/helmetabd/Arjuna-Frontend-V3",
      live_demo: "",
      description: "Comprehensive enterprise sales and order management system",
      long_description: "Arjuna is a comprehensive enterprise sales and order management system designed to streamline business operations across multiple domains. The system serves as a central hub for managing sales data, customer relationships, products, logistics, and financial operations. It features a modern microservices-inspired architecture with multi-module support including Channel, CRM, CSO, Customer, Finance, Logistic, Marketplace, Product, and Sales management.",
      technologies: {
        backend: ["Laravel 11", "PHP 8.2+", "MariaDB", "Redis", "RabbitMQ"],
        frontend: ["Vue 3", "Vite", "Bootstrap 5", "Pinia"],
        tools: ["Docker", "Laravel Octane", "Laravel Reverb", "Laravel Horizon", "ApexCharts"]
      },
      features: [
        "Centralized data management for sales operations",
        "Multi-module architecture (Channel, CRM, CSO, Customer, Finance, Logistic, Marketplace, Product, Sales)",
        "Multi-stage data migration from legacy systems (Core, Reference, Customer & Sales data)",
        "Real-time operations via WebSocket (Laravel Reverb)",
        "External API integrations (Pandawa, Yudhistira, Jatayu APIs)",
        "Docker containerization with multiple deployment modes",
        "Comprehensive dashboard with interactive charts and KPI tracking",
        "High-performance server with Laravel Octane"
      ],
      achievements: [
        "Built comprehensive enterprise sales management system",
        "Successfully implemented multi-stage legacy data migration",
        "Integrated multiple external services for seamless operations",
        "Containerized entire system for consistent deployment"
      ],
      status: "Completed"
    },
    {
      name: "Brama",
      type: "Business Management System",
      image: "https://placehold.co/600x400/10B981/10B981?text=Brama",
      github_backend: "https://github.com/helmetabd/Brama-Backend",
      github_frontend: "https://github.com/helmetabd/Brama-Frontend",
      live_demo: "",
      description: "A modern task management application with real-time collaboration features and advanced filtering capabilities.",
      long_description: "Brama is a comprehensive business management system designed to streamline project and brand management operations. The system provides robust tools for managing projects, brands, users, and system configurations in an integrated environment. It features a modern microservices-inspired architecture with CORS-enabled endpoints for multiple frontend clients, repository pattern for clean data access layer, and full TypeScript support in the frontend.",
      technologies: {
        backend: ["Laravel 12", "PHP 8.2+", "MySQL", "Redis", "Intervention Image"],
        frontend: ["Vue 3", "TypeScript", "Vite", "Bootstrap 5", "Pinia"],
        tools: ["Docker", "Laravel Octane", "Laravel Sanctum", "VeeValidate", "CKEditor 5", "ApexCharts"]
      },
      features: [
        "Complete project lifecycle management (creation to completion)",
        "Centralized brand and portfolio management",
        "Comprehensive user and permission management",
        "Flexible system settings and configurations",
        "CORS-enabled architecture for multiple frontend origins",
        "Repository pattern for clean data access layer",
        "Rich UI components (CKEditor, ApexCharts, Lottie animations)",
        "Real-time data visualization with interactive charts"
      ],
      achievements: [
        "Built comprehensive business management system",
        "Implemented CORS-enabled API for multi-client support",
        "Created clean architecture with repository pattern",
        "Integrated advanced UI components for better UX"
      ],
      status: "Completed"
    },
    {
      name: "Larasati",
      type: "Enterprise Document Management",
      image: "https://placehold.co/600x400/10B981/10B981?text=Larasati",
      github_backend: "https://github.com/helmetabd/Larasati-Backend",
      github_frontend: "https://github.com/helmetabd/Larasati-Frontend",
      live_demo: "",
      description: "Go-based backend for enterprise document management and approval workflows",
      long_description: "BE-Anjani is an enterprise-grade backend API built with Go and the Fiber framework, designed to manage formal letters/documents with comprehensive approval workflows, budget planning (RKAB), and tracking capabilities. It's specifically designed for Indonesian organizations.",
      technologies: {
        backend: ["Go", "Fiber Framework", "GORM", "PostgreSQL", "MongoDB", "KeyDB"],
        frontend: ["Vue 3", "TypeScript", "Vite", "Bootstrap 5", "Pinia"],
        tools: ["MinIO", "Docker", "JWT", "Zap Logger"]
      },
      features: [
        "JWT-based authentication (access & refresh tokens)",
        "Role-based access control (RBAC)",
        "Letter/document management with multi-step approval workflows",
        "RKAB Reports (Work Plan and Budget Plan)",
        "Budget approval system with Pandawa API integration",
        "PDF report generation",
        "Organization management (departments, employees, positions)",
        "User signature management",
        "File attachments stored in MinIO",
        "Letter tracking and status monitoring"
      ],
      achievements: [
        "Built comprehensive document approval system",
        "Integrated with external Pandawa API",
        "Implemented multi-database architecture (PostgreSQL + MongoDB + KeyDB)"
      ],
      status: "In Progress"
    },
    {
      name: "Nakula",
      type: "Lead Generation & Conversion Tracking",
      image: "https://placehold.co/600x400/3B82F6/3B82F6?text=Nakula",
      github_backend: "https://github.com/helmetabd/nakula-backend",
      github_capi_service: "https://github.com/helmetabd/nakula-capi-service",
      github_frontend: "https://github.com/helmetabd/nakula-frontend",
      live_demo: "",
      description: "Comprehensive lead generation system with Meta Pixel/CAPI and WhatsApp integration",
      long_description: "Nakula is a comprehensive lead generation and conversion tracking system designed for advertising campaigns. It integrates with Meta (Facebook) Pixel and Conversions API (CAPI), provides WhatsApp-based lead management with intelligent rotation, and offers real-time analytics and performance tracking.",
      technologies: {
        backend: ["Laravel 12", "PHP 8.2+", "MySQL", "Redis", "RabbitMQ"],
        frontend: ["PHP 8.0+ (Native)", "Bootstrap 5", "jQuery", "Axios"],
        tools: ["Laravel Octane", "Docker", "Meta Pixel", "Meta CAPI"]
      },
      features: [
        "Meta Pixel & Conversions API (CAPI) integration",
        "Dual tracking: Client-side (Pixel) + Server-side (CAPI)",
        "WhatsApp multi-provider pipeline with automatic fallback",
        "Intelligent CS rotation system for fair lead distribution",
        "Inbound vs Outbound lead modes",
        "Click-to-WhatsApp Ads (CTWA) support",
        "Real-time lead performance tracking",
        "Landing page configuration and management",
        "Geo-location tracking via IP-API",
        "Event deduplication with stable event IDs"
      ],
      achievements: [
        "Built complete lead generation pipeline",
        "Implemented multi-provider WhatsApp fallback system",
        "Integrated with Meta Pixel and CAPI for accurate tracking",
        "Created fair lead distribution algorithm"
      ],
      status: "Completed"
    },
    {
      name: "Yudhistira",
      type: "Employee Management System",
      image: "https://placehold.co/600x400/10B981/10B981?text=Yudhistira",
      github_backend: "https://github.com/helmetabd/Yudhistira-Backend",
      github_frontend: "https://github.com/helmetabd/Yudhistira-Frontend",
      live_demo: "",
      description: "Comprehensive HR management system backend with Laravel 11",
      long_description: "Yudhistira is a comprehensive employee management system backend API built with Laravel 11. It provides robust employee lifecycle management capabilities including HR administration, attendance tracking, contract management, promotions, and organizational structure management.",
      technologies: {
        backend: ["Laravel 11", "PHP 8.2+", "MySQL", "RabbitMQ"],
        frontend: ["Vue.js", "TypeScript"],
        tools: ["Laravel Octane", "Laravel Sanctum", "Intervention Image", "PhpSpreadsheet", "Laravel Pulse"]
      },
      features: [
        "Complete employee lifecycle management (onboarding to layoff)",
        "Organizational structure (departments, positions, teams, brand officers)",
        "Attendance & leave tracking with quota management",
        "Contract management and renewals",
        "Career progression (promotions and position changes)",
        "Authentication & authorization with Laravel Sanctum",
        "API integration with HMAC signature verification",
        "Legacy system migration tools",
        "Excel exports for HR reports",
        "Multi-route architecture (app, api, legacy, migrations)",
        "Secondary database connection (Pandawa system)"
      ],
      achievements: [
        "Built comprehensive HR management backend",
        "Implemented role-based access control",
        "Created external API with signature-based authentication",
        "Integrated with legacy Pandawa system"
      ],
      status: "Completed"
    }
  ],
  other_projects: [
    {
      name: "Base Vue TypeScript",
      type: "Frontend Starter",
      github: "https://github.com/helmetabd/base-vue-ts",
      description: "Vue.js starter template with TypeScript",
      technologies: ["Vue.js", "TypeScript", "Vite"],
      status: "Completed"
    },
    {
      name: "Petruk Backend",
      type: "REST API Backend",
      github: "https://github.com/helmetabd/Petruk-Backend",
      description: "Node.js REST API backend with Express.js and Prisma ORM",
      technologies: ["Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "JWT", "bcrypt"],
      status: "Completed"
    },
    {
      name: "Siwa Manager Frontend",
      type: "Management Dashboard",
      github: "https://github.com/helmetabd/siwa-manager-frontend",
      description: "Modern Vue 3 + TypeScript web application for management and administrative purposes",
      technologies: ["Vue 3", "TypeScript", "Vite", "Bootstrap 5", "Pinia", "Axios"],
      status: "Completed"
    },
    {
      name: "Visualization Scraper",
      type: "Data Visualization & Scraping Tool",
      github: "https://github.com/helmetabd/visualization-scrapper",
      description: "Full-stack web application for data visualization and scraping capabilities",
      technologies: ["Laravel 11", "PHP 8.3", "Vue 3", "TypeScript", "MySQL", "BaconQrCode"],
      status: "Completed"
    }
  ],
  gallery: [
    {
      image: "/me.jpg",
      caption: "Profile Photo",
      alt: "Hilmi Abdurrahim - Profile Photo"
    },
    {
      image: "/me2.jpg",
      caption: "Working on projects",
      alt: "Hilmi working on projects"
    },
    {
      image: "/me3.jpg",
      caption: "Team collaboration",
      alt: "Hilmi with team"
    }
  ],
  contact: {
    email: "hilmiabdurrahim@gmail.com"
  },
  social: {
    github: "https://github.com/helmetabd",
    linkedin: "https://linkedin.com/in/hilmi-abdurrahim-985280167",
    instagram: "https://www.instagram.com/hilmiabdurrahim",
    whatsapp: "https://wa.me/62895395755317",
    youtube: "https://www.youtube.com/@hilmiabdurrahim1755"
  },
  design: {
    theme: "dark",
    accent_color: "#3B82F6",
    font_family: "Inter",
    animation: true,
    show_photos: true
  }
}
