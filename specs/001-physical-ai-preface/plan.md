# Implementation Plan: Preface - The Physical AI Paradigm

**Feature Branch**: `001-physical-ai-preface`
**Created**: 2025-11-30
**Status**: Draft

## 1. Technical Approach for Structuring the Paper

The preface will be structured as a compelling narrative designed to onboard university-level students into the "Physical AI" paradigm. It will systematically introduce core concepts, contrast them with existing understanding, and set the stage for the technical journey ahead. The structure will be logical and progressive, leading the reader from philosophical grounding to practical methodology and hardware considerations.

**Overall Flow:**

1.  **Introduction & Paradigm Shift:** Hook the reader by immediately introducing "Physical AI" as a fundamental shift from "Digital AI," establishing the book's core premise.
2.  **Core Concepts Defined:** Deep dive into the "Sense-Think-Act" loop as the defining characteristic of Physical AI.
3.  **Methodology Introduction:** Introduce the "Sim-to-Real" loop as the practical development workflow.
4.  **Motivation & "The Why":** Explain Moravec's Paradox to justify the difficulty and importance of physical interaction, and the focus on Humanoid Robots.
5.  **Hardware Realities:** Address the "Latency Trap" and the necessity of Edge Computing, setting realistic expectations.
6.  **Call to Action:** Conclude by motivating the student for the technical journey of ROS 2 and Isaac Sim, reinforcing that the book builds a *system*.

## 2. Major Components and Phases

The implementation will be broken down into distinct phases, each focusing on a logical grouping of writing and review tasks.

### Phase 0: Research & Content Outline (Pre-writing)

**Objective**: Gather necessary information and create a detailed content outline to guide writing.

*   **Components**:
    *   **Spec Review**: Re-verify understanding of `specs/001-physical-ai-preface/spec.md`.
    *   **Constitution Review**: Ensure alignment with `.specify/memory/constitution.md` principles (Physical Shift, Sim-to-Real Safety, Audience Respect).
    *   **Detailed Content Outline**: Create a markdown outline (`outline.md` within the feature directory) specifying each subheading, key points, and estimated paragraph count to ensure length constraints (1,000-1,500 words) are met. This will also detail how each functional requirement (FR-001 to FR-014) is addressed.
    *   **Key Term Definitions**: Compile a glossary of key terms (e.g., Physical AI, Digital AI, Sense-Think-Act, Sim-to-Real, Moravec's Paradox, Latency Trap, Edge Computing) and their precise definitions as they will appear in the preface, ensuring consistency.

### Phase 1: Draft Writing

**Objective**: Produce the initial draft of the preface following the content outline.

*   **Components**:
    *   **Initial Draft**: Write the `preface.md` content based on the detailed content outline.
    *   **Adherence Check**: During writing, continuously check against FR-001 to FR-014 (defining terms, tone, length, format, non-goals).
    *   **Docusaurus Formatting**: Ensure Docusaurus Markdown (`preface.md`) format, including frontmatter and appropriate use of admonitions (if any), is applied from the outset.

### Phase 2: Internal Review & Refinement

**Objective**: Conduct internal reviews to ensure quality, accuracy, and adherence to the spec and constitution.

*   **Components**:
    *   **Self-Review**: First pass review against all success criteria (SC-001 to SC-005) and constraints.
    *   **Technical Accuracy Review**: Verify factual correctness of AI and robotics concepts (aligned with Constitution's "Technical Accuracy" principle).
    *   **Editorial Review**: Check for tone (Curious Mentor), clarity, grammar, spelling, and readability (Flesch-Kincaid, active voice, sentence length as per Constitution).
    *   **Length Check**: Verify word count is within 1,000-1,500 word range.
    *   **Compliance Check**: Final verification against all non-goals (FR-011, FR-012, FR-013).
    *   **Accessibility Check**: Ensure all diagrams (if any) are described in text (Constitution).

### Phase 3: Finalization & Integration

**Objective**: Prepare the preface for final deployment and integrate it into the Docusaurus project structure.

*   **Components**:
    *   **Final Edits**: Incorporate feedback from all reviews.
    *   **Docusaurus Integration**: Place `preface.md` in the correct Docusaurus `docs` directory, ensuring it appears before Chapter 1 as per Constitution's "Mandatory Opening" standard.
    *   **Build Validation**: Perform a Docusaurus build to confirm no errors and correct rendering.
    *   **Navigation Check**: Verify proper navigation and linking within the Docusaurus site.

## 3. Dependencies Between Components

The phases and components are highly sequential, with strong dependencies to ensure quality and consistency.

*   **Phase 0 (Research & Content Outline)**:
    *   Depends on: `spec.md` and `constitution.md` being finalized.
    *   Produces: `outline.md`, `glossary.md` (or similar for key terms).
*   **Phase 1 (Draft Writing)**:
    *   Depends on: `outline.md` and `glossary.md` from Phase 0 being complete and approved.
    *   Produces: Initial `preface.md` draft.
*   **Phase 2 (Internal Review & Refinement)**:
    *   Depends on: Initial `preface.md` draft from Phase 1.
    *   Produces: Revised `preface.md`, review feedback (documented).
*   **Phase 3 (Finalization & Integration)**:
    *   Depends on: Fully reviewed and approved `preface.md` from Phase 2.
    *   Depends on: Docusaurus project structure being ready to accept new content.
    *   Produces: Final `preface.md` integrated into Docusaurus, successful Docusaurus build.

## 4. Design Decisions That Need Documenting

For this project, "design decisions" primarily relate to choices made during the content creation process that impact the pedagogical or structural integrity of the preface. These should be documented if they deviate from initial assumptions or involve significant trade-offs.

*   **ADR Suggestion**: No architecturally significant decisions are identified that would warrant a full ADR at this stage. The plan focuses on content generation for a document with well-defined constraints. However, if during Phase 0 or 1, a significant decision arises regarding how to interpret a core concept or structure that has long-term consequences for the *entire book's pedagogical approach*, an ADR suggestion would be made.

**Current Non-ADR Decisions to Note**:

*   **Specific Narrative Flow**: The chosen flow (Introduction -> Core Concepts -> Methodology -> Motivation -> Hardware -> Call to Action) is a pedagogical choice to maximize reader engagement and comprehension.
*   **Depth of Explanation**: The plan assumes explanations will be sufficient for a "University/Capstone level" audience without oversimplifying or over-complicating, as guided by the "Curious Mentor" tone.
*   **Visual Aid Strategy**: It is assumed for the preface that no complex diagrams are necessary, aligning with the "NOT a coding tutorial" and "NOT a history" non-goals. If simple conceptual diagrams are later deemed essential, that would be a decision to document.

This plan aims to guide the creation of the preface efficiently and effectively, ensuring adherence to both the feature specification and the project's constitution.
