import { motion } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Mystery of Dark Matter: What We Know So Far",
      author: "Ameetesh Awadh",
      date: "2025-09-02",
      readTime: "8 min read",
      excerpt: "Exploring the invisible substance that makes up 85% of all matter in the universe and the ongoing efforts to detect it directly.",
      category: "Cosmology",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=400&fit=crop"
    },
    {
      title: "Building Our Radio Telescope: A Student's Journey",
      author: "Amritha S Nair", 
      date: "2025-09-22",
      readTime: "6 min read",
      excerpt: "A detailed account of our club's ambitious project to construct a radio telescope from scratch and the lessons learned along the way.",
      category: "DIY Projects",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=400&fit=crop"
    },
    {
      title: "Quantum Entanglement Explained Simply",
      author: "Harkeerat Singh",
      date: "2025-10-05",
      readTime: "10 min read", 
      excerpt: "Breaking down one of quantum mechanics' most fascinating phenomena in terms that everyone can understand.",
      category: "Quantum Physics",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop"
    },
    {
      title: "Photographing the Night Sky: Tips for Beginners",
      author: "Arnav Srivastava",
      date: "2025-11-02",
      readTime: "5 min read",
      excerpt: "Essential techniques and equipment recommendations for capturing stunning astrophotography images.",
      category: "Astrophotography",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=400&fit=crop"
    },
    {
      title: "The Physics of Black Holes: Beyond the Event Horizon",
      author: "Nikhil Ria",
      date: "2025-12-28",
      readTime: "12 min read",
      excerpt: "Delving into the extreme physics that occurs near black holes and what recent observations have taught us.",
      category: "Theoretical Physics",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=400&fit=crop"
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
            <span className="text-cosmic-gradient">Physics</span>
            <br />
            <span className="text-cosmic-cyan">Blog</span>
          </h1>
          <p className="text-xl text-cosmic-light max-w-3xl mx-auto">
            Insights, discoveries, and stories from our community of physics and astronomy enthusiasts.
          </p>
        </motion.div>

        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="card-cosmic overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-xs text-cosmic-teal font-medium px-3 py-1 rounded-full bg-cosmic-teal/20">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-2xl text-cosmic-cyan mb-4 hover:text-cosmic-teal transition-colors cursor-pointer">
                    {post.title}
                  </h2>

                  <p className="text-cosmic-light mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-cosmic-light">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-cosmic-teal" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-cosmic-teal" />
                        {post.readTime}
                      </div>
                      <div>
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    <button className="btn-ghost-cosmic inline-flex items-center px-4 py-2 text-sm group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;