import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DemoRequestModal from "./DemoRequestModal";

const CTA = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <>
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
            <div className="absolute inset-0 card-gradient" />
            
            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your <span className="text-gradient">Customer Calls?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Join hundreds of businesses already using Qadr AI to deliver exceptional customer experiences. 
                See it in action with a personalized demo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => setShowDemoModal(true)}
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="lg"
                  onClick={() => window.open('https://calendly.com/qadrai_com', '_blank')}
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </>
  );
};

export default CTA;
