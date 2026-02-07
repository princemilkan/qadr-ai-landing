import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Wrench, AlertTriangle } from "lucide-react";
import DemoRequestModal from "./DemoRequestModal";

const Pricing = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const hvacFeatures = [
    "Emergency vs Routine Call Detection",
    "System Make/Model Collection",
    "Seasonal Messaging (Furnace/AC)",
    "CRM & Scheduling System Integration",
    "Technician Dispatch Alerts",
    "Custom Pricing for YOUR Services"
  ];

  const includedFeatures = [
    "24/7 AI Answering - Never Miss Emergency Calls",
    "Automatic Appointment Booking",
    "SMS & Email Confirmations",
    "Calendar Integration",
    "Monthly Performance Reports",
    "Direct Founder Support (Text/Call Anytime)",
    "500 Minutes Included (~125-150 calls)",
    "Call Transcriptions & Summaries",
    "Multi-language Support",
    "Call Performance & Revenue Insights"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Wrench className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-semibold">HVAC & Home Services Specialist</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Built for <span className="text-gradient">HVAC Companies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not a generic service. Purpose-built for Home Service and HVAC businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Pricing Card */}
          <div className="relative glass-card p-8 md:p-12 rounded-3xl border-2 border-primary/30 overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-2 text-sm font-semibold flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              LIMITED TO 10 CLIENTS
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">HVAC-Specialist Plan</h3>
                <p className="text-muted-foreground mb-6">White-glove service, not mass-market software</p>
                
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-6xl md:text-7xl font-bold text-gradient">$397</span>
                  <span className="text-2xl text-muted-foreground pb-2">CAD/month</span>
                </div>
                
                <p className="text-sm text-primary font-medium mb-4">
                  Includes 500 minutes (~125-150 calls)
                </p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/30">
                  <AlertTriangle className="h-4 w-4 text-orange-400" />
                  <span className="text-sm text-orange-400 font-medium">
                    $1.00/min beyond 500 minutes (alerts at 450 mins)
                  </span>
                </div>
              </div>

              {/* HVAC-Specific Features */}
              <div className="mb-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-lg">HVAC-Specific Features</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {hvacFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included Features */}
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-4">Everything Included</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {includedFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Setup Fee - PROMINENT & EYE-CATCHING */}
              <div className="mb-8 relative">
                {/* "FREE" Badge floating on top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full shadow-lg shadow-green-500/30 font-bold text-sm flex items-center gap-2 animate-pulse">
                    <Sparkles className="h-4 w-4" />
                    SETUP FEE WAIVED - SAVE $395!
                  </div>
                </div>
                
                <div className="p-6 pt-10 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent border-2 border-green-500/30 rounded-xl shadow-lg shadow-green-500/10">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <div className="flex-1">
                      <p className="font-bold text-xl mb-2 text-green-400">
                        🎉 Limited-Time Offer for First 10 Clients
                      </p>
                      <p className="text-sm text-muted-foreground">
                        5+ hours of HVAC-specific customization • Normally $395 • <span className="text-green-400 font-semibold">FREE for early adopters</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                      <div className="relative">
                        <p className="text-5xl md:text-6xl font-bold text-red-400 line-through decoration-4">$395</p>
                        <div className="absolute -top-2 -right-14 md:-right-16 rotate-12 bg-green-500 text-white px-4 py-2 rounded-lg text-base font-bold shadow-xl shadow-green-500/40 border-2 border-white">
                          FREE!
                        </div>
                      </div>
                      <p className="text-sm text-green-400 font-bold mt-2 bg-green-500/20 px-4 py-1 rounded-full">
                        ✓ You save $395!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="mb-8 p-6 bg-green-500/5 border border-green-500/20 rounded-xl text-center">
                <p className="font-semibold text-lg mb-1 text-green-400">30-Day Money-Back Guarantee</p>
                <p className="text-sm text-muted-foreground">
                  Not satisfied? Get a full refund, no questions asked.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  variant="hero" 
                  size="xl"
                  className="w-full sm:w-auto"
                  onClick={() => window.open('https://calendly.com/qadrai_com', '_blank')}
                >
                  Book Your Setup Call
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
              <div className="pt-6 border-t border-border/50 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Limited to 10 Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Direct Founder Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Most HVAC companies use 400-800 minutes/month. Need a custom plan?
            </p>
            <a 
              href="https://calendly.com/qadrai_com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Talk to our founder directly →
            </a>
          </div>
        </motion.div>
      </div>

      <DemoRequestModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </section>
  );
};

export default Pricing;
