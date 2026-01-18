"use client";

import { useState } from "react";

type PricingTier = {
  name: string;
  price: string;
  description: string;
};

type PricingTiersProps = {
  tiers: PricingTier[];
  deliverables: string[];
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

export function PricingTiers({ tiers, deliverables }: PricingTiersProps) {
  const [expandedTier, setExpandedTier] = useState<number | null>(null);

  const toggleTier = (idx: number) => {
    setExpandedTier(expandedTier === idx ? null : idx);
  };

  return (
    <div>
      <div className="text-sm text-[rgba(254,255,255,0.62)] mb-3">Pricing Tiers</div>
      <div className="space-y-3">
        {tiers.map((tier, idx) => {
          const pricing = calculateDiscount(tier.price);
          const isExpanded = expandedTier === idx;
          
          return (
            <div 
              key={idx} 
              className="border border-[rgba(177,227,199,0.16)] rounded-lg overflow-hidden hover:border-polus-gold/40 transition"
            >
              <button
                onClick={() => toggleTier(idx)}
                className="w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-polus-gold/40 focus:ring-inset"
                aria-expanded={isExpanded}
              >
                <div className="flex items-baseline justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-polus-gold">{tier.name}</div>
                    <svg 
                      className={`w-5 h-5 text-polus-gold transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-sm text-[rgba(254,255,255,0.48)] line-through">{pricing.original}</div>
                    <div className="text-xl font-bold text-polus-mint">{pricing.discounted}</div>
                  </div>
                </div>
                <div className="text-sm text-[rgba(254,255,255,0.62)]">{tier.description}</div>
              </button>
              
              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-[rgba(177,227,199,0.12)] bg-polus-forest/20">
                  <div className="text-xs uppercase font-semibold tracking-wide text-polus-mint mb-3">What&apos;s Included</div>
                  <ul className="space-y-2">
                    {deliverables
                      .filter(item => {
                        // Show tier-specific deliverables or general ones
                        const lowerItem = item.toLowerCase();
                        const lowerTierName = tier.name.toLowerCase();
                        
                        // If the deliverable mentions this tier or doesn't mention any specific tier
                        return !lowerItem.includes('tier') || 
                               lowerItem.includes(lowerTierName) ||
                               (lowerTierName.includes('tier') && lowerItem.includes(lowerTierName.split(' ')[1]));
                      })
                      .map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-sm">
                          <svg className="w-4 h-4 text-polus-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[rgba(254,255,255,0.78)]">{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
