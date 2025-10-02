import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VideoSection from "@/components/video";
// import CompanyLogos from "@/components/companylogo";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Navbar />
      <Hero />
      <VideoSection />
      {/* <CompanyLogos/> */}
      <Services />
      <About />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
