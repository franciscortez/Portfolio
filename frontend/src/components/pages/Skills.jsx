import { motion } from "framer-motion";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoPhp,
  BiLogoNodejs,
  BiLogoGit,
  BiLogoMongodb,
  BiLogoTrello,
} from "react-icons/bi";
import {
  SiMysql,
  SiLaravel,
  SiExpress,
  SiFlask,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiPython,
  SiN8N,
  SiDocker,
  SiHostinger,
  SiGooglecloud,
} from "react-icons/si";
import { TbApi, TbSql, TbWebhook } from "react-icons/tb";
import highLevelArrowsLogo from "../../assets/img/logos/highlevel-arrows.svg";

const Skills = () => {
  const techStack = [
    {
      category: "Languages",
      technologies: [
        { name: "JavaScript", icon: BiLogoJavascript },
        { name: "PHP", icon: BiLogoPhp },
        { name: "SQL", icon: TbSql },
        { name: "Python", icon: SiPython },
      ],
    },
    {
      category: "Frontend Development",
      technologies: [
        { name: "HTML", icon: AiFillHtml5 },
        { name: "CSS", icon: BiLogoCss3 },
        { name: "React.js", icon: BiLogoReact },
        { name: "Tailwind CSS", icon: BiLogoTailwindCss },
      ],
    },
    {
      category: "Backend Development",
      technologies: [
        { name: "Laravel", icon: SiLaravel },
        { name: "Express", icon: SiExpress },
        { name: "Node.js", icon: BiLogoNodejs },
        { name: "Flask", icon: SiFlask },
      ],
    },
    {
      category: "Database Management",
      technologies: [
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: BiLogoMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Firebase", icon: SiFirebase },
        { name: "Supabase", icon: SiSupabase },
      ],
    },
    {
      category: "Automation & Integrations",
      technologies: [
        { name: "GoHighLevel", image: highLevelArrowsLogo },
        { name: "n8n", icon: SiN8N },
        { name: "REST APIs", icon: TbApi },
        { name: "Webhooks", icon: TbWebhook },
      ],
    },
    {
      category: "Tools & Technologies",
      technologies: [
        { name: "Git", icon: BiLogoGit },
        { name: "GitHub", icon: AiFillGithub },
        { name: "Docker", icon: SiDocker },
        { name: "Trello", icon: BiLogoTrello },
        { name: "Hostinger", icon: SiHostinger },
        { name: "GCP", icon: SiGooglecloud },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-4rem)] px-4 md:px-8 lg:px-16 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-16" variants={categoryVariants}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={categoryVariants}
          >
            Tech Stack
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
            variants={categoryVariants}
          >
            These are the technologies I've worked with throughout my journey as
            a web developer. With deep knowledge of full-stack web systems, I
            specialize in building responsive and dynamic applications that
            deliver exceptional user experiences.
          </motion.p>
        </motion.div>

        <motion.div className="space-y-12" variants={containerVariants}>
          {techStack.map((category, index) => (
            <motion.div
              key={index}
              className="space-y-6"
              variants={categoryVariants}
            >
              <motion.h2
                className="text-2xl font-semibold text-white border-b border-gray-700 pb-4"
                variants={categoryVariants}
              >
                {category.category}
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="p-4 rounded-lg border border-gray-700 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
                    variants={techVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(255,255,255,0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech.image ? (
                      <img
                        src={tech.image}
                        alt=""
                        aria-hidden="true"
                        className="w-7 h-7 object-contain"
                      />
                    ) : (
                      tech.icon && <tech.icon className="text-2xl" />
                    )}
                    <h3 className="text-lg font-semibold text-white text-center">
                      {tech.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
