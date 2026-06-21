import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = [
        "home",
        "skills",
        "services",
        "projects",
        "about",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const scrollToSection = useCallback(
    (sectionId) => {
      const scrollToTarget = () => {
        const element = document.getElementById(sectionId);

        if (element) {
          const offsetTop = element.offsetTop - 64; // Account for navbar height
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
          setActiveSection(sectionId);
          setIsOpen(false);
        }
      };

      if (location.pathname !== "/") {
        navigate("/");
        window.setTimeout(scrollToTarget, 100);
        return;
      }

      scrollToTarget();
    },
    [location.pathname, navigate],
  );

  const expandService = useCallback(
    (serviceId) => {
      sessionStorage.setItem("pendingService", serviceId);
      scrollToSection("services");

      window.setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("service:expand", {
            detail: { serviceId },
          }),
        );
      }, 150);
    },
    [scrollToSection],
  );

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const serviceLinks = [
    { id: "full-stack-development", label: "Full Stack Development" },
    { id: "saas-development", label: "SaaS Development" },
    { id: "ai-automation", label: "AI Automation" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300"
            >
              Francis
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 2).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative text-white hover:text-gray-300 transition-colors duration-300 group ${
                  activeSection === id ? "font-medium" : ""
                }`}
              >
                <span>{label}</span>
                <span
                  className={`absolute left-0 bottom-[-4px] h-0.5 bg-white transition-all duration-300 ${
                    activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}

            <div className="relative group py-5">
              <button
                onClick={() => scrollToSection("services")}
                className={`relative flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors duration-300 ${
                  activeSection === "services" ? "font-medium" : ""
                }`}
              >
                <span>Services</span>
                <FaChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                <span
                  className={`absolute left-0 bottom-[-4px] h-0.5 bg-white transition-all duration-300 ${
                    activeSection === "services"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>

              <div className="invisible absolute left-1/2 top-full grid w-64 -translate-x-1/2 gap-1 rounded-lg border border-gray-700 bg-black/95 p-2 opacity-0 shadow-xl backdrop-blur-sm transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {serviceLinks.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => expandService(service.id)}
                    className="rounded-md px-4 py-3 text-left text-sm text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative text-white hover:text-gray-300 transition-colors duration-300 group ${
                  activeSection === id ? "font-medium" : ""
                }`}
              >
                <span>{label}</span>
                <span
                  className={`absolute left-0 bottom-[-4px] h-0.5 bg-white transition-all duration-300 ${
                    activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-5">
                <span
                  className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out top-2 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out top-4 ${
                    isOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-black/90 backdrop-blur-sm`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.slice(0, 2).map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors duration-300 ${
                activeSection === id ? "bg-gray-900/50 rounded-md" : ""
              }`}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("services")}
            className={`flex w-full items-center justify-between px-3 py-2 text-left text-base font-medium text-white hover:text-gray-300 transition-colors duration-300 ${
              activeSection === "services" ? "bg-gray-900/50 rounded-md" : ""
            }`}
          >
            <span>Services</span>
            <FaChevronDown className="h-3 w-3" />
          </button>

          <div className="grid gap-1 pl-4">
            {serviceLinks.map((service) => (
              <button
                key={service.id}
                onClick={() => expandService(service.id)}
                className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-400 transition-colors duration-300 hover:bg-white/10 hover:text-white"
              >
                {service.label}
              </button>
            ))}
          </div>

          {navLinks.slice(2).map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors duration-300 ${
                activeSection === id ? "bg-gray-900/50 rounded-md" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
