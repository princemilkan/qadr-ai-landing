import { useState } from "react";
import { motion } from "framer-motion";
import { Check, TrendingUp, PhoneMissed, SlidersHorizontal } from "lucide-react";
import { PRICING } from "@/config/pricing";

type Plan = "concierge" | "own";
const currency = (n: number) => new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);
const number = (n: number, digits = 1) => new Intl.NumberFormat("en-CA", { maximumFractionDigits: digits }).format(n);
const safe = (n: number, max: number) => Number.isFinite(n) ? Math.min(max, Math.max(0, n)) : 0;

interface ControlProps { label: string; value: number; set: (v: number) => void; min?: number; max: number; step?: number; suffix?: string; description?: string }
function Control({ label, value, set, min = 0, max, step = 1, suffix, description }: ControlProps) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return <div className="mb-6">
    <div className="flex justify-between gap-3 items-center mb-2"><label htmlFor={id} className="text-sm font-medium">{label}</label>
      <div className="flex items-center gap-1"><input id={id} type="number" min={min} max={max} step={step} value={value} onChange={e => set(safe(e.target.valueAsNumber, max))} className="w-24 bg-slate-800/50 border border-slate-700 rounded-lg p-2 text-right text-primary font-semibold focus-visible:outline-primary" /><span className="text-xs text-muted-foreground">{suffix}</span></div>
    </div>
    <input aria-label={`Adjust ${label}`} type="range" min={min} max={max} step={step} value={Math.min(max, value)} onChange={e => set(Number(e.target.value))} className="slider w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" />
    <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>{min}</span><span>{number(max, 0)}</span></div>
    {description && <p className="text-xs text-muted-foreground mt-2">{description}</p>}
  </div>;
}
const ROICalculator = () => {
  const [calls, setCalls] = useState(20);
  const [missed, setMissed] = useState(60);
  const [jobValue, setJobValue] = useState(450);
  const [conversion, setConversion] = useState(30);
  const [recovery, setRecovery] = useState(60);
  const [margin, setMargin] = useState(40);
  const [aiCalls, setAiCalls] = useState(60);
  const [duration, setDuration] = useState(3);
  const [platform, setPlatform] = useState<number>(PRICING.ownIt.estimatedThirdPartyMonthly);
  const [care, setCare] = useState(false);
  const [plan, setPlan] = useState<Plan>("concierge");
  const monthlyCalls = calls * 30;
  const invalidMissed = missed > monthlyCalls;
  const effectiveMissed = invalidMissed ? 0 : missed;
  const missedRate = monthlyCalls ? (effectiveMissed / monthlyCalls) * 100 : 0;
  const potentialJobs = effectiveMissed * conversion / 100;
  const recoveredJobs = potentialJobs * recovery / 100;
  const revenue = recoveredJobs * jobValue;
  const grossProfit = revenue * margin / 100;
  const aiMinutes = aiCalls * duration;
  const overageMinutes = Math.max(0, aiMinutes - PRICING.concierge.includedMinutes);
  const overage = overageMinutes * PRICING.concierge.overagePerMinute;
  const managed = plan === "concierge";
  const monthlyOperating = managed ? PRICING.concierge.monthly + overage : platform + (care ? PRICING.ownIt.careMonthly : 0);
  const setup = managed ? PRICING.concierge.setup : PRICING.ownIt.setup;
  const setupEquivalent = setup / 12;
  const totalEquivalent = monthlyOperating + setupEquivalent;
  const net = grossProfit - totalEquivalent;
  const roi = totalEquivalent > 0 ? net / totalEquivalent * 100 : 0;
  const grossProfitPerJob = jobValue * margin / 100;
  const breakEven = grossProfitPerJob > 0 ? Math.ceil(totalEquivalent / grossProfitPerJob) : null;
  const row = (label: string, value: string, highlight = false) => <div className="flex items-center justify-between gap-4 border-b border-border/30 pb-3"><span className="text-sm text-muted-foreground">{label}</span><strong className={highlight ? "text-primary text-lg text-right" : "text-right"}>{value}</strong></div>;
  return <section id="roi-calculator" className="py-12 md:py-16 bg-gradient-to-b from-background to-background/50">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-primary text-sm font-medium uppercase tracking-wider">ROI Calculator</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">What Could Answering More Calls <span className="text-gradient">Mean for Your Business?</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Estimate potential recovered jobs, gross profit and the cost of a professionally implemented AI receptionist.</p>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-6 sm:p-8 rounded-2xl border border-border/50 min-w-0">
          <h3 className="text-2xl font-bold mb-6">Your Business Details</h3>
          <Control label="Average Calls Per Day" value={calls} set={setCalls} max={500} description={`Estimated ${number(monthlyCalls, 0)} calls/month (30-day month).`} />
          <Control label="Missed Calls Per Month" value={missed} set={setMissed} max={Math.max(1, monthlyCalls)} description={`Missed call rate: ${number(missedRate)}% of estimated monthly calls.`} />
          {invalidMissed && <p role="alert" className="text-sm text-red-400 mb-5">Missed calls cannot exceed {number(monthlyCalls, 0)} monthly calls. Reduce missed calls or increase daily calls to see results.</p>}
          <Control label="Average Job Value" value={jobValue} set={setJobValue} max={20000} step={50} suffix="CAD" />
          <details className="border-t border-border/40 pt-5 group">
            <summary className="flex items-center gap-2 cursor-pointer font-semibold text-primary"><SlidersHorizontal className="h-4 w-4" /> Adjust My Business Assumptions</summary>
            <div className="pt-6">
              <Control label="Potential Customer Conversion Rate" value={conversion} set={setConversion} max={100} suffix="%" description="Of missed calls, the percentage that could have become paying jobs if answered." />
              <Control label="AI Lead Recovery Rate" value={recovery} set={setRecovery} max={100} suffix="%" description="Of those potential jobs, the share the AI may help recover." />
              <Control label="Gross Profit Margin" value={margin} set={setMargin} max={100} suffix="%" description="Job revenue left after direct job-delivery costs, before Qadr AI costs." />
              <Control label="Estimated AI-Handled Calls Per Month" value={aiCalls} set={setAiCalls} max={10000} description="AI may handle more than missed calls, depending on forwarding setup." />
              <Control label="Average AI Call Duration" value={duration} set={setDuration} max={30} step={0.5} suffix="min" />
            </div>
          </details>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 min-w-0" aria-live="polite">
          <div className="glass-card p-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-sm text-muted-foreground mb-2">Compare Qadr AI plans</p>
            <div className="grid grid-cols-2 gap-2 bg-background/50 rounded-xl p-1" role="group" aria-label="Pricing plan">
              <button type="button" aria-pressed={managed} onClick={() => setPlan("concierge")} className={`rounded-lg p-3 text-sm font-semibold transition-colors ${managed ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>Fully Managed</button>
              <button type="button" aria-pressed={!managed} onClick={() => setPlan("own")} className={`rounded-lg p-3 text-sm font-semibold transition-colors ${!managed ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>Own It</button>
            </div>
            {managed ? <p className="text-xs text-muted-foreground mt-4">{number(aiMinutes)} estimated AI minutes · 750 included · {number(overageMinutes)} additional minutes ({currency(overage)} overage).</p> : <div className="mt-5">
              <Control label="Estimated Third-Party Monthly Cost" value={platform} set={setPlatform} max={10000} step={10} suffix="CAD" description="Your estimate, not a guaranteed Retell rate. Includes expected platform, telephony, SMS and other provider costs." />
              <label className="flex gap-3 items-center text-sm cursor-pointer"><input type="checkbox" checked={care} onChange={e => setCare(e.target.checked)} className="accent-primary h-4 w-4" /> Add optional Care Plan — CAD $197/month</label>
            </div>}
          </div>
          <div className="glass-card p-7 sm:p-8 rounded-2xl border border-primary/30 text-center">
            <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-2">Potential Additional Monthly Gross Profit</p>
            <p className="text-4xl sm:text-5xl font-bold text-gradient break-words">{currency(grossProfit)}</p>
            <p className="text-xs text-muted-foreground mt-3">Gross profit = additional revenue less direct job-delivery costs; it is not net profit.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-border/50">
            <div className="flex gap-3 items-start mb-5"><PhoneMissed className="h-5 w-5 text-red-400 shrink-0" /><div><h4 className="font-bold">Without Qadr AI</h4><p className="text-sm text-muted-foreground">{number(potentialJobs)} potential paying jobs from {number(effectiveMissed, 0)} missed calls/month.</p></div></div>
            <div className="h-2 rounded-full bg-red-500/15 overflow-hidden mb-5"><div className="h-full bg-red-400/70 rounded-full transition-all duration-300" style={{ width: `${conversion}%` }} /></div>
            <div className="flex gap-3 items-start mb-4"><Check className="h-5 w-5 text-primary shrink-0" /><div><h4 className="font-bold">With Qadr AI (Estimate)</h4><p className="text-sm text-muted-foreground">{number(recoveredJobs)} potentially recovered completed jobs/month.</p></div></div>
            <div className="h-2 rounded-full bg-primary/15 overflow-hidden"><div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${recovery}%` }} /></div>
          </div>
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border/50 space-y-4">
            {row("Potential additional monthly revenue", currency(revenue))}
            {row("Estimated recovered paying jobs", number(recoveredJobs))}
            {row("Monthly operating cost", currency(monthlyOperating))}
            {row("One-time implementation fee (upfront)", currency(setup))}
            {row("Setup fee / 12 (comparison only)", new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(setupEquivalent))}
            {row("Estimated monthly equivalent cost", new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(totalEquivalent))}
            {row("Estimated net monthly benefit", currency(net), true)}
            {row("Estimated ROI", `${number(roi)}%`, true)}
            {row("Additional completed jobs to break even", breakEven === null ? "N/A" : number(breakEven, 0), true)}
            <div className="rounded-xl bg-primary/10 p-4 text-sm">{breakEven === null ? "Break-even jobs are unavailable when gross profit per job is zero." : `Based on your assumptions, ${breakEven} additional completed jobs per month could cover the estimated monthly equivalent cost of Qadr AI.`}</div>
            <p className="text-xs text-muted-foreground">Setup fees are payable upfront, not monthly. Dividing by 12 is only a comparison method.</p>
          </div>
          <div className="text-center pt-2">
            <h4 className="font-bold text-xl mb-4">See How Qadr AI Could Work for Your Business</h4>
            <a href={PRICING.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-colors">Book Your Free Demo</a>
          </div>
        </motion.div>
      </div>
      <p className="max-w-5xl mx-auto text-xs text-muted-foreground text-center mt-8">Illustrative estimates based on your inputs, not guaranteed results. Actual bookings, customer conversion, profit margins, AI usage, and operating costs vary. Prices in CAD; applicable taxes and third-party charges may be additional.</p>
    </div>
    <style>{`.slider::-webkit-slider-thumb{appearance:none;width:20px;height:20px;background:hsl(var(--primary));border-radius:50%;cursor:pointer}.slider::-moz-range-thumb{width:20px;height:20px;background:hsl(var(--primary));border-radius:50%;border:0}`}</style>
  </section>;
};
export default ROICalculator;
