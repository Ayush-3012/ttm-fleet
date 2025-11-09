import Benefits from "@/components/Benefits";
import ContactSection from "@/components/ContactSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <ContactSection />
      <Footer />
    </>
  );
}
