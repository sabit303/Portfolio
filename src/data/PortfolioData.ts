export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'work' | 'education';
  description: string[];
  location: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  year: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Asfaqur Rahman Khan Sabit",
    title: "Computer Science Student & Software Engineer Intern",
    tagline: "Building resilient systems, production-grade APIs, and automated tools.",
    location: "Bangladesh",
    email: "arskhan34@gmail.com",
    github: "https://github.com/sabit303",
    linkedin: "https://www.linkedin.com/in/asfaqur-rahman-khan-sabit-578020282",
    website: "arksabit.tech",
    phone: "01632236600"
  },
  about: {
    bio: "I am a Computer Science student at Mymensingh Engineering College with a strong passion for technology, software development, and quality assurance[cite: 1]. I enjoy learning new tools, exploring innovative solutions, and contributing to impactful tech projects[cite: 1].",
    focus: [
      "Full-Stack Web Development",
      "API Testing & Quality Assurance",
      "Agentic AI & System Automation",
      "Cloud Infrastructure & Server Administration"
    ]
  },
  skills: [
    { category: "Languages", items: ["JavaScript", "TypeScript", "C++", "Java", "Python"] },
    { category: "Backend & APIs", items: ["Node.js", "Express", "REST APIs", "Postman"] },
    { category: "DevOps & Cloud", items: ["Linux Server", "Nginx", "Azure Cloud", "Git", "GitHub"] },
    { category: "Specialized", items: ["Agentic AI", "Quality Assurance", "UI/API Testing"] }
  ],
  projects: [
    {
      id: "qr-library",
      title: "QR Code-based Library Manager",
      tagline: "Streamlined book tracking and inventory auditing via QR codes.",
      description: "A digital library management solution leveraging QR codes for rapid book check-ins, check-outs, and real-time inventory management.",
      problem: "Manual library checkouts are slow, prone to errors, and lack real-time audit capabilities.",
      solution: "Implemented QR scanning linked to a centralized database that updates book availability and borrowing records instantly.",
      technologies: ["Node.js", "TypeScript", "Flutter", "REST APIs"],
      githubUrl: "https://github.com/sabit303"
    },
    {
      id: "bd-train",
      title: "BD Train Ticketing Automation Service",
      tagline: "Automated booking helper and seat availability monitor for railway transit.",
      description: "An automated system designed to streamline railway ticket searches, availability queries, and reservation workflows.",
      problem: "High web traffic during peak windows causes friction and delays when manually reserving tickets.",
      solution: "Created an optimized request automation utility with session handling and rapid availability parsing.",
      technologies: ["Node.js", "JavaScript", "Automation"],
      githubUrl: "https://github.com/sabit303"
    },
    {
      id: "link-shortener",
      title: "Link Shortener Service",
      tagline: "High-performance URL redirection service.",
      description: "A lightweight, reliable backend service for generating compact alias links with instant redirection.",
      problem: "Long URLs create clutter in distribution and lack streamlined tracking.",
      solution: "Developed a rapid hashing and key-value retrieval architecture for quick redirection cycles.",
      technologies: ["Node.js", "Express", "TypeScript"],
      githubUrl: "https://github.com/sabit303"
    },
    {
      id: "weather-app",
      title: "Weather Forecast Web App",
      tagline: "Real-time meteorological tracking interface.",
      description: "An interactive web app delivering forecast metrics through external weather API integrations.",
      problem: "Users need lightweight access to accurate forecasts without bloated client interfaces.",
      solution: "Integrated asynchronous API fetch cycles with error-resilient visual state handlers.",
      technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
      githubUrl: "https://github.com/sabit303"
    }
  ] as Project[],
  experience: [
    {
      id: "exp-1",
      period: "2026 — Present",
      role: "Software Engineer Intern",
      organization: "Arvyo Soft",
      type: "work",
      description: [
        "Tested production-level APIs and web UIs for multiple international clients[cite: 1].",
        "Created detailed test plans, documentation, and bug reports to ensure product quality[cite: 1].",
        "Collaborated with engineers to develop and improve product usability and accuracy[cite: 1]."
      ],
      location: "Mymensingh, Bangladesh"
    },
    {
      id: "edu-1",
      period: "2023 — Present",
      role: "B.Sc. in Computer Science and Engineering",
      organization: "Mymensingh Engineering College",
      type: "education",
      description: ["Focused on computer science fundamentals, data structures, algorithms, and software engineering principles[cite: 1]."],
      location: "Mymensingh, Bangladesh"
    },
    {
      id: "edu-2",
      period: "2020 — 2022",
      role: "Higher Secondary Certificate (Science)",
      organization: "Agricultural University College",
      type: "education",
      description: ["Achieved GPA: 5.00[cite: 1]"],
      location: "Mymensingh, Bangladesh"
    },
    {
      id: "edu-3",
      period: "2020",
      role: "Secondary School Certificate (Science)",
      organization: "Agricultural University High School",
      type: "education",
      description: ["Achieved GPA: 5.00[cite: 1]"],
      location: "Mymensingh, Bangladesh"
    }
  ] as ExperienceItem[],
  achievements: [
    {
      id: "ach-1",
      title: "Onsite Contestant",
      event: "ICPC Asia Dhaka Regional Onsite Contest",
      year: "2024",
      description: "Competed among top regional collegiate teams solving complex algorithmic problems under strict contest constraints[cite: 1]."
    },
    {
      id: "ach-2",
      title: "2nd Runners Up",
      event: "Devsphere Hackathon",
      year: "2025",
      description: "Awarded 3rd place overall for designing and implementing an innovative software solution under hackathon time limits[cite: 1]."
    }
  ] as AchievementItem[],
  researchInterests: [
    "Software Quality Assurance & API Reliability",
    "Agentic AI Systems & Automation",
    "Scalable Web Backend Architectures",
    "Cloud Infrastructure & Server Security"
  ]
};
