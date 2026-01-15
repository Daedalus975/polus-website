'use client';

import { Card } from "./Card";
import { useEffect, useRef, useState, useMemo } from "react";

type Phase = {
  number: number;
  title: string;
  description: string;
  deliverables: string[];
};

type OperatingSystemAnimatedProps = {
  variant?: "full" | "condensed";
};

export function OperatingSystemAnimated({ variant = "full" }: OperatingSystemAnimatedProps) {
  const [visiblePhases, setVisiblePhases] = useState<Set<number>>(new Set([1]));
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  const phases: Phase[] = useMemo(() => [
    {
      number: 1,
      title: "Discovery and Assessment",
      description: "We start by understanding your current state: what's working, what's not, and where the biggest risks or inefficiencies are.",
      deliverables: [
        "Documented findings report",
        "Prioritized recommendations",
        "Effort and cost estimates",
        "Quick wins identified"
      ]
    },
    {
      number: 2,
      title: "Planning and Design",
      description: "We design the solution—whether that's a process map, governance plan, or technical implementation—and get your approval before execution.",
      deliverables: [
        "Detailed project plan",
        "Solution design document",
        "Timeline and milestones",
        "Stakeholder sign-off"
      ]
    },
    {
      number: 3,
      title: "Implementation",
      description: "We execute the plan: building SOPs, configuring systems, training your team, and ensuring everything is ready for handoff.",
      deliverables: [
        "Completed systems or processes",
        "Documentation and runbooks",
        "Training materials",
        "Tested and validated solution"
      ]
    },
    {
      number: 4,
      title: "Training and Adoption",
      description: "We don't just hand off documentation—we train your team, answer questions, and ensure the solution sticks.",
      deliverables: [
        "User training sessions",
        "Manager playbooks",
        "FAQ and troubleshooting docs",
        "Adoption support plan"
      ]
    }
  ], []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    phaseRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisiblePhases(prev => new Set(prev).add(phases[index].number));
              }
            });
          },
          { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [phases]);

  if (variant === "condensed") {
    const condensedPhases = phases.slice(0, 3);
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {condensedPhases.map((phase, index) => (
          <div 
            key={phase.number}
            ref={el => phaseRefs.current[index] = el}
            className={`transition-all duration-700 ${
              visiblePhases.has(phase.number) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <Card className="p-6 h-full">
              <div className="w-12 h-12 rounded-full bg-polus-emerald/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-polus-gold">{phase.number}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{phase.title}</h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                {phase.description}
              </p>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {phases.map((phase, index) => (
        <div 
          key={phase.number}
          ref={el => phaseRefs.current[index] = el}
          className={`transition-all duration-700 ${
            visiblePhases.has(phase.number) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-polus-emerald/20 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-polus-gold">{phase.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-2xl mb-3">{phase.title}</h3>
                <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
                  {phase.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-polus-mint mb-2">What You Receive</h4>
                  <ul className="space-y-1">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[rgba(254,255,255,0.78)]">
                        <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {index < phases.length - 1 && (
              <div className="flex justify-center mt-6 mb-2">
                <svg className="w-6 h-6 text-polus-mint/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
}
