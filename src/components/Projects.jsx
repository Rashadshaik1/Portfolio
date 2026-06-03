import Reveal from "./Reveal";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "ClubVerse",
      featured: true,
      description:
        "AI-enhanced college club and event management platform designed to streamline club operations, event registrations, and role-based administration.",
      highlights: [
        "JWT Authentication",
        "Role-Based Access Control",
        "Event Registration",
        "Admin Dashboard",
      ],
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Real-Time Network Monitoring Dashboard",
      description:
        "Distributed monitoring system providing live metrics, system health tracking, and offline detection through WebSockets.",
      highlights: ["Live Monitoring", "WebSockets", "Offline Detection"],
      tech: ["React", "Socket.io", "Node.js"],
    },
    {
      title: "Typing Speed & Accuracy Analyzer",
      description:
        "Interactive typing application that measures words per minute, accuracy, and typing performance in real time.",
      highlights: ["WPM Tracking", "Accuracy Analysis", "Responsive UI"],
      tech: ["JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-32 scroll-mt-32"
    >
      <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

      <div className="space-y-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition"
          >
            {project.featured && (
              <span className="text-blue-500 text-sm font-medium">
                Featured Project
              </span>
            )}

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-zinc-400 mb-6">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.highlights.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1 rounded-full border border-zinc-700"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-zinc-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="text-blue-500 hover:text-blue-400">
                GitHub →
              </button>

              <button className="text-zinc-300 hover:text-white">
                Case Study →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;