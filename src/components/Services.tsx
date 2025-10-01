import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Share2,
  Palette,
  Search,
  Globe,
  MousePointerClick,
  Film,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Build your brand presence across all social platforms with engaging content and strategic campaigns that drive results.",
    },
    {
      icon: Palette,
      title: "Branding & Creative Design",
      description:
        "Create a memorable brand identity with stunning visuals, logos, and design systems that resonate with your audience.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Boost your search rankings and organic traffic with proven SEO strategies that put your business on the map.",
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description:
        "Build fast, responsive, and beautiful websites that convert visitors into customers with modern technologies.",
    },
    {
      icon: MousePointerClick,
      title: "PPC & Google Ads",
      description:
        "Maximize your ROI with targeted advertising campaigns that reach the right audience at the right time.",
    },
    {
      icon: Film,
      title: "2D & 3D Animation",
      description:
        "Bring your ideas to life with captivating animations that engage and inspire your audience.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <span>Our Services</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and drive growth
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-smooth group hover:shadow-xl">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="absolute inset-0 bg-accent/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
