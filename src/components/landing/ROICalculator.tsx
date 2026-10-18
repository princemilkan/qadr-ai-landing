import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneMissed } from "lucide-react";
import { PRICING } from "@/config/pricing";

type Plan = "concierge" | "own";
const currency = (amount: number) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);
const clamp = (value: number, max: number) =>
  Number.isFinite(value) ? Math.min(max, Math.max(0, value)) : 0;

interface CalculatorInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  max: number;
  step: number;
}

function CalculatorInput({ id, label, value, onChange, max, step }: CalculatorInputProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm sm:text-base font-medium">{label}</label>
        <input
          id={id}
          aria-label={label}
          type="number"
          min={0}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(clamp(event.target.valueAsNumber, max))}
          className="w-24 sm:w-32 rounded-lg border border-border/60 bg-background/60 px-3 py-2 text-right font-semibold text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        />
      </div>
      <input
        aria-label={`Adjust ${label}`}
        type="range"
        min={0}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="roi-slider w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-700 accent-primary"
      />
    </div>
  );
}

const ROICalculator = () => {
  const [missedCalls, setMissedCalls] = useState(30);
  const [jobValue, setJobValue] = useState(450);
  const [plan, setPlan] = useState<Plan>("concierge");

  const missedJobValue = missedCalls * jobValue;
  const isConcierge = plan === "concierge";
  const setup = isConcierge ? PRICING.concierge.setup : PRICING.ownIt.setup;
  const monthlyEquivalent = (isConcierge ? PRICING.concierge.monthly : 0) + setup / 12;
  const revenueAfterCost = missedJobValue - monthlyEquivalent;

  return (
    <section id="roi-calculator" className="py-12 md:py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Missed Revenue Calculator</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            How Much Are Missed Calls <span className="text-gradient">Costing You?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enter two numbers to see the value of missed jobs and compare our plans.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-border/50 p-6 sm:p-8 space-y-8"
          >
            <CalculatorInput id="missed-calls" label="Missed calls per month" value={missedCalls} onChange={setMissedCalls} max={1000} step={1} />
            <CalculatorInput id="job-value" label="Average job value (CAD)" value={jobValue} onChange={setJobValue} max={20000} step={50} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-500/40 bg-red-500/10 p-7 sm:p-10 text-center"
            aria-live="polite"
          >
            <div className="flex justify-center items-center gap-2 mb-3">
              <PhoneMissed className="h-5 w-5 text-red-400" aria-hidden="true" />
              <p className="text-sm sm:text-base font-semibold">Revenue You're Losing Every Month*</p>
            </div>
            <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-red-500 break-words tabular-nums">
              {currency(missedJobValue)}
            </p>
          </motion.div>

          <div className="glass-card rounded-2xl border border-border/50 p-6 sm:p-8 space-y-5">
            <h3 className="text-xl font-bold">Choose Your Plan</h3>
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-background/50 p-1" role="group" aria-label="Pricing plan">
              <button
                type="button"
                aria-pressed={isConcierge}
                onClick={() => setPlan("concierge")}
                className={`rounded-lg px-3 py-3 font-semibold text-sm transition-colors ${isConcierge ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                Concierge
              </button>
              <button
                type="button"
                aria-pressed={!isConcierge}
                onClick={() => setPlan("own")}
                className={`rounded-lg px-3 py-3 font-semibold text-sm transition-colors ${!isConcierge ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                Own It
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between gap-4 text-sm sm:text-base">
                <span className="text-muted-foreground">Missed-job value</span>
                <strong className="tabular-nums">{currency(missedJobValue)}</strong>
              </div>
              <div className="flex justify-between gap-4 text-sm sm:text-base">
                <span className="text-muted-foreground">Monthly equivalent plan cost</span>
                <strong className="tabular-nums">−{currency(monthlyEquivalent)}</strong>
              </div>
              <div className="border-t border-border/50 pt-5">
                <p className="text-sm text-muted-foreground mb-2">Revenue After Qadr AI Cost</p>
                <p aria-live="polite" className={`text-4xl sm:text-5xl font-extrabold tabular-nums break-words ${revenueAfterCost >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                  {currency(revenueAfterCost)}
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              {isConcierge
                ? `Includes ${currency(PRICING.concierge.monthly)}/month and ${currency(PRICING.concierge.setup)} setup spread across 12 months for comparison. Usage overages excluded.`
                : `Includes ${currency(PRICING.ownIt.setup)} one-time setup spread across 12 months for comparison. Third-party charges and optional support excluded.`}
              Setup fees are payable upfront.
            </p>
          </div>

          <div className="text-center space-y-4">
            <a
              href={PRICING.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book Your Free Demo
            </a>
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              *Illustrative best-case scenario assuming every missed call represents a paying job and all missed-job revenue could be recovered. Actual results will vary. Revenue after the displayed plan cost is not business profit. Prices in CAD; taxes and additional charges may apply.
            </p>
          </div>
        </div>
      </div>
      <style>{`.roi-slider::-webkit-slider-thumb{appearance:none;width:20px;height:20px;background:hsl(var(--primary));border-radius:50%;cursor:pointer}.roi-slider::-moz-range-thumb{width:20px;height:20px;background:hsl(var(--primary));border-radius:50%;border:0}`}</style>
    </section>
  );
};

export default ROICalculator;
