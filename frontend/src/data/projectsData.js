import {
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiFlask,
  SiPhp,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiChartdotjs,
  SiSupabase,
  SiPostgresql,
  SiReactquery,
  SiGoogle,
} from "react-icons/si";

// Twitch Insight Images
import twitchInsightImg from "@/assets/img/projects/twitch-insight/twitch-insight.png";
import twitchInsight1 from "@/assets/img/projects/twitch-insight/twitch-insight1.png";
import twitchInsight2 from "@/assets/img/projects/twitch-insight/twitch-insight2.png";

// PennyWings Images
import pw1 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130418.png";
import pw2 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130422.png";
import pw3 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130425.png";
import pw4 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130428.png";
import pw5 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130628.png";
import pw6 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130631.png";
import pw7 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130634.png";
import pw8 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130636.png";
import pw9 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130742.png";
import pw10 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130744.png";
import pw11 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130746.png";
import pw12 from "@/assets/img/projects/pennywings/Screenshot 2026-04-24 130801.png";

// Portfolio Images
import portfolioImg from "@/assets/img/projects/portfolio/portfolio.png";
import portfolio1 from "@/assets/img/projects/portfolio/portfolio1.png";
import portfolio2 from "@/assets/img/projects/portfolio/portfolio2.png";

export const projects = [
  {
    title: "Twitch Insight",
    description:
      "Real-time sentiment analysis platform for Twitch streamers, powered by advanced NLP and machine learning. Provides instant audience engagement insights and emotional response tracking.",
    details:
      "Twitch Insight analyzes chat messages in real-time using the RoBERTa natural language processing model. By integrating with the Twitch API, we extract live chat comments and provide streamers with instant insights about their audience's emotional responses. The dashboard displays sentiment trends and engagement metrics, helping content creators better understand their community.",
    type: "Capstone Project",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Flask", icon: SiFlask, color: "text-gray-400" },
    ],
    links: {
      github: "https://github.com/bamcortezz/Capstone",
    },
    image: twitchInsightImg,
    images: [twitchInsightImg, twitchInsight1, twitchInsight2],
    galleryDir: "twitch-insight",
    features: [
      "Real-time chat sentiment analysis",
      "RoBERTa NLP model integration",
      "Twitch API live data streaming",
      "Interactive data visualization dashboard",
      "Engagement metrics tracking",
    ],
  },
  {
    title: "Budget Tracker",
    description:
      "A scalable full-stack budget tracking application featuring real-time synchronization, AI-powered financial insights, and secure authentication.",
    details:
      "Built a scalable full-stack app using ReactJS, Tailwind CSS, and Supabase (PostgreSQL, Auth, Realtime) with secure authentication and Row Level Security (RLS). Implemented real-time data synchronization and caching using Supabase Realtime and TanStack Query, enabling fast, responsive financial tracking across devices. Developed core features including accounts, transactions, budgets, analytics dashboards, and an AI assistant (Google Gemini API) for personalized financial insights.",
    type: "Full Stack Project",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "TanStack Query", icon: SiReactquery, color: "text-[#FF4154]" },
      { name: "Google Gemini", icon: SiGoogle, color: "text-[#4285F4]" },
    ],
    links: {
      github: "https://github.com/franciscortez/PennyWings",
      live: "https://penny-wings.netlify.app/", // Live Netlify URL
    },
    image: pw1,
    images: [pw1, pw2, pw3, pw4, pw5, pw6, pw7, pw8, pw9, pw10, pw11, pw12],
    galleryDir: "pennywings",
    features: [
      "Secure Authentication & Row Level Security (RLS)",
      "Real-time Data Synchronization with Supabase",
      "Efficient Caching with TanStack Query",
      "AI Financial Assistant (Google Gemini API)",
      "Comprehensive Analytics Dashboards",
      "Multi-device Responsive Tracking",
    ],
  },
  {
    title: "Portfolio",
    description:
      "Modern, responsive portfolio showcasing development expertise with smooth animations and interactive UI. Built with React and Tailwind CSS for optimal performance and user experience.",
    details:
      "A personal project built with React and Tailwind CSS to showcase my development skills and projects. Features a clean, responsive design with smooth animations and an organized presentation of my work and technical capabilities.",
    type: "Personal Project",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]" },
    ],
    links: {
      github: "https://github.com/bamcortezz/Portfolio",
      live: "https://francisemilcortez.vercel.app/",
    },
    image: portfolioImg,
    images: [portfolioImg, portfolio1, portfolio2],
    galleryDir: "portfolio",
    features: [
      "Modern Responsive Design",
      "Smooth Animations (Framer Motion)",
      "Single Page Application Architecture",
      "Optimized Lazy Loading",
      "Glassmorphism UI Elements",
    ],
  },
];
