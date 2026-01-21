# ExplainMyDiff

**ExplainMyDiff** helps developers understand what actually changed between two versions of text and which changes might matter.

It focuses on **signal over noise** and is designed to reduce confusion during debugging, reviews, and incident analysis.

---

## Problem

When looking at diffs, developers often face:
- Large changes mixed with noise
- Formatting-only differences hiding real changes
- Uncertainty about which change could cause issues
- Cognitive overload during reviews or incidents

ExplainMyDiff exists to answer one simple question:

> “What actually changed here, and what should I care about?”

---

## What ExplainMyDiff Does

- Accepts two versions of text:
  - **Before**
  - **After**
- Optional high-level context (Backend, Frontend, Config, etc.)
- Produces a structured explanation:
  - Summary of changes
  - Key meaningful differences
  - Potential risk areas (if any)
  - First thing to verify after the change
- Ignores formatting-only or insignificant differences
- Admits uncertainty when no meaningful change exists
- Never generates code or guesses intent

---

## What ExplainMyDiff Does NOT Do

This is intentional.

ExplainMyDiff does **not**:
- Perform code reviews
- Judge correctness
- Suggest refactors
- Generate or modify code
- Parse programming languages
- Guarantee impact
- Replace PR reviews or human judgment

It explains **impact**, not **intent**.

---

## How It Works

1. Developer pastes the **Before** and **After** versions
2. Optional context is selected
3. Input is sent to the backend API
4. An AI model explains the differences using strict rules
5. The frontend renders a calm, readable explanation

The AI output is constrained to a fixed JSON schema.

---

## Output Format

ExplainMyDiff always returns the following fields:

- **summary** – High-level explanation of what changed
- **key_changes** – Plain-English description of important differences
- **risk_areas** – Potential areas of concern (empty if none)
- **what_to_check** – First thing to verify (empty if none)

All values are strings. Empty strings are valid.

---

## Context Options

Context helps bias interpretation but does not enforce assumptions.

Available contexts:
- Backend
- Frontend
- Config
- API
- Other / Not sure

Default: **Backend**

---

## Tech Stack

### Frontend
- Angular (standalone components)
- Tailwind CSS

### Backend
- Node.js
- Express
- OpenAI API
- Environment-based configuration

---

##  Local Setup

### Backend
- cd Backend
- npm install
- npm run dev

### Frontend
- cd Frontend/explain-my-diff-ui
- npm install
- ng serve


---

## Testing

Manual testing scenarios:
- Small meaningful change
- Large diff with noise
- Formatting-only changes
- Identical inputs
- Garbage input
- Backend unavailable

Expected behavior:
- No crashes
- Honest uncertainty
- No false risk alarms
- Predictable output structure

---

## Success Criteria

ExplainMyDiff is successful if:
- Developers quickly understand what changed
- Noise is filtered out
- Risk is highlighted conservatively
- Output feels calm and trustworthy
- The tool reduces cognitive load

---

## Philosophy

ExplainMyDiff explains changes — it does not judge them.

- Clarity beats confidence.
- Honesty beats cleverness.
---

### 📄 License

- This project is intended for learning, experimentation, and portfolio use.
