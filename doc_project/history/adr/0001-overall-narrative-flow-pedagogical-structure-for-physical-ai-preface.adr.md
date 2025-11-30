# ADR-0001: Overall Narrative Flow and Pedagogical Structure for Physical AI Preface

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-11-30
- **Feature:** physical-ai-preface
- **Context:** The preface aims to establish Physical AI as a paradigm shift, motivating university-level students for the technical journey. The narrative flow is crucial for effective onboarding and comprehension.

## Decision

The preface will be structured with a specific, progressive narrative flow:
1.  Introduction & Paradigm Shift (Physical AI vs. Digital AI)
2.  Core Concepts Defined (Sense-Think-Act loop)
3.  Methodology Introduction (Sim-to-Real loop)
4.  Motivation & "The Why" (Moravec's Paradox, Humanoid Robots)
5.  Hardware Realities (Latency Trap, Edge Computing)
6.  Call to Action (ROS 2, Isaac Sim, system-building emphasis)

## Consequences

### Positive

*   **Clear Learning Path**: Provides a logical and progressive journey for the reader, building understanding step-by-step.
*   **Enhanced Engagement**: The structured flow aims to maintain reader interest and motivation.
*   **Fulfills Intent**: Directly supports the book's intent to establish a foundational understanding.

### Negative

*   **Rigidity**: Less flexibility for writers to deviate from the established order.
*   **Potential for Repetition**: Care must be taken to avoid redundant explanations across sections.

## Alternatives Considered

*   **Chronological History**: Starting with a historical overview of AI and robotics.
    *   *Why rejected*: Falls under non-goals, less direct impact on immediate pedagogical goal.
*   **Problem-First Approach**: Starting with the challenges of physical AI before defining it.
    *   *Why rejected*: Could be less welcoming for beginners, might introduce complexity too early.
*   **Modular, Non-Linear Sections**: Allowing each concept to be its own independent section without a strict flow.
    *   *Why rejected*: Risks disjointed reading experience, less effective for building a cohesive argument.

## References

- Feature Spec: /workspaces/my-projects/specs/001-physical-ai-preface/spec.md
- Implementation Plan: /workspaces/my-projects/specs/001-physical-ai-preface/plan.md
- Related ADRs: N/A
- Evaluator Evidence: N/A
