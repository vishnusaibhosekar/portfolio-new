import { Icons } from "@/components/icons";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaDocker,
  FaJava,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiApachekafka,
  SiJavascript,
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineAim } from "react-icons/ai";
import { LuBrainCircuit } from "react-icons/lu";
import { TbTopologyStarRing2 } from "react-icons/tb";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Vishnu Sai Bhosekar",
  initials: "VSB",
  url: "https://vishnusaibhosekar.com/",
  location: "Seattle, WA",
  locationLink: "https://www.google.com/maps/place/seattle",
  description: "I love building amazing apps.",
  summary:
    "I build software that’s fast, scalable, and built to last. Whether it’s front-end, back-end, or the cloud, I focus on crafting clean architectures and smooth user experiences. I love solving tough problems, optimizing systems, and pushing technology forward. From AI-driven automation to cloud-native applications, I’m all about creating products that make an impact.",
  avatarUrl: "/VS.jpg",
  skills: [
    {
      name: "Agentic AI",
      icon: <AiOutlineAim className="text-blue-500 dark:text-blue-300" />,
    },
    {
      name: "GenAI",
      icon: (
        <GiArtificialIntelligence className="text-blue-500 dark:text-indigo-300" />
      ),
    },
    {
      name: "LLMs",
      icon: <LuBrainCircuit className="text-blue-500 dark:text-white" />,
    },
    {
      name: "PydanticAI",
      icon: <TbTopologyStarRing2 className="text-blue-500 dark:text-red-300" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-500 dark:text-blue-300" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    {
      name: "Python",
      icon: <SiPython className="text-yellow-500 dark:text-yellow-300" />,
    },
    {
      name: "Java",
      icon: <FaJava className="text-red-500 dark:text--300" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 dark:text-yellow-200" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 dark:text-green-300" />,
    },
    {
      name: "AWS",
      icon: <FaAws className="text-orange-500 dark:text-orange-300" />,
    },
    {
      name: "SQL",
      icon: <FaDatabase className="text-gray-600 dark:text-gray-400" />,
    },
    {
      name: "Postgres",
      icon: <SiPostgresql className="text-indigo-500 dark:text-indigo-300" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-blue-400 dark:text-blue-200" />,
    },
    {
      name: "Kafka",
      icon: <SiApachekafka className="text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-300 dark:text-blue-100" />,
    },
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "vishnusaibhosekar@gmail.com",
    tel: "+12012383902",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vishnusaibhosekar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vishnusaibhosekar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/vishnubhosekar",
        icon: Icons.x,

        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/vishnusaibhosekar",
        icon: Icons.telegram,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "StokeIQ",
      href: "#",
      badges: [],
      location: "Seattle, WA",
      title: "Software Engineer",
      logoUrl: "",
      start: "Present",
      end: "Present",
      description: "Building AI-Agents.",
    },
    {
      company: "SYL",
      href: "#",
      badges: [],
      location: "Remote",
      title: "AI Engineer (Contract)",
      logoUrl: "/ai-logo.png",
      start: "May 2024",
      end: "March 2025",
      description:
        "Building AI-driven ABM automation systems to optimize B2B marketing and sales pipelines. Integrating LLMs, AI Agents, and intelligent automation to enhance lead targeting, customer engagement, and revenue growth.",
    },
    {
      company: "OpenText",
      href: "https://opentext.com",
      badges: [],
      location: "Hyderabad",
      title: "Software Engineer",
      logoUrl: "/ot.jpeg",
      start: "Feb 2020",
      end: "Aug 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Oracle Cloud Infrastructure (OCI)",
      href: "https://www.credly.com/badges/ef2eb51b-6509-475c-91a5-e30a30cf1314/public_url",
      degree: "GenAI - Professional",
      logoUrl: "/OCI2024GAIOCP.jpg",
      start: "2024",
      end: "2026",
    },
    {
      school: "Amazon Web Services (AWS)",
      href: "https://www.credly.com/badges/ef2eb51b-6509-475c-91a5-e30a30cf1314/public_url",
      degree: "Developer - Associate",
      logoUrl: "/AWS-Certified-Developer-Associate_badge.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "Amazon Web Services (AWS)",
      href: "https://www.credly.com/badges/918d8fb8-81fa-4fae-8d79-76d3328eb053/public_url",
      degree: "Cloud Practitioner",
      logoUrl: "/AWS-Certified-Cloud-Practitioner_badge.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "New Jersey Institute of Technology",
      href: "https://njit.edu",
      degree: "Master's Degree in Computer Science (MCS)",
      logoUrl: "/njit.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Keshav Memorial Institute of Technology",
      href: "https://kmit.in",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/kmit.jpeg",
      start: "2016",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "AI Inbox Manager",
      href: "https://github.com/vishnusaibhosekar/ai_inbox_manager",
      dates: "",
      active: true,
      description:
        "An AIGentic AI powered inbox manager that uses LLMs to generate replies.",
      technologies: ["Python", "LLMs", "PydanticAI"],
      tags: ["AI", "Automation", "NLP", "Python"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/vishnusaibhosekar/ai_inbox_manager",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.loom.com/embed/f263f9b0e95e48c68cbe71db33b980a5",
    },
    {
      title: "Adopt-a-Pet",
      href: "https://github.com/vishnusaibhosekar/adopt-a-pet",
      dates: "",
      active: false,
      description:
        "A portal to adopt pets. Each animal has a profile page with its attributes.",
      technologies: ["React", "Node.js", "Express"],
      tags: ["React", "Node.js", "Express", "MongoDB"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/vishnusaibhosekar/adopt-a-pet",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Adopt-a-Pet.gif",
      video: "",
    },
    {
      title: "Notes App Using ReactJS and Firebase",
      href: "https://github.com/vishnusaibhosekar/NotesReactApp",
      dates: "",
      active: false,
      description:
        "A notes app to save notes and make to-do lists. Users log in using their Google account.",
      technologies: ["React", "Firebase"],
      tags: ["React", "Firebase", "Authentication", "Cloud Storage"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/vishnusaibhosekar/NotesReactApp",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Notes-React-App.gif",
      video: "",
    },
    {
      title: "ChatRoom App",
      href: "https://github.com/vishnusaibhosekar/ChatRoom",
      dates: "",
      active: false,
      description:
        "A chatting application where multiple users can chat in a chatroom. There is no limit to the number of users.",
      technologies: ["Node.js", "WebSockets"],
      tags: ["Node.js", "WebSockets", "Real-time", "Chat"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/vishnusaibhosekar/ChatRoom",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ChatRoom.png",
      video: "",
    },
    {
      title: "E-Commerce Website",
      href: "https://github.com/vishnusaibhosekar/IS601-005/tree/main/VShop",
      dates: "",
      active: false,
      description:
        "A website to buy and sell products. Users can add products to their cart, checkout, and pay. Admins can add, edit, and delete products.",
      technologies: ["Python", "Flask", "HTML", "CSS", "Bootstrap", "MySQL"],
      tags: ["Python", "Flask", "E-Commerce", "MySQL", "Bootstrap"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/vishnusaibhosekar/IS601-005/tree/main/VShop",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Shop.jpeg",
      video: "",
    },
  ],
} as const;
