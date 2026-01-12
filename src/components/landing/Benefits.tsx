import { motion } from "framer-motion";
import { PhoneOff, Users, Zap, Clock, Heart, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: PhoneOff,
    title: "Never Miss Business Calls",
    description: "Every call gets answered, every time—even during peak hours or after midnight.",
  },
  {
    icon: Users,
    title: "Reduce Staff Workload",
    description: "Free your team from repetitive phone tasks so they can focus on high-value work.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "No hold times, no transfers. Customers get answers and bookings immediately.",
  },
  {
    icon: Clock,
    title: "Works After Hours",
    description: "Your AI receptionist never sleeps. Capture leads and bookings 24/7/365.",
  },
  {
    icon: Heart,
    title: "Improves Customer Experience",
    description: "Consistent, friendly service on every call builds trust and loyalty.",
  },
  {
    icon: CheckCircle2,
    title: "Scales With Your Business",
    description: "Handle 10 or 10,000 calls without hiring additional staff.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Qadr AI</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Benefits That <span className="text-gradient">Transform Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join hundreds of businesses that have revolutionized their customer communication.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-6 rounded-xl border border-border/40 hover:border-primary/30 bg-card/50 hover:bg-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
