import { motion } from "framer-motion";
import { Eye, Download, Calendar } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Orion Nebula", 
      type: "Astrophotography",
      date: "2024-01-10",
      description: "Captured using our 12-inch reflector telescope",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop"
    },
    {
      title: "Jupiter & Moons",
      type: "Planetary",
      date: "2024-01-05", 
      description: "High-resolution image showing Galilean satellites",
      image: "https://images.unsplash.com/photo-1614642264762-65af9aca4472?w=800&h=600&fit=crop"
    },
    {
      title: "Andromeda Galaxy",
      type: "Deep Sky",
      date: "2023-12-20",
      description: "3-hour exposure revealing spiral structure",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=600&fit=crop"
    },
    {
      title: "Solar Eclipse",
      type: "Solar",
      date: "2023-10-14",
      description: "Partial eclipse captured from university campus",
      image: "https://images.unsplash.com/photo-1566024164372-0281cbf7ac65?w=800&h=600&fit=crop"
    },
    {
      title: "Saturn's Rings", 
      type: "Planetary",
      date: "2023-09-15",
      description: "Detailed view of ring system and Cassini division", 
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop"
    },
    {
      title: "Milky Way Core",
      type: "Wide Field", 
      date: "2023-08-12",
      description: "Dark sky site capture showing galactic center",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            <span className="text-cosmic-gradient">Cosmic</span>
            <br />
            <span className="text-cosmic-cyan">Gallery</span>
          </h1>
          <p className="text-xl text-cosmic-light max-w-3xl mx-auto">
            A collection of stunning astrophotography and club moments captured by our members.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-space-medium">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-xs text-cosmic-teal font-medium px-2 py-1 rounded-full bg-cosmic-teal/20">
                        {item.type}
                      </span>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-space-dark/50 backdrop-blur-sm rounded-lg text-cosmic-cyan hover:text-cosmic-teal transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-space-dark/50 backdrop-blur-sm rounded-lg text-cosmic-cyan hover:text-cosmic-teal transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 card-cosmic mt-4">
                <h3 className="font-heading font-semibold text-lg text-cosmic-cyan mb-2">
                  {item.title}
                </h3>
                <p className="text-cosmic-light text-sm mb-3">
                  {item.description}
                </p>
                <div className="flex items-center text-xs text-cosmic-light">
                  <Calendar className="w-3 h-3 mr-2 text-cosmic-teal" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;