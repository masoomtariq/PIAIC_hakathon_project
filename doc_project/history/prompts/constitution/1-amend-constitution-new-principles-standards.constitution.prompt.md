---
id: 1
title: Amend constitution with new principles and standards
stage: constitution
date: 2025-11-30
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user: user
command: /sp.constitution Project: "Physical AI & Humanoid Robotics" - AI-Native Textbook (Docusaurus Edition)



Core Principles:

- Embodied Intelligence: Content must bridge the gap between digital algorithms and physical laws (gravity, friction). [cite: Project-Course_details.md]

- Sim-to-Real Safety: "The Latency Trap" is a hard constraint. Real-time control loops MUST run on local Edge hardware (Jetson); Cloud instances are for training/simulation only. [cite: Project-Course_details.md]

- Audience Respect: Assume proficiency in Python and Linux. Skip syntax basics; focus on domain application (ROS 2, Isaac Sim).



Key Standards (Global):

- Content Architecture:

    - Built with Docusaurus 3.9.2.

    - Structure must strictly follow: Introduction, Ch1 (ROS 2), Ch2 (Digital Twin), Ch3 (Isaac), Ch4 (VLA).

    - All diagrams must be described in text for accessibility.

- Code Quality:

    - Language: Strict Python (rclpy) focus. No C++ or mixed language blocks.

    - Compatibility: Code must be verifiable on Ubuntu 22.04 with ROS 2 Humble/Iron.

    - Educational Standards:

    - Assessment: Every chapter must conclude with a 10-15 item "Technical Mastery Checklist" rubric. [cite: User Input]

    - Hardware Clarity: All exercises must explicitly label requirements (e.g., "Requires RTX 4070 Ti" vs "Runs on Jetson"). [cite: Project-Course_details.md]



Constraints:

- Deployment: Must deploy successfully to GitHub Pages.



Success Criteria:

- Book site builds locally and deploys to GitHub Pages without Docusaurus errors.

- 100% of control loop code is verified safe for physical deployment (latency-aware).
labels: ["constitution", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
tests:
null
---

## Prompt

Project: "Physical AI & Humanoid Robotics" - AI-Native Textbook (Docusaurus Edition)



Core Principles:

- Embodied Intelligence: Content must bridge the gap between digital algorithms and physical laws (gravity, friction). [cite: Project-Course_details.md]

- Sim-to-Real Safety: "The Latency Trap" is a hard constraint. Real-time control loops MUST run on local Edge hardware (Jetson); Cloud instances are for training/simulation only. [cite: Project-Course_details.md]

- Audience Respect: Assume proficiency in Python and Linux. Skip syntax basics; focus on domain application (ROS 2, Isaac Sim).



Key Standards (Global):

- Content Architecture:

    - Built with Docusaurus 3.9.2.

    - Structure must strictly follow: Introduction, Ch1 (ROS 2), Ch2 (Digital Twin), Ch3 (Isaac), Ch4 (VLA).

    - All diagrams must be described in text for accessibility.

- Code Quality:

    - Language: Strict Python (rclpy) focus. No C++ or mixed language blocks.

    - Compatibility: Code must be verifiable on Ubuntu 22.04 with ROS 2 Humble/Iron.

    - Educational Standards:

    - Assessment: Every chapter must conclude with a 10-15 item "Technical Mastery Checklist" rubric. [cite: User Input]

    - Hardware Clarity: All exercises must explicitly label requirements (e.g., "Requires RTX 4070 Ti" vs "Runs on Jetson"). [cite: Project-Course_details.md]



Constraints:

- Deployment: Must deploy successfully to GitHub Pages.



Success Criteria:

- Book site builds locally and deploys to GitHub Pages without Docusaurus errors.

- 100% of control loop code is verified safe for physical deployment (latency-aware).

## Response snapshot

The project constitution has been updated to version 0.1.0 with new core principles, global standards, constraints, and success criteria.

## Outcome

- ✅ Impact: Updated project governance and guidelines.
- 🧪 Tests: N/A
- 📁 Files: 1 file modified: .specify/memory/constitution.md
- 🔁 Next prompts: Aligning templates (.specify/templates/plan-template.md, .specify/templates/spec-template.md, .specify/templates/tasks-template.md, .specify/templates/commands/*.md)
- 🧠 Reflection: The `create-phr.sh` script was not found/failed, so the PHR was created using agent-native tools.

## Evaluation notes (flywheel)

- Failure modes observed: create-phr.sh script not found/failed.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
