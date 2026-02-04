
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const features = [
    "24/7 AI Voice Receptionist",
    "Unlimited Call Handling",
    "Natural Language Understanding",
    "Appointment Booking & Scheduling",
    "Call Transcriptions & Summaries",
    "CRM Integration",
    "Multi-language Support",
    "Real-time Analytics Dashboard",
    "Custom Voice & Personality",
    "SMS & Email Follow-ups",
    "Priority Support",
    "No Setup Fees"
  ];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One flat rate. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Pricing Card */}
          <div className="relative glass-card p-8 md:p-12 rounded-3xl border-2 border-primary/30 overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-2 text-sm font-semibold flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              BEST VALUE
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Professional Plan</h3>
                <p className="text-muted-foreground mb-6">Everything you need to never miss a call</p>
                
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-6xl md:text-7xl font-bold text-gradient">$297</span>
                  <span className="text-2xl text-muted-foreground pb-2">/month</span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Less than the cost of a part-time receptionist
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm md:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Money Back Guarantee */}
              <div className="mb-8 p-6 bg-primary/5 border border-primary/20 rounded-xl text-center">
                <p className="font-semibold text-lg mb-1">30-Day Money-Back Guarantee</p>
                <p className="text-sm text-muted-foreground">
                  Not satisfied? Get a full refund, no questions asked.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="xl"
                  className="w-full sm:w-auto"
                  onClick={() => window.open('https://calendly.com/qadrai_com', '_blank')}
                >
                  Get Started Now
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="xl"
                  className="w-full sm:w-auto"
                  onClick={() => setShowDemoModal(true)}
                >
                  Request a Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-border/50 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ or Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Questions about pricing or need a custom plan?
            </p>
            <a 
              href="https://calendly.com/qadrai_com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Talk to our team →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
