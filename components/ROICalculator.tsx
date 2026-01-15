"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";

type CalculatorInputs = {
  teamSize: number;
  avgHourlyRate: number;
  hoursWastedPerWeek: number;
  inefficientProcesses: number;
};

export function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    teamSize: 5,
    avgHourlyRate: 40,
    hoursWastedPerWeek: 5,
    inefficientProcesses: 3
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const weeklyCost = inputs.teamSize * inputs.hoursWastedPerWeek * inputs.avgHourlyRate;
    const annualCost = weeklyCost * 52;
    const potentialSavings = annualCost * 0.7; // Conservative 70% improvement
    const polusInvestment = 5000 + (inputs.inefficientProcesses * 1500); // Base + per process
    const netBenefit = potentialSavings - polusInvestment;
    const roi = ((potentialSavings - polusInvestment) / polusInvestment) * 100;
    const paybackMonths = Math.ceil((polusInvestment / potentialSavings) * 12);

    return {
      annualCost,
      potentialSavings,
      polusInvestment,
      netBenefit,
      roi,
      paybackMonths
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
    setShowResults(false);
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
    <div className="max-w-4xl mx-auto">
      <Card className="p-8">
        <h3 className="text-2xl font-semibold mb-2 text-center">
          What Are Inefficient Processes Costing You?
        </h3>
        <p className="text-[rgba(254,255,255,0.62)] text-center mb-8">
          Calculate your hidden costs and potential ROI from optimizing your workflows
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Team Size */}
          <div>
            <label htmlFor="teamSize" className="block text-sm font-medium mb-2">
              Team Size
            </label>
            <input
              id="teamSize"
              type="number"
              min="1"
              max="500"
              value={inputs.teamSize}
              onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value) || 1)}
              className="w-full px-4 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text focus:outline-none focus:border-polus-mint"
            />
            <p className="text-xs text-[rgba(254,255,255,0.45)] mt-1">
              Number of employees affected by inefficiencies
            </p>
          </div>

          {/* Average Hourly Rate */}
          <div>
            <label htmlFor="avgHourlyRate" className="block text-sm font-medium mb-2">
              Average Hourly Rate ($)
            </label>
            <input
              id="avgHourlyRate"
              type="number"
              min="15"
              max="500"
              value={inputs.avgHourlyRate}
              onChange={(e) => handleInputChange('avgHourlyRate', parseInt(e.target.value) || 15)}
              className="w-full px-4 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text focus:outline-none focus:border-polus-mint"
            />
            <p className="text-xs text-[rgba(254,255,255,0.45)] mt-1">
              Average loaded cost per employee per hour
            </p>
          </div>

          {/* Hours Wasted Per Week */}
          <div>
            <label htmlFor="hoursWastedPerWeek" className="block text-sm font-medium mb-2">
              Hours Wasted Per Week (Per Person)
            </label>
            <input
              id="hoursWastedPerWeek"
              type="number"
              min="0"
              max="40"
              step="0.5"
              value={inputs.hoursWastedPerWeek}
              onChange={(e) => handleInputChange('hoursWastedPerWeek', parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text focus:outline-none focus:border-polus-mint"
            />
            <p className="text-xs text-[rgba(254,255,255,0.45)] mt-1">
              Time lost to manual tasks, searching for info, unclear processes
            </p>
          </div>

          {/* Number of Inefficient Processes */}
          <div>
            <label htmlFor="inefficientProcesses" className="block text-sm font-medium mb-2">
              Major Process Issues
            </label>
            <input
              id="inefficientProcesses"
              type="number"
              min="1"
              max="20"
              value={inputs.inefficientProcesses}
              onChange={(e) => handleInputChange('inefficientProcesses', parseInt(e.target.value) || 1)}
              className="w-full px-4 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text focus:outline-none focus:border-polus-mint"
            />
            <p className="text-xs text-[rgba(254,255,255,0.45)] mt-1">
              e.g., onboarding, file management, documentation, IT setup
            </p>
          </div>
        </div>

        <div className="text-center mb-6">
          <Button
            onClick={() => setShowResults(true)}
            className="min-w-[200px] px-8 py-4 text-lg"
          >
            Calculate My ROI
          </Button>
        </div>

        {showResults && (
          <div className="mt-8 pt-8 border-t border-[rgba(177,227,199,0.16)]">
            <h4 className="text-xl font-semibold mb-6 text-center text-polus-mint">
              Your Results
            </h4>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-gradient-to-br from-polus-surface1 to-polus-forest/20 border-polus-ember/30">
                <div className="text-center">
                  <p className="text-sm text-[rgba(254,255,255,0.62)] mb-2">Current Annual Cost</p>
                  <p className="text-3xl font-bold text-polus-ember">
                    {formatCurrency(results.annualCost)}
                  </p>
                  <p className="text-xs text-[rgba(254,255,255,0.45)] mt-2">
                    Lost to inefficiency
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-polus-surface1 to-polus-emerald/20 border-polus-mint/30">
                <div className="text-center">
                  <p className="text-sm text-[rgba(254,255,255,0.62)] mb-2">Potential Savings</p>
                  <p className="text-3xl font-bold text-polus-mint">
                    {formatCurrency(results.potentialSavings)}
                  </p>
                  <p className="text-xs text-[rgba(254,255,255,0.45)] mt-2">
                    Per year after optimization
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-polus-surface1 to-polus-gold/20 border-polus-gold/30">
                <div className="text-center">
                  <p className="text-sm text-[rgba(254,255,255,0.62)] mb-2">Return on Investment</p>
                  <p className="text-3xl font-bold text-polus-gold">
                    {results.roi > 0 ? '+' : ''}{results.roi.toFixed(0)}%
                  </p>
                  <p className="text-xs text-[rgba(254,255,255,0.45)] mt-2">
                    Within {results.paybackMonths} months
                  </p>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-polus-forest/20 border-polus-mint/20">
              <div className="text-center">
                <h5 className="font-semibold mb-3 text-polus-mint">
                  Estimated Investment with Polus
                </h5>
                <p className="text-2xl font-bold mb-2">
                  {formatCurrency(results.polusInvestment)}
                </p>
                <p className="text-sm text-[rgba(254,255,255,0.78)] mb-4">
                  Net first-year benefit: <span className="text-polus-mint font-semibold">{formatCurrency(results.netBenefit)}</span>
                </p>
                <p className="text-xs text-[rgba(254,255,255,0.62)] leading-relaxed">
                  This estimate includes process mapping, documentation, M365 configuration, and automation setup
                  for your {inputs.inefficientProcesses} identified process{inputs.inefficientProcesses > 1 ? 'es' : ''}.
                  Actual investment depends on complexity and scope.
                </p>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-[rgba(254,255,255,0.78)] mb-4">
                Ready to turn these numbers into reality?
              </p>
              <Button href="/book" variant="primary" className="px-8 py-4 text-lg">
                Book Free Discovery Call
              </Button>
            </div>
          </div>
        )}
      </Card>

      <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-[rgba(254,255,255,0.62)]">
        <div className="text-center">
          <p className="font-semibold text-polus-text mb-2">Conservative Estimates</p>
          <p>Calculations assume 70% improvement—actual results often exceed this</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-polus-text mb-2">No Hidden Costs</p>
          <p>Fixed-scope pricing means you know exactly what you&apos;re investing</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-polus-text mb-2">Ongoing Value</p>
          <p>Savings compound annually as optimized processes scale with your team</p>
        </div>
      </div>
    </div>
  );
}
