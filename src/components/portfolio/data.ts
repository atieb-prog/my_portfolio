export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      "HTML5 / CSS3",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Responsive Design",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "Chart.js",
      "Leaflet",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "OpenAI API",
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "SQLite",
      "Prisma ORM",
      "TypeORM",
      "Git & GitHub",
      "Postman",
      "Stripe",
      "Socket.io",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: "IBM Full Stack JavaScript Developer Professional Certificate",
    org: "Coursera",
    date: "Nov 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/QRDTD9A3KCC3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    name: "Generative AI: Prompt Engineering Basics (IBM)",
    org: "Coursera",
    date: "Apr 2026",
    url: "https://www.coursera.org/account/accomplishments/verify/X4CZ66A0TX8D",
  },
  {
    name: "Google Foundations of Project Management",
    org: "Coursera",
    date: "Apr 2023",
    url: "https://www.coursera.org/account/accomplishments/verify/2EVC8VU2GC9P?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
];

export const EXPERIENCE_POINTS = [
  "Built and integrated RESTful APIs, JWT authentication, and Role-Based Access Control (RBAC) systems across production applications.",
  "Implemented real-time order tracking, live map integration, and AI-powered chat functionality for a delivery platform.",
  "Collaborated with developers through code review, testing, and debugging across the full development lifecycle.",
  "Used Git/GitHub for version control, and AI-assisted tools like ChatGPT, Claude, and GitHub Copilot to speed up development.",
];

export type Project = {
  title: string;
  stack: string;
  points: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Grocery Delivery Platform",
    stack:
      "Next.js · TypeScript · MongoDB · Redux Toolkit · Socket.IO · Stripe",
    image: "/fresh_cart.png",
    githubUrl: "https://github.com/atieb-prog/grocery-delivery-app-next.js",
    videoUrl: "https://youtu.be/SjtzepOp7lw", // fallback until deployed
    points: [
      "Real-time order tracking with live map integration and instant delivery status updates.",
      "AI-powered chat support to assist customers during ordering and delivery.",
      "Separate dashboards for customers, delivery riders, and admins with role-based access.",
    ],
  },
  {
    title: "Full-Stack Ecommerce Platform",
    stack:
      "React.js · Redux Toolkit · Node.js · MongoDB · Stripe · OpenAI API ",
    image: "/store_zone.png",
    githubUrl: "https://github.com/atieb-prog/ecommerce-store",
    videoUrl: "https://youtu.be/XdWGv-f7wAc",
    points: [
      "AI-powered shopping assistant (OpenAI GPT-4o-mini) for product discovery and order-history queries.",
      "Complete cart-to-checkout flow with Stripe payment integration and live order tracking.",
      "Real-time chat and notifications via Socket.IO, with role-based admin controls via admin dashboard.",
    ],
  },
  {
    title: "Fuel Pump Tracker",
    stack: "React.js · Redux Toolkit · Bootstrap · Chart.js · Leaflet",
    image: "/pak_fuel.png",
    githubUrl: "https://github.com/atieb-prog/fuel-pump-tracker",
    liveUrl: "https://pakfuel.netlify.app/",
    points: [
      "Built a role-based fuel station dashboard to manage daily operations for owners and staff.",
      "Recorded shift-wise fuel sales, expenses, and live stock balance to reduce manual tracking.",
      "Generated pump-wise sales summaries and profit reports for faster business decisions.",
      "Visualized key KPIs with charts and tables for quick monitoring of station performance.",
      "Enabled secure authentication and protected routes based on user roles and permissions.",
      "Improved reporting accuracy and reduced paperwork through a centralized digital workflow.",
    ],
  },
  {
    title: "RBAC Team Management System",
    stack:
      "Next.js · TypeScript · Prisma ORM · PostgreSQL · JWT · Tailwind CSS",
    image: "/team_access.png",
    githubUrl: "https://github.com/atieb-prog/team-rbac-management-next.js",
    points: [
      "Built a full-stack RBAC platform with JWT-based authentication and secure cookie sessions.",
      "Implemented protected, role-aware flows for Admin, Manager, User, and Guest access levels.",
      "Developed RESTful APIs for auth, users, team assignment, and role management with server-side authorization checks.",
      "Created role-specific dashboards with dynamic routing and data visibility rules tailored to each permission level.",
      "Integrated Prisma + PostgreSQL for type-safe schema modeling, relational data access, and scalable user/team management.",
      "Added secure password hashing with bcrypt and automatic first-user bootstrap as Admin for streamlined setup.",
    ],
  },
  {
    title: "Task Manager",
    stack:
      "React.js · Redux Toolkit · Node.js · Express.js · Prisma · SQLite · Bootstrap",
    image: "/task_manager.png",
    githubUrl: "https://github.com/atieb-prog/task-manager",
    points: [
      "Full task lifecycle — create, assign, update status, and track due dates — across a shared team workspace.",
      "Form validation with Formik + Yup for reliable task and user input handling.",
      "Role-based views for Admins vs. Users, built on a Redux-driven frontend.",
    ],
  },
  {
    title: "Library Management System",
    stack:
      "React · Node.js · TypeScript · TypeORM · PostgreSQL · Tailwind CSS · Bootstrap",
    image: "/library_ar.png",
    githubUrl: "https://github.com/atieb-prog/Library-Management-System",
    points: [
      "Forgot-password, OTP verification, and password reset flows for account security.",
      "File upload support for book cover images alongside full CRUD for books and categories.",
      "Borrow/return record tracking with TypeORM-powered PostgreSQL relations.",
    ],
  },
];
