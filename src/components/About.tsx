import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 500, suffix: "+", label: "Projects Completed" },
    { number: 300, suffix: "+", label: "Happy Clients" },
    { number: 8, suffix: "+", label: "Years in Business" },
    { number: 25, suffix: "+", label: "Team Members" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Ziybex team collaboration"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-xl border border-border"
            >
              <div className="text-4xl font-bold text-accent mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              <span>About Us</span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Who We Are
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Ziybex Solutions, we're not just a digital agency – we're your strategic partner
              in growth. With over 8 years of experience, we've helped hundreds of businesses
              transform their digital presence and achieve remarkable results.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of creative designers, strategic marketers, and skilled developers work
              together to deliver solutions that don't just look good – they drive real business
              outcomes. We believe in the power of innovation, creativity, and data-driven
              strategies.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <CounterCard key={index} stat={stat} inView={inView} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CounterCard = ({
  stat,
  inView,
  delay,
}: {
  stat: { number: number; suffix: string; label: string };
  inView: boolean;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, stat.number]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-accent/50 transition-smooth"
    >
      <div className="text-3xl font-bold text-accent mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </motion.div>
  );
};

export default About;
