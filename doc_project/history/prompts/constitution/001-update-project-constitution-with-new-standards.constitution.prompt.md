---
id: "001"
title: "Update Project Constitution with New Standards"
stage: "constitution"
date_iso: "2025-11-30"
surface: "agent"
model: "claude-sonnet-4-5-20250929"
feature: "none"
branch: "main"
user: "user"
command: "/sp.constitution"
labels: ["constitution", "standards", "governance"]
links:
  spec: "null"
  ticket: "null"
  adr: "null"
  pr: "null"
files_yaml:
  - ".specify/memory/constitution.md"
tests_yaml: []
outcome: "Successfully updated the project constitution based on user input, incorporating new core principles and standards, and updating versioning information."
evaluation: "The updated constitution reflects the user's detailed requirements for the 'Physical AI & Humanoid Robotics' AI-Native Textbook. The version was incremented to 0.2.0 (minor bump) to reflect significant content changes. Dependent templates have been flagged for review."
---

## Prompt Text

```text
Project: "Physical AI & Humanoid Robotics" - AI-Native Textbook



Core Principles:

- The Physical Shift: Content must frame "Physical AI" not as a feature, but as a paradigm shift from digital-only intelligence to embodied reality.

- Sim-to-Real Safety: "The Latency Trap" is a hard constraint. Code examples must explicitly separate Training (Cloud/Sim) from Inference (Edge/Jetson).

- Audience Respect: Assume proficiency in Python and Linux. Skip syntax basics; focus on domain application (ROS 2, Isaac Sim).



Key Standards (Global):

- Content Architecture:

    - Built with Docusaurus 3.9.2.

    - **Mandatory Opening:** The book must start with "Preface: The Physical AI Paradigm" before Chapter 1.

    - Structure: Preface -> Ch1 (ROS 2) -> Ch2 (Digital Twin) -> Ch3 (Isaac) -> Ch4 (VLA).

- Code Quality:

    - Language: Strict Python (rclpy) focus. No C++ or mixed language blocks.

    - Compatibility: Code must be verifiable on Ubuntu 22.04 with ROS 2 Humble/Iron.

- Educational Standards:

    - Assessment: Every chapter must conclude with a 10-15 item "Technical Mastery Checklist" rubric.

    - Hardware Clarity: All exercises must explicitly label requirements (e.g., "Requires RTX 4070 Ti" vs "Runs on Jetson").



Standards for "Preface: The Physical AI Paradigm":

- The Core Premise: Must articulate the shift from "Digital AI" (Chatbots) to "Embodied Intelligence" (Robots that understand physics).

- The Method: Define the "Sim-to-Real" workflow as the primary development loop (Digital Twin $	o$ Reality).

- The Promise: Explain why Humanoid Robots are the target form factor (adapting to human-centered environments).



Constraints:

- Deployment: Must deploy successfully to GitHub Pages.

Success Criteria:

- Preface successfully establishes the "Sim-to-Real" philosophy.

- 100% of control loop code is verified safe for physical deployment (latency-aware).
```

## Response Text

The project constitution has been updated to version 0.2.0 due to new principles and expanded guidance being incorporated.
The following templates require manual follow-up:
- `.specify/templates/plan-template.md`
- `.specify/templates/spec-template.md`
- `.specify/templates/tasks-template.md`
- `.specify/templates/commands/*.md`

Suggested commit message: `docs: amend constitution to v0.2.0 (principle additions + governance update)`