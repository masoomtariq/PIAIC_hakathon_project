---
id: 0001
title: Preface Physical AI Paradigm Specification
stage: spec
date: 2025-11-30
surface: agent
model: claude-sonnet-4-5-20250929
feature: physical-ai-preface
branch: 001-physical-ai-preface
user: N/A
command: /sp.specify
labels: []
links:
  spec: /workspaces/my-projects/specs/001-physical-ai-preface/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - /workspaces/my-projects/specs/001-physical-ai-preface/spec.md
  - /workspaces/my-projects/specs/001-physical-ai-preface/checklists/requirements.md
tests: []
---

## Prompt

```text
# Specification: Preface - The Physical AI Paradigm



## 1. Intent

To establish the intellectual foundation of the book by defining "Physical AI" not as a new feature, but as a fundamental paradigm shift from "Digital AI" (Chatbots) to "Embodied Intelligence" (Robots). This section serves as the manifesto that motivates the student to undertake the rigorous technical journey of ROS 2 and Isaac Sim.



## 2. Success Criteria (SMART)

- **Core Definition**: Must define "Physical AI" using the "Sense-Think-Act" loop, explicitly contrasting it with the text-in/text-out model of LLMs.

- **Workflow Definition**: Must introduce the "Sim-to-Real" loop (Digital Twin → Reality) as the primary development methodology used in the book.

- **The "Why"**: Must articulate the "Moravec's Paradox" argument: explain why physical interaction is harder than chess, and why Humanoid Robots are the target form factor for human-centric environments.

- **Outcome Clarity**: The reader must understand that this book builds a *system*, not just a script.

- **Hardware Reality**: Must briefly mention the "Latency Trap" and the necessity of Edge Computing (Jetson) vs. Cloud Training, setting expectations for the hardware required later.



## 3. Constraints

- **Audience**: University/Capstone level (as per Constitution). Do NOT simplify to K-12 level.

- **Tone**: "Curious Mentor" — rigorous but welcoming. Professional yet inspiring.

- **Length**: 1,000 - 1,500 words.

- **Format**: Docusaurus Markdown (`preface.md`), placed before Chapter 1.



## 4. Non-Goals

- This is NOT a history of robotics (keep sci-fi references minimal).

- This is NOT a coding tutorial (no code blocks in the preface).

- This is NOT a marketing brochure for NVIDIA; mentions of Isaac Sim must be technical, not promotional.
```

## Response snapshot

Specification and quality checklist for "Preface - The Physical AI Paradigm" created and validated.

## Outcome

- ✅ Impact: Specification for Physical AI Preface successfully created.
- 🧪 Tests: N/A
- 📁 Files: Created spec.md and requirements.md checklist.
- 🔁 Next prompts: User can now run /sp.clarify or /sp.plan.
- 🧠 Reflection: Successfully generated the spec and checklist based on the provided feature description. No clarifications were needed.

## Evaluation notes (flywheel)

- Failure modes observed: create-phr.sh script failed to find template, resorted to agent-native file creation.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
