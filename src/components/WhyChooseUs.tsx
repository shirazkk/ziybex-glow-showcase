import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, Target, Zap, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Lightbulb,
      title: "Creativity",
      description:
        "We bring fresh, innovative ideas that make your brand stand out in a crowded marketplace.",
    },
    {
      icon: Target,
      title: "Strategy",
      description:
        "Data-driven strategies tailored to your goals, ensuring every campaign delivers measurable results.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Cutting-edge technologies and modern approaches to keep you ahead of the competition.",
    },
    {
      icon: TrendingUp,
      title: "Results",
      description:
        "Proven track record of driving growth, engagement, and ROI for our clients across industries.",
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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            <span>Why Choose Us</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What Sets Us Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine creativity, strategy, and technology to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full hover:border-accent/50 transition-smooth">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth relative">
                    <feature.icon className="w-8 h-8 text-accent" />
                    <div className="absolute inset-0 bg-accent/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-smooth">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-smooth -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
