# Topic Decision Log — Day 1 (2026-09-13)

> This file records the Day 1 topic-selection process for A2 (SlopU course website): which directions were considered, why they were rejected, why the final topic was chosen, and the primary material used to test whether it has enough depth for 12 weeks. Written before touching the repo itself, so there's something concrete to cite when writing PROCESS.md later.

## Candidates considered and rejected

1. **Desktop pet / companion software** (drawing on a prior personal project). Rejected — judgment: this topic doesn't have enough depth to sustain 12 weeks; building the actual project earlier already showed the content runs out quickly.

2. **A course on reading/writing product manuals**. Rejected — judgment: doesn't match my actual consumer habits. In practice I never read manuals closely — I skim or have an AI summarize them. Building a course around a habit I don't genuinely have would conflict with the brief's requirement for "a unique and compelling voice."

3. **Queueing design / secondhand-marketplace literacy** — raised as alternatives but not pursued further once the packaging/unboxing direction clicked.

## Chosen topic: Packaging & Unboxing Engineering

Rationale: this is a consumption scenario I've genuinely experienced living in Australia, I already have primary material to work from (below), and there's enough real technical/industry material available that content doesn't need to be invented.

### Primary observation material (2026-09-13)

> Correction (2026-09-21): this section originally labeled all three cases
> "self-photographed." That was wrong for Apple — no Apple photo was ever
> taken or committed to this repo. lululemon's and OnTheList's photos are
> real and were committed later, in `db627b0`. Leaving an unverified claim
> uncorrected is exactly the fact-vs-invented gap this project's own
> sourcing rule (CLAUDE.md, from `5452e70`) exists to catch, so it's fixed
> here rather than left standing.

- **Apple product packaging** (observed and described from memory; never photographed — see week 1's lecture, which carries the case in prose only): a layered, progressive reveal; small accessories tucked behind a hidden panel; material and minimalist aesthetic held consistent throughout → an experience-driven design logic.
- **lululemon / Patagonia** (photographed; see `research/photos/lululemon-oversized-box.jpg`, committed in `db627b0`): small items (a backpack, shoes) shipped in noticeably oversized boxes → a logistics/channel-driven design logic (standardized box sizes reduce warehouse sorting cost, at the expense of material waste).
- **Third-party retail platform (perfume/skincare, OnTheList Australia)** (photographed; see `research/photos/onthelist-*.jpg`, committed in `db627b0`): a tear-strip cut into the box for easy opening, plus an "Aviation Security" dangerous-goods declaration label → a fulfillment-center/compliance-driven design logic.

### Thesis iteration

- **v1 (first draft)**: packaging design reveals what a company is actually optimizing for — brand narrative, logistics cost, or fulfillment efficiency.
  - Problem: this is a classification framework, mostly descriptive. Across 12 weeks it risks reading as "three categories, a few weeks each" — a list of parallel case studies rather than a course that builds.
- **v2 (tightened, adopted)**: sustainability claims on packaging are mostly marketing language; what actually drives design decisions is shipping-cost formulas and return/liability cost, not environmental concern. This is a claim that can be tested or rebutted with real data, so the 12 weeks can progressively test this claim against real standards/formulas, giving the course a cumulative structure instead of a parallel one.

### Depth concern and how it was resolved

Concern: the course would need to cover things I have no background in — ISTA drop-test protocols, dimensional-weight formulas — and I worried about two failure modes: (a) not understanding the material well enough to write anything real, and (b) having an agent generate confident-sounding technical numbers that are simply fabricated rather than real data.

Resolution: rather than requiring myself to run physical tests, I verified real, existing official protocols/formulas/industry data instead of inventing them, and drew a hard line between "describing a course activity" (e.g. "this week's lab: run an ISTA 3A drop test") and "presenting fabricated specific results as real findings." The latter is the actual fabrication risk; the former is normal curriculum design. This distinction became a hard rule in CLAUDE.md (see below).

### Verified official / industry sources

- **ISTA 3A** (a general simulation transport-test standard from the International Safe Transit Association): applies to packaged products ≤70kg, covering standard, small, flat, and elongated package types. Procedure includes atmospheric preconditioning, 9+8 drop tests, random vibration testing with/without top load, optional low-pressure vibration, rotational edge/flat drops, concentrated/bridge impact tests, and leak testing for liquids. Source: https://ista.org/docs/3Aoverview.pdf

- **Australia Post cubic weight formula**: cubic weight (kg) = length(m) × width(m) × height(m) × 250. Chargeable weight is the greater of cubic weight and actual weight; typically applies to parcels over 1kg actual weight. Source: https://auspost.com.au/business/business-ideas/ecommerce-jargon-busters/what-is-cubic-weight

- **Corrugated packaging life-cycle data** (published by the Fibre Box Association, an industry trade association): corrugated recycling rate of 70-75% vs. 8% for polypropylene containers; a 50% per-unit reduction in industry greenhouse gas emissions from 2006-2020; methodology follows ISO 14040/14044 standards, conducted by an independent firm (Anthesis Group) and peer-reviewed. **Teaching note**: the publisher of this data is the trade association for the material it favors — a live teaching example for "even a rigorous methodology needs to be read against who benefits," rather than being cited as a neutral fact. Source: https://www.fibrebox.org/life-cycle-assessments

- **Dangerous goods declaration requirements (IATA/UPS)**: flammable liquids (e.g. perfume) require a UN/ID number, proper shipping name, hazard class, packing group, and IATA packing instruction number; each hazardous-materials package requires three original declarations. Source: https://www.ups.com/us/en/support/shipping-support/shipping-special-care-regulated-items/hazardous-materials-guide/shippers-responsibilities/dangerous-goods-declaration

### 12-week difficulty arc (draft, easy→medium→hard)

Weeks 1-6 (easy→medium): course intro and the three-way framework (using the primary observation material) → materials basics (flute types) → structural test standards (ISTA 3A) → the economics of shipping (Australia Post cubic weight formula) → deconstructing sustainability claims (critical reading of the Fibre Box Association data) → a midterm synthesis assignment.

Weeks 7-12 (medium→hard): returns economics → unboxing psychology and behavioral design → international regulatory constraints (IATA dangerous goods declarations) → accessible design → an integrative redesign studio → final defense, closing the loop back to the week 1 framework.

## Next steps

Turn the judgment calls above into:
1. Concrete rules in CLAUDE.md (e.g. distinguishing "facts cited to a real source" from "example data that must be labeled as such")
2. Checks in spec/ (e.g. assessment weights must sum to 100%, each week's content must tie back to the course's central thesis)
