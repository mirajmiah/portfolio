export const personalInfo = {
  name: "Miraj Miah",
  logoText: "MIRAJ",
  title: "Aspiring Software Developer",
  role: "Computer Science & Engineering Student",
  institution: "Siliguri Institute of Technology",
  degree: "Bachelor of Technology in Computer Science & Engineering",
  graduationYear: "2027",
  duration: "2023 - 2027",
  location: "Siliguri, West Bengal, India",
  email: "mirajmiah964@gmail.com",
  github: "https://github.com/mirajmiah",
  linkedin: "https://www.linkedin.com/in/miraj-miah-3b30a82a2/",
  profileImage: "./images/miraj-profile.jpeg",
  resumePath: "./resume/miraj-resume.pdf",

  hero: {
    greeting: "HELLO, I'M",
    heading: "Miraj Miah.",
    headline: "Building Digital Experiences Through Code.",
    description:
      "I'm a Computer Science and Engineering student passionate about software development, programming, and solving real-world problems through technology.",
    status: "Available for internships & collaborations",
  },

  about: {
    title: "About Me",
    subtitle: "A little introduction about who I am.",
    paragraphs: [
      "I am a Computer Science and Engineering student at Siliguri Institute of Technology with a strong interest in software development and modern technologies.",
      "I enjoy programming, solving problems, and developing applications that offer practical solutions. My technical journey has helped me build a foundation in Java, C, and web development technologies.",
      "I believe that learning by building is one of the best ways to improve. I enjoy exploring new technologies, experimenting with ideas, and developing projects that solve practical problems.",
      "I am continuously working to improve my technical abilities and prepare myself for opportunities in the software industry."
    ],
    highlights: [
      { label: "Academic Focus", value: "Computer Science & Engineering" },
      { label: "Graduation", value: "Class of 2027" },
      { label: "Core Interests", value: "Java, Web Dev, Problem Solving" },
      { label: "Hands-on Exposure", value: "CNS Trainee @ Bagdogra Airport (AAI)" },
    ],
    personalityTraits: [
      "Passionate about coding",
      "Enjoys analytical problem-solving",
      "Interested in software development & architecture",
      "Curious about emerging technologies",
      "Creative, dedicated, and detail-oriented",
      "Believes in continuous hands-on learning"
    ]
  },

  skills: {
    title: "Technical Skills",
    subtitle: "Technologies and tools I work with.",
    categories: [
      {
        name: "Programming Languages",
        description: "Core languages for logic, systems, and algorithms",
        skills: [
          { name: "Java", level: "Core / OOP", icon: "Code2" },
          { name: "C", level: "Procedural", icon: "Terminal" },
          { name: "Python", level: "Scripting / Logic", icon: "FileCode" },
        ]
      },
      {
        name: "Frontend Development",
        description: "Building responsive, modern, and interactive interfaces",
        skills: [
          { name: "HTML5", level: "Semantic Markup", icon: "Layout" },
          { name: "CSS3", level: "Modern Styling", icon: "Palette" },
          { name: "JavaScript", level: "ES6+ Logic", icon: "Braces" },
          { name: "Bootstrap", level: "Responsive UI", icon: "Layers" },
        ]
      },
      {
        name: "Backend Development",
        description: "Server architecture, routing, and API integration",
        skills: [
          { name: "Node.js", level: "Runtime", icon: "Server" },
          { name: "Express.js", level: "REST Services", icon: "Cpu" },
          { name: "REST APIs", level: "Endpoints & Architecture", icon: "Network" },
        ]
      },
      {
        name: "Database Systems",
        description: "Data storage, relational queries, and document stores",
        skills: [
          { name: "SQLite", level: "Embedded SQL", icon: "Database" },
          { name: "MySQL", level: "Relational DB", icon: "Database" },
          { name: "MongoDB", level: "Document DB", icon: "FileJson" },
        ]
      },
      {
        name: "Developer Tools & Platforms",
        description: "Version control, workflow efficiency, and hosting",
        skills: [
          { name: "Git", level: "Version Control", icon: "GitBranch" },
          { name: "GitHub", level: "Collaboration & CI", icon: "Github" },
          { name: "VS Code", level: "Primary IDE", icon: "Laptop" },
          { name: "Render", level: "Cloud Hosting", icon: "Cloud" },
        ]
      }
    ]
  },

  projects: [
    {
      id: "project-talksy",
      title: "Talksy",
      tagline: "Communication & Messaging Platform",
      category: "Full Stack",
      description:
        "Talksy is a communication platform designed to connect people through usernames, connection requests, and messaging.",
      image: "./images/talksy.jpg",
      status: "Active Project",
      features: [
        "User authentication and profile identity",
        "Username-based user discovery and search",
        "Send, accept, and reject connection requests",
        "Manage connections and active dialogs",
        "Interactive messaging interface",
        "Real-time communication design",
        "Clean, fully responsive layout"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/mirajmiah",
      liveUrl: null, // honest: repository / under development
    },
    {
      id: "project-ecommerce",
      title: "E-Commerce Web Application",
      tagline: "Full-Stack Shopping Solution",
      category: "Full Stack",
      description:
        "A full-stack e-commerce application designed to provide a smooth online shopping experience.",
      image: "./images/student-system.jpg",
      status: "In Development",
      features: [
        "Dynamic product listing with categories",
        "Comprehensive product detail views",
        "Interactive shopping cart with quantity management",
        "User authentication and session security",
        "Order placement and management workflow",
        "Robust database integration",
        "Mobile-first, responsive user interface"
      ],
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      githubUrl: "https://github.com/mirajmiah",
      liveUrl: null,
    },
    {
      id: "project-medicine-reminder",
      title: "Medicine Reminder Application",
      tagline: "Healthcare Schedule Management",
      category: "Applications",
      description:
        "A practical application concept designed to help users organize their medication schedules and reminders.",
      image: "./images/grammar-assistant.jpg",
      status: "Concept / Prototype",
      features: [
        "Add and manage detailed medicine information",
        "Set customizable reminder schedules and dosage intervals",
        "Maintain and search historical medicine records",
        "Track upcoming reminders effortlessly",
        "Clean, intuitive, and user-friendly interface"
      ],
      technologies: ["Java", "SQLite", "OOP Design"],
      githubUrl: "https://github.com/mirajmiah",
      liveUrl: null,
    }
  ],

  experience: [
    {
      position: "CNS Trainee",
      organization: "Airports Authority of India (AAI)",
      location: "Bagdogra Airport",
      duration: "07 September 2026 – 06 October 2026",
      type: "Internship Training",
      description:
        "Completed a one-month internship as a CNS Trainee, gaining practical exposure to airport communication, navigation, surveillance, and networking infrastructure.",
      exposures: [
        {
          name: "FIDS",
          fullName: "Flight Information Display System",
          desc: "Real-time departure/arrival information broadcasting and terminal display synchronization."
        },
        {
          name: "CCTV",
          fullName: "Closed Circuit Television",
          desc: "High-security surveillance camera topologies, IP video feeds, and monitoring nodes."
        },
        {
          name: "PA System",
          fullName: "Public Address System",
          desc: "Multi-zone audio routing and critical passenger announcement infrastructure."
        },
        {
          name: "EPABX",
          fullName: "Electronic Private Automatic Branch Exchange",
          desc: "Internal telecommunications switching, trunk lines, and airport intercom networks."
        },
        {
          name: "CAT6 Networking",
          fullName: "Structured LAN Cabling",
          desc: "Terminal network distribution, high-bandwidth cabling, patch panels, and switch trunking."
        },
        {
          name: "Fibre-Optic Communication",
          fullName: "Optical Network Backbone",
          desc: "High-speed backbone connectivity supporting flight operations, data integrity, and low-latency transfer."
        }
      ]
    }
  ],

  education: [
    {
      institution: "Siliguri Institute of Technology",
      field: "Computer Science and Engineering",
      degree: "Bachelor of Technology (B.Tech)",
      graduationYear: "2027",
      duration: "2023 - 2027",
      status: "Undergraduate (Current)",
      coursework: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming (Java / C++)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Web Technologies"
      ]
    }
  ],

  learningInterests: {
    title: "Always Learning, Always Building",
    subtitle: "Areas of technical curiosity, ongoing exploration, and engineering focus.",
    interests: [
      {
        title: "Java Programming",
        desc: "Deepening knowledge of Object-Oriented paradigms, multithreading, and enterprise software design.",
        icon: "Coffee"
      },
      {
        title: "Data Structures & Algorithms",
        desc: "Cultivating problem-solving rigor through competitive coding, algorithmic complexity, and efficient logic.",
        icon: "Binary"
      },
      {
        title: "Software Engineering",
        desc: "Studying clean code principles, modular system architecture, unit testing, and design patterns.",
        icon: "Workflow"
      },
      {
        title: "Full-Stack Development",
        desc: "Creating seamless end-to-end web applications with modern frontend frameworks and scalable backend APIs.",
        icon: "Layers"
      },
      {
        title: "Database Management",
        desc: "Modeling relational schemas, optimizing SQL queries, and exploring NoSQL document databases.",
        icon: "Database"
      },
      {
        title: "Problem Solving",
        desc: "Breaking down complex real-world requirements into intuitive, elegant, and maintainable software components.",
        icon: "Puzzle"
      },
      {
        title: "Data Engineering",
        desc: "Understanding data flow pipelines, transformation, reliable persistence, and storage structures.",
        icon: "Cpu"
      },
      {
        title: "Cybersecurity",
        desc: "Learning fundamental security best practices, input sanitization, authentication, and secure networking.",
        icon: "ShieldCheck"
      }
    ]
  },

  contact: {
    title: "Let's Connect.",
    subtitle:
      "Have an interesting idea, project, or opportunity? I'd love to connect, exchange ideas, and explore ways to build something meaningful.",
    email: "mirajmiah964@gmail.com",
    github: "https://github.com/mirajmiah",
    linkedin: "https://www.linkedin.com/in/miraj-miah-3b30a82a2/",
    location: "Siliguri, West Bengal, India"
  }
};
