import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Play, Download } from "lucide-react";

const Resources = () => {
  const categories = [
    {
      title: "Essential Reading",
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        { name: "Cosmos by Carl Sagan", type: "Book", url: "#" },
        { name: "The Elegant Universe", type: "Book", url: "#" },
        { name: "Astrophysics for People in a Hurry", type: "Book", url: "#" },
        { name: "Quantum Physics Papers", type: "Research", url: "#" }
      ]
    },
    {
      title: "Online Simulations",
      icon: <Play className="w-6 h-6" />,
      items: [
        { name: "PhET Physics Simulations", type: "Interactive", url: "https://phet.colorado.edu/" },
        { name: "NASA Eyes on the Solar System", type: "3D Visualization", url: "#" },
        { name: "Stellarium Web", type: "Sky Map", url: "https://stellarium-web.org/" },
        { name: "Gravity Simulator", type: "Physics Engine", url: "#" }
      ]
    },
    {
      title: "Image Archives", 
      icon: <Download className="w-6 h-6" />,
      items: [
        { name: "NASA Image Gallery", type: "Photos", url: "https://images.nasa.gov/" },
        { name: "ESA Hubble Images", type: "Deep Space", url: "https://esahubble.org/" },
        { name: "APOD Archive", type: "Daily Images", url: "https://apod.nasa.gov/" },
        { name: "Planetary Society", type: "Educational", url: "#" }
      ]
    },
    {
      title: "Research Tools",
      icon: <ExternalLink className="w-6 h-6" />,
      items: [
        { name: "arXiv Physics Papers", type: "Preprints", url: "https://arxiv.org/list/physics/recent" },
        { name: "SIMBAD Database", type: "Astronomical", url: "#" },
        { name: "NIST Physical Constants", type: "Reference", url: "#" },
        { name: "Wolfram Alpha", type: "Calculator", url: "#" }
      ]
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
            <span className="text-cosmic-gradient">Learning</span>
            <br />
            <span className="text-cosmic-cyan">Resources</span>
          </h1>
          <p className="text-xl text-cosmic-light max-w-3xl mx-auto">
            Curated collection of books, simulations, and tools to deepen your understanding of physics and astronomy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="card-cosmic p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="text-cosmic-cyan mr-3">
                  {category.icon}
                </div>
                <h2 className="font-heading font-bold text-xl text-cosmic-cyan">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.a
                    key={itemIndex}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-space-medium border border-cosmic-teal/30 rounded-lg hover:border-cosmic-cyan/50 hover:bg-space-medium/80 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-cosmic-light group-hover:text-cosmic-cyan transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-cosmic-teal">
                          {item.type}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-cosmic-light group-hover:text-cosmic-cyan transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;