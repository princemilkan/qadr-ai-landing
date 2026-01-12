import { motion } from "framer-motion";
import { Stethoscope, Building2, Briefcase, Store } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare",
    description: "Handle patient inquiries, book appointments, and manage cancellations automatically.",
  },
  {
    icon: Building2,
    title: "Offices",
    description: "Professional call handling for corporate offices and administrative teams.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Law firms, accounting, consulting—keep clients connected without interrupting billable work.",
  },
  {
    icon: Store,
    title: "Local Businesses",
    description: "Retail, salons, restaurants—never lose a customer because you couldn't answer the phone.",
  },
];

const WhoItsFor = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Who It's For</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Built for <span className="text-gradient">Growing Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're a solo practitioner or a multi-location business, Qadr AI adapts to your needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-secondary mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <industry.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
