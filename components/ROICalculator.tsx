"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
import { track } from "@/lib/track";

type Scenario = {
  downtime_hours_per_year: number;
  security_incidents_per_year: number;
  manual_task_hours_per_week: number;
  undocumented_processes: number;
};

type Results = {
  currentCost: number;
  optimizedCost: number;
  annualSavings: number;
  threeYearValue: number;
  roi: number;
  paybackMonths: number;
};

export function ROICalculator() {
  const [showResults, setShowResults] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [scenario, setScenario] = useState<Scenario>({
    downtime_hours_per_year: 24,
    security_incidents_per_year: 2,
    manual_task_hours_per_week: 10,
    undocumented_processes: 5
  });

  const calculateROI = (): Results => {
    // Downtime costs (avg $5,600/hour for SMB)
    const downtimeCost = scenario.downtime_hours_per_year * 5600;
    const optimizedDowntime = downtimeCost * 0.25; // 75% reduction
    const downtimeSavings = downtimeCost - optimizedDowntime;

    // Security incident costs (avg $25,000 per incident)
    const securityCost = scenario.security_incidents_per_year * 25000;
    const optimizedSecurity = securityCost * 0.2; // 80% reduction
    const securitySavings = securityCost - optimizedSecurity;

    // Manual task costs (assume $40/hr avg loaded cost)
    const manualTaskCost = scenario.manual_task_hours_per_week * 52 * 40;
    const optimizedManualTasks = manualTaskCost * 0.4; // 60% automation
    const manualTaskSavings = manualTaskCost - optimizedManualTasks;

    // Undocumented process costs (training time, errors, delays)
    const undocumentedCost = scenario.undocumented_processes * 8000; // $8k per process annually
    const optimizedDocumentation = undocumentedCost * 0.15; // 85% reduction
    const documentationSavings = undocumentedCost - optimizedDocumentation;

    const currentCost = downtimeCost + securityCost + manualTaskCost + undocumentedCost;
    const optimizedCost = optimizedDowntime + optimizedSecurity + optimizedManualTasks + optimizedDocumentation;
    const annualSavings = currentCost - optimizedCost;
    const threeYearValue = annualSavings * 3;

    // Polus investment estimate (base + per-process work)
    const estimatedInvestment = 5000 + (scenario.undocumented_processes * 1800);
    const roi = ((annualSavings - estimatedInvestment) / estimatedInvestment) * 100;
    const paybackMonths = Math.ceil((estimatedInvestment / annualSavings) * 12);

    return {
      currentCost,
      optimizedCost,
      annualSavings,
      threeYearValue,
      roi,
      paybackMonths
    };
  };

  const results = calculateROI();

  const handleScenarioChange = (field: keyof Scenario, value: number) => {
    setScenario(prev => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    track("roi_calculator_complete", scenario);
    setShowResults(true);
  };

  const handleEmailResults = async () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch("/api/roi-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          scenario,
          results
        })
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Failed to send email:", data);
        alert(`Failed to send email: ${data.error || 'Unknown error'}`);
        return;
      }

      track("roi_results_emailed", { email });
      setEmailSent(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert('Network error: Could not send email. Please try again.');
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Input Form */}
        <div>
          <Card className="p-8 sticky top-24">
            <h3 className="text-2xl font-bold mb-2 text-polus-mint">
              Your Current IT Situation
            </h3>
            <p className="text-[rgba(254,255,255,0.72)] mb-8 text-sm">
              Adjust the sliders to match your business reality
            </p>

            <div className="space-y-8">
              {/* Downtime Slider */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="downtime" className="text-sm font-semibold text-polus-paper">
                    System Downtime (hours/year)
                  </label>
                  <span className="text-2xl font-bold text-polus-mint">{scenario.downtime_hours_per_year}</span>
                </div>
                <input
                  id="downtime"
                  type="range"
                  min="0"
                  max="200"
                  step="4"
                  value={scenario.downtime_hours_per_year}
                  onChange={(e) => handleScenarioChange('downtime_hours_per_year', parseInt(e.target.value))}
                  className="w-full h-2 bg-polus-surface1 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-5 
                    [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-polus-mint 
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:shadow-polus-mint/50
                    [&::-webkit-slider-thumb]:transition-all
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-moz-range-thumb]:w-5
                    [&::-moz-range-thumb]:h-5
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-polus-mint
                    [&::-moz-range-thumb]:border-0
                    [&::-moz-range-thumb]:cursor-pointer"
                />
                <p className="text-xs text-[rgba(254,255,255,0.45)] mt-2">
                  Outages, slowdowns, and &quot;can&apos;t access files&quot; moments
                </p>
              </div>

              {/* Security Incidents Slider */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="security" className="text-sm font-semibold text-polus-paper">
                    Security Incidents (per year)
                  </label>
                  <span className="text-2xl font-bold text-polus-gold">{scenario.security_incidents_per_year}</span>
                </div>
                <input
                  id="security"
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={scenario.security_incidents_per_year}
                  onChange={(e) => handleScenarioChange('security_incidents_per_year', parseInt(e.target.value))}
                  className="w-full h-2 bg-polus-surface1 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-5 
                    [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-polus-gold 
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:shadow-polus-gold/50
                    [&::-webkit-slider-thumb]:transition-all
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-moz-range-thumb]:w-5
                    [&::-moz-range-thumb]:h-5
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-polus-gold
                    [&::-moz-range-thumb]:border-0
                    [&::-moz-range-thumb]:cursor-pointer"
                />
                <p className="text-xs text-[rgba(254,255,255,0.45)] mt-2">
                  Phishing, compromised accounts, malware, data leaks
                </p>
              </div>

              {/* Manual Tasks Slider */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="manual" className="text-sm font-semibold text-polus-paper">
                    Manual Task Hours (per week)
                  </label>
                  <span className="text-2xl font-bold text-polus-emerald">{scenario.manual_task_hours_per_week}</span>
                </div>
                <input
                  id="manual"
                  type="range"
                  min="0"
                  max="40"
                  step="1"
                  value={scenario.manual_task_hours_per_week}
                  onChange={(e) => handleScenarioChange('manual_task_hours_per_week', parseInt(e.target.value))}
                  className="w-full h-2 bg-polus-surface1 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-5 
                    [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-polus-emerald 
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:shadow-polus-emerald/50
                    [&::-webkit-slider-thumb]:transition-all
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-moz-range-thumb]:w-5
                    [&::-moz-range-thumb]:h-5
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-polus-emerald
                    [&::-moz-range-thumb]:border-0
                    [&::-moz-range-thumb]:cursor-pointer"
                />
                <p className="text-xs text-[rgba(254,255,255,0.45)] mt-2">
                  Data entry, file organization, user provisioning
                </p>
              </div>

              {/* Undocumented Processes Slider */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="processes" className="text-sm font-semibold text-polus-paper">
                    Undocumented Processes
                  </label>
                  <span className="text-2xl font-bold text-[#93c5fd]">{scenario.undocumented_processes}</span>
                </div>
                <input
                  id="processes"
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={scenario.undocumented_processes}
                  onChange={(e) => handleScenarioChange('undocumented_processes', parseInt(e.target.value))}
                  className="w-full h-2 bg-polus-surface1 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-5 
                    [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-[#93c5fd]
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:shadow-blue-300/50
                    [&::-webkit-slider-thumb]:transition-all
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-moz-range-thumb]:w-5
                    [&::-moz-range-thumb]:h-5
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-[#93c5fd]
                    [&::-moz-range-thumb]:border-0
                    [&::-moz-range-thumb]:cursor-pointer"
                />
                <p className="text-xs text-[rgba(254,255,255,0.45)] mt-2">
                  Onboarding, offboarding, backups, deployments
                </p>
              </div>
            </div>

            {!showResults && (
              <div className="mt-8">
                <Button
                  onClick={handleCalculate}
                  variant="primary"
                  className="w-full py-3 text-lg font-semibold"
                >
                  Calculate My ROI →
                </Button>
              </div>
            )}

            {showResults && (
              <div className="mt-8 p-4 bg-polus-mint/10 border border-polus-mint/30 rounded-lg">
                <p className="text-sm text-polus-mint mb-3 font-semibold">
                  💡 Try adjusting the sliders to see how changes impact your ROI
                </p>
                <button
                  onClick={() => setShowResults(false)}
                  className="text-xs text-[rgba(254,255,255,0.62)] hover:text-polus-gold transition underline"
                >
                  Hide results
                </button>
              </div>
            )}
          </Card>
        </div>

        {/* Right: Results Panel */}
        <div>
          {!showResults ? (
            <Card className="p-12 text-center h-full flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-polus-mint/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-polus-paper mb-3">
                Your ROI Analysis Will Appear Here
              </h4>
              <p className="text-[rgba(254,255,255,0.62)] max-w-md">
                Adjust the sliders to match your situation, then click &quot;Calculate My ROI&quot; to see your personalized analysis.
              </p>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* ROI Summary Card */}
              <Card className="p-8 bg-gradient-to-br from-polus-mint/20 via-polus-forest to-polus-forest border-polus-mint/30">
                <div className="text-center">
                  <div className="text-sm uppercase tracking-wide text-[rgba(254,255,255,0.62)] mb-2">
                    Your Potential ROI
                  </div>
                  <div className="text-7xl font-bold text-polus-mint mb-4">
                    {results.roi > 0 ? '+' : ''}{results.roi.toFixed(0)}%
                  </div>
                  <div className="inline-block px-4 py-2 bg-polus-gold/20 border border-polus-gold/30 rounded-full mb-6">
                    <span className="text-sm text-polus-gold font-semibold">
                      {results.paybackMonths} month payback period
                    </span>
                  </div>
                  <p className="text-[rgba(254,255,255,0.88)] text-lg leading-relaxed">
                    Optimizing your IT could save <span className="text-polus-mint font-bold">{formatCurrency(results.annualSavings)}</span> annually
                  </p>
                </div>
              </Card>

              {/* Cost Comparison */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-6 bg-gradient-to-br from-red-900/20 to-polus-forest border-red-400/30">
                  <div className="text-xs uppercase tracking-wide text-[rgba(254,255,255,0.45)] mb-2">
                    Current Annual Cost
                  </div>
                  <div className="text-3xl font-bold text-red-400 mb-1">
                    {formatCurrency(results.currentCost)}
                  </div>
                  <div className="text-xs text-[rgba(254,255,255,0.62)]">
                    Wasted on inefficiency
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-polus-gold/20 to-polus-forest border-polus-gold/30">
                  <div className="text-xs uppercase tracking-wide text-[rgba(254,255,255,0.45)] mb-2">
                    3-Year Value
                  </div>
                  <div className="text-3xl font-bold text-polus-gold mb-1">
                    {formatCurrency(results.threeYearValue)}
                  </div>
                  <div className="text-xs text-[rgba(254,255,255,0.62)]">
                    Compounding savings
                  </div>
                </Card>
              </div>

              {/* Email Results Card */}
              <Card className="p-6 bg-polus-surface1 border-polus-mint/20">
                {!emailSent ? (
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div className="flex-1">
                        <h5 className="font-semibold text-polus-paper mb-1">
                          Email These Results
                        </h5>
                        <p className="text-sm text-[rgba(254,255,255,0.72)] mb-4">
                          Get a detailed PDF breakdown sent to yourself or share with a decision maker
                        </p>
                        <div className="flex gap-2">
                          <input
                            type="email"
                            placeholder="email@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleEmailResults()}
                            className="flex-1 px-4 py-2 bg-polus-forest border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text text-sm focus:outline-none focus:border-polus-mint transition"
                          />
                          <Button
                            onClick={handleEmailResults}
                            variant="secondary"
                            disabled={!email || !email.includes('@')}
                            className="px-6"
                          >
                            Send
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-polus-mint">
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold">Results emailed to {email}</div>
                      <div className="text-sm text-[rgba(254,255,255,0.62)]">Check your inbox for the detailed breakdown</div>
                    </div>
                  </div>
                )}
              </Card>

              {/* Details */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h5 className="text-sm font-semibold mb-4 text-polus-mint uppercase tracking-wide">
                    Your Inputs
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center pb-2 border-b border-[rgba(177,227,199,0.08)]">
                      <span className="text-[rgba(254,255,255,0.72)]">Downtime</span>
                      <span className="font-semibold text-polus-paper">{scenario.downtime_hours_per_year} hrs/yr</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[rgba(177,227,199,0.08)]">
                      <span className="text-[rgba(254,255,255,0.72)]">Security incidents</span>
                      <span className="font-semibold text-polus-paper">{scenario.security_incidents_per_year}/year</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[rgba(177,227,199,0.08)]">
                      <span className="text-[rgba(254,255,255,0.72)]">Manual tasks</span>
                      <span className="font-semibold text-polus-paper">{scenario.manual_task_hours_per_week} hrs/wk</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[rgba(254,255,255,0.72)]">Undocumented</span>
                      <span className="font-semibold text-polus-paper">{scenario.undocumented_processes} processes</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-polus-emerald/5 border-polus-mint/20">
                  <h5 className="text-sm font-semibold mb-4 text-polus-mint uppercase tracking-wide">
                    Assumptions
                  </h5>
                  <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                    <li className="flex items-start gap-2">
                      <span className="text-polus-mint mt-0.5">✓</span>
                      <span>75% downtime reduction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-polus-mint mt-0.5">✓</span>
                      <span>80% fewer security incidents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-polus-mint mt-0.5">✓</span>
                      <span>60% task automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-polus-mint mt-0.5">✓</span>
                      <span>85% documentation improvement</span>
                    </li>
                  </ul>
                  <p className="text-xs text-[rgba(254,255,255,0.45)] mt-4">
                    Conservative industry estimates
                  </p>
                </Card>
              </div>

              {/* CTA */}
              <Card className="p-8 text-center bg-gradient-to-b from-polus-surface1 to-polus-forest border-polus-mint/30">
                <h4 className="text-xl font-bold mb-3 text-polus-paper">
                  Ready to Make This Happen?
                </h4>
                <p className="text-[rgba(254,255,255,0.78)] mb-6 max-w-md mx-auto">
                  Book a free discovery call to discuss your specific situation and see exactly how we can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button href="/book" variant="primary" className="px-8 py-3">
                    Book Free Call
                  </Button>
                  <Button href="/services" variant="secondary" className="px-8 py-3">
                    Browse Services
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
