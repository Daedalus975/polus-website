"use client";
import { useState } from "react";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { track } from "@/lib/track";

type Question = {
  id: string;
  question: string;
  helpText?: string;
  options: {
    label: string;
    value: string;
    weights: Record<string, number>;
    nextQuestion?: string; // For branching logic
  }[];
  showIf?: (answers: Record<string, string>) => boolean;
};

type ServiceRecommendation = {
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
  price: string;
  timeline: string;
  minBudget: number;
  idealFor: string[];
};

export default function StartAssessmentPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendation, setRecommendation] = useState<{ service: ServiceRecommendation; confidence: number; topServices: string[]; serviceScores: Record<string, number> } | null>(null);
  const [started, setStarted] = useState(false);
  const [questionPath, setQuestionPath] = useState<string[]>([]);

  const questions: Question[] = [
    {
      id: "industry",
      question: "What industry are you in?",
      helpText: "This helps us recommend services that work best for your type of business.",
      options: [
        { label: "Construction / Trades", value: "construction", weights: {} },
        { label: "Nonprofit / Association", value: "nonprofit", weights: {} },
        { label: "Startup / Technology", value: "startup", weights: {} },
        { label: "Professional Services (Legal, Accounting, Consulting)", value: "professional", weights: {} },
        { label: "Healthcare / Medical", value: "healthcare", weights: {} },
        { label: "Other", value: "other", weights: {} }
      ]
    },
    {
      id: "team_size",
      question: "How many people are on your team?",
      helpText: "This helps us recommend the right tier and scope for your services.",
      options: [
        { label: "Just me (1 person)", value: "solo", weights: { "systems-assessment": 2, "web-development": 1, "mvp-prd": 1, "strategic-advisory": 1 } },
        { label: "2-5 employees", value: "micro", weights: { "systems-assessment": 1, "process-clarity-pack": 1, "m365-governance": 1 } },
        { label: "6-15 employees", value: "small", weights: { "process-clarity-pack": 2, "m365-governance": 2, "employee-lifecycle": 2, "identity-device-foundation": 1 } },
        { label: "16-25 employees", value: "medium", weights: { "m365-governance": 2, "it-operations-toolkit": 2, "employee-lifecycle": 2, "new-foundation-bundle": 3, "identity-device-foundation": 2 } },
        { label: "26-35 employees", value: "medium_plus", weights: { "identity-device-foundation": 3, "employee-lifecycle": 3, "new-foundation-bundle": 2, "strategic-advisory": 2 } },
        { label: "36-50 employees", value: "large", weights: { "strategic-advisory": 3, "identity-device-foundation": 3, "it-operations-toolkit": 3, "employee-lifecycle": 2 } },
        { label: "51+ employees", value: "enterprise", weights: { "strategic-advisory": 4, "it-operations-toolkit": 3, "identity-device-foundation": 2 } }
      ]
    },
    {
      id: "primary_pain",
      question: "Which of these problems is causing you the most pain right now?",
      helpText: "Pick the one that keeps you up at night.",
      options: [
        { label: "Nothing is documented—everything lives in people's heads", value: "no_docs", weights: { "process-clarity-pack": 5, "systems-assessment": 2 } },
        { label: "Can't find files, emails get lost, info is scattered everywhere", value: "scattered", weights: { "m365-governance": 5, "process-clarity-pack": 2 } },
        { label: "Terrified we'll lose critical data or have major downtime", value: "data_risk", weights: { "backup-dr-readiness": 5, "systems-assessment": 2 } },
        { label: "Onboarding new people takes forever and is inconsistent", value: "onboarding_slow", weights: { "employee-lifecycle": 5, "process-clarity-pack": 2 } },
        { label: "IT problems constantly interrupt work and slow us down", value: "it_fires", weights: { "strategic-advisory": 4, "it-operations-toolkit": 3, "systems-assessment": 2 } },
        { label: "Need to build a new product or website but don't know where to start", value: "build_something", weights: { "mvp-prd": 4, "web-development": 3, "systems-assessment": 1 } },
        { label: "Not sure what the problem is—just know things aren't working", value: "unclear", weights: { "systems-assessment": 5 } }
      ]
    },
    {
      id: "m365_status",
      question: "Do you use Microsoft 365 (Office 365)?",
      showIf: (answers) => answers.primary_pain !== "build_something",
      options: [
        { label: "Yes, but it's a mess (files everywhere, can't find anything)", value: "messy", weights: { "m365-governance": 5, "m365-training": 2 } },
        { label: "Yes, but worried about security (no MFA, no device management)", value: "security_concern", weights: { "identity-device-foundation": 5, "new-foundation-bundle": 3 } },
        { label: "Yes, and it's mostly organized but need better governance", value: "needs_governance", weights: { "m365-governance": 3, "employee-lifecycle": 2 } },
        { label: "Yes, but low adoption (team doesn't use it effectively)", value: "underutilized", weights: { "m365-training": 4, "m365-governance": 2 } },
        { label: "No, we use Google Workspace/Other", value: "google", weights: { "process-clarity-pack": 1, "it-documentation": 1 } },
        { label: "Not yet—considering moving to cloud", value: "none", weights: { "identity-device-foundation": 2, "systems-assessment": 2 } }
      ]
    },
    {
      id: "it_support",
      question: "Do you currently have IT support?",
      showIf: (answers) => answers.primary_pain === "it_fires" || answers.primary_pain === "data_risk" || answers.primary_pain === "unclear",
      options: [
        { label: "No—we're on our own", value: "none", weights: { "strategic-advisory": 3, "systems-assessment": 2, "growth-acceleration-bundle": 3 } },
        { label: "We have an IT person/MSP but they're overwhelmed or not responsive", value: "bad_support", weights: { "strategic-advisory": 4, "it-operations-toolkit": 2 } },
        { label: "We have good IT support, just need help with a specific project", value: "good_support", weights: { "process-clarity-pack": 1, "backup-dr-readiness": 1 } }
      ]
    },
    {
      id: "documentation_state",
      question: "How much of your core processes are documented?",
      showIf: (answers) => answers.primary_pain === "no_docs" || answers.primary_pain === "onboarding_slow" || answers.primary_pain === "unclear",
      options: [
        { label: "Almost nothing—it's all in people's heads", value: "none", weights: { "process-clarity-pack": 4, "systems-assessment": 2 } },
        { label: "A few things, but they're outdated or incomplete", value: "partial", weights: { "process-clarity-pack": 3 } },
        { label: "Most things are documented, just need to organize them", value: "exists_messy", weights: { "m365-governance": 2, "process-clarity-pack": 1 } }
      ]
    },
    {
      id: "backup_confidence",
      question: "If your main file server or cloud storage disappeared tomorrow, could you recover everything?",
      showIf: (answers) => answers.primary_pain === "data_risk" || answers.primary_pain === "unclear",
      options: [
        { label: "Honestly, no—we'd be in serious trouble", value: "no", weights: { "backup-dr-readiness": 5 } },
        { label: "Probably, but I'm not confident", value: "maybe", weights: { "backup-dr-readiness": 4 } },
        { label: "Yes, we have backups and have tested them", value: "yes", weights: { "identity-device-foundation": 1 } }
      ]
    },
    {
      id: "urgency",
      question: "How urgently do you need to fix this?",
      options: [
        { label: "Emergency—this is actively causing problems right now", value: "urgent", weights: { "systems-assessment": 2, "strategic-advisory": 2 } },
        { label: "Soon—need to address this within the next month", value: "soon", weights: {} },
        { label: "Planning ahead—want to fix it in the next 1-3 months", value: "planning", weights: {} },
        { label: "Just exploring options for now", value: "exploring", weights: { "systems-assessment": 1 } }
      ]
    },
    {
      id: "previous_consulting",
      question: "Have you worked with IT consultants or MSPs before?",
      options: [
        { label: "Yes, and it was great—just need help with a new project", value: "good_experience", weights: {} },
        { label: "Yes, but they didn't understand our business or gave cookie-cutter advice", value: "bad_experience", weights: { "systems-assessment": 3, "strategic-advisory": 2 } },
        { label: "Yes, but they tried to lock us in or oversell services we didn't need", value: "oversold", weights: { "systems-assessment": 2 } },
        { label: "No, this would be our first time", value: "first_time", weights: { "systems-assessment": 1 } }
      ]
    },
    {
      id: "roi_awareness",
      question: "Have you looked at our ROI Calculator?",
      helpText: "Our ROI Calculator shows how much downtime, security incidents, and inefficiency are costing you.",
      showIf: (answers) => {
        const budgetMapping: Record<string, number> = {
          "low": 1500,
          "mid": 3000,
          "mid_high": 7000,
          "high": 15000,
          "enterprise": 50000,
          "unsure": 100000
        };
        const userBudget = budgetMapping[answers.budget] || 100000;
        return userBudget < 5000; // Only show for budgets under $5k
      },
      options: [
        { label: "Yes, and it opened my eyes—the costs are real", value: "saw_roi", weights: {} },
        { label: "No, but I'll check it out", value: "interested", weights: {} },
        { label: "Not yet—just exploring services first", value: "not_yet", weights: {} }
      ]
    },
    {
      id: "budget",
      question: "What's your budget for this project?",
      helpText: "Be honest—we'll only recommend services that fit your budget.",
      options: [
        { label: "Under $1,499", value: "low", weights: {} },
        { label: "$1,499 - $2,999", value: "mid", weights: {} },
        { label: "$3,000 - $7,000", value: "mid_high", weights: {} },
        { label: "$7,000 - $15,000", value: "high", weights: {} },
        { label: "$15,000+", value: "enterprise", weights: {} },
        { label: "Not sure yet—just exploring", value: "unsure", weights: {} }
      ]
    },
    {
      id: "outcome",
      question: "When this is done, what would success look like?",
      helpText: "Pick the outcome that matters most to you.",
      options: [
        { label: "Everyone knows where to find documents and how to do their job", value: "clarity", weights: { "process-clarity-pack": 3, "m365-governance": 2, "employee-lifecycle": 2 } },
        { label: "New hires ramp up in days instead of weeks", value: "fast_onboarding", weights: { "employee-lifecycle": 4, "process-clarity-pack": 2 } },
        { label: "We're confident our data is safe and we can recover from disasters", value: "data_safe", weights: { "backup-dr-readiness": 4, "identity-device-foundation": 2 } },
        { label: "IT problems don't interrupt work anymore", value: "stable_it", weights: { "strategic-advisory": 3, "it-operations-toolkit": 2 } },
        { label: "We have a clear roadmap for what to fix and in what order", value: "roadmap", weights: { "systems-assessment": 4, "technology-roadmap-workshop": 2 } },
        { label: "We launch our product/website and start getting customers", value: "launch", weights: { "mvp-prd": 3, "web-development": 3 } }
      ]
    }
  ];

  const services: Record<string, ServiceRecommendation> = {
    "systems-assessment": {
      slug: "systems-assessment",
      title: "Systems Review",
      description: "A 90-minute deep-dive session where we evaluate your current operations, IT setup, and workflows. You'll walk away with a prioritized roadmap and clear next steps.",
      deliverables: [
        "Documented findings report",
        "Prioritized recommendations",
        "Effort and cost estimates",
        "Quick wins identified"
      ],
      price: "$799",
      timeline: "1 week to complete",
      minBudget: 299,
      idealFor: ["All industries", "Teams unsure where to start", "Crisis situations"]
    },
    "process-clarity-pack": {
      slug: "process-clarity-pack",
      title: "Process Mapping & SOP Development",
      description: "Document critical business workflows your team will actually use. Simple processes start at $1,200. Standard processes $1,800. Complex processes $3,000. Multi-process packages available.",
      deliverables: [
        "Visual process maps (swimlane or flowchart)",
        "Written SOP documents with decision trees",
        "SOP template library for future documentation",
        "Team training session on adoption",
        "30-day post-delivery support for refinements"
      ],
      price: "$1,200+",
      timeline: "1-2 weeks per process",
      minBudget: 1200,
      idealFor: ["Construction", "Nonprofits", "Professional Services", "Growing teams", "Teams with tribal knowledge"]
    },
    "m365-governance": {
      slug: "m365-governance",
      title: "Teams & SharePoint Governance",
      description: "Tame Teams/SharePoint sprawl with sustainable governance. Tier 1 (1-25 sites): $3,499. Tier 2 (26-50 sites): $5,499. Tier 3 (51-100 sites): $8,499. Includes cleanup, permissions, naming conventions, and lifecycle policies.",
      deliverables: [
        "Complete Teams/SharePoint cleanup and reorganization",
        "Permissions baseline and security group structure",
        "Governance policy documentation (naming, lifecycle, retention)",
        "User training session",
        "Admin training on governance maintenance"
      ],
      price: "$3,499+",
      timeline: "4-6 weeks",
      minBudget: 3500,
      idealFor: ["Teams using M365 but files are scattered", "6+ employees", "Growing organizations"]
    },
    "employee-lifecycle": {
      slug: "employee-lifecycle",
      title: "Onboarding & Offboarding Automation",
      description: "Automate employee workflows for security and consistency. Tier 1 (10-25 employees): $2,500. Tier 2 (26-50 employees): $4,200. Includes up to 5 role templates. Additional roles +$300 each.",
      deliverables: [
        "Onboarding workflow automation (accounts, groups, welcome emails)",
        "Offboarding workflow automation (access revocation, license recovery)",
        "Integration with Microsoft 365 and HR systems",
        "Security group and role templates (up to 5 roles)",
        "Manager approval workflows",
        "Documentation and admin training"
      ],
      price: "$2,500+",
      timeline: "3-4 weeks",
      minBudget: 2500,
      idealFor: ["Nonprofits", "Healthcare", "Growing teams", "High turnover", "Compliance requirements"]
    },
    "backup-dr-readiness": {
      slug: "backup-dr-readiness",
      title: "Backup Verification & DR Readiness",
      description: "Verify your backups are working, document recovery procedures, and reduce downtime risk with tested runbooks.",
      deliverables: [
        "Backup verification report",
        "Disaster recovery runbooks",
        "Recovery time estimates",
        "Testing documentation"
      ],
      price: "$1,499+",
      timeline: "1-3 weeks",
      minBudget: 1500,
      idealFor: ["All industries", "Teams worried about data loss"]
    },
    "identity-device-foundation": {
      slug: "identity-device-foundation",
      title: "Microsoft 365 / Entra ID Setup",
      description: "Modern cloud identity and device management. Tier 1 (10-15 users): $6,499. Tier 2 (16-35 users): $8,499. Tier 3 (36-50 users): $10,999. Includes Azure AD, Intune, MFA, SSO, and baseline security.",
      deliverables: [
        "Complete Azure AD/Entra ID setup with MFA",
        "Device enrollment in Microsoft Intune",
        "Conditional Access policies (location, device compliance, MFA)",
        "SSO setup for up to 3 core applications",
        "BitLocker encryption enforcement",
        "Windows Update rings configuration",
        "Admin training and handoff documentation"
      ],
      price: "$6,499+",
      timeline: "4-6 weeks",
      minBudget: 6500,
      idealFor: ["Teams moving to cloud", "Security-conscious organizations", "Healthcare", "Legal", "10-50 employees"]
    },
    "strategic-advisory": {
      slug: "strategic-advisory",
      title: "IT Advisory",
      description: "Ongoing strategic guidance—roadmap planning, vendor management, and IT decision support. No support tickets.",
      deliverables: [
        "Monthly strategic sessions",
        "Technology roadmap",
        "Vendor evaluation",
        "Budget planning"
      ],
      price: "$500/month+",
      timeline: "Ongoing monthly retainer",
      minBudget: 6000, // 12 months minimum
      idealFor: ["Growing businesses", "Teams making technology decisions", "Companies without IT leadership"]
    },
    "it-operations-toolkit": {
      slug: "it-operations-toolkit",
      title: "IT Operations Setup",
      description: "Service desk, asset tracking, and operational foundation. Essentials: $4,500. Plus (with automation & runbooks): $7,500. Up to 50 assets included, additional assets +$50 per 10.",
      deliverables: [
        "Service desk platform selection and setup",
        "Ticket categories, priorities, workflows, and SLA definitions",
        "Asset management platform setup",
        "Initial asset inventory import (up to 50 assets)",
        "Admin training and knowledge base starter templates",
        "Plus tier: PowerShell automation scripts",
        "Plus tier: Service desk operations runbook"
      ],
      price: "$4,500+",
      timeline: "3-5 weeks (Essentials), 5-7 weeks (Plus)",
      minBudget: 4500,
      idealFor: ["Teams formalizing IT support", "30+ employees", "Companies needing audit trails"]
    },
    "mvp-prd": {
      slug: "mvp-prd",
      title: "MVP / PRD Kickoff",
      description: "For startups building their first product: prioritize ruthlessly, create a clear PRD, and execute the first iteration.",
      deliverables: [
        "Product requirements doc",
        "Prioritized feature list",
        "First iteration plan",
        "Launch roadmap"
      ],
      price: "$2,000+",
      timeline: "1-day workshop + 1 week",
      minBudget: 2000,
      idealFor: ["Startups", "Building new products"]
    },
    "web-development": {
      slug: "web-development",
      title: "Web Development",
      description: "Lead-generation websites built for small businesses—clear, fast, and optimized for conversions.",
      deliverables: [
        "Custom website design",
        "Mobile-responsive build",
        "SEO optimization",
        "Content management system"
      ],
      price: "$3,499+",
      timeline: "4-8 weeks",
      minBudget: 3500,
      idealFor: ["All industries", "Need online presence", "Lead generation"]
    },
    "new-foundation-bundle": {
      slug: "new-foundation-bundle",
      title: "IT Foundation Package",
      description: "Complete foundational IT setup: Identity & Security (Tier 1), M365 Governance (Tier 1), and Employee Lifecycle (Tier 1). Normally $12,500 separate, bundle price $14,500 ($15,500 value with integrated delivery). For 10-25 employees.",
      deliverables: [
        "Complete Azure AD/Entra ID setup with MFA and Conditional Access",
        "Device enrollment in Microsoft Intune with security policies",
        "SSO setup for up to 3 core applications",
        "M365 Teams/SharePoint cleanup and governance framework (1-25 sites)",
        "Automated employee onboarding and offboarding workflows (up to 5 role templates)",
        "Documentation package: runbooks, policies, and admin guides",
        "Training sessions for IT admins and end users"
      ],
      price: "$14,500",
      timeline: "8-12 weeks for complete implementation",
      minBudget: 14500,
      idealFor: ["Companies starting fresh", "10-25 employees", "Complete IT rebuild", "Moving from on-premises to cloud"]
    },
    "growth-acceleration-bundle": {
      slug: "growth-acceleration-bundle",
      title: "Growth Package",
      description: "Systems Assessment, Identity & Security (Tier 1), and 3 months IT Advisory. Normally $8,799 separate, bundle price $7,999 (save $800). Complete modernization with ongoing guidance.",
      deliverables: [
        "90-minute systems assessment with prioritized recommendations",
        "Complete Identity & Device implementation (10-15 users)",
        "3 months of strategic IT Advisory (monthly sessions)",
        "Technology roadmap and vendor evaluation",
        "Budget planning and decision support"
      ],
      price: "$7,999",
      timeline: "Assessment: 1 week | Implementation: 4-6 weeks | Advisory: 3 months",
      minBudget: 7999,
      idealFor: ["Ready to modernize", "Want expert guidance", "Growing businesses", "10-15 employees"]
    },
    "m365-training": {
      slug: "m365-training",
      title: "Microsoft 365 End-User Training",
      description: "Drive M365 adoption with targeted training. Teams, SharePoint, OneDrive best practices.",
      deliverables: [
        "2-hour training session",
        "Training materials",
        "Recorded session",
        "Quick reference guides"
      ],
      price: "$1,200+",
      timeline: "1-2 weeks",
      minBudget: 1200,
      idealFor: ["Post-implementation teams", "Low M365 adoption", "User training needed"]
    },
    "cloud-cost-optimization": {
      slug: "cloud-cost-optimization",
      title: "Cloud Cost Optimization Review",
      description: "Find waste in Azure and M365 spending. Most clients save 15-30% annually.",
      deliverables: [
        "License utilization audit",
        "Cost analysis",
        "Right-sizing recommendations",
        "Monitoring setup"
      ],
      price: "$1,200",
      timeline: "1-2 weeks",
      minBudget: 1200,
      idealFor: ["Growing cloud costs", "25+ M365 licenses", "Need cost controls"]
    },
    "it-documentation": {
      slug: "it-documentation",
      title: "IT Documentation Package",
      description: "Document your entire IT environment: network diagrams, system inventory, configuration standards, and operational runbooks. Standard (up to 25 devices): $3,499. Comprehensive (26-50 devices): $5,999.",
      deliverables: [
        "Network topology diagrams (physical and logical)",
        "Complete system inventory with owners and support contacts",
        "Application and service catalog with dependencies",
        "Configuration standards and security baselines",
        "Operational runbooks for common IT tasks",
        "SharePoint or wiki site setup for ongoing maintenance"
      ],
      price: "$3,499+",
      timeline: "3-4 weeks (Standard), 4-6 weeks (Comprehensive)",
      minBudget: 3500,
      idealFor: ["Companies with no IT documentation", "IT staff transitions", "Audit preparation", "Professional Services"]
    },
    "technology-roadmap-workshop": {
      slug: "technology-roadmap-workshop",
      title: "Technology Roadmap Workshop",
      description: "Build a 3-5 year technology plan. Full-day workshop with leadership to align technology with business goals.",
      deliverables: [
        "Current state assessment",
        "3-5 year roadmap",
        "Budget estimates",
        "Executive presentation"
      ],
      price: "$2,000",
      timeline: "1-day workshop + 1 week",
      minBudget: 2000,
      idealFor: ["Annual planning", "Funding rounds", "Multi-year decisions"]
    },
    "security-first-package": {
      slug: "security-first-package",
      title: "Security First Package",
      description: "Identity & Security + Backup & DR Verification. Lock down access and ensure recovery. Perfect for healthcare, finance, or security-conscious teams.",
      deliverables: [
        "Azure AD/Entra ID with MFA",
        "Device management (Intune)",
        "Conditional Access policies",
        "Backup verification",
        "DR runbooks",
        "Security training"
      ],
      price: "$7,500",
      timeline: "6-8 weeks",
      minBudget: 7500,
      idealFor: ["Healthcare", "Finance", "Security-conscious", "Compliance requirements"]
    },
    "process-compliance-package": {
      slug: "process-compliance-package",
      title: "Process & Compliance Package",
      description: "Process Documentation + M365 Governance + Employee Lifecycle. Document everything, organize M365, and automate onboarding/offboarding. Save $1,800.",
      deliverables: [
        "5 core processes documented",
        "M365 governance setup",
        "Automated employee workflows",
        "Compliance documentation",
        "Training materials"
      ],
      price: "$6,000",
      timeline: "6-8 weeks",
      minBudget: 6000,
      idealFor: ["Nonprofits", "Regulated industries", "Audit preparation", "Growing teams"]
    }
  };

  // Get the list of questions to show based on conditional logic
  const getVisibleQuestions = (): Question[] => {
    return questions.filter(q => !q.showIf || q.showIf(answers));
  };

  const handleStart = () => {
    setStarted(true);
    track("quiz_start");
  };

  const handleAnswer = (questionId: string, value: string) => {
    const visibleQuestions = getVisibleQuestions();
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    track("quiz_answer", { 
      question: questionId, 
      answer: value,
      question_number: currentQuestionIndex + 1,
      total_questions: visibleQuestions.length
    });
    
    const currentQ = visibleQuestions[currentQuestionIndex];
    
    // Check if the selected option has a nextQuestion override
    const selectedOption = currentQ.options.find(opt => opt.value === value);
    if (selectedOption?.nextQuestion) {
      // Jump to specific question
      const targetIndex = visibleQuestions.findIndex(q => q.id === selectedOption.nextQuestion);
      if (targetIndex >= 0) {
        setCurrentQuestionIndex(targetIndex);
        setQuestionPath([...questionPath, questionId]);
        return;
      }
    }
    
    // Normal progression: move to next question
    if (currentQuestionIndex < visibleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestionPath([...questionPath, questionId]);
    } else {
      // Quiz complete - calculate recommendation
      calculateRecommendation(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      track("quiz_back", { 
        from_question: currentQuestionIndex + 1,
        total_questions: visibleQuestions.length 
      });
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Remove last question from path
      const newPath = [...questionPath];
      const previousQuestionId = newPath.pop();
      setQuestionPath(newPath);
      // Remove that answer
      if (previousQuestionId) {
        const newAnswers = { ...answers };
        delete newAnswers[previousQuestionId];
        setAnswers(newAnswers);
      }
    }
  };

  const calculateRecommendation = (finalAnswers: Record<string, string>) => {
    // Step 1: Calculate base scores from weighted answers
    const scores: Record<string, number> = {};
    Object.keys(services).forEach(serviceSlug => {
      scores[serviceSlug] = 0;
    });

    // Add weights from each answer
    questions.forEach(question => {
      const answerValue = finalAnswers[question.id];
      if (answerValue) {
        const selectedOption = question.options.find(opt => opt.value === answerValue);
        if (selectedOption) {
          Object.entries(selectedOption.weights).forEach(([serviceSlug, weight]) => {
            scores[serviceSlug] = (scores[serviceSlug] || 0) + weight;
          });
        }
      }
    });

    // Step 2: Apply industry multipliers
    const userIndustry = finalAnswers.industry;
    if (userIndustry) {
      Object.keys(services).forEach(serviceSlug => {
        const service = services[serviceSlug];
        if (service.idealFor.some(ideal => 
          ideal.toLowerCase().includes(userIndustry) || 
          userIndustry.includes(ideal.toLowerCase()) ||
          ideal === "All industries"
        )) {
          scores[serviceSlug] *= 1.5; // 50% boost for industry fit
        }
      });
    }

    // Step 3: Filter by budget
    const budgetMapping: Record<string, number> = {
      "low": 1500,
      "mid": 3000,
      "mid_high": 7000,
      "high": 15000,
      "enterprise": 50000,
      "unsure": 100000 // Don't filter if unsure
    };
    
    const userBudget = budgetMapping[finalAnswers.budget] || 100000;
    const affordableServices = Object.keys(services).filter(serviceSlug => 
      services[serviceSlug].minBudget <= userBudget
    );

    // Filter scores to only affordable services
    const filteredScores = Object.fromEntries(
      Object.entries(scores).filter(([serviceSlug]) => affordableServices.includes(serviceSlug))
    );

    // Step 4: Find top services with meaningful scores
    const sortedServices = Object.entries(filteredScores)
      .sort(([, scoreA], [, scoreB]) => scoreB - scoreA);

    if (sortedServices.length === 0) {
      // Fallback: recommend systems-assessment
      setRecommendation({
        service: services["systems-assessment"],
        confidence: 50,
        topServices: ["systems-assessment"],
        serviceScores: { "systems-assessment": 1 }
      });
      track("quiz_completed", { recommended_service: "systems-assessment", confidence: 50 });
      return;
    }

    const [topServiceSlug, topScore] = sortedServices[0];
    const secondScore = sortedServices.length > 1 ? sortedServices[1][1] : 0;
    
    // Only include services that meet meaningful threshold:
    // - Score must be > 0
    // - Score must be at least 40% of top score (or top score is very low)
    // - OR score is at least 3 points
    const meaningfulThreshold = Math.max(topScore * 0.4, 3);
    const topServices = sortedServices
      .filter(([, score]) => score > 0 && (score >= meaningfulThreshold || score >= 3))
      .slice(0, 3) // Cap at 3 max
      .map(([slug]) => slug);
    
    // Store scores for priority display
    const serviceScores = Object.fromEntries(
      topServices.map(slug => [slug, filteredScores[slug]])
    );

    // Step 5: Calculate confidence score
    let confidence = 100;
    if (topScore === 0) {
      confidence = 30; // No clear signal
    } else if (secondScore === 0) {
      confidence = 95; // Only one service scored
    } else {
      // Confidence based on margin between top and second
      const margin = ((topScore - secondScore) / topScore) * 100;
      confidence = Math.min(95, Math.max(50, 50 + margin));
    }

    const recommendedService = services[topServiceSlug];
    setRecommendation({
      service: recommendedService,
      confidence: Math.round(confidence),
      topServices,
      serviceScores
    });

    track("quiz_completed", { 
      recommended_service: topServiceSlug,
      confidence: Math.round(confidence)
    });
  };

  const visibleQuestions = getVisibleQuestions();
  const currentQ = visibleQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / visibleQuestions.length) * 100;

  // Safety check: if currentQ is undefined, reset to start
  if (!currentQ && started && !recommendation) {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setStarted(false);
    setQuestionPath([]);
    return null;
  }

  if (!started) {
    return (
      <Section title="Find Your Starting Point" eyebrow="Guided Assessment" className="pt-20 md:pt-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-8">
            Answer 10 targeted questions and we&apos;ll recommend the exact service you need—based on your specific challenges, budget, and industry.
          </p>
          <Card className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-polus-emerald/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Takes 2-3 minutes</h3>
                <p className="text-sm text-[rgba(254,255,255,0.65)] mt-1">Quick and straightforward</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-polus-emerald/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold">Precision matching</h3>
                <p className="text-sm text-[rgba(254,255,255,0.65)] mt-1">Industry and budget-aware</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-polus-emerald/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Confident recommendation</h3>
                <p className="text-sm text-[rgba(254,255,255,0.65)] mt-1">One clear best option</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleStart} variant="primary" className="px-8 py-3">
                Start the Assessment →
              </Button>
              <Button 
                onClick={() => {
                  track("quiz_skipped");
                  window.location.href = "/book";
                }}
                variant="secondary" 
                className="px-8 py-3"
              >
                Skip Assessment - Book a Call Instead
              </Button>
            </div>
            <p className="text-sm text-[rgba(254,255,255,0.58)] mt-6">
              Not sure which option to choose? The assessment helps us understand your situation so we can point you in the right direction—or book a discovery call and we&apos;ll figure it out together.
            </p>
          </Card>
        </div>
      </Section>
    );
  }

  if (recommendation) {
    const { service, confidence, topServices, serviceScores } = recommendation;
    const isLowConfidence = confidence < 70;
    
    return (
      <Section title="Your Recommended Starting Point" className="pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto">
          {isLowConfidence && (
            <Card className="p-6 mb-6 bg-polus-gold/10 border-polus-gold/30">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-polus-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Not sure? Let&apos;s talk it through.</h3>
                  <p className="text-sm text-[rgba(254,255,255,0.78)]">
                    Based on your answers, we have a good idea—but a 15-minute discovery call would help us pinpoint exactly what you need. No pressure, just clarity.
                  </p>
                </div>
              </div>
            </Card>
          )}

          <Card className="p-8 mb-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-polus-gold/20 text-polus-gold text-sm font-semibold mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {confidence}% Match
              </div>
              <h2 className="text-3xl font-bold mb-3">{service.title}</h2>
              <p className="text-lg text-[rgba(254,255,255,0.78)]">
                {service.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-polus-mint mb-3">What You&apos;ll Get</h3>
                <ul className="space-y-2">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-[rgba(254,255,255,0.78)]">
                      <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-4">
                  <h3 className="font-semibold text-polus-mint mb-2">Starting Price</h3>
                  <p className="text-2xl font-bold text-polus-gold">{service.price}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-polus-mint mb-2">Typical Timeline</h3>
                  <p className="text-[rgba(254,255,255,0.78)]">{service.timeline}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => {
                  track("cta_book_click", { from: "quiz_result" });
                  window.location.href = "/book";
                }}
                variant="primary" 
                className="flex-1"
              >
                Book Free Discovery Call
              </Button>
              <Button 
                onClick={() => {
                  // Map quiz team_size values to form values
                  const teamSizeMap: Record<string, string> = {
                    "solo": "1-5",
                    "micro": "1-5",
                    "small": "6-15",
                    "medium": "16-30",
                    "large": "31-50",
                    "enterprise": "51+"
                  };
                  
                  const params = new URLSearchParams({
                    service: service.slug,
                    service_title: service.title,
                    confidence: confidence.toString(),
                    top_services: topServices.join(','),
                    service_scores: JSON.stringify(serviceScores),
                    industry: answers.industry || '',
                    team_size: teamSizeMap[answers.team_size] || answers.team_size || '',
                    urgency: answers.urgency || '',
                    budget: answers.budget || '',
                    primary_pain: answers.primary_pain || '',
                    m365_status: answers.m365_status || '',
                    it_support: answers.it_support || '',
                    documentation_state: answers.documentation_state || '',
                    backup_confidence: answers.backup_confidence || '',
                    outcome: answers.outcome || '',
                    from_quiz: 'true'
                  });
                  window.location.href = `/contact?${params.toString()}`;
                }}
                variant="secondary" 
                className="flex-1"
              >
                Request Quote
              </Button>
              <Button href={`/services/${service.slug}`} variant="link" className="flex-1">
                Learn More
              </Button>
            </div>
          </Card>

          <div className="text-center">
            <button
              onClick={() => {
                setCurrentQuestionIndex(0);
                setAnswers({});
                setRecommendation(null);
                setStarted(false);
                setQuestionPath([]);
              }}
              className="text-polus-mint hover:text-polus-gold underline text-sm"
            >
              Retake the assessment
            </button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section title={`Question ${currentQuestionIndex + 1} of ${visibleQuestions.length}`} className="pt-20 md:pt-24">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-polus-surface2 rounded-full overflow-hidden">
            <div
              className="h-full bg-polus-gold transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Card className="p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-2">{currentQ.question}</h2>
          {currentQ.helpText && (
            <p className="text-sm text-[rgba(254,255,255,0.65)] mb-6">
              {currentQ.helpText}
            </p>
          )}
          <div className="space-y-3">
            {currentQ.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQ.id, option.value)}
                className="w-full text-left p-4 rounded-lg border-2 border-polus-mint/30 bg-polus-surface2 hover:border-polus-mint hover:bg-polus-emerald/10 transition-all focus:outline-none focus:ring-2 focus:ring-polus-emerald/55"
              >
                <span className="font-medium">{option.label}</span>
              </button>
            ))}
          </div>

          {currentQuestionIndex > 0 && (
            <div className="mt-6 pt-6 border-t border-polus-mint/20">
              <button
                onClick={handleBack}
                className="text-polus-mint hover:text-polus-gold text-sm flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to previous question
              </button>
            </div>
          )}
        </Card>
      </div>
    </Section>
  );
}

