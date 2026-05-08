import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaGraduationCap,
  FaTrophy,
  FaBriefcase,
} from "react-icons/fa";

import { experiences, education, certifications } from "../../data/profileData";

const Profile = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
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
        <motion.div className="text-center mb-16" variants={sectionVariants}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={sectionVariants}
          >
            Profile
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Summary & Education */}
          <motion.div className="space-y-8" variants={sectionVariants}>
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <FaUserCircle className="text-3xl text-white" />
                Professional Summary
              </h2>
              <p className="text-gray-400 leading-relaxed">
                I am Francis Emil M. Cortez, a dedicated Full Stack Developer
                from Pampanga, Philippines, with a strong focus on building
                scalable web applications and efficient backend systems. My
                passion for programming drives me to constantly refine my skills
                and stay updated with modern technologies. I am committed to
                delivering high-quality, professional solutions and aim to
                contribute meaningfully to impactful projects while continuously
                growing as a software engineering professional.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <FaGraduationCap className="text-3xl text-white" />
                Education
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-8">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-white font-medium text-lg">
                      {edu.school}
                    </h3>
                    <p className="text-gray-400 mt-1">{edu.degree}</p>
                    <p className="text-gray-400">{edu.date}</p>
                    <p className="text-gray-400 italic">{edu.location}</p>
                    {edu.awards && (
                      <div className="mt-3">
                        <p className="text-white font-medium mb-1">
                          Awards and Recognitions:
                        </p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                          {edu.awards.map((award, aIndex) => (
                            <li key={aIndex}>{award}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Experience & Certifications */}
          <motion.div className="space-y-8" variants={sectionVariants}>
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <FaBriefcase className="text-3xl text-white" />
                Work Experience
              </h2>
              <div className="relative border-l-2 border-gray-700 ml-4 space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Timeline Circle */}
                    <div
                      className={`absolute w-4 h-4 rounded-full -left-[9px] top-1.5 ring-4 ring-black ${
                        exp.isLatest ? "bg-white" : "bg-gray-500"
                      }`}
                    />

                    <div className="space-y-1">
                      <h3 className="text-white font-semibold text-xl">
                        {exp.title}
                      </h3>
                      <p className="text-gray-300 font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.date}</p>
                      <p className="text-gray-500 text-sm italic">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <FaTrophy className="text-3xl text-white" />
                Certifications
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-white font-medium">{cert.provider}</h3>
                    {cert.name && (
                      <p className="text-gray-300 ml-2">{cert.name}</p>
                    )}
                    {cert.items && (
                      <ul className="list-disc list-inside ml-2 space-y-1">
                        {cert.items.map((item, iIndex) => (
                          <li key={iIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
