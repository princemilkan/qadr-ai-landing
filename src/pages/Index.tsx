import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Services from "@/components/landing/Services";
import VideoDemo from "@/components/landing/VideoDemo";
import Benefits from "@/components/landing/Benefits";
import WhoItsFor from "@/components/landing/WhoItsFor";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <VideoDemo />
        <Benefits />
        <WhoItsFor />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
