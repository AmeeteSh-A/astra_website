import { motion } from "framer-motion";
import { Atom, Telescope, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import solarSystem from "../assets/solar-system.png";
import clubActivities from "../assets/club-activities.jpg";

const AboutPreview = () => {
  const features = [
    {
      icon: <Telescope className="w-8 h-8" />,
      title: "Stargazing Events",
      description: "Regular night sky observation sessions with professional telescopes"
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Physics Experiments",
      description: "Hands-on laboratory work and cutting-edge research projects"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Community",
      description: "Connect with fellow physics and astronomy enthusiasts"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Lab",
      description: "Build DIY telescopes and explore the latest space technology"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              <span className="text-cosmic-gradient">Discover the Cosmos</span>
              <br />
              <span className="text-cosmic-cyan">With Us</span>
            </h2>
            
            <p className="text-lg text-cosmic-light mb-8 leading-relaxed">
              Our Physics & Technology Club brings together passionate students to explore the 
              wonders of the universe. From theoretical physics to practical stargazing, 
              we make science accessible and exciting for everyone.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="card-cosmic p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-cosmic-cyan mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-cosmic-cyan mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-cosmic-light text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn-cosmic inline-flex items-center group"
            >
              Learn More About Us
              <motion.div
                className="ml-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                →
              </motion.div>
            </Link>
          </motion.div>

          {/* Right Side - Visuals */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Solar System Model */}
            <div className="relative mb-8">
              <motion.div
                className="card-cosmic p-6 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={solarSystem}
                  alt="3D Solar System Model"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-heading font-semibold text-cosmic-cyan text-xl">
                    Interactive 3D Models
                  </h3>
                  <p className="text-cosmic-light text-sm">
                    Explore celestial mechanics in real-time
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Club Activities Collage */}
            <motion.div
              className="card-cosmic p-6 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={clubActivities}
                alt="Club Activities"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-dark/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-heading font-semibold text-cosmic-cyan text-xl">
                  Active Community
                </h3>
                <p className="text-cosmic-light text-sm">
                  Join our diverse group of science enthusiasts
                </p>
              </div>
            </motion.div>

            {/* Floating Animation Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-cosmic-teal/20 backdrop-blur-sm border border-cosmic-cyan/30"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;