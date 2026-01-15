# Prioritization Features Spec

## Overview
Prioritization is the process of deciding what to build and in what order. This category covers frameworks, scoring systems, and collaborative tools that help product teams make data-driven decisions about what's most important.

---

## Features

### 1. RICE Framework

**Description**: Scoring framework that evaluates features based on Reach (how many users), Impact (how much value), Confidence (certainty of estimates), and Effort (implementation cost). Produces a prioritization score: (Reach × Impact × Confidence) / Effort.

**Competitor Analysis**:
| Tool | Implementation | Strength |
|------|----------------|----------|
| ProductPlan | Built-in RICE template | Good |
| Productboard | Via custom setup, not native | Basic |
| Aha! | Native RICE support with scoring | Excellent |
| Airfocus | Built-in template with customization | Excellent |
| Tempo | R.I.C.E. framework with automatic ranking | Good |
| ChatPRD | Not available | None |

**Best-in-Class**: Airfocus - Native RICE with ability to customize weights and add additional factors.

**Our Implementation Should Include**:
- Pre-configured RICE scoring template
- Clear field definitions with guidance
- Automatic score calculation
- Ability to customize weight of each factor
- Visual ranking of results
- Export scored list for stakeholder review

**Priority**: High - Most widely recognized prioritization framework

---

### 2. Value vs. Effort Matrix

**Description**: Visual 2x2 matrix plotting features by value (y-axis) against effort (x-axis). Creates four quadrants: Quick Wins (high value, low effort), Big Bets (high value, high effort), Fill-Ins (low value, low effort), and Time Sinks (low value, high effort).

**Competitor Analysis**:
| Tool | Implementation | Strength |
|------|----------------|----------|
| ProductPlan | Built-in 2x2 prioritization | Good |
| Productboard | Prioritization Matrix, visual interface | Excellent |
| Aha! | Value/Effort Matrix with custom axes | Good |
| Airfocus | 2x2 matrix with customizable axes | Good |
| Tempo | Built-in prioritization template | Good |
| ChatPRD | Not available | None |

**Best-in-Class**: Productboard - Clean visual matrix with drag-and-drop positioning and customer data integration.

**Our Implementation Should Include**:
- Visual 2x2 grid with drag-and-drop
- Customizable axis labels (not just value/effort)
- Quadrant highlighting and naming
- Items sized by another variable (optional)
- Quick filtering within matrix
- Snapshot/export for presentations

**Priority**: High - Simple, widely understood visual approach

---

### 3. Custom Scoring Models

**Description**: Ability to define custom criteria and weights for prioritization beyond standard frameworks. Allows teams to incorporate their unique strategic factors, constraints, and priorities.

**Competitor Analysis**:
| Tool | Implementation | Strength |
|------|----------------|----------|
| ProductPlan | Custom scoring models with weights | Good |
| Productboard | Flexible configuration, driver-based | Good |
| Aha! | Extensive custom scoring, multi-criteria scorecards | Excellent |
| Airfocus | Highly customizable, define any criteria | Excellent |
| Tempo | Custom prioritization criteria | Good |
| ChatPRD | Not available | None |

**Best-in-Class**: Aha! - Most flexible with multiple scoring models, conditional logic, and calculated fields.

**Our Implementation Should Include**:
- Create unlimited scoring criteria
- Set weight per criterion
- Multiple score types (numeric, dropdown, yes/no)
- Formula support for calculated scores
- Save and reuse scoring models
- Compare items across different models

**Priority**: High - Essential for mature PM teams with specific needs

---

### 4. Weighted Scoring

**Description**: Assign different weights to prioritization factors to reflect relative importance. A strategic alignment criterion might be weighted 3x higher than an ease of implementation criterion.

**Competitor Analysis**:
| Tool | Implementation | Strength |
|------|----------------|----------|
| ProductPlan | Adjustable weights for scoring factors | Good |
| Productboard | Adjustable weights | Good |
| Aha! | Comprehensive weighting with scorecards | Excellent |
| Airfocus | Flexible weight adjustments | Good |
| Tempo | Weighted scoring | Good |
| ChatPRD | Not available | None |

**Best-in-Class**: Aha! - Weights can be set at model level and adjusted per initiative.

**Our Implementation Should Include**:
- Adjustable weights per criterion (0-100% or multiplier)
- Visual weight distribution indicator
- Sensitivity analysis (what if weights change)
- Default weight templates
- Weight inheritance for hierarchical items

**Priority**: Medium - Refinement on custom scoring

---

### 5. Priority Poker

**Description**: Interactive team prioritization sessions where participants independently vote on item priority, then reveal simultaneously to foster discussion and reach consensus. Inspired by Planning Poker from agile.

**Competitor Analysis**:
| Tool | Implementation | Strength |
|------|----------------|----------|
| ProductPlan | Not available | None |
| Productboard | Not available | None |
| Aha! | Not available | None |
| Airfocus | Signature feature - real-time collaborative voting | Excellent |
| Tempo | Not available | None |
| ChatPRD | Not available | None |

**Best-in-Class**: Airfocus - Only tool with this feature; designed for fostering consensus through gamified voting.

**Our Implementation Should Include**:
- Create voting sessions with selected items
- Invite team members to participate
- Hidden voting until reveal (avoid anchoring)
- Simultaneous reveal of all votes
- Discussion prompts for high-variance items
- Session summary and export
- Integration with roadmap (auto-update priorities)

**Priority**: Medium - Unique differentiator, not table stakes but high value

---

### 6. Team Voting

**Description**: Allow team members to vote on priorities without the structured poker format. Simple thumbs up/down or point allocation to gauge team sentiment on what to build.

**Competitor Analysis**:
| Tool | Implementation | Strength |
|------|----------------|----------|
| ProductPlan | Limited capabilities | Basic |
| Productboard | Feature voting, stakeholder input | Good |
| Aha! | Voting in Ideas portal | Good |
| Airfocus | Team voting with Priority Poker | Excellent |
| Tempo | Not available | Basic |
| ChatPRD | Not available | None |

**Best-in-Class**: Airfocus - Combines simple voting with structured Priority Poker.

**Our Implementation Should Include**:
- Simple voting mechanisms (like, star, points)
- Configurable vote allocation (fixed points budget)
- Vote aggregation and ranking
- Filter by voter role/team
- Anonymous voting option
- Voting deadlines and reminders

**Priority**: Medium - Useful for stakeholder input

---

### 7. Driver-Based Prioritization

**Description**: Score features against strategic drivers/objectives defined by the organization. Ensures prioritization aligns with company strategy rather than just tactical value.

**Competitor Analysis**:
| Tool | Implementation | Strength |
|------|----------------|----------|
| ProductPlan | Objective linkage, strategic alignment views | Good |
| Productboard | Driver Scores, strategic alignment - unique feature | Excellent |
| Aha! | Initiative scoring against strategy | Good |
| Airfocus | Driver-based scoring, align with goals | Good |
| Tempo | Not available as dedicated feature | Basic |
| ChatPRD | Not available | None |

**Best-in-Class**: Productboard - "Driver Insights" is their unique approach to prioritization based on strategic drivers.

**Our Implementation Should Include**:
- Define strategic drivers (growth, retention, efficiency, etc.)
- Score features against each driver
- Weight drivers by current priority
- Visualize driver coverage across roadmap
- Gap analysis (which drivers are underserved)
- Driver rollup for portfolio view

**Priority**: High - Connects prioritization to strategy

---

### 8. ICE Framework

**Description**: Simplified scoring framework using Impact, Confidence, and Ease. Faster than RICE (no Reach component), good for internal features where user reach isn't relevant.

**Competitor Analysis**:
| Tool | Implementation | Strength |
|------|----------------|----------|
| ProductPlan | Built-in ICE template | Good |
| Productboard | Via custom setup | Basic |
| Aha! | Available via custom scoring | Good |
| Airfocus | Built-in template | Good |
| Tempo | Not explicitly available | Basic |
| ChatPRD | Not available | None |

**Best-in-Class**: ProductPlan - Clean ICE implementation alongside RICE.

**Our Implementation Should Include**:
- Pre-configured ICE template
- Clear distinction from RICE (when to use which)
- 1-10 scoring scale per factor
- Automatic ICE score calculation (I × C × E)
- Visual ranking

**Priority**: Low - Subset of RICE/custom scoring

---

### 9. MoSCoW Method

**Description**: Categorization method grouping items as Must-have, Should-have, Could-have, or Won't-have. Used for scope management rather than numeric ranking.

**Competitor Analysis**:
| Tool | Implementation | Strength |
|------|----------------|----------|
| ProductPlan | Built-in MoSCoW support | Good |
| Productboard | Via custom fields | Basic |
| Aha! | MoSCoW as priority level option | Good |
| Airfocus | Built-in MoSCoW template | Good |
| Tempo | Not explicitly available | Basic |
| ChatPRD | Not available | None |

**Best-in-Class**: ProductPlan - Clean implementation with visual categorization.

**Our Implementation Should Include**:
- Four predefined categories (M/S/C/W)
- Visual categorization on roadmap
- Budget allocation per category
- Filtering by MoSCoW category
- Category distribution reports

**Priority**: Low - Supplementary method

---

### 10. Stack Ranking

**Description**: Simple linear ordering of items from highest to lowest priority. Forces explicit trade-offs by requiring a single ordered list.

**Competitor Analysis**:
| Tool | Implementation | Strength |
|------|----------------|----------|
| ProductPlan | Stack ranking with drag-and-drop | Good |
| Productboard | Not explicit feature | Basic |
| Aha! | Linear ordering support | Good |
| Airfocus | Stack ranking | Good |
| Tempo | Not available | Basic |
| ChatPRD | Not available | None |

**Best-in-Class**: ProductPlan - Clean drag-and-drop reordering interface.

**Our Implementation Should Include**:
- Drag-and-drop reordering
- Numbered rankings
- Quick rank search
- Rank-based capacity visualization
- Lock ranks to prevent changes
- Rank change history

**Priority**: Low - Basic feature, not differentiating

---

## Gap Opportunities

Based on competitor analysis, these are underserved areas in prioritization:

| Gap | Current State | Our Opportunity |
|-----|---------------|-----------------|
| **AI-Assisted Prioritization** | Limited suggestions, no autonomous recommendations | AI that suggests optimal sequence based on dependencies, resources, strategy |
| **Outcome-Based Reprioritization** | None connect to post-launch data | Auto-adjust priorities based on feature success metrics |
| **External Data Integration** | Manual data entry for scores | Pull real usage data, support tickets, revenue impact automatically |
| **Scenario Comparison** | Limited what-if analysis | Compare multiple prioritization scenarios side-by-side |
| **Confidence Calibration** | Confidence is self-reported | Track prediction accuracy over time, adjust confidence |

---

## Implementation Priority Summary

| Feature | Priority | Rationale |
|---------|----------|-----------|
| RICE Framework | High | Industry standard |
| Value vs. Effort Matrix | High | Visual, accessible |
| Custom Scoring Models | High | Flexibility required |
| Driver-Based Prioritization | High | Strategy alignment |
| Weighted Scoring | Medium | Refinement feature |
| Priority Poker | Medium | Unique differentiator |
| Team Voting | Medium | Stakeholder engagement |
| ICE Framework | Low | Covered by custom |
| MoSCoW Method | Low | Supplementary |
| Stack Ranking | Low | Basic feature |
