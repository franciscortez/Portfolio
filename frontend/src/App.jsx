import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";

// Lazy load page components for better performance
const Home = lazy(() => import("./components/pages/Home"));
const Skills = lazy(() => import("./components/pages/Skills"));
const Profile = lazy(() => import("./components/pages/Profile"));
const Projects = lazy(() => import("./components/pages/Projects"));
const Contact = lazy(() => import("./components/pages/Contact"));
const ProjectDetails = lazy(() => import("./components/pages/ProjectDetails"));

// Main landing page with all sections
const LandingPage = () => (
  <main className="scroll-container">
    <section id="home">
      <Home />
    </section>

    <hr className="section-divider" />
    <section id="skills">
      <Skills />
    </section>
    <hr className="section-divider" />
    <section id="projects">
      <Projects />
    </section>
    <hr className="section-divider" />
    <section id="contact">
      <Contact />
    </section>
  </main>
);

function AppContent() {
  const location = useLocation();

  // Reset scroll position to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="app">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
