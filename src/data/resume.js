export const resumeData = {
  personal: {
    name: "Divyansh Suwalka",
    title: "Full-Stack Engineer",
    email: "suwalkadivyansh63@gmail.com",
    phone: "+91-9057868307",
    linkedin: "https://www.linkedin.com/in/divyansh-suwalka/",
    github: "https://github.com/DivyanshSuwalka",
    location: "India",
    summary:
      "Frontend heavy Full-Stack JavaScript Engineer with over 1 year building scalable, high-performance web apps in React.js, Proficient in state management tools build secure Node/Express APIs, and optimize SQL/NoSQL data layers for lightning-quick performance (site speed ↑ 55%) and experienced in both monolithic and microservices architecture. Adept at CI/CD, TypeScript, and Next.js SSR, Dedicated to delivering high-quality code, ownership end-to-end and scale with demand.",
    professionalSummary:
      "Frontend Developer with 1+ year building responsive, high-performance web apps in React JS. Boosted site speed by 55%. Skilled in API integration, mobile-first design, and NodeJS-based backends; eager to contribute as a full-stack engineer while leading on the frontend. ",
  },

  skills: {
    languages: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "TypeScript",
      "Java",
      "C",
    ],
    frameworks: [
      "React.js",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "Mongoose",
    ],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["VS Code", "Postman", "Git", "GitHub", "AWS S3", "Docker"],
  },

  experience: [
    {
      company: "SportsNStats",
      position: "Software Engineer",
      duration: "Sep 2025 – Present",
      location: "",
      responsibilities: [
        "Built a comprehensive Sports Management Platform with scalable RESTful backend using Node.js, Express, and TypeScript, utilizing Sequelize ORM with complex relationships between users, properties, tournaments, bookings, etc.",
        "Designed a stateless OTP-based authentication system using JWT, reducing server session overhead, with custom middleware for protecting all private API routes.",
        "Delivered a unified booking engine that seamlessly synchronizes online user reservations with admin-led offline bookings, ensuring 100% data integrity across platforms.",
        "Designed a complex booking and facility management system, including geospatial (Haversine) search for properties, slot availability logic, and data integrity ensured by Sequelize Transactions.",
        "Integrated AWS S3 for media management, utilizing presigned URLs to enable secure, direct-to-cloud file uploads for facility galleries and user profiles.",
      ],
    },
    {
      company: "PCS Global Pvt Ltd",
      position: "Trainee Software Engineer",
      duration: "Aug 2024 – Aug 2025",
      location: "Remote",
      responsibilities: [
        "Enhanced website performance by 55% for 1000+ daily users via code-splitting, asset minification, and SQL indexing.",
        "Engineered a robust library of 15+ reusable UI components using React.js and Tailwind CSS, adhering strictly to mobile-first principles, which improved development efficiency by 30% and enhanced user accessibility features.",
        "Partnered with DevOps on CI/CD pipelines (Docker & GitHub Actions) to cut deploy time 30%.",
        "Conducted pair-programming and code reviews; improved sprint velocity 15%.",
      ],
    },
    {
      company: "Sun Shine IT Solution",
      position: "Web Developer Intern",
      duration: "Sep 2023 – Feb 2024",
      location: "Remote",
      responsibilities: [
        "Built mobile-optimised sites with React, HTML5, CSS3, Bootstrap; shaved 1.2 s from FMP.",
        "Integrated Node JS REST APIs with MySQL/PostgreSQL, ensuring secure CRUD operations.",
        "Resolved 30+ UI/UX issues; Lighthouse accessibility score raised to 92.",
        "Conducted pair-programming and code reviews; improved sprint velocity 15%.",
      ],
    },
  ],

  projects: [
    {
      name: "Food Garage",
      description:
        "Engineered a modular and reusable component library using React Hooks, increasing code maintainability and team efficiency by 25% across three separate projects. Added lazy loading, shimmer placeholders and offline/online handling; reduced Cumulative Layout Shift (CLS) by 32%. Custom hooks fetch menus per restaurant ID; cut perceived API latency 40%.",
      technologies: ["React", "Tailwind CSS", "REST API", "React Router"],
      github: "https://github.com/DivyanshSuwalka/food-app-react",
      date: "Mar 2024",
      icon: "🍔",
    },
    {
      name: "Course Enrollment System",
      description:
        "Full-stack app with JWT auth and RBAC (Admin / Student). Exposed RESTful APIs for registration, course CRUD, enroll/unenroll; 100% Postman test coverage. Streamlined many-to-many queries via Mongoose populate; accelerated DB response time 30%.",
      technologies: ["Node JS", "Express", "MongoDB", "JWT"],
      github: "https://github.com/DivyanshSuwalka/devMatch",
      date: "Jun 2023",
      icon: "📚",
    },
    {
      name: "Vaccination Center Locator",
      description:
        "Integrated appointment scheduling functionality with the application, enabling users to book slots directly through the app; personally resolved 10+ bugs flagged by the QA team. Implemented geo-location search and clustering; boosted average session duration 25%.",
      technologies: ["React", "Map My India API"],
      github: "https://github.com/DivyanshSuwalka/covid-vaccine-centre-locator",
      date: "Aug 2023",
      icon: "💉",
    },
  ],

  education: {
    degree: "Bachelor of Technology in Computer Science",
    university: "Dayananda Sagar University",
    location: "Bengaluru, India",
    duration: "Jul 2019 – Oct 2023",
  },

  certificates: [
    "Web Development – Internshala",
    "Java – HackerRank",
    "SQL – HackerRank",
    "Programming for Everybody – Coursera",
    "Python Data Structures – Coursera",
  ],
};
