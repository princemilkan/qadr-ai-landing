import { motion } from "framer-motion";
import { Phone, Brain, Calendar } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Customer Calls Your Business",
    description: "A customer dials your number. Instead of voicemail or endless ringing, they're greeted by your AI voice agent.",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Understands & Responds",
    description: "Our AI listens, understands the caller's intent, and responds naturally—just like a trained receptionist would.",
  },
  {
    icon: Calendar,
    step: "03",
    title: "Books or Routes Instantly",
    description: "Whether it's booking an appointment, answering FAQs, or routing to the right person, the AI handles it seamlessly.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Simple. Seamless. <span className="text-gradient">Intelligent.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Set up in minutes. Let AI handle your calls 24/7 while you focus on what matters most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="card-gradient rounded-2xl p-8 border border-border/50 h-full hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-5xl font-bold text-muted/30">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
