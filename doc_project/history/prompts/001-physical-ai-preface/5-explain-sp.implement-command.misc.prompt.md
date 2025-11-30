---
id: 5
title: Explain sp.implement Command
stage: misc
date: 2025-11-30
surface: agent
model: claude-sonnet-4-5-20250929
feature: 001-physical-ai-preface
branch: main
user: user
command: "I'm about to use /sp.implement to execute a research paper project. Walk me through what happens: (1) What does the agent read first (spec, plan, or tasks)? (2) How does it decide execution order? (3) How are checkpoints triggered? (4) What happens if I say 'iterate on Task 2' at a checkpoint? (5) When is implementation truly 'done'?"
labels: ["sp-implement", "workflow", "explanation"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - history/prompts/001-physical-ai-preface/5-explain-sp.implement-command.misc.prompt.md
tests: null
---

## Prompt

```text
"I'm about to use /sp.implement to execute a research paper project. Walk me through what happens: (1) What does the agent read first (spec, plan, or tasks)? (2) How does it decide execution order? (3) How are checkpoints triggered? (4) What happens if I say 'iterate on Task 2' at a checkpoint? (5) When is implementation truly 'done'?"
```

## Response snapshot

```markdown
The `/sp.implement` command in the Spec-Kit Plus workflow is designed to execute the tasks defined in your `tasks.md` file to bring your project to life.

Here's a breakdown of what happens:

**1. What does the agent read first (spec, plan, or tasks)?**
The agent executing `/sp.implement` will primarily read the `tasks.md` file first. This file serves as the direct instruction set for the implementation, detailing each atomic work unit. While `spec.md` (specification) and `plan.md` (architectural plan) are crucial inputs for *generating* `tasks.md` via `/sp.tasks`, the `/sp.implement` agent focuses on executing the already defined tasks.

**2. How does it decide execution order?**
The execution order is determined by the structure and content of `tasks.md`:
*   **Phased Order**: Tasks are organized into sequential phases (e.g., Setup, Foundational, User Stories, Polish). The agent must complete all tasks in a preceding phase before moving to the next.
*   **Task ID Order**: Within each phase, tasks are typically executed in the sequential order of their `TaskID` (e.g., T001, T002).
*   **Explicit Dependencies**: `tasks.md` often includes a "Dependencies" section that explicitly outlines any inter-phase or inter-story dependencies, which the agent strictly adheres to.
*   **Parallelization**: If tasks within a phase are marked as parallelizable (e.g., `[P]` label) and have no direct content dependencies, the agent *could* theoretically execute them in parallel, though it often proceeds sequentially for clarity unless directed otherwise.

**3. How are checkpoints triggered?**
Checkpoints are explicitly designated within the `tasks.md` file, typically at the end of each major phase (e.g., "Phase 1: Research & Definition (Checkpoint)"). When the `/sp.implement` agent successfully completes all tasks within a checkpointed phase, it will:
*   **Pause Execution**: The agent will stop processing further tasks.
*   **Seek User Approval**: It will signal to you that a checkpoint has been reached and present the completed work (or a summary), asking for your review and approval before proceeding to the next phase.

**4. What happens if I say 'iterate on Task 2' at a checkpoint?**
If you tell the agent to "iterate on Task 2" (or any specific task) at a checkpoint:
*   **Re-engagement**: The agent will re-engage with the specified task. It will effectively "re-open" Task 2 and mark it as `in_progress`.
*   **Execution**: It will then attempt to perform actions (e.g., using `Edit`, `Write`, or other relevant tools) to address your feedback and refine the output of Task 2.
*   **Re-verification**: Once the iteration for Task 2 is complete, the agent will re-verify that Task 2's acceptance criteria are met. It will then return to the checkpoint, allowing you to re-review the phase's output before finally approving the phase to proceed.

**5. When is implementation truly 'done'?**
Implementation is considered "done" when:
*   **All Tasks Completed**: Every single task (T001 through Txxx) listed in the `tasks.md` file has been successfully executed and marked as `completed`.
*   **All Acceptance Criteria Met**: The single, binary acceptance criterion for each individual task has been satisfied.
*   **All Checkpoints Approved**: You, the user, have reviewed and approved all checkpoints, including the final one (e.g., after the "Safety & Review" phase).
*   **Final Output Validated**: The ultimate output of the entire workflow (in this case, the complete and reviewed preface) meets all high-level requirements.

In essence, `/sp.implement` guides you through a structured, verifiable process, ensuring that each step is completed and reviewed before moving towards the final deliverable.
```

## Outcome

- ✅ Impact: Detailed explanation of the `/sp.implement` command provided.
- 🧪 Tests: No tests were run.
- 📁 Files: Generated history/prompts/001-physical-ai-preface/5-explain-sp.implement-command.misc.prompt.md
- 🔁 Next prompts: User to confirm understanding or provide further instructions.
- 🧠 Reflection: Successfully explained the `/sp.implement` command in detail, addressing all parts of the user's query and demonstrating the fallback PHR creation mechanism.

## Evaluation notes (flywheel)

- Failure modes observed: Attempted to use bash script for PHR creation, but script not found. Fallback to agent-native tool was successful.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
