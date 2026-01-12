import { motion } from "framer-motion";
import { Headphones, CalendarCheck, PhoneMissed, FileText } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "AI Receptionist",
    description: "24/7 intelligent call handling that never takes a break. Your AI answers every call with professionalism and care.",
    highlight: "24/7 Availability",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description: "Seamlessly schedule appointments directly during calls. Syncs with your calendar in real-time.",
    highlight: "Auto-Scheduling",
  },
  {
    icon: PhoneMissed,
    title: "Missed Call Recovery",
    description: "Automatically follows up on missed calls so you never lose a potential customer again.",
    highlight: "Zero Missed Leads",
  },
  {
    icon: FileText,
    title: "Call Summary & Notifications",
    description: "Get instant summaries and notifications after each call. Stay informed without listening to recordings.",
    highlight: "Real-time Alerts",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Everything You Need to <span className="text-gradient">Never Miss a Call</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete AI-powered phone solution designed to maximize every customer interaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-gradient rounded-2xl p-8 border border-border/50 h-full hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {service.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
