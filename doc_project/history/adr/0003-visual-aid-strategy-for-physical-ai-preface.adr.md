# ADR-0003: Visual Aid Strategy for Physical AI Preface

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-11-30
- **Feature:** physical-ai-preface
- **Context:** The preface introduces fundamental paradigm shifts and complex concepts (e.g., Sense-Think-Act loop, Sim-to-Real). The use of visual aids needs to support clarity without becoming a distraction or violating non-goals.

## Decision

For the preface, no complex diagrams will be assumed necessary. This implies:
*   Focus primarily on textual explanation for conceptual clarity.
*   If any visual elements are included, they will be simple, conceptual, and serve to illustrate the paradigm, not to provide detailed technical diagrams or code-related visuals.
*   All diagrams (if any) will be described in text for accessibility.

## Consequences

### Positive

*   **Focus on Core Message**: Keeps the preface concise and focused on establishing the intellectual foundation.
*   **Adheres to Non-Goals**: Avoids becoming a "coding tutorial" or a "history of robotics" through complex visuals.
*   **Simpler Production**: Reduces the effort required for graphic design and integration.

### Negative

*   **Potential for Abstractness**: Complex concepts might be harder for some visual learners to grasp without diagrams.
*   **Missed Opportunity**: Simple, well-placed conceptual diagrams could enhance understanding and engagement for certain topics.

## Alternatives Considered

*   **Mandatory Conceptual Diagrams**: Including 1-2 simple, high-level diagrams (e.g., a basic Sense-Think-Act loop diagram, a conceptual Sim-to-Real flow).
    *   *Why rejected*: Current plan prioritizes textual clarity and brevity, avoids unnecessary complexity for the *preface*.
*   **Detailed Technical Diagrams**: Incorporating in-depth diagrams for architectural components or data flows.
    *   *Why rejected*: Violates "NOT a coding tutorial" non-goal for the preface, more appropriate for later chapters.

## References

- Feature Spec: /workspaces/my-projects/specs/001-physical-ai-preface/spec.md
- Implementation Plan: /workspaces/my-projects/specs/001-physical-ai-preface/plan.md
- Related ADRs: N/A
- Evaluator Evidence: N/A
