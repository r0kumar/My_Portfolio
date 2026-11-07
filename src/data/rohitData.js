export const rohitData = {
  brand: {
    name: "DEVFUSION",
    shortName: "DF",
    tagline: "Building scalable digital experiences & data-driven insights that make an impact."
  },
  personal: {
    greeting: "― HELLO, I'M",
    firstName: "Rohit",
    lastName: "Kumar",
    roles: [
      "Full-Stack Developer",
      "Data Analyst",
      "MERN Specialist",
      "AI-Assisted Builder"
    ],
    bio: "B.Tech IT student with a strong foundation in JavaScript, React, Node.js, SQL, and Python. Passionate about building full-stack applications and turning large datasets into actionable business insights.",
    status: "OPEN TO ROLES",
    email: "itrohitkumar62@gmail.com",
    phone: "+91 9958653317",
    location: "Noida, India",
    availability: "Available for Full-Time & Internships",
    responseTime: "Within 24 hours",
    profileImage: "/profile.jpg",
    resumeUrl: "#",
    socialLinks: {
      github: "https://github.com/r0kumar",
      linkedin: "https://linkedin.com/in/rohit-kumar-665082299",
      twitter: "https://github.com/r0kumar",
      email: "mailto:itrohitkumar62@gmail.com"
    }
  },
  about: {
    tag: "ABOUT ME ―",
    title: "Building Scalable Web Applications & Actionable Analytics",
    description: "B.Tech Information Technology student (graduating 2027) with hands-on experience developing and deploying full-stack MERN applications, designing RESTful APIs with JWT auth, and performing exploratory data analysis with SQL, Python, Excel, and Power BI. Hackathon participant and continuous learner passionate about clean architectures.",
    stats: [
      { value: "4+", label: "Completed Projects" },
      { value: "22K+", label: "Orders Analyzed" },
      { value: "4", label: "Certifications" },
      { value: "7.36", label: "B.Tech CGPA" }
    ]
  },
  services: [
    {
      id: "fullstack-dev",
      title: "Full-Stack Development",
      description: "End-to-end web applications with React.js, Node.js, Express.js, and MongoDB with secure JWT auth.",
      icon: "Code2",
      link: "#projects"
    },
    {
      id: "frontend-dev",
      title: "Frontend Engineering",
      description: "Responsive, mobile-first user interfaces built with React.js, Tailwind CSS, and Context API.",
      icon: "Monitor",
      link: "#projects"
    },
    {
      id: "backend-apis",
      title: "Backend & RESTful APIs",
      description: "Scalable API architectures with Node.js & Express, database modeling, and Postman testing.",
      icon: "Server",
      link: "#projects"
    },
    {
      id: "data-analytics",
      title: "Data Analytics & BI",
      description: "Exploratory data analysis, interactive Power BI dashboards, and complex SQL relational queries.",
      icon: "Database",
      link: "#projects"
    }
  ],
  skills: {
    tag: "MY EXPERTISE",
    title: "Skills & Technologies",
    bars: [
      { name: "JavaScript / React.js", percentage: 90 },
      { name: "Node.js / Express.js", percentage: 85 },
      { name: "SQL & Databases (MongoDB, PostgreSQL)", percentage: 88 },
      { name: "Data Analysis (Power BI, Python, Excel)", percentage: 85 },
      { name: "HTML5 / CSS3 / Tailwind CSS", percentage: 92 },
      { name: "AI-Assisted Coding & Dev Tools", percentage: 86 }
    ],
    techStack: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextjs", color: "#FFFFFF" },
      { name: "Node.js", icon: "nodejs", color: "#68A063" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#38BDF8" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "AWS", icon: "aws", color: "#FF9900" },
      { name: "Firebase", icon: "firebase", color: "#FFCA28" },
      { name: "GraphQL", icon: "graphql", color: "#E10098" },
      { name: "Redux", icon: "redux", color: "#764ABC" },
      { name: "Jest", icon: "jest", color: "#C21325" }
    ]
  },
  projects: [
    {
      id: "fixmate",
      title: "FixMate – PG & Hostel Maintenance Tracker",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      description: "A responsive MERN application featuring dedicated role-based dashboards for Residents, Staff, and Admins to manage and track maintenance tickets, complaint lifecycles, and room logistics.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      demoUrl: "https://github.com/r0kumar",
      githubUrl: "https://github.com/r0kumar",
      features: [
        "Multi-role RBAC authorization for Residents, Staff, and Administrators",
        "RESTful API suite for automated ticket logging and technician assignment",
        "JWT-secured authentication with encrypted password management",
        "Context API session management with dynamic status filtering"
      ]
    },
    {
      id: "resume-analyzer",
      title: "Resume Analyzer & Report Generator",
      category: "Full Stack + AI",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80",
      description: "Full-stack MERN application that parses uploaded PDF resumes, evaluates them against target job descriptions using Google GenAI, and generates actionable match scores with custom 7-day roadmaps.",
      tags: ["MERN Stack", "Google GenAI", "Puppeteer", "Multer", "pdf-parse"],
      demoUrl: "https://github.com/r0kumar",
      githubUrl: "https://github.com/r0kumar",
      features: [
        "AI-driven resume vs JD alignment scoring and skill-gap diagnostic",
        "Server-side PDF extraction with Multer and pdf-parse",
        "Automated downloadable PDF evaluation report generation via Puppeteer",
        "End-to-end REST API architecture tested and verified with Postman"
      ]
    },
    {
      id: "sales-dashboard",
      title: "Sales Performance Dashboard",
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      description: "Interactive Power BI dashboard analyzing 22,000+ orders across multiple dimensions to track business KPIs, regional sales trends, product profitability, and seasonality.",
      tags: ["Power BI", "Data Modeling", "DAX", "KPI Tracking"],
      demoUrl: "https://github.com/r0kumar",
      githubUrl: "https://github.com/r0kumar",
      features: [
        "Large-scale 22,000+ order dataset cleansing and structured modeling",
        "Time-series trend detection to capture seasonal sales variations",
        "Interactive cross-filtering by geography, product category, and revenue",
        "Executive KPI summary widgets for rapid decision-making"
      ]
    },
    {
      id: "music-store-analysis",
      title: "Music Store Database Analysis",
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
      description: "Comprehensive relational database analysis using SQL to identify customer purchasing behaviors, best-selling artists, genre market shares, and revenue opportunities.",
      tags: ["SQL", "Relational DBMS", "Aggregate Functions", "Data Modeling"],
      demoUrl: "https://github.com/r0kumar",
      githubUrl: "https://github.com/r0kumar",
      features: [
        "Multi-table JOINs, subqueries, and window functions on complex schemas",
        "Customer lifetime value and geographical purchasing patterns analysis",
        "Artist catalog performance and track revenue optimization metrics",
        "Exported summary reports with actionable commercial recommendations"
      ]
    }
  ],
  testimonials: [
    {
      id: 1,
      quote: "Rohit demonstrated tremendous dedication and attention to detail during our engineering sprints. His code is clean, robust, and delivered right on schedule.",
      name: "Engineering Mentor",
      role: "Lead Architect, AirDawgs Labs",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      id: 2,
      quote: "A talented full-stack engineer and analytical problem solver. Rohit's ability to combine MERN technologies with data analysis makes him an asset to any team.",
      name: "Project Collaborator",
      role: "Hackathon Teammate, SIH",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      id: 3,
      quote: "Strong foundational knowledge in DBMS, JavaScript, and REST APIs. Rohit quickly picks up new tools and applies them effectively to real-world challenges.",
      name: "Technical Reviewer",
      role: "Senior Developer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ],
  navLinks: [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "CONTACT", href: "#contact" }
  ]
};

