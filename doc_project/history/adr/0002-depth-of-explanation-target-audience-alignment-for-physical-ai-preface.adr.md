# ADR-0002: Depth of Explanation and Target Audience Alignment for Physical AI Preface

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-11-30
- **Feature:** physical-ai-preface
- **Context:** The book targets a University/Capstone level audience. The preface must set an appropriate intellectual level—rigorous but welcoming—without oversimplifying core concepts or overwhelming beginners.

## Decision

Explanations in the preface will be sufficient for a "University/Capstone level" audience. This implies:
*   Assuming proficiency in Python and Linux (from Constitution).
*   Focusing on domain application (ROS 2, Isaac Sim) rather than syntax basics.
*   Maintaining a "Curious Mentor" tone—professional yet inspiring.

## Consequences

### Positive

*   **Appropriate Rigor**: Matches the academic level of the target audience.
*   **Respects Audience**: Avoids condescension by not oversimplifying for students already proficient in foundational skills.
*   **Consistent Tone**: Supports the overall pedagogical approach of the book.

### Negative

*   **Exclusion of Absolute Beginners**: May be too advanced for readers without foundational Python/Linux skills (though addressed by Constitution).
*   **Potential for Misinterpretation**: If the "Curious Mentor" tone isn't consistently applied, it could come across as dry or overly academic.

## Alternatives Considered

*   **Beginner-Centric (K-12 simplification)**: Simplifying concepts to a very basic level.
    *   *Why rejected*: Explicitly a non-goal in `spec.md`, does not align with University/Capstone audience.
*   **Highly Academic/Research Paper Style**: Using more formal, dense, and jargon-heavy language.
    *   *Why rejected*: Conflicts with "Curious Mentor" tone and goal of welcoming students, potentially intimidating.

## References

- Feature Spec: /workspaces/my-projects/specs/001-physical-ai-preface/spec.md
- Implementation Plan: /workspaces/my-projects/specs/001-physical-ai-preface/plan.md
- Related ADRs: N/A
- Evaluator Evidence: N/A
