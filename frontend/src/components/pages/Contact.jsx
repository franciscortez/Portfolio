import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/bambam.m.cortez/",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
      hoverBgColor: "group-hover:bg-blue-500/20",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/francisemilcortez/",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-600/10",
      hoverBgColor: "group-hover:bg-blue-600/20",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/franciscortez",
      iconColor: "text-gray-400",
      bgColor: "bg-gray-400/10",
      hoverBgColor: "group-hover:bg-gray-400/20",
    },
  ];

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: `From: ${formData.email}\n\n${formData.message}`,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          // Show success toast
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          await Toast.fire({
            icon: "success",
            title: "Message sent successfully!",
            background: "#1a1a1a",
            color: "#fff",
            iconColor: "#10B981",
          });
        } else {
          throw new Error(result.message || "Failed to send message");
        }
      } catch (error) {
        console.error("Web3Forms error:", error);

        // Show error toast
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        await Toast.fire({
          icon: "error",
          title: "Failed to send message. Please try again.",
          background: "#1a1a1a",
          color: "#fff",
          iconColor: "#EF4444",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData],
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 md:px-8 lg:px-16 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-center mb-12 text-lg"
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gray-700 space-y-6 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                <FaUser className="inline-block mr-2" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                <FaEnvelope className="inline-block mr-2" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="subject" className="block text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
              placeholder="Subject of your message"
            />
          </div>

          <div className="relative">
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
              placeholder="Your message"
            />
          </div>

          <motion.div
            className="w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full inline-flex items-center justify-center gap-2 px-8 py-3 font-medium rounded-lg transition-colors duration-300 ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {isSubmitting ? (
                <>
                  <ImSpinner8 className="animate-spin text-xl" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </motion.div>
        </motion.form>

        {/* Social Media Links - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-gray-400 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-full ${link.bgColor} flex items-center justify-center mb-4 ${link.hoverBgColor} transition-colors duration-300`}
                >
                  <link.icon className={`text-3xl ${link.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {link.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
