import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { QuoteForm } from "@/components/QuoteForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Polus — Oklahoma IT + Operations Consulting",
  description: "Tell us what you need. We'll reply within 1 business day. Book a free discovery call or request a quote.",
  openGraph: {
    title: "Contact Polus — Oklahoma IT + Operations Consulting",
    description: "Tell us what you need. We'll reply within 1 business day. Book a free discovery call or request a quote.",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Contact Polus — Oklahoma IT + Operations Consulting",
    description: "Tell us what you need. We'll reply within 1 business day."
  }
};

function getServiceExplanations(prefillData: any) {
  const explanations: Record<string, string[]> = {};
  const topServices = prefillData.top_services?.split(',') || [];
  
  topServices.forEach((slug: string) => {
    const reasons: string[] = [];
    
    // Service-specific logic
    if (slug === 'process-mapping-sops') {
      if (prefillData.primary_pain === 'no_docs') reasons.push("You indicated nothing is documented");
      if (prefillData.documentation_state === 'none' || prefillData.documentation_state === 'partial') reasons.push("Your processes need documentation");
      if (prefillData.outcome === 'clarity') reasons.push("You want clear documentation for your team");
      if (prefillData.primary_pain === 'onboarding_slow') reasons.push("Clear processes help onboard new hires faster");
      if (reasons.length === 0) reasons.push("Strong match based on your team size and needs");
    }
    
    if (slug === 'm365-governance') {
      if (prefillData.m365_status === 'messy') reasons.push("Your M365 environment needs organization");
      if (prefillData.primary_pain === 'scattered') reasons.push("Files and information are scattered");
      if (prefillData.outcome === 'organized') reasons.push("You want organized files and clear permissions");
      if (prefillData.m365_status === 'underutilized') reasons.push("You have M365 but aren't using it effectively");
      if (reasons.length === 0 && prefillData.m365_status && prefillData.m365_status !== 'none' && prefillData.m365_status !== 'google') {
        reasons.push("You're using M365 and could benefit from better governance");
      }
    }
    
    if (slug === 'backup-disaster-recovery') {
      if (prefillData.primary_pain === 'data_risk') reasons.push("You're concerned about data loss");
      if (prefillData.backup_confidence === 'no' || prefillData.backup_confidence === 'maybe') reasons.push("Your backup situation needs improvement");
      if (prefillData.outcome === 'data_safe') reasons.push("You want confidence in data recovery");
      if (reasons.length === 0) reasons.push("Critical foundation for business continuity");
    }
    
    if (slug === 'onboarding-offboarding') {
      if (prefillData.primary_pain === 'onboarding_slow') reasons.push("New hire onboarding is taking too long");
      if (prefillData.outcome === 'fast_onboarding') reasons.push("You want faster employee ramp-up");
      if (prefillData.documentation_state === 'none' || prefillData.documentation_state === 'partial') reasons.push("Documented onboarding processes are missing");
      if (reasons.length === 0) reasons.push("Good fit for your team size and growth stage");
    }
    
    if (slug === 'managed-it') {
      if (prefillData.primary_pain === 'it_fires') reasons.push("IT problems are interrupting work");
      if (prefillData.it_support === 'none') reasons.push("You don't have IT support currently");
      if (prefillData.it_support === 'bad_support') reasons.push("Your current IT support isn't meeting needs");
      if (prefillData.outcome === 'stable_it') reasons.push("You want stable, reliable IT");
      if (reasons.length === 0) reasons.push("Your team size indicates need for ongoing IT support");
    }
    
    if (slug === 'service-desk-setup') {
      if (prefillData.primary_pain === 'it_fires') reasons.push("IT problems need better tracking and resolution");
      if (prefillData.it_support === 'bad_support') reasons.push("Improve your existing IT support with structure");
      if (prefillData.outcome === 'stable_it') reasons.push("You want organized IT request management");
      if (reasons.length === 0) reasons.push("Good fit for teams needing structured IT support");
    }
    
    if (slug === 'systems-assessment') {
      if (prefillData.primary_pain === 'unclear') reasons.push("You're not sure where to start");
      if (prefillData.outcome === 'roadmap') reasons.push("You want a clear roadmap");
      if (prefillData.urgency === 'urgent') reasons.push("You need urgent guidance");
      if (prefillData.budget === 'unsure') reasons.push("Assessment helps scope and budget planning");
      if (reasons.length === 0) reasons.push("Great starting point to identify priorities");
    }
    
    if (slug === 'web-development') {
      if (prefillData.primary_pain === 'build_something') reasons.push("You need to build a new website");
      if (prefillData.outcome === 'launch') reasons.push("You want to launch and get customers");
      if (reasons.length === 0) reasons.push("Build a professional web presence");
    }
    
    if (slug === 'mvp-prd') {
      if (prefillData.primary_pain === 'build_something') reasons.push("You need to build a new product");
      if (prefillData.outcome === 'launch') reasons.push("You want to launch and get customers");
      if (reasons.length === 0) reasons.push("Turn your product idea into reality");
    }
    
    if (slug === 'endpoint-standardization') {
      if (prefillData.backup_confidence === 'yes') reasons.push("You're ready for device policy improvements");
      if (prefillData.outcome === 'data_safe') reasons.push("You want better device security");
      if (prefillData.team_size && (prefillData.team_size === 'large' || prefillData.team_size === 'enterprise')) {
        reasons.push("Your team size benefits from standardized endpoints");
      }
      if (reasons.length === 0) reasons.push("Strengthen security with device management");
    }
    
    if (slug === 'automation-no-code') {
      if (prefillData.m365_status === 'organized') reasons.push("Your systems are mature enough for automation");
      if (prefillData.outcome === 'stable_it') reasons.push("Automation reduces manual IT work");
      if (reasons.length === 0) reasons.push("Streamline repetitive tasks with automation");
    }
    
    // Add industry fit if applicable
    const industryFit: Record<string, string[]> = {
      'process-mapping-sops': ['construction', 'nonprofit'],
      'onboarding-offboarding': ['nonprofit'],
      'mvp-prd': ['startup'],
      'web-development': ['startup', 'professional']
    };
    
    if (industryFit[slug]?.includes(prefillData.industry)) {
      const industryLabels: Record<string, string> = {
        construction: 'construction companies',
        nonprofit: 'nonprofits',
        startup: 'startups',
        professional: 'professional services'
      };
      reasons.push(`Common need for ${industryLabels[prefillData.industry]}`);
    }
    
    // Always provide at least one reason
    if (reasons.length === 0) {
      reasons.push("Recommended based on your quiz responses");
    }
    
    explanations[slug] = reasons;
  });
  
  return explanations;
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const prefillData = {
    service: typeof params.service === 'string' ? params.service : undefined,
    service_title: typeof params.service_title === 'string' ? params.service_title : undefined,
    confidence: typeof params.confidence === 'string' ? params.confidence : undefined,
    top_services: typeof params.top_services === 'string' ? params.top_services : undefined,
    service_scores: typeof params.service_scores === 'string' ? params.service_scores : undefined,
    industry: typeof params.industry === 'string' ? params.industry : undefined,
    team_size: typeof params.team_size === 'string' ? params.team_size : undefined,
    urgency: typeof params.urgency === 'string' ? params.urgency : undefined,
    budget: typeof params.budget === 'string' ? params.budget : undefined,
    primary_pain: typeof params.primary_pain === 'string' ? params.primary_pain : undefined,
    m365_status: typeof params.m365_status === 'string' ? params.m365_status : undefined,
    it_support: typeof params.it_support === 'string' ? params.it_support : undefined,
    documentation_state: typeof params.documentation_state === 'string' ? params.documentation_state : undefined,
    backup_confidence: typeof params.backup_confidence === 'string' ? params.backup_confidence : undefined,
    outcome: typeof params.outcome === 'string' ? params.outcome : undefined,
  };

  const fromQuiz = params.from_quiz === 'true';
  const serviceExplanations = fromQuiz ? getServiceExplanations(prefillData) : {};
  
  // Parse service scores for priority ranking
  let serviceScores: Record<string, number> = {};
  try {
    if (prefillData.service_scores) {
      serviceScores = JSON.parse(prefillData.service_scores);
    }
  } catch (e) {
    console.error('Failed to parse service scores', e);
  }
  
  // Sort services by score (priority)
  const topServices = prefillData.top_services?.split(',') || [];
  const sortedServices = topServices.sort((a, b) => (serviceScores[b] || 0) - (serviceScores[a] || 0));
  
  const serviceNames: Record<string, string> = {
    'systems-assessment': 'Systems Assessment',
    'process-mapping-sops': 'Process Mapping + SOPs',
    'm365-governance': 'Microsoft 365 Governance',
    'onboarding-offboarding': 'Onboarding / Offboarding',
    'backup-disaster-recovery': 'Backup + Disaster Recovery',
    'managed-it': 'Managed IT Services',
    'service-desk-setup': 'Service Desk Setup',
    'endpoint-standardization': 'Endpoint Standardization',
    'mvp-prd': 'MVP / PRD Kickoff',
    'automation-no-code': 'Automation / No-Code',
    'web-development': 'Web Development'
  };

  return (
    <>
      <Section title="Get a Quote" eyebrow={fromQuiz ? "Based on your quiz results" : "Start here"} className="pt-20 md:pt-24">
        <div className="max-w-3xl mb-8">
          {fromQuiz && prefillData.service_title && (
            <>
              <div className="bg-polus-emerald/10 border-2 border-polus-mint/30 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-polus-mint font-semibold mb-1">Quiz Completed — Here's What We Recommend</p>
                    <div className="text-sm text-[rgba(254,255,255,0.78)] mb-4">
                      Based on your answers, we've pre-selected the services that best match your needs. The form below is ready to submit—just add your contact info.
                    </div>
                  </div>
                </div>
                
                {Object.keys(serviceExplanations).length > 0 && (
                  <div className="space-y-3 border-t border-polus-mint/20 pt-4">
                    <p className="text-sm font-semibold text-polus-mint">
                      {sortedServices.length === 1 ? 'Why this service?' : `Your ${sortedServices.length} recommendations (by priority):`}
                    </p>
                    {sortedServices.map((slug, index) => {
                      const reasons = serviceExplanations[slug] || [];
                      if (reasons.length === 0) return null;
                      
                      const priorityLabels = ['Primary recommendation', 'Secondary option', 'Additional consideration'];
                      const priorityLabel = priorityLabels[index] || 'Additional option';
                      const score = serviceScores[slug] || 0;
                      
                      return (
                        <div key={slug} className="bg-polus-surface2/50 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                              index === 0 ? 'bg-polus-gold/20 text-polus-gold' : 
                              index === 1 ? 'bg-polus-mint/20 text-polus-mint' :
                              'bg-polus-surface2 text-[rgba(254,255,255,0.65)]'
                            }`}>
                              {priorityLabel}
                            </span>
                            {sortedServices.length > 1 && (
                              <span className="text-xs text-[rgba(254,255,255,0.5)]">Match score: {score}</span>
                            )}
                          </div>
                          <p className="font-semibold text-sm mb-2">{serviceNames[slug]}</p>
                          <ul className="space-y-1">
                            {reasons.map((reason, idx) => (
                              <li key={idx} className="text-xs text-[rgba(254,255,255,0.75)] flex items-start gap-2">
                                <span className="text-polus-gold mt-0.5">•</span>
                                <span>{reason}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          )}
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
            Tell us what you need—we'll send you a detailed quote within 1 business day.
          </p>
          <p className="text-sm text-[rgba(254,255,255,0.65)]">
            Looking for a quick conversation first? <a href="/book" className="text-polus-mint hover:text-polus-gold underline">Book a free discovery call</a>.
          </p>
        </div>
        <QuoteForm prefillData={prefillData} />
      </Section>

      <Section title="Or just reach out" className="bg-polus-surface1">
        <div className="max-w-3xl">
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-8">
            Have a simple question? Send us a message and we'll reply within 1 business day.
          </p>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
