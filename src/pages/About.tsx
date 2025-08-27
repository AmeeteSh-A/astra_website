import { motion } from "framer-motion";
import { Users, Target, Clock, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "150+", label: "Active Members" },
    { icon: <Target className="w-8 h-8" />, number: "25+", label: "Research Projects" },
    { icon: <Clock className="w-8 h-8" />, number: "5", label: "Years Active" },
    { icon: <Award className="w-8 h-8" />, number: "10+", label: "Awards Won" },
  ];

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
            <span className="text-cosmic-gradient">About Our</span>
            <br />
            <span className="text-cosmic-cyan">Cosmic Community</span>
          </h1>
          <p className="text-xl text-cosmic-light max-w-3xl mx-auto">
            We are a passionate community of students and faculty dedicated to exploring 
            the fundamental laws of physics and the mysteries of the cosmos.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="card-cosmic p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-cosmic-cyan mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="font-heading font-bold text-2xl text-cosmic-cyan mb-2">
                {stat.number}
              </div>
              <div className="text-cosmic-light text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <motion.div
          className="card-cosmic p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-3xl text-cosmic-cyan mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-cosmic-light leading-relaxed text-center max-w-4xl mx-auto">
            To inspire and nurture the next generation of physicists and astronomers through 
            hands-on learning, collaborative research, and the shared wonder of discovery. 
            We believe that understanding the universe starts with curiosity and is fueled by community.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;