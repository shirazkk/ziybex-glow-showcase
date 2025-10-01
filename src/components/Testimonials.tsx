import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content:
        "Ziybex transformed our entire digital presence. Their strategic approach and creative solutions helped us increase our online engagement by 400%. Absolutely phenomenal work!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content:
        "Working with Ziybex was a game-changer for our business. Their team's expertise in SEO and PPC brought us qualified leads and a 250% ROI in just 6 months.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, CreativeHub",
      content:
        "The branding and design work exceeded all expectations. Ziybex truly understood our vision and brought it to life with stunning visuals and a cohesive brand identity.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "E-commerce Manager, ShopSmart",
      content:
        "Our new website is not just beautiful – it's a conversion machine. Sales increased by 180% within the first quarter. The Ziybex team is simply outstanding.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
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
            <span>Testimonials</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it – hear from the businesses we've helped grow
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12"
              >
                <Quote className="w-12 h-12 text-accent mb-6" />

                <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/40 rounded-full flex items-center justify-center text-2xl font-bold text-accent">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-lg">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex gap-1 mt-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-2 hover:border-accent hover:text-accent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === activeIndex ? "bg-accent w-8" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-2 hover:border-accent hover:text-accent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
