import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PhoneIncoming, ShieldCheck, Bot, ClipboardCheck, Play, Pause, RotateCcw } from "lucide-react";

const steps = [
  { icon: PhoneIncoming, title: "Customer Calls", description: "A customer calls your business number." },
  { icon: ShieldCheck, title: "Spam Screening", description: "Suspicious calls are screened using your configured rules." },
  { icon: Bot, title: "AI Responds", description: "The AI answers questions, books appointments or routes the call." },
  { icon: ClipboardCheck, title: "You're Updated", description: "Your team receives the call details and next steps." },
];

const regularCall = [
  { status: "INCOMING CALL", message: "A homeowner calls to request a service appointment.", detail: "Qadr AI is ready to answer." },
  { status: "CALL SCREENING", message: "The call passes the configured screening checks.", detail: "Genuine callers can continue to the AI receptionist." },
  { status: "AI RECEPTIONIST", message: "“Absolutely! I can help arrange a visit.”", detail: "The AI gathers details and can book or route the request." },
  { status: "CALL SUMMARY", message: "New appointment request received.", detail: "Your team gets the relevant information." },
];
const suspiciousCall = [
  { status: "INCOMING CALL", message: "An unknown caller reaches your business.", detail: "The AI begins screening." },
  { status: "SUSPICIOUS CALL", message: "The call matches a configured screening rule.", detail: "Depending on your setup, it may be flagged or filtered." },
  { status: "SMART ROUTING", message: "The call follows your configured handling policy.", detail: "Uncertain callers can be routed for review." },
  { status: "CALL ACTIVITY", message: "A suspicious call was flagged.", detail: "Call activity is available where supported." },
];

const HowItWorks = () => {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [spamExample, setSpamExample] = useState(false);
  const current = (spamExample ? suspiciousCall : regularCall)[step];

  useEffect(() => {
    if (paused || reduceMotion) return;
    const interval = window.setInterval(() => setStep(previous => (previous + 1) % steps.length), 2300);
    return () => window.clearInterval(interval);
  }, [paused, reduceMotion]);

  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Every Call. <span className="text-gradient">Handled Intelligently.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how a call moves through Qadr AI, from the first ring to the final update.
          </p>
        </motion.div>

        <div className="glass-card rounded-3xl border border-border/50 p-5 sm:p-8 max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true" /> Call Flow Preview
            </span>
            <span className="text-xs text-muted-foreground">{reduceMotion ? "Use Replay to view the steps" : "Automatically repeating demonstration"}</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const active = index === step;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => { setStep(index); setPaused(true); }}
                  aria-pressed={active}
                  className={`text-left rounded-2xl border p-4 sm:p-5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${active ? "border-primary/70 bg-primary/10 shadow-lg shadow-primary/10" : "border-border/50 bg-background/40 hover:border-primary/30"}`}
                >
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                    <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-6 h-1 rounded-full bg-primary/10 overflow-hidden" aria-hidden="true">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
            />
          </div>

          <div className="mt-6 rounded-2xl border border-primary/20 bg-background/60 p-5 sm:p-7 min-h-36">
            <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-wide mb-3">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" /> {current.status}
            </div>
            <p className="text-lg sm:text-xl font-semibold" aria-live={paused ? "polite" : "off"}>{current.message}</p>
            <p className="text-sm text-muted-foreground mt-2">{current.detail}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button type="button" onClick={() => { setStep(0); setPaused(false); }} className="inline-flex items-center gap-2 rounded-lg border border-border/60 px-4 py-2 text-sm font-medium hover:border-primary/40 focus-visible:outline-primary"><RotateCcw className="h-4 w-4" /> Replay</button>
            <button type="button" onClick={() => setPaused(previous => !previous)} className="inline-flex items-center gap-2 rounded-lg border border-border/60 px-4 py-2 text-sm font-medium hover:border-primary/40 focus-visible:outline-primary">
              {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}{paused ? "Play" : "Pause"}
            </button>
            <button type="button" onClick={() => { setSpamExample(previous => !previous); setStep(0); }} className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 focus-visible:outline-primary">
              <ShieldCheck className="h-4 w-4" /> {spamExample ? "See Normal Call" : "See Spam Example"}
            </button>
          </div>
          <p className="text-center text-xs text-muted-foreground max-w-3xl mx-auto mt-6">
            Example workflow only. Spam screening and call routing depend on the configured phone platform and rules; no filtering accuracy or booking result is guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
