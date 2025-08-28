import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Twitter, Instagram, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "#" },
  ];

  const resources = [
    { name: "NASA Image Gallery", url: "https://images.nasa.gov/" },
    { name: "ESA Hubble Images", url: "https://esahubble.org/" },
    { name: "Stellarium", url: "https://stellarium.org/" },
    { name: "PhET Simulations", url: "https://phet.colorado.edu/" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-space-dark to-space-medium border-t border-cosmic-teal/30 mt-20">
      {/* Cosmic Background Effect */}
      <div className="absolute inset-0 starfield opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-xl text-cosmic-cyan mb-4">
              ASTRA ( Physics & Astronomy Club )
            </h3>
            <p className="text-cosmic-light text-sm mb-4 leading-relaxed">
              Exploring the wonders of the universe through hands-on experiments, 
              stargazing sessions, and cutting-edge research.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-cosmic-light text-sm">
                <MapPin className="w-4 h-4 mr-2 text-cosmic-cyan" />
                CS233, PCM Block, SAU
              </div>
              <div className="flex items-center text-cosmic-light text-sm">
                <Mail className="w-4 h-4 mr-2 text-cosmic-cyan" />
                astra@sau.int
              </div>
              <div className="flex items-center text-cosmic-light text-sm">
                <Phone className="w-4 h-4 mr-2 text-cosmic-cyan" />
                1234567890
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-lg text-cosmic-cyan mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-cosmic-light text-sm hover:text-cosmic-cyan transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-lg text-cosmic-cyan mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cosmic-light text-sm hover:text-cosmic-cyan transition-colors duration-300 inline-flex items-center group"
                  >
                    {resource.name}
                    <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-lg text-cosmic-cyan mb-4">
              Stay Connected
            </h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-cosmic-light text-sm mb-3">
                Get updates on upcoming events and discoveries
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-space-medium border border-cosmic-teal/30 rounded-l-lg text-cosmic-light text-sm focus:outline-none focus:border-cosmic-cyan transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-cosmic-teal text-space-dark rounded-r-lg hover:bg-cosmic-cyan transition-colors duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="p-2 bg-space-medium border border-cosmic-teal/30 rounded-lg text-cosmic-light hover:text-cosmic-cyan hover:border-cosmic-cyan hover:shadow-glow transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-cosmic-teal/30 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-cosmic-light text-sm mb-4 sm:mb-0">
            © 2025 ASTRA (Physics & Astronomy Club), SAU. Exploring the cosmos together.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-cosmic-light hover:text-cosmic-cyan transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-cosmic-light hover:text-cosmic-cyan transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;