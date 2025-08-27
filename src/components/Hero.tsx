import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroNebula from "../assets/hero-nebula.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroNebula})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-space-dark/60"></div>
      </div>

      {/* Animated Starfield */}
      <div className="absolute inset-0 starfield z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-cosmic-gradient text-glow">
              Exploring the Universe,
            </span>
            <br />
            <span className="text-cosmic-cyan">
              One Equation at a Time
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-cosmic-light mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Welcome to the <span className="text-cosmic-cyan font-semibold">Physics & Astronomy Club</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to="/contact"
            className="btn-hero group inline-flex items-center"
          >
            <Users className="w-5 h-5 mr-2" />
            Join Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            to="/events"
            className="btn-ghost-cosmic inline-flex items-center px-8 py-4 rounded-xl font-heading text-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Upcoming Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;