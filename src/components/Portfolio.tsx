import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern online store with seamless checkout experience",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete visual identity for a tech startup",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Social Media Campaign",
      category: "Marketing",
      description: "Viral campaign reaching 2M+ impressions",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      description: "Award-winning fitness tracking application",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "SEO Optimization",
      category: "Digital Marketing",
      description: "300% increase in organic traffic",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "3D Animation",
      category: "Animation",
      description: "Product showcase video with stunning visuals",
      gradient: "from-violet-500 to-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <span>Our Work</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Portfolio & Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their goals
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-smooth`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-smooth" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-smooth">
                  <div className="text-sm font-medium text-accent-foreground/80 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-smooth duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Hover icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-smooth" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
