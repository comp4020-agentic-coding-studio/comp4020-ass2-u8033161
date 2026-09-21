# Process overview

## What I built

A 12-week course-website prototype for "SLOP2486: Packaging Economics for
Online Sellers" — a fictional course built around one falsifiable claim:
that sustainability language on packaging is largely marketing, and the
real design drivers are shipping-cost formulas and return/liability cost.

## How I got here

I explored several course ideas before settling on packaging. A desktop
companion app was rejected — I had built something similar before, and
its content ran out quickly once I tried it. A course on reading product
manuals failed differently: I never read manuals closely, I skim or have
an AI summarize them — fighting the brief's own call for a real voice. A
third idea, queueing design and secondhand-marketplace literacy, never got
that far — raised and dropped the moment packaging clicked. All three are
logged in
[`8f6a36e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-u8033161/commit/8f6a36e).

Packaging was different because it came from things I'd actually noticed.
Orders from lululemon and Patagonia often arrived in boxes clearly
oversized for what was inside. A package from OnTheList, a third-party
retailer, had a tear-strip and an aviation dangerous-goods label. Apple's
packaging interested me for the opposite reason: inserts and accessories
were arranged so efficiently that almost no space felt wasted — packaging
as a designed system, not a container. Logged the same day in
[`8f6a36e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-u8033161/commit/8f6a36e);
only lululemon's and OnTheList's became real photos, in
[`db627b0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-u8033161/commit/db627b0) —
Apple's entry wrongly claimed one, the exact gap the sourcing rule below
exists to catch, fixed in
[`73eb73e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-u8033161/commit/73eb73e).

My first instinct was a three-way classification — brand narrative,
logistics cost, fulfillment efficiency — which I rejected: across 12
weeks it would read as three categories, parallel case studies rather
than a course that builds. I tightened it into a claim that could be
tested and rebutted instead: sustainability language on packaging is
mostly marketing, and what actually drives design decisions is
shipping-cost formulas and return/liability cost — checked against ISTA
3A, Australia Post's formula and Fibre Box Association LCA data first
(also `8f6a36e`), then encoded as CLAUDE.md's thesis-discipline rule in
[`5452e70`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-u8033161/commit/5452e70):
a page that could drop into an unrelated course unedited has failed it.

Weeks 1-5 build the tools the claim needs before testing it — three-logic
observation, corrugated materials, ISTA 3A standards, the cubic-weight
formula, then source critique
([`86f1c8b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-u8033161/commit/86f1c8b),
[`5d764bb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-u8033161/commit/5d764bb)) —
picking, at Week 5, the hardest source to dismiss (a peer-reviewed,
ISO-compliant LCA), so the lesson is "ask who published it and what they
gain," not "distrust all data." Weeks 8 and 10
([`493ca3d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-u8033161/commit/493ca3d),
[`34e4b74`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-u8033161/commit/34e4b74))
attack that cost logic instead — unboxing psychology and accessibility
both introduce value a pure cost model can't price. A thesis only ever
confirmed isn't being tested — that's why Week 12's defense argues, not
recaps.

I split checks by what a machine can verify: assessment weights summing to
100 and a lecture linking a real deck are mechanical, so they're `spec/`
tests. Whether a paragraph still connects to the throughline is a
judgment call no test can catch, so that rule lives in CLAUDE.md as
direction I read every draft against instead.

The same commit closed a subtler gap: before it, nothing distinguished a
real fact from a plausible invented one on the page — the exact risk when
generating anything that sounds technical. The rule doesn't ban invented
numbers; it requires them to be told apart. A real fact goes in `spec:`
with a source; an invented one, used only for teaching, is banned from
`spec:` and labeled inline. Week 4 shows both halves on one page: its
cubic-weight formula sits in `spec:` linked to Australia Post's own page,
while the worked example beneath it is headed "illustrative dimensions,
not a measured parcel" and never appears in `spec:`. The rule turned "does
this sound accurate" into "is this number in `spec:` with a source" — a
test I could apply the same way every week, not re-judge each draft from
scratch.
