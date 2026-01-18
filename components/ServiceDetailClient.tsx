"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

type PricingTier = {
  name: string;
  price: string;
  description: string;
  deliverables?: string[];
};

type ServiceDetailClientProps = {
  deliverables: string[];
  idealFor: string[];
  overview: string;
  timeline: string;
  startingPrice: string;
  pricingTiers?: PricingTier[];
};

function calculateDiscount(priceString: string): { original: string; discounted: string } {
  const numMatch = priceString.match(/[\d,]+/);
  if (!numMatch) return { original: priceString, discounted: priceString };
  
  const priceNum = parseInt(numMatch[0].replace(/,/g, ''));
  const discountedNum = Math.round(priceNum * 0.8);
  const formattedDiscounted = discountedNum.toLocaleString();
  
  const prefix = priceString.match(/^\$/) ? '$' : '';
  const suffix = priceString.match(/\/\w+$/) ? priceString.match(/\/\w+$/)?.[0] : '';
  
  return {
    original: priceString,
    discounted: `${prefix}${formattedDiscounted}${suffix || ''}`
  };
}

export function ServiceDetailClient({ 
  deliverables, 
  idealFor, 
  overview, 
  timeline,
  startingPrice,
  pricingTiers 
}: ServiceDetailClientProps) {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  // Use tier-specific deliverables if tier is selected and has deliverables defined
  const displayDeliverables = selectedTier !== null && pricingTiers?.[selectedTier]?.deliverables
    ? pricingTiers[selectedTier].deliverables!
    : deliverables;

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-8">
          {overview}
        </p>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">What you&apos;ll get</h3>
          {selectedTier !== null && pricingTiers && (
            <button
              onClick={() => setSelectedTier(null)}
              className="text-sm text-polus-gold hover:text-polus-mint transition"
            >
              View all deliverables
            </button>
          )}
        </div>
        
        {selectedTier !== null && pricingTiers && (
          <div className="mb-4 px-4 py-2 bg-polus-gold/10 border border-polus-gold/30 rounded-lg">
            <span className="text-sm text-polus-gold font-semibold">
              Showing: {pricingTiers[selectedTier].name}
            </span>
          </div>
        )}
        
        <ul className="space-y-3 mb-8">
          {displayDeliverables.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[rgba(254,255,255,0.78)]">{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-4">Ideal for</h3>
        <ul className="space-y-3">
          {idealFor.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-[rgba(254,255,255,0.78)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Card className="sticky top-24">
          {/* Limited Offer Badge */}
          <div className="mb-4 bg-polus-gold/10 border border-polus-gold/30 text-polus-gold px-3 py-2 rounded-lg text-center">
            <div className="text-xs uppercase font-semibold tracking-wide mb-0.5">Limited Time Offer</div>
            <div className="text-sm font-bold">20% Off • First 10 Businesses</div>
          </div>

          <div className="space-y-6">
            {pricingTiers && pricingTiers.length > 0 ? (
              <div>
                <div className="text-sm text-[rgba(254,255,255,0.62)] mb-3">Pricing Tiers</div>
                <div className="space-y-3">
                  {pricingTiers.map((tier, idx) => {
                    const pricing = calculateDiscount(tier.price);
                    const isSelected = selectedTier === idx;
                    
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedTier(idx)}
                        className={`w-full border rounded-lg p-4 text-left transition ${
                          isSelected 
                            ? 'border-polus-gold bg-polus-gold/5 ring-2 ring-polus-gold/40' 
                            : 'border-[rgba(177,227,199,0.16)] hover:border-polus-gold/40'
                        }`}
                      >
                        <div className="flex items-baseline justify-between mb-1">
                          <div className="font-semibold text-polus-gold">{tier.name}</div>
                          <div className="flex flex-col items-end">
                            <div className="text-sm text-[rgba(254,255,255,0.48)] line-through">{pricing.original}</div>
                            <div className="text-xl font-bold text-polus-mint">{pricing.discounted}</div>
                          </div>
                        </div>
                        <div className="text-sm text-[rgba(254,255,255,0.62)]">{tier.description}</div>
                        {isSelected && (
                          <div className="mt-2 text-xs text-polus-gold flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Selected
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                <div className="text-sm text-[rgba(254,255,255,0.62)] mb-1">Starting at</div>
                {(() => {
                  const pricing = calculateDiscount(startingPrice);
                  return (
                    <div className="flex flex-col">
                      <div className="text-2xl text-[rgba(254,255,255,0.48)] line-through mb-1">{pricing.original}</div>
                      <div className="text-4xl font-bold text-polus-mint">{pricing.discounted}</div>
                      <div className="text-sm text-polus-gold font-semibold mt-2">Save 20%</div>
                    </div>
                  );
                })()}
              </div>
            )}

            <div>
              <div className="text-sm text-[rgba(254,255,255,0.62)] mb-1">Timeline</div>
              <div className="text-sm text-[rgba(254,255,255,0.88)]">{timeline}</div>
            </div>

            <div className="space-y-3 pt-4">
              <Button href="/book" variant="primary" className="w-full">
                Book Free Discovery Call
              </Button>
              <Button href="/contact" variant="secondary" className="w-full">
                Request a Quote
              </Button>
            </div>

            <div className="pt-4 border-t border-[rgba(177,227,199,0.12)] text-sm text-[rgba(254,255,255,0.62)]">
              Free • 30 minutes • You&apos;ll leave with next steps
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
