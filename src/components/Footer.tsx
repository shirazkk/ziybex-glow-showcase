import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About Us", "Our Services", "Portfolio", "Testimonials"],
    Services: [
      "Social Media Marketing",
      "Branding & Design",
      "Web Development",
      "SEO Optimization",
    ],
    Support: ["Contact Us", "FAQ", "Privacy Policy", "Terms of Service"],
  };

  const scrollToSection = (href: string) => {
    const sectionMap: { [key: string]: string } = {
      "About Us": "#about",
      "Our Services": "#services",
      Portfolio: "#portfolio",
      Testimonials: "#testimonials",
      "Contact Us": "#contact",
    };

    const sectionId = sectionMap[href];
    if (sectionId) {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3
                className="font-bold text-3xl mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ziybex<span className="text-accent">.</span>
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
                Transforming businesses through innovative digital solutions. We help brands grow,
                connect, and stand out in the digital landscape.
              </p>
              <div className="flex gap-4">
                {["F", "T", "I", "L"].map((letter, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                    aria-label={`Social media link ${letter}`}
                  >
                    <span className="font-bold">{letter}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className="text-primary-foreground/70 hover:text-accent transition-smooth cursor-pointer text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Ziybex Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-smooth"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-smooth"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-smooth"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
