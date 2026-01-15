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
  const [step, setStep] = useState<1 | 2 | 3>(1);
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
    setStep(2);
  };

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) return;

    try {
      // Send results to email
      await fetch("/api/roi-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          scenario,
          results
        })
      });

      track("roi_results_captured", { email });
      setStep(3);
    } catch (error) {
      console.error("Failed to capture email:", error);
      // Still show results even if email fails
      setStep(3);
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

  if (step === 1) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3 text-polus-mint">
              Calculate Your IT Inefficiency Cost
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] max-w-2xl mx-auto">
              Answer 4 quick questions to see how much inefficient IT is costing your business—and what optimizing could save you.
            </p>
          </div>

          <div className="space-y-8">
            {/* Question 1: Downtime */}
            <div>
              <label htmlFor="downtime" className="block text-lg font-semibold mb-2">
                1. How many hours of system downtime do you experience per year?
              </label>
              <p className="text-sm text-[rgba(254,255,255,0.62)] mb-4">
                Include outages, slowdowns, and &quot;can&apos;t access files&quot; moments
              </p>
              <div className="flex items-center gap-4">
                <input
                  id="downtime"
                  type="range"
                  min="0"
                  max="200"
                  step="4"
                  value={scenario.downtime_hours_per_year}
                  onChange={(e) => handleScenarioChange('downtime_hours_per_year', parseInt(e.target.value))}
                  className="flex-1 h-2 bg-polus-surface1 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-polus-mint [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="w-24 text-right">
                  <span className="text-2xl font-bold text-polus-mint">{scenario.downtime_hours_per_year}</span>
                  <span className="text-sm text-[rgba(254,255,255,0.62)] ml-1">hours</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[rgba(254,255,255,0.45)] mt-2">
                <span>Rare (0)</span>
                <span>Typical (24)</span>
                <span>Frequent (200+)</span>
              </div>
            </div>

            {/* Question 2: Security Incidents */}
            <div>
              <label htmlFor="security" className="block text-lg font-semibold mb-2">
                2. How many security incidents do you deal with annually?
              </label>
              <p className="text-sm text-[rgba(254,255,255,0.62)] mb-4">
                Phishing attempts, compromised accounts, malware scares, data leaks
              </p>
              <div className="flex items-center gap-4">
                <input
                  id="security"
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={scenario.security_incidents_per_year}
                  onChange={(e) => handleScenarioChange('security_incidents_per_year', parseInt(e.target.value))}
                  className="flex-1 h-2 bg-polus-surface1 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-polus-gold [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="w-24 text-right">
                  <span className="text-2xl font-bold text-polus-gold">{scenario.security_incidents_per_year}</span>
                  <span className="text-sm text-[rgba(254,255,255,0.62)] ml-1">per year</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[rgba(254,255,255,0.45)] mt-2">
                <span>None (0)</span>
                <span>Some (2-5)</span>
                <span>Many (20+)</span>
              </div>
            </div>

            {/* Question 3: Manual Tasks */}
            <div>
              <label htmlFor="manual" className="block text-lg font-semibold mb-2">
                3. How many hours per week does your team spend on repetitive manual tasks?
              </label>
              <p className="text-sm text-[rgba(254,255,255,0.62)] mb-4">
                Data entry, file organization, user provisioning, report generation
              </p>
              <div className="flex items-center gap-4">
                <input
                  id="manual"
                  type="range"
                  min="0"
                  max="40"
                  step="1"
                  value={scenario.manual_task_hours_per_week}
                  onChange={(e) => handleScenarioChange('manual_task_hours_per_week', parseInt(e.target.value))}
                  className="flex-1 h-2 bg-polus-surface1 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-polus-emerald [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="w-24 text-right">
                  <span className="text-2xl font-bold text-polus-emerald">{scenario.manual_task_hours_per_week}</span>
                  <span className="text-sm text-[rgba(254,255,255,0.62)] ml-1">hrs/week</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[rgba(254,255,255,0.45)] mt-2">
                <span>Minimal (0)</span>
                <span>Moderate (10)</span>
                <span>Significant (40+)</span>
              </div>
            </div>

            {/* Question 4: Documentation */}
            <div>
              <label htmlFor="processes" className="block text-lg font-semibold mb-2">
                4. How many critical processes are undocumented or inconsistently executed?
              </label>
              <p className="text-sm text-[rgba(254,255,255,0.62)] mb-4">
                Onboarding, offboarding, backups, deployments, client handoffs
              </p>
              <div className="flex items-center gap-4">
                <input
                  id="processes"
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={scenario.undocumented_processes}
                  onChange={(e) => handleScenarioChange('undocumented_processes', parseInt(e.target.value))}
                  className="flex-1 h-2 bg-polus-surface1 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-polus-text [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="w-24 text-right">
                  <span className="text-2xl font-bold text-polus-text">{scenario.undocumented_processes}</span>
                  <span className="text-sm text-[rgba(254,255,255,0.62)] ml-1">processes</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[rgba(254,255,255,0.45)] mt-2">
                <span>Well documented (0)</span>
                <span>Some gaps (5)</span>
                <span>Major gaps (20+)</span>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button
              onClick={handleCalculate}
              variant="primary"
              className="px-12 py-4 text-lg font-semibold"
            >
              Calculate My Costs →
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 text-center">
          <div className="w-16 h-16 bg-polus-emerald/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Your Results Are Ready</h3>
          <p className="text-[rgba(254,255,255,0.78)] mb-8">
            Enter your email to see your personalized ROI analysis and get a PDF summary sent to your inbox.
          </p>

          <div className="max-w-md mx-auto space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleEmailSubmit()}
                required
                className="w-full px-4 py-3 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text focus:outline-none focus:border-polus-mint"
              />
            </div>

            <Button
              onClick={handleEmailSubmit}
              variant="primary"
              disabled={!email || !email.includes('@')}
              className="w-full py-3 text-lg"
            >
              Show Me My Results →
            </Button>

            <p className="text-xs text-[rgba(254,255,255,0.45)]">
              We&apos;ll email you a detailed breakdown. No spam, ever.
            </p>
          </div>
        </Card>
      </div>
    );
  }

  // Step 3: Results
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center bg-gradient-to-br from-red-900/20 to-polus-forest border-red-400/30">
          <div className="text-sm text-[rgba(254,255,255,0.62)] mb-2">Current Annual Cost</div>
          <div className="text-4xl font-bold text-red-400 mb-2">{formatCurrency(results.currentCost)}</div>
          <div className="text-xs text-[rgba(254,255,255,0.45)]">Wasted on inefficiency</div>
        </Card>

        <Card className="p-6 text-center bg-gradient-to-br from-polus-emerald/20 to-polus-forest border-polus-mint/30">
          <div className="text-sm text-[rgba(254,255,255,0.62)] mb-2">Annual Savings</div>
          <div className="text-4xl font-bold text-polus-mint mb-2">{formatCurrency(results.annualSavings)}</div>
          <div className="text-xs text-[rgba(254,255,255,0.45)]">First year after optimization</div>
        </Card>

        <Card className="p-6 text-center bg-gradient-to-br from-polus-gold/20 to-polus-forest border-polus-gold/30">
          <div className="text-sm text-[rgba(254,255,255,0.62)] mb-2">3-Year Value</div>
          <div className="text-4xl font-bold text-polus-gold mb-2">{formatCurrency(results.threeYearValue)}</div>
          <div className="text-xs text-[rgba(254,255,255,0.45)]">Compounding savings</div>
        </Card>
      </div>

      {/* ROI Highlight */}
      <Card className="p-8 text-center bg-polus-surface1 border-polus-mint/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-sm text-[rgba(254,255,255,0.62)] mb-3">Return on Investment</div>
          <div className="text-6xl font-bold text-polus-mint mb-4">
            {results.roi > 0 ? '+' : ''}{results.roi.toFixed(0)}%
          </div>
          <div className="text-lg text-[rgba(254,255,255,0.78)] mb-6">
            Payback period: <span className="text-polus-gold font-semibold">{results.paybackMonths} months</span>
          </div>
          <p className="text-[rgba(254,255,255,0.62)]">
            Based on your responses, optimizing these inefficiencies could save your business <span className="text-polus-mint font-semibold">{formatCurrency(results.annualSavings)}</span> in the first year alone.
          </p>
        </div>
      </Card>

      {/* Breakdown */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h4 className="text-lg font-semibold mb-4 text-polus-mint">What We Analyzed</h4>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-[rgba(254,255,255,0.78)]">System downtime</span>
              <span className="font-semibold">{scenario.downtime_hours_per_year} hrs/year</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[rgba(254,255,255,0.78)]">Security incidents</span>
              <span className="font-semibold">{scenario.security_incidents_per_year} per year</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[rgba(254,255,255,0.78)]">Manual task hours</span>
              <span className="font-semibold">{scenario.manual_task_hours_per_week} hrs/week</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[rgba(254,255,255,0.78)]">Undocumented processes</span>
              <span className="font-semibold">{scenario.undocumented_processes} processes</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-polus-emerald/5 border-polus-mint/20">
          <h4 className="text-lg font-semibold mb-4 text-polus-mint">Our Conservative Assumptions</h4>
          <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
            <li>• 75% reduction in downtime</li>
            <li>• 80% reduction in security incidents</li>
            <li>• 60% automation of manual tasks</li>
            <li>• 85% improvement from documentation</li>
            <li>• Industry standard cost estimates</li>
          </ul>
          <p className="text-xs text-[rgba(254,255,255,0.62)] mt-4">
            Actual results often exceed these conservative projections.
          </p>
        </Card>
      </div>

      {/* CTA */}
      <Card className="p-8 text-center bg-gradient-to-b from-polus-surface1 to-polus-forest">
        <h4 className="text-2xl font-semibold mb-4">Ready to Turn These Numbers Into Reality?</h4>
        <p className="text-[rgba(254,255,255,0.78)] mb-6 max-w-2xl mx-auto">
          Book a free discovery call to discuss your specific situation. We&apos;ll walk through your results and show you exactly how we can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/book" variant="primary" className="px-8 py-3 text-lg">
            Book Free Discovery Call
          </Button>
          <Button href="/services" variant="secondary" className="px-8 py-3 text-lg">
            Browse Services
          </Button>
        </div>
        <p className="text-xs text-[rgba(254,255,255,0.45)] mt-6">
          Check your email for a detailed PDF summary of these results.
        </p>
      </Card>

      {/* Recalculate */}
      <div className="text-center">
        <button
          onClick={() => setStep(1)}
          className="text-sm text-polus-mint hover:text-polus-gold transition underline"
        >
          ← Recalculate with different inputs
        </button>
      </div>
    </div>
  );
}
