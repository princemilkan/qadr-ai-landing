import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Phone, AlertCircle } from "lucide-react";

const ROICalculator = () => {
  const [callsPerDay, setCallsPerDay] = useState(50);
  const [missedCallsPerMonth, setMissedCallsPerMonth] = useState(30);
  const [avgCustomerValue, setAvgCustomerValue] = useState(200);
  const [industry, setIndustry] = useState("general");

  // Industry conversion rates (% of missed calls that would have converted)
  const conversionRates: { [key: string]: number } = {
    healthcare: 0.35,
    dental: 0.40,
    legal: 0.30,
    realestate: 0.25,
    homeservices: 0.35,
    retail: 0.20,
    restaurant: 0.45,
    general: 0.30
  };

  const conversionRate = conversionRates[industry];

  // Calculations
  const totalCallsPerMonth = callsPerDay * 30;
  const missedCallRate = ((missedCallsPerMonth / totalCallsPerMonth) * 100).toFixed(1);
  const convertedCalls = missedCallsPerMonth * conversionRate;
  const monthlyLoss = convertedCalls * avgCustomerValue;
  const annualLoss = monthlyLoss * 12;
  
  const qadrCost = 297;
  const monthlySavings = monthlyLoss - qadrCost;
  const annualSavings = monthlySavings * 12;
  const roi = ((monthlySavings / qadrCost) * 100).toFixed(0);
  const breakEvenDays = Math.ceil((qadrCost / monthlyLoss) * 30);

  return (
    <section id="roi-calculator" className="py-12 md:py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">ROI Calculator</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            See How Much <span className="text-gradient">Missed Calls</span> Are Costing You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every missed call is a missed opportunity. Calculate your potential losses and see how Qadr AI can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-6">Your Business Details</h3>
            
            {/* Calls Per Day */}
            <div className="mb-8">
              <label className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Calls received per day</span>
                <span className="text-primary font-bold text-lg">{callsPerDay}</span>
              </label>
              <input
                type="range"
                min="10"
                max="500"
                value={callsPerDay}
                onChange={(e) => setCallsPerDay(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            {/* Missed Calls Per Month */}
            <div className="mb-8">
              <label className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Missed calls per month</span>
                <span className="text-primary font-bold text-lg">{missedCallsPerMonth}</span>
              </label>
              <input
                type="range"
                min="5"
                max="300"
                value={missedCallsPerMonth}
                onChange={(e) => setMissedCallsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>5</span>
                <span>300</span>
              </div>
              <p className="text-xs text-red-400 mt-2 font-medium">
                You're missing {missedCallRate}% of your calls
              </p>
            </div>

            {/* Average Customer Value */}
            <div className="mb-8">
              <label className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Average customer value ($)</span>
                <span className="text-primary font-bold text-lg">${avgCustomerValue}</span>
              </label>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={avgCustomerValue}
                onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>$50</span>
                <span>$5,000</span>
              </div>
            </div>

            {/* Industry */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Industry Type</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
              >
                <option value="general">General Business</option>
                <option value="healthcare">Healthcare</option>
                <option value="dental">Dental</option>
                <option value="legal">Legal</option>
                <option value="realestate">Real Estate</option>
                <option value="homeservices">Home Services</option>
                <option value="retail">Retail</option>
                <option value="restaurant">Restaurant</option>
              </select>
              <p className="text-xs text-muted-foreground mt-2">
                Different industries have different call-to-customer conversion rates
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Alert Box */}
            <div className="glass-card p-6 rounded-2xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-red-400 mb-2">You're Losing Money Every Month</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📞 <span className="text-white font-semibold">{missedCallsPerMonth}</span> missed calls per month ({missedCallRate}% of total)</p>
                    <p>💔 <span className="text-white font-semibold">{convertedCalls.toFixed(0)}</span> lost opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Loss */}
            <div className="glass-card p-8 rounded-2xl border border-border/50 text-center">
              <DollarSign className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <p className="text-muted-foreground text-sm mb-2">Monthly Revenue Lost</p>
              <p className="text-5xl font-bold text-gradient mb-2">
                ${monthlyLoss.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">
                ${annualLoss.toLocaleString()} per year
              </p>
            </div>

            {/* With Qadr AI */}
            <div className="glass-card p-8 rounded-2xl border border-primary/30 bg-primary/5">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-4 text-center">With Qadr AI</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border/30">
                  <span className="text-muted-foreground">Qadr AI Cost</span>
                  <span className="font-bold text-white">${qadrCost}/month</span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-border/30">
                  <span className="text-muted-foreground">Losses Prevented</span>
                  <span className="font-bold text-primary">+${monthlyLoss.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-border/30">
                  <span className="text-muted-foreground">Net Monthly Savings</span>
                  <span className="font-bold text-2xl text-primary">${monthlySavings.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">ROI</span>
                  <span className="font-bold text-2xl text-primary">{roi}%</span>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-center">
                    <span className="text-primary font-bold">Pays for itself in {breakEvenDays} days</span>
                    <br />
                    <span className="text-muted-foreground">Save ${annualSavings.toLocaleString()} per year</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <a 
                href="#pricing"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-primary/30"
              >
                Start Saving Today
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: hsl(var(--primary));
          cursor: pointer;
          border-radius: 50%;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: hsl(var(--primary));
          cursor: pointer;
          border-radius: 50%;
          border: none;
        }
      `}</style>
    </section>
  );
};

export default ROICalculator;
