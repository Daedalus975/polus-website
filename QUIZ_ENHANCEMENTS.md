# Quiz Enhancement Summary

## Overview
The guided quiz at `/start` has been completely redesigned to provide a single, highly accurate service recommendation based on the user's specific situation.

## Key Improvements

### 1. **More Targeted Questions (10 total)**
   - **Industry** - Identifies user's business type for industry-specific multipliers
   - **Team Size** - Determines scale and complexity needs
   - **Primary Pain** - Core problem causing the most pain right now
   - **M365 Status** - Conditional question for non-product-building users
   - **IT Support** - Conditional question for users with IT/data problems
   - **Documentation State** - Conditional question for documentation/onboarding issues
   - **Backup Confidence** - Conditional question for data risk concerns
   - **Urgency** - Timeline for addressing the problem
   - **Budget** - Honest budget range for filtering
   - **Desired Outcome** - What success looks like

### 2. **Conditional Question Branching**
   - Questions dynamically show/hide based on previous answers
   - Example: M365 question only shown if user didn't select "build_something" as primary pain
   - IT support question only shown for users with IT fires, data risk, or unclear problems
   - Documentation question only for users with doc/onboarding issues
   - Backup confidence question for data risk concerns

### 3. **Budget-Based Filtering**
   - Each service now has a `minBudget` field
   - After scoring, services outside the user's budget range are excluded
   - Prevents recommending $15k services to users with $3k budgets
   - Budget ranges: Under $1.5k, $1.5k-$3k, $3k-$7k, $7k-$15k, $15k+, Unsure

### 4. **Industry-Specific Scoring Multipliers**
   - Each service has `idealFor` array (e.g., ["Construction", "Nonprofits"])
   - If user's industry matches a service's ideal industries, that service gets a 1.5x score boost
   - Ensures recommendations are tailored to industry-specific needs

### 5. **Confidence Score Calculation**
   - Algorithm calculates confidence based on margin between top and second-place services
   - Formula: `confidence = 50 + ((topScore - secondScore) / topScore * 100)`
   - Confidence displayed as "X% Match" badge on recommendation
   - Low confidence (<70%) triggers suggestion to book discovery call instead

### 6. **Skip Quiz Button**
   - Users can bypass quiz and go directly to `/book` page
   - Tracks "quiz_skipped" event for analytics
   - Clear secondary CTA: "Skip Quiz - Book a Call Instead"
   - Helpful for users who prefer human guidance over self-serve quiz

### 7. **Enhanced Question Clarity**
   - Added `helpText` to several questions for additional context
   - More specific, pain-focused question wording
   - Examples:
     - "Which of these problems is causing you the most pain right now?"
     - "If your main file server disappeared tomorrow, could you recover everything?"

### 8. **Better Recommendation Display**
   - Shows confidence percentage as badge
   - Low confidence warning card appears if <70% confident
   - Tracks confidence score in analytics event
   - Three clear CTAs: Book Call, Request Quote, Learn More

## Technical Implementation

### Type Definitions
```typescript
type Question = {
  id: string;
  question: string;
  helpText?: string;
  options: {
    label: string;
    value: string;
    weights: Record<string, number>;
    nextQuestion?: string; // For future branching logic
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
```

### Scoring Algorithm
1. Calculate base scores from weighted answers
2. Apply 1.5x industry multiplier for matching services
3. Filter out services above user's budget
4. Find highest-scoring affordable service
5. Calculate confidence based on margin vs. second place
6. Return recommendation with confidence score

### Analytics Tracking
- `quiz_start` - When user clicks "Start the Quiz"
- `quiz_skipped` - When user clicks "Skip Quiz - Book a Call Instead"
- `quiz_completed` - Includes `recommended_service` slug and `confidence` score

## Service Budget Ranges
- **Systems Assessment**: $1,250 (lowest entry point)
- **Onboarding/Offboarding**: $2,000
- **Automation/No-Code**: $2,200
- **Process Mapping + SOPs**: $2,500
- **Backup + Disaster Recovery**: $2,800
- **Endpoint Standardization**: $3,200
- **M365 Governance**: $3,500
- **Web Development**: $3,500
- **MVP / PRD Kickoff**: $4,000
- **Service Desk Setup**: $4,500
- **Managed IT Services**: $9,600 (annual minimum)

## User Experience Flow

### Before (Old Quiz)
1. Start quiz → 8 generic questions → Simple weighted scoring → Show recommendation
2. No budget consideration, no industry fit, no confidence score

### After (Enhanced Quiz)
1. Intro screen with skip option
2. Industry question → sets context
3. Team size → determines scale
4. Primary pain → focuses recommendation
5. **Conditional questions** based on pain point (3-4 additional questions)
6. Urgency, budget, desired outcome
7. **Sophisticated scoring** with industry multipliers and budget filtering
8. **Confidence-aware recommendation** with warning if uncertain
9. Three clear next steps

## Why This Works Better

1. **Budget Reality Check** - No more recommending $10k services to $2k budgets
2. **Industry Context** - Construction companies get different recs than startups
3. **Conditional Logic** - Only ask relevant questions, not generic catch-all
4. **Confidence Transparency** - If we're not sure, we say so and suggest a call
5. **Skip Option** - Respects users who want human guidance over automation
6. **More Accurate** - 10 targeted questions > 8 generic questions
7. **Pain-Focused** - Questions directly target specific pain points

## Testing Scenarios

### Test Case 1: Small Construction Company
- Industry: Construction
- Team: 6-15 employees
- Pain: No documentation
- Budget: $2,500-$5,000
- **Expected**: Process Mapping + SOPs (with construction industry boost)

### Test Case 2: Nonprofit with M365 Chaos
- Industry: Nonprofit
- Team: 16-30
- Pain: Files scattered
- M365 Status: Messy
- Budget: $3,000-$7,000
- **Expected**: M365 Governance (nonprofit boost + messy M365 signal)

### Test Case 3: Startup Building Product
- Industry: Startup
- Pain: Building new product
- Budget: $3,000-$7,000
- **Expected**: MVP / PRD Kickoff (product building signal)

### Test Case 4: Low Budget, Unclear Problem
- Budget: Under $1,500
- Pain: Not sure what the problem is
- **Expected**: Systems Assessment (only service under $1,500)

### Test Case 5: Unclear Signals → Low Confidence
- Ambiguous answers across multiple categories
- **Expected**: Low confidence warning suggesting discovery call
