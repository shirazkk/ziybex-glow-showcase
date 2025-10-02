import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Share2,
  Palette,
  Search,
  Globe,
  MousePointerClick,
  Film,
  ChevronDown,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { icon: Share2, title: "Social Media Marketing", href: "#services" },
    { icon: Palette, title: "Branding & Creative Design", href: "#services" },
    { icon: Search, title: "SEO Optimization", href: "#services" },
    { icon: Globe, title: "Website Design & Development", href: "#services" },
    { icon: MousePointerClick, title: "PPC & Google Ads", href: "#services" },
    { icon: Film, title: "2D & 3D Animation", href: "#services" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - fully left aligned */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className=""
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <img
              src="/ziybex_logo.png"
              alt="Ziybex logo"
              className="object-cover w-56 cursor-pointer"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home link */}
            <motion.a
              key={navLinks[0].name}
              href={navLinks[0].href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(navLinks[0].href);
              }}
              className="text-foreground/80 hover:text-accent transition-smooth font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {navLinks[0].name}
            </motion.a>

            {/* Our Services dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base text-foreground/80 hover:text-accent bg-transparent font-medium">
                    Our Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-6 w-[600px] bg-background/95 backdrop-blur-md">
                      {services.map((service) => (
                        <a
                          key={service.title}
                          href={service.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(service.href);
                          }}
                          className="group flex items-start gap-4 p-4 rounded-lg hover:bg-accent/10 transition-smooth border border-transparent hover:border-accent/20"
                        >
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth flex-shrink-0">
                            <service.icon className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-accent transition-smooth mb-1">
                              {service.title}
                            </h4>
                          </div>
                        </a>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Other nav links */}
            {navLinks.slice(1).map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-foreground/80 hover:text-accent transition-smooth font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}

            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent"
              onClick={() => scrollToSection("#contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 text-foreground"
                aria-label="Toggle menu"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {/* Home link */}
                <a
                  key={navLinks[0].name}
                  href={navLinks[0].href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(navLinks[0].href);
                  }}
                  className="text-foreground/80 hover:text-accent transition-smooth font-medium py-2"
                >
                  {navLinks[0].name}
                </a>

                {/* Our Services dropdown (accordion style) */}
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-2 text-foreground/80 hover:text-accent font-semibold transition-smooth"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  aria-expanded={isServicesOpen}
                  aria-controls="mobile-services-dropdown"
                >
                  <span>Our Services</span>
                  <ChevronDown
                    className={`ml-2 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      id="mobile-services-dropdown"
                      className="pl-4 flex flex-col gap-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {services.map((service) => (
                        <a
                          key={service.title}
                          href={service.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(service.href);
                            setIsServicesOpen(false); // Optionally close dropdown after click
                          }}
                          className="flex items-center gap-3 py-2 text-foreground/80 hover:text-accent transition-smooth"
                        >
                          <service.icon className="w-5 h-5 text-accent" />
                          <span className="text-sm">{service.title}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Other nav links */}
                {navLinks.slice(1).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-foreground/80 hover:text-accent transition-smooth font-medium py-2"
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-4"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
