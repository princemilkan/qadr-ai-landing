import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/config/pricing";
import DemoRequestModal from "./DemoRequestModal";

const ownFeatures = [
  "Custom AI receptionist and business knowledge base",
  "24/7 inbound answering and lead qualification",
  "Emergency recognition and live transfer configuration",
  "Supported calendar booking and confirmations",
  "SMS confirmations where supported and activated",
  "One location and one primary AI receptionist",
  "Call workflow setup, testing and optimization",
  "Staff handover and 14-day post-launch defect correction",
];
const conciergeFeatures = [
  "Custom implementation and business-branded experience",
  "24/7 answering, intake and emergency routing",
  "Supported booking, SMS and email confirmations",
  "750 AI call minutes included each month",
  "Platform administration and Retell billing managed",
  "Call recordings and summaries where enabled",
  "Routine monitoring and monthly performance summary",
  "Workflow maintenance and two small changes monthly",
  "One location and one primary AI receptionist",
];
const questions = [
  ["What's the difference between Own It and Concierge?", "Own It is a one-time implementation in your Retell account. Concierge includes ongoing Qadr AI administration, monitoring and an included usage allowance."],
  ["Who owns the AI receptionist?", "With Own It, you control your Retell account and configuration. With Concierge, Qadr AI administers the managed service; data and handover arrangements are documented in your agreement."],
  ["Who pays the Retell AI bill?", "Own It clients pay Retell, telephony, SMS and third-party providers directly. Concierge includes managed Retell usage up to 750 AI call minutes per month."],
  ["Is there a setup fee?", "Yes. Own It is CAD $2,997 one-time. Concierge is CAD $997 one-time plus CAD $797 per month."],
  ["What happens after 750 AI minutes?", "Concierge usage beyond 750 AI minutes is billed at CAD $0.75 per additional minute."],
  ["Can you use my existing phone number?", "Often through supported call forwarding or number-porting arrangements, depending on your carrier and configuration. We verify feasibility before implementation."],
  ["Does the AI send SMS and email confirmations?", "SMS is available where supported and activated. Booking emails are delivered through the connected scheduling provider where supported."],
  ["Can it book appointments into my calendar?", "Yes, with a supported calendar or scheduling service configured for your workflow."],
  ["Can I request changes later?", "Concierge includes two small configuration changes monthly. Own It offers optional CAD $175/hour support or a CAD $197/month Care Plan including one hour monthly; unused time does not roll over. Major changes are quoted separately."],
  ["Is there a contract or cancellation policy?", "Proposed Concierge terms are an initial 90-day term, followed by month-to-month service with 30 days' notice, subject to the final signed agreement. Own It has no mandatory Qadr AI subscription."],
  ["Can you integrate Jobber, ServiceTitan or Housecall Pro?", "Advanced integrations are scoped and quoted individually after technical feasibility is confirmed. They are not represented as prebuilt or guaranteed."],
  ["What if I cancel Concierge?", "The managed service ends according to the signed agreement. Any data export, number transition or configuration transfer must be agreed during offboarding; no automatic transfer of Qadr AI-managed platform access is promised."],
];
const Pricing = () => {
  const [showDemo, setShowDemo] = useState(false);
  const card = (name: string, featured: boolean, features: string[]) => (
    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
      className={`relative glass-card rounded-3xl border ${featured ? "border-primary/60 bg-primary/5" : "border-border/50"} p-6 sm:p-8 flex flex-col min-w-0`}>
      {featured && <div className="inline-flex self-start items-center gap-2 rounded-full bg-primary/15 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary mb-5"><Sparkles className="h-3.5 w-3.5" /> Fully Managed · Recommended</div>}
      {!featured && <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">One-Time Investment</p>}
      <h3 className="text-2xl font-bold mb-2">Qadr AI — {name}</h3>
      <p className="text-muted-foreground text-sm mb-6">{featured ? "Your AI receptionist, fully managed by our team." : "Own your AI setup and choose support only when you need it."}</p>
      <div className="mb-2 flex flex-wrap items-end gap-2">
        <span className="text-5xl sm:text-6xl font-bold text-gradient">{featured ? "$797" : "$2,997"}</span>
        <span className="text-muted-foreground pb-1">{featured ? "CAD / month" : "CAD one-time"}</span>
      </div>
      <p className="text-sm text-primary font-medium mb-6">{featured ? "+ $997 CAD one-time implementation" : "$0 mandatory Qadr AI monthly subscription"}</p>
      <div className="border-t border-border/40 pt-6 space-y-4 flex-1">
        {features.map(feature => <div key={feature} className="flex gap-3 items-start text-sm"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span>{feature}</span></div>)}
      </div>
      <Button variant={featured ? "hero" : "heroOutline"} size="lg" className="w-full mt-8" onClick={() => featured ? setShowDemo(true) : window.open(PRICING.bookingUrl, "_blank", "noopener,noreferrer")}>
        {featured ? "Book a Free Demo" : "Get Your AI Built"} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <p className="text-xs text-muted-foreground mt-5 leading-relaxed">{featured
        ? `Includes ${PRICING.concierge.includedMinutes} AI minutes/month; additional minutes CAD $0.75 each. Significant changes, extra locations and integrations are quoted separately. Initial 90-day term proposed; final agreement governs.`
        : "Client owns and pays Retell directly for AI minutes, telephony, SMS and third-party subscriptions. Optional Care Plan CAD $197/month (one hour/month, no rollover), or on-demand work CAD $175/hour. Major work quoted separately."}</p>
    </motion.article>
  );
  return <section id="pricing" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
    <div className="container relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Simple, Transparent Pricing</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5">Choose How You Want <span className="text-gradient">Your AI Managed</span></h2>
        <p className="text-muted-foreground text-lg">Built for HVAC and other home-service teams. Choose complete ownership or let us handle the technology for you.</p>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
        {card("Own It", false, ownFeatures)}
        {card("Concierge", true, conciergeFeatures)}
      </div>
      <div className="max-w-6xl mx-auto mt-8 glass-card rounded-2xl border border-border/50 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div><h3 className="text-xl font-bold mb-2">Multi-Location & Advanced Integrations</h3><p className="text-sm text-muted-foreground max-w-2xl">Multiple agents, locations, specialized workflows, or integrations with Jobber, ServiceTitan and Housecall Pro? We'll assess feasibility and provide a custom quote.</p></div>
        <Button variant="heroOutline" onClick={() => setShowDemo(true)}>Request Custom Quote</Button>
      </div>
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Pricing Questions, Answered</h3>
        <div className="space-y-3">{questions.map(([q, a]) => <details key={q} className="glass-card rounded-xl border border-border/50 p-5 group"><summary className="cursor-pointer font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{q}</summary><p className="text-sm text-muted-foreground mt-3 leading-relaxed">{a}</p></details>)}</div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">All prices in CAD, before applicable taxes. Service terms and third-party capabilities are subject to written confirmation.</p>
    </div>
    <DemoRequestModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
  </section>;
};
export default Pricing;
