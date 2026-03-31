# TOGAF PWA Enhancement Patch — Gap Analysis Update

## What this ZIP contains

Three drop-in replacement slide files that close gaps identified by cross-referencing
the full TOGAF Standard (C220 Parts 0–5) against the existing PWA content:

| File | Replaces | What's new |
|------|----------|------------|
| `togaf-day3-slides.html`  | Day 3 slides | Added full section on Architecture Scoping (4 dimensions: Breadth, Depth, Time Period, Domains) with worked example and exam traps |
| `togaf-day12-slides.html` | Day 12 slides | Added Classes of Architecture Engagement (6 engagement types, iteration mapping), Architecture Patterns (components, Continuum positioning), Architecture Partitioning |

## How to deploy

1. Extract this ZIP
2. Copy both HTML files into your existing `togaf-pwa/` folder, overwriting the old versions
3. Open `togaf-pwa/sw.js` and bump the cache version:
   - Change `const CACHE = "togaf-v8"` to `const CACHE = "togaf-v9"`
4. Re-zip and upload to GitHub Pages as normal

## Topics now covered by these files

### Day 3 (togaf-day3-slides.html) — 20 slides
- Phase A: all 11 steps, inputs, outputs
- Architecture Vision document
- Statement of Architecture Work (vs Request for Architecture Work)
- **NEW: Architecture Scoping — 4 dimensions**
  - Breadth: horizontal extent of the enterprise
  - Depth: level of detail / abstraction levels
  - Time Period: planning horizon and Transition Architectures
  - Architecture Domains: which of Business/Data/Application/Technology
- Worked scoping example (bank digital lending scenario)
- Stakeholder concerns → Viewpoints → Views
- Exam traps: Request vs Statement, Vision vs ADD, Viewpoint vs View, Breadth vs Domains

### Day 12 (togaf-day12-slides.html) — 20 slides
- 4 ADM iteration cycle types (Capability, Development, Transition, Governance)
- Baseline First vs Target First approaches
- **NEW: Classes of Architecture Engagement (Part 3 Ch.2)**
  - 3 areas: Identification, Definition, Implementation of Change
  - 6 specific engagement types with iteration focus and scope
- **NEW: Architecture Partitioning (Part 3 Ch.4)**
- **NEW: Architecture Patterns (Part 2 Ch.4)**
  - Pattern definition and relationship to building blocks
  - Pattern components (Name, Problem, Context, Forces, Solution)
  - Patterns across the Enterprise Continuum
- Risk Management: 4 treatment options, initial vs residual risk
- Security as cross-cutting concern across all phases
- SOA primarily in Phase C (ABBs → SBBs)
- Business Transformation Readiness Assessment (8 dimensions)
- Architecture Alternatives and Trade-offs

## Remaining minor gap (low exam weight)
- Enterprise Agility (Part 0 §3.18) — mentioned in Day 19 review but not a dedicated session.
  Add a 2-slide note to the Day 19 review slides if desired.
