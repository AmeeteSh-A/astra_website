import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DIY Radio Telescope",
      category: "Hardware",
      description: "Building a radio telescope from scratch to detect cosmic radiation and study celestial objects.",
      status: "In Progress",
      contributors: 8,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Exoplanet Detection Algorithm",
      category: "Software", 
      description: "Machine learning model to identify potential exoplanets from Kepler telescope data.",
      status: "Completed",
      contributors: 5,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Cosmic Ray Detector",
      category: "Research",
      description: "High-energy particle detection system using scintillator arrays and photomultiplier tubes.",
      status: "Planning",
      contributors: 12,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Orbital Mechanics Simulator",
      category: "Simulation",
      description: "Interactive 3D simulation of planetary motion and spacecraft trajectories.",
      status: "Completed",
      contributors: 6,
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "text-green-400 bg-green-400/20";
      case "In Progress": return "text-cosmic-cyan bg-cosmic-cyan/20";
      case "Planning": return "text-yellow-400 bg-yellow-400/20";
      default: return "text-cosmic-light bg-cosmic-light/20";
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            <span className="text-cosmic-gradient">Research</span>
            <br />
            <span className="text-cosmic-cyan">Projects</span>
          </h1>
          <p className="text-xl text-cosmic-light max-w-3xl mx-auto">
            Exploring the frontiers of physics and astronomy through hands-on research and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card-cosmic p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs text-cosmic-teal font-medium px-2 py-1 rounded-full bg-cosmic-teal/20">
                    {project.category}
                  </span>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-cosmic-cyan mb-3">
                {project.title}
              </h3>
              
              <p className="text-cosmic-light mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-cosmic-light">
                  <Zap className="w-4 h-4 mr-2 text-cosmic-teal" />
                  {project.contributors} contributors
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-space-medium border border-cosmic-teal/30 rounded-lg text-cosmic-light hover:text-cosmic-cyan hover:border-cosmic-cyan transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demoUrl}
                    className="p-2 bg-space-medium border border-cosmic-teal/30 rounded-lg text-cosmic-light hover:text-cosmic-cyan hover:border-cosmic-cyan transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;