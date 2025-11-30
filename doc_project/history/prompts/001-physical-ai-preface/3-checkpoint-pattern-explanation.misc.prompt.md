---
id: 3
title: Checkpoint Pattern Explanation
stage: misc
date: 2025-11-30
surface: agent
model: claude-sonnet-4-5-20250929
feature: 001-physical-ai-preface
branch: main
user: user
command: "Walk me through the checkpoint pattern for my research paper workflow. For each checkpoint (after Phases 1, 2, 3, 4): (1) What should I review for? (2) What makes a 'good' output at this checkpoint? (3) What issues could arise that I should catch before continuing? (4) Create a checklist I can use at each checkpoint to decide 'ready to proceed'."
labels: ["checkpoint-pattern", "workflow", "research-paper"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-physical-ai-preface/tasks.md
tests: null
---

## Prompt

```text
"Walk me through the checkpoint pattern for my research paper workflow. For each checkpoint (after Phases 1, 2, 3, 4): (1) What should I review for? (2) What makes a 'good' output at this checkpoint? (3) What issues could arise that I should catch before continuing? (4) Create a checklist I can use at each checkpoint to decide 'ready to proceed'."
```

## Response snapshot

The checkpoint pattern ensures quality and alignment at key stages of your research paper's preface creation. Here's a breakdown for each phase:

### Phase 1: Research & Definition (Checkpoint after T002)

**1. What to review for?**
*   **Clarity and Accuracy**: Are the definitions of "Embodied Intelligence" and "Sim-to-Real" precise, unambiguous, and factually correct within the context of your paper?
*   **Completeness**: Have both terms been adequately defined without going into full narrative yet?
*   **Alignment**: Do these definitions lay a solid foundation for the overall "Physical AI Paradigm"?

**2. What makes a 'good' output?**
*   Concise, direct definitions (1-2 sentences each) for "Embodied Intelligence" and "Sim-to-Real" present in `specs/001-physical-ai-preface/research.md`.
*   No extraneous information or narrative.
*   The definitions clearly differentiate the concepts if necessary.

**3. What issues could arise?**
*   **Vague definitions**: Definitions are too broad or lack specific technical details.
*   **Incorrect understanding**: The definitions fundamentally misrepresent the concepts.
*   **Scope creep**: Starting to write parts of the preface text within the definitions.
*   **Incomplete research**: One or both terms are not defined, or the definitions are superficial.

**4. Ready to proceed checklist:**
- [x] "Embodied Intelligence" is clearly and accurately defined in `research.md`.
- [x] "Sim-to-Real" is clearly and accurately defined in `research.md`.
- [x] Definitions are concise and do not include narrative.
- [x] No factual errors or ambiguities in the definitions.

### Phase 2: Structuring (Checkpoint after T004)

**1. What to review for?**
*   **Docusaurus Header Validity**: Is the header correctly formatted for Docusaurus, including title, ID, and any other required frontmatter?
*   **Outline Logic and Flow**: Does the section outline (The Core Premise, The Method, The Promise) make logical sense for the preface? Is there a natural progression?
*   **Completeness**: Are all required sections present in the outline?

**2. What makes a 'good' output?**
*   `specs/001-physical-ai-preface/preface.md` contains a valid Docusaurus header.
*   `preface.md` clearly outlines the three main sections (Core Premise, Method, Promise) using markdown headings, ready for content.
*   The structure is intuitive and easy to follow.

**3. What issues could arise?**
*   **Incorrect Header**: Docusaurus header syntax errors, preventing proper rendering.
*   **Missing Sections**: One or more of the required sections are not outlined.
*   **Illogical Flow**: The order of sections feels disjointed or doesn't support the overall narrative arc.
*   **Over-detailing**: Adding content/text within the outline instead of just headings.

**4. Ready to proceed checklist:**
- [x] `preface.md` exists with a valid Docusaurus header.
- [x] All three core sections (Core Premise, Method, Promise) are clearly outlined with headings.
- [x] The section order creates a logical flow for the preface.
- [x] No significant content has been written yet, only the structure.

### Phase 3: Drafting (Checkpoint after T007)

**1. What to review for?**
*   **Content Completeness**: Is each section (Core Premise, Method, Promise) fully drafted with main arguments and explanations?
*   **Clarity and Cohesion**: Is the writing clear, concise, and easy to understand? Do the sections flow smoothly into one another, supporting a unified message?
*   **Tone Consistency**: Is the "Curious Mentor" tone beginning to emerge, even in a draft?
*   **Adherence to Definitions**: Does the draft content align with the definitions established in Phase 1?

**2. What makes a 'good' output?**
*   All three sections in `specs/001-physical-ai-preface/preface.md` contain substantive, coherent draft text.
*   The core arguments for each section are present.
*   The text is grammatically correct and free of major typos.
*   The sections collectively convey the essence of the "Physical AI Paradigm."

**3. What issues could arise?**
*   **Incomplete Sections**: One or more sections are sparse or missing key arguments.
*   **Rambling/Redundant Text**: Content is unfocused or repeats points unnecessarily.
*   **Inconsistent Tone**: The writing style fluctuates or deviates from the intended "Curious Mentor" tone.
*   **Conceptual Drift**: The content subtly shifts away from the definitions or core ideas established earlier.
*   **Grammar/Spelling Errors**: Numerous small errors that detract from readability.

**4. Ready to proceed checklist:**
- [x] "The Core Premise" section is drafted with complete thoughts.
- [x] "The Method" section is drafted with complete thoughts.
- [x] "The Promise" section is drafted with complete thoughts.
- [x] Content is clear, coherent, and flows logically between sections.
- [x] The draft aligns with definitions from Phase 1.

### Phase 4: Safety & Review (Checkpoint after T009)

**1. What to review for?**
*   **"Latency Trap" Warning**: Is the warning explicitly and clearly articulated, conveying its importance?
*   **"Curious Mentor" Tone**: Is the tone consistently maintained throughout the *entire* preface, fostering engagement without being overly prescriptive?
*   **Overall Coherence and Polish**: Is the preface ready for final publication? Are there any remaining logical gaps, stylistic inconsistencies, or minor errors?

**2. What makes a 'good' output?**
*   `specs/001-physical-ai-preface/preface.md` contains a distinct and effective warning about the "Latency Trap."
*   The "Curious Mentor" tone is evident from start to finish, creating a cohesive and engaging reader experience.
*   The preface is polished, free of grammatical errors, typos, and awkward phrasing.
*   The document effectively introduces the "Physical AI Paradigm" and sets the stage for the reader.

**3. What issues could arise?**
*   **Missing/Weak Warning**: The "Latency Trap" warning is absent, buried, or not impactful enough.
*   **Inconsistent/Forced Tone**: The "Curious Mentor" tone feels artificial, or is only present in parts.
*   **Residual Errors**: Typos, grammar mistakes, or awkward sentences remain.
*   **Lack of Impact**: The preface doesn't effectively capture the reader's interest or clearly introduce the topic.
*   **Misinterpretations**: Key concepts from Phase 1 (definitions) are misapplied or misrepresented in the final text.

**4. Ready to proceed checklist:**
- [x] The "Latency Trap" warning is explicitly present and clear.
- [x] The "Curious Mentor" tone is consistently applied throughout the entire preface.
- [x] The preface is free of grammatical errors, typos, and awkward phrasing.
- [x] The preface effectively introduces the "Physical AI Paradigm."

## Outcome

- ✅ Impact: Detailed explanation of the checkpoint pattern for the research paper workflow provided.
- 🧪 Tests: No tests were run.
- 📁 Files: N/A
- 🔁 Next prompts: User to provide feedback or proceed with the next steps.
- 🧠 Reflection: Successfully provided a comprehensive explanation of the checkpoint pattern, including specific review criteria, good output descriptions, potential issues, and checklists for each phase, directly addressing the user's detailed request.

## Evaluation notes (flywheel)

- Failure modes observed: Attempted to use bash script for PHR creation, but script not found. Fallback to agent-native tool was successful.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
