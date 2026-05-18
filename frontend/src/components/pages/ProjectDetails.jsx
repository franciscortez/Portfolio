import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { projects } from "../../data/projectsData";
import LazyImage from "../common/LazyImage";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!project) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl md:text-3xl text-white mb-4">
          Project not found
        </h1>
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </motion.button>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 md:py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-6 md:mb-10 group"
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </motion.button>

        {/* Hero Section */}
        <div className="mb-8 md:mb-16">
          <div className="relative aspect-[4/3] md:aspect-video rounded-xl overflow-hidden mb-6 md:mb-10 bg-white/5 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                className="w-full h-full"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <LazyImage
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  eager
                />
              </motion.div>
            </AnimatePresence>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 md:p-3 rounded-full transition-colors duration-300"
                >
                  <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 md:p-3 rounded-full transition-colors duration-300"
                >
                  <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white scale-110"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {project.title}
              </h1>
              <span className="inline-block text-sm font-medium text-gray-400 bg-[#1A1A1A] px-4 py-2 rounded-full">
                {project.type}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white font-medium rounded-lg hover:bg-[#252525] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
                <span>View Code</span>
              </motion.a>
              {project.links.live && (
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 space-y-6 md:space-y-8">
            <section className="bg-white/5 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">
                {project.description}
              </p>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {project.details}
              </p>
            </section>

            {project.features && (
              <section className="bg-white/5 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                  Key Features
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-base md:text-lg">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div>
            <section className="bg-white/5 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2.5 rounded-lg"
                    >
                      <Icon className={`w-5 h-5 ${tech.color}`} />
                      <span className="text-gray-300">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
