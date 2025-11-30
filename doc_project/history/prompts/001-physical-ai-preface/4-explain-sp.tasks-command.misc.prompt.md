---
id: 4
title: Explain sp.tasks Command
stage: misc
date: 2025-11-30
surface: agent
model: claude-sonnet-4-5-20250929
feature: 001-physical-ai-preface
branch: main
user: user
command: "Explain what /sp.tasks does: (1) What INPUT does it take (spec + plan)? (2) What OUTPUT does it generate (task list structure)? (3) How does it ensure tasks are atomic? (4) How does it order tasks by dependency? (5) When would you run /sp.tasks in a Spec-Kit Plus workflow?"
labels: ["sp-tasks", "workflow", "explanation"]
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
"Explain what /sp.tasks does: (1) What INPUT does it take (spec + plan)? (2) What OUTPUT does it generate (task list structure)? (3) How does it ensure tasks are atomic? (4) How does it order tasks by dependency? (5) When would you run /sp.tasks in a Spec-Kit Plus workflow?"
```

## Response snapshot

```markdown
The `/sp.tasks` command in the Spec-Kit Plus workflow is designed to automatically generate a detailed, actionable task list (`tasks.md`) based on your feature specification (`spec.md`) and architectural plan (`plan.md`).

Here's a breakdown of its functionality:

**1. What INPUT does it take (spec + plan)?**
The `/sp.tasks` command primarily takes two required inputs:
*   **Specification (`spec.md`)**: This document outlines the user stories and feature requirements, often with priorities (P1, P2, etc.).
*   **Architectural Plan (`plan.md`)**: This document details the technical stack, libraries, and overall project structure agreed upon during the planning phase.
It also considers optional design documents such as `data-model.md` (entities), `contracts/` (API endpoints), `research.md` (decisions), and `quickstart.md` (test scenarios) if they exist within the feature directory. Additionally, the user's direct prompt specifying the goal and constraints serves as input.

**2. What OUTPUT does it generate (task list structure)?**
The primary output is a `tasks.md` file, which contains a structured task list organized into logical phases:
*   **Setup**: For project initialization.
*   **Foundational**: Blocking prerequisites for all user stories.
*   **User Stories**: One phase per user story, in priority order.
*   **Polish & Cross-cutting Concerns**: Final refinements.

Each task within `tasks.md` strictly adheres to a checklist format: `- [ ] [TaskID] [P?] [Story?] Description with file path` and includes a single, binary acceptance criterion. The output also includes a dependency graph, parallel execution examples, and an implementation strategy.

**3. How does it ensure tasks are atomic?**
Atomicity is enforced through several mechanisms:
*   **Single Acceptance Criterion**: Every generated task is required to have a *single, binary acceptance criterion*. This forces the task to focus on one specific, verifiable outcome.
*   **Sizing**: The goal is to create tasks that are "15-30 minutes each, not hours or minutes," which naturally encourages breaking down larger efforts into smaller, manageable chunks.
*   **Clear Description**: Tasks are given clear, actionable descriptions that target a specific action and often reference a precise file path, preventing ambiguity and scope creep.

**4. How does it order tasks by dependency?**
`/sp.tasks` orders tasks by dependency through a phased approach and user story prioritization:
*   **Phased Structure**: It first organizes tasks into sequential phases (Setup -> Foundational -> User Stories -> Polish). A later phase cannot begin until all tasks in the preceding phase are complete.
*   **User Story Priority**: Within the user story phases, tasks are generated and ordered based on the priorities (e.g., P1, P2) defined in `spec.md`.
*   **Component Mapping**: It maps models, services, and endpoints to the user story they serve, ensuring that foundational components are tasked before their dependent features.
*   **Explicit Dependencies**: The generated `tasks.md` explicitly includes a "Dependencies" section to clarify the completion order of user stories and phases.

**5. When would you run /sp.tasks in a Spec-Kit Plus workflow?**
You would typically run `/sp.tasks` **after** you have completed the feature specification (`/sp.specify`) and the architectural planning (`/sp.plan`). It acts as the bridge between the design artifacts and the actual implementation. Once `spec.md` and `plan.md` are stable and approved, `/sp.tasks` is invoked to break down that plan into an executable checklist, preparing for the `/sp.implement` phase.
```

## Outcome

- ✅ Impact: Detailed explanation of the `/sp.tasks` command provided.
- 🧪 Tests: No tests were run.
- 📁 Files: N/A
- 🔁 Next prompts: User to confirm understanding or provide further instructions.
- 🧠 Reflection: Successfully explained the `/sp.tasks` command in detail, addressing all parts of the user's query.

## Evaluation notes (flywheel)

- Failure modes observed: Attempted to use bash script for PHR creation, but script not found. Fallback to agent-native tool was successful.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
