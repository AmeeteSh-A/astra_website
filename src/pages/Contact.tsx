import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Room 233, 2nd Floor", "PCM Block", "South Asian University" ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us", 
      details: ["astra@sau.int", "jyotsna@sau.int"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["1234567890", "Office Hours Only"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Monday - Friday: 2:00 PM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"]
    }
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
            <span className="text-cosmic-gradient">Get in</span>
            <br />
            <span className="text-cosmic-cyan">Touch</span>
          </h1>
          <p className="text-xl text-cosmic-light max-w-3xl mx-auto">
            Ready to join our cosmic community? Have questions about physics or astronomy? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-cosmic p-8">
              <h2 className="font-heading font-bold text-2xl text-cosmic-cyan mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cosmic-light mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-space-medium border border-cosmic-teal/30 rounded-lg text-cosmic-light placeholder-cosmic-light/50 focus:outline-none focus:border-cosmic-cyan transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cosmic-light mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-space-medium border border-cosmic-teal/30 rounded-lg text-cosmic-light placeholder-cosmic-light/50 focus:outline-none focus:border-cosmic-cyan transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cosmic-light mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-space-medium border border-cosmic-teal/30 rounded-lg text-cosmic-light placeholder-cosmic-light/50 focus:outline-none focus:border-cosmic-cyan transition-colors duration-300 resize-none"
                    placeholder="Tell us about your interest in physics, astronomy, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-cosmic w-full inline-flex items-center justify-center group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="card-cosmic p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="text-cosmic-cyan mr-4 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-cosmic-cyan mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-cosmic-light text-sm mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="card-cosmic p-6 mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-heading font-semibold text-lg text-cosmic-cyan mb-4">
                Find Us on Campus
              </h3>
              <div className="h-48 bg-space-medium rounded-lg flex items-center justify-center border border-cosmic-teal/30">
                <p className="text-cosmic-light text-center">
                  Interactive Campus Map
                  <br />
                  <span className="text-sm text-cosmic-teal">Coming Soon</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;