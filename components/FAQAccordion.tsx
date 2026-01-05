"use client";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-[rgba(177,227,199,0.16)] bg-polus-surface1 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-[rgba(177,227,199,0.05)] transition"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            <span className="font-semibold text-sm md:text-base">{item.question}</span>
            <svg
              className={`w-5 h-5 text-polus-mint transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div 
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className="px-5 pb-4 text-sm text-[rgba(254,255,255,0.78)] leading-relaxed"
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
