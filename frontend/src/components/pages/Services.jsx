import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaMinus, FaPlus, FaRobot, FaRocket } from "react-icons/fa";

const services = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    summary:
      "Complete web applications built from user interface to backend systems.",
    icon: FaCode,
    accent: "from-blue-500/20 to-cyan-500/10",
    details:
      "I build responsive frontends, backend APIs, dashboards, admin tools, authentication flows, database-backed features, and integrations. My work focuses on practical, maintainable systems using technologies such as React, Tailwind CSS, Laravel, Express, MySQL, PostgreSQL, MongoDB, Supabase, and Firebase.",
    highlights: [
      "Frontend interfaces with React and Tailwind CSS",
      "Backend APIs, authentication, and database design",
      "Dashboards, CRUD systems, and business web applications",
      "Third-party integrations and deployment-ready builds",
    ],
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    summary:
      "Product-focused web platforms for dashboards, workflows, and users.",
    icon: FaRocket,
    accent: "from-violet-500/20 to-sky-500/10",
    details:
      "I create SaaS-style web applications and MVPs with clean user flows, role-based access, reusable dashboards, database-backed features, and scalable foundations. This service fits founders, teams, or businesses that need an internal platform, client portal, or productized web system.",
    highlights: [
      "SaaS MVPs and product dashboards",
      "Role-based access and secure user flows",
      "Admin panels, client portals, and internal tools",
      "Scalable frontend and backend structure",
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    summary:
      "Automated workflows that connect apps, APIs, webhooks, and AI tools.",
    icon: FaRobot,
    accent: "from-emerald-500/20 to-teal-500/10",
    details:
      "I create AI-powered automations that reduce manual work and connect business processes. This includes n8n workflows, webhook automations, API integrations, lead handling, notifications, data routing, and AI-assisted responses or summaries for repeatable tasks.",
    highlights: [
      "n8n workflow automation",
      "Webhook and REST API integrations",
      "AI-assisted summaries, responses, and task routing",
      "Automations for leads, forms, notifications, and internal tools",
    ],
  },
];

const Services = () => {
  const [expandedServices, setExpandedServices] = useState({});

  useEffect(() => {
    const pendingServiceId = sessionStorage.getItem("pendingService");

    if (pendingServiceId) {
      setExpandedServices((current) => ({
        ...current,
        [pendingServiceId]: true,
      }));
      sessionStorage.removeItem("pendingService");
    }

    const expandSelectedService = (event) => {
      const serviceId = event.detail?.serviceId;

      if (!serviceId) {
        return;
      }

      setExpandedServices((current) => ({
        ...current,
        [serviceId]: true,
      }));
    };

    window.addEventListener("service:expand", expandSelectedService);
    return () =>
      window.removeEventListener("service:expand", expandSelectedService);
  }, []);

  const toggleService = (serviceId) => {
    setExpandedServices((current) => ({
      ...current,
      [serviceId]: !current[serviceId],
    }));
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-4rem)] px-4 md:px-8 lg:px-16 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Practical development and automation services for building web
            products, connecting systems, and reducing repeated manual work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = Boolean(expandedServices[service.id]);

            return (
              <motion.article
                key={service.id}
                className="overflow-hidden rounded-lg border border-gray-700 bg-[#080808] transition-colors duration-300 hover:border-gray-400"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <button
                  type="button"
                  onClick={() => toggleService(service.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-6 md:p-8"
                >
                  <div className="grid grid-cols-[auto_1fr_auto] gap-4 md:gap-6">
                    <div
                      className={`grid h-13 w-13 place-items-center rounded-lg bg-gradient-to-br ${service.accent}`}
                    >
                      <Icon className="text-2xl text-white" />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-sm md:text-base text-gray-400 leading-relaxed">
                        {service.summary}
                      </p>
                    </div>

                    <span className="grid h-9 w-9 place-items-center rounded-full border border-gray-700 bg-white/5 text-white transition-colors duration-300">
                      {isExpanded ? (
                        <FaMinus className="h-3.5 w-3.5" />
                      ) : (
                        <FaPlus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-gray-700 px-6 pb-6 pt-6 md:px-8 md:pb-8">
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                          {service.details}
                        </p>

                        <ul className="mt-6 grid gap-3">
                          {service.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="grid grid-cols-[auto_1fr] gap-3 text-sm text-gray-300"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
