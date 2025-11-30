<!--
Sync Impact Report:
- Version change: 0.0.3 -> 0.1.0
- List of modified principles:
    - Embodied Intelligence: New Principle
    - Sim-to-Real Safety: New Principle
    - Audience Respect: New Principle
    - Content Architecture: Updated (Accessibility for diagrams, Strict chapter structure)
    - Code Quality: Updated (Strict Python, ROS 2 compatibility)
    - Educational Standards: Updated (Assessment rubric, Hardware Clarity)
- Added sections: Core Principles, Key Standards (Global), Constraints, Success Criteria (top-level)
- Removed sections: N/A
- Templates requiring updates:
    - .specify/templates/plan-template.md (⚠ pending)
    - .specify/templates/spec-template.md (⚠ pending)
    - .specify/templates/tasks-template.md (⚠ pending)
    - .specify/templates/commands/*.md (⚠ pending)
- Follow-up TODOs: N/A
-->
# Project Constitution: Physical AI & Humanoid Robotics - AI-Native Textbook (Docusaurus Edition)

## Core Principles

- **Embodied Intelligence:** Content must bridge the gap between digital algorithms and physical laws (gravity, friction).
- **Sim-to-Real Safety:** "The Latency Trap" is a hard constraint. Real-time control loops MUST run on local Edge hardware (Jetson); Cloud instances are for training/simulation only.
- **Audience Respect:** Assume proficiency in Python and Linux. Skip syntax basics; focus on domain application (ROS 2, Isaac Sim).

## Key Standards (Global)

### Content Architecture

- **Built with Docusaurus 3.9.2.**
- **Structure:** Must strictly follow: Introduction, Ch1 (ROS 2), Ch2 (Digital Twin), Ch3 (Isaac), Ch4 (VLA).
- **Accessibility:** All diagrams must be described in text for accessibility.

### Code Quality

- **Language:** Strict Python (rclpy) focus. No C++ or mixed language blocks.
- **Compatibility:** Code must be verifiable on Ubuntu 22.04 with ROS 2 Humble/Iron.

### Educational Standards

- **Assessment:** Every chapter must conclude with a 10-15 item "Technical Mastery Checklist" rubric.
- **Hardware Clarity:** All exercises must explicitly label requirements (e.g., "Requires RTX 4070 Ti" vs "Runs on Jetson").

## Constraints

- **Deployment:** Must deploy successfully to GitHub Pages.

## Success Criteria

- Book site builds locally and deploys to GitHub Pages without Docusaurus errors.
- High confidence in control loop code safety for physical deployment (latency-aware), achieved through comprehensive testing, formal methods where applicable, and adherence to safety-critical software development best practices.

## Book Vision and Structure

**Book Title:** "Physical AI & Humanoid Robotics"
**Sub-title:** "Teaching Machines to Move, See, Speak, and Understand Our World"

**Goal:** Bridging the gap between the digital brain and the physical body. Students apply their AI knowledge to control Humanoid Robots in simulated and real-world environments.
**Target Audience:** Beginners looking to build AI Systems in the Physical World.

**Book Structure:** The book is divided into four main chapters, each focusing on a critical aspect of Physical AI and Humanoid Robotics.

### Chapter 1 — The Robotic Nervous System (ROS 2)
**Description:** Core middleware, messaging, packages, and the robot description format (URDF). Focuses on building robot control architectures and bridging Python agents to ROS 2.
**Learning outcomes:**
- Explain ROS 2 architecture (nodes, topics, services, actions).
- Build and test ROS 2 packages in Python (rclpy).
- Design modular robot control flows and parameterized launch files.
- Create URDF models for humanoid components and load them into simulators.
**Sections:**
1. What is ROS 2? Architecture, DDS, and design goals
2. Nodes, Topics, Messages — pub/sub patterns and QoS
3. Services & Actions — request/response and long-running tasks
4. rclpy: Writing ROS 2 nodes in Python (package layout, tests)
5. Launch files, parameters, and configuration best practices
6. Logging, debugging, and lifecycle nodes
7. URDF basics: links, joints, inertial/textures
8. Gazebo integration: ros2_control & controllers
9. Bridge patterns: connecting LLM agents / external controllers to ROS 2

### Chapter 2 — The Digital Twin (Gazebo & Unity)
**Description:** Physics simulation, building digital twins in Gazebo and Unity, simulating sensors (LiDAR, RealSense), and creating realistic test environments for humanoids.
**Learning outcomes:**
- Create simulated environments and scenes that capture the necessary physics.
- Build and validate sensor simulations (camera, depth, IMU, lidar).
- Use URDF/SDF interchangeably and tune physics/solver parameters.
- Integrate Unity (for rendering/HRI) and Gazebo (for physics), plus data pipelines to Isaac Sim.
**Sections:**
1. Simulation fundamentals: physics engines, solvers, and simulation fidelity
2. Gazebo basics: world files, SDF, spawning robots, and plugins
3. URDF ↔ SDF: best practices for humanoids
4. Simulating sensors: depth, RGB, IMUs, and point clouds
5. Physics tuning: contact models, friction, joint limits, and stability
6. Unity for HRI: rendering, avatars, and high-fidelity visuals
7. Syncing physics and rendering: data flows and time management
8. Synthetic data generation and dataset pipelines
9. Testing and automation: deterministic runs, replay, and benchmarking

### Chapter 3 — The AI-Robot Brain (NVIDIA Isaac™)
**Description:** Advanced perception, synthetic data & photorealistic sim (Isaac Sim), Isaac ROS pipelines (VSLAM, perception), and navigation for humanoids (Nav2, planners).
**Learning outcomes:**
- Use Isaac Sim to create photorealistic training environments and synthetic datasets.
- Build perception pipelines: VSLAM, object detection, depth fusion.
- Integrate Isaac ROS and hardware-accelerated components for low-latency inference.
- Design Nav2-based planners suitable for bipedal locomotion and obstacle negotiation.
**Sections:**
1. Isaac Sim overview: USD scenes, photorealism, and GPU requirements
2. Synthetic data pipelines: assets, annotation, and domain randomization
3. Isaac ROS components: perception & inference integration with ROS 2
4. VSLAM fundamentals and Isaac-accelerated SLAM pipelines
5. Perception stacks: detection, segmentation, and depth fusion.
6. Nav2 for humanoids: planners, costmaps, and footprint modeling
7. Reinforcement learning basics for motion primitives and sim-to-real RL
8. Model deployment: quantization, pruning, and edge inference on Jetson
9. Performance profiling and sim-to-real transfer strategies

### Chapter 4 — Vision-Language-Action (VLA) & Conversational Robotics
**Description:** Convergence of LLMs and robotics — speech recognition (Whisper), translating natural language into executable ROS 2 action sequences, multimodal perception, and integrating conversational agents with control. Capstone: Autonomous Humanoid.
**Learning outcomes:**
- Build robust voice-to-action pipelines (speech → intent → action sequence).
- Use LLMs for task decomposition and symbolic plan generation for robots.
- Integrate multi-modal signals (vision + language + proprioception) into decisions.
- Design, implement, and evaluate the capstone autonomous humanoid flow.
**Sections:**
1. Speech recognition & preprocessing: Whisper and streaming audio considerations
2. Intent extraction & semantic parsing for robotics tasks
3. LLMs as planners: prompt design, grounding, and safety constraints
4. Mapping language to ROS 2 actions and verifying plans (simulated execution)
5. Multimodal fusion: combining CV outputs with LLM context for decision making
6. Safety, verification, and human-in-the-loop corrections
7. Human–robot interaction design: conversation-turns, feedback, and UX
8. Capstone architecture: integrating modules into an end-to-end system
9. Evaluation: functional tests, user studies, and performance metrics

## Mandatory Chapter Format

Each chapter will adhere to the following structure:
- **Title:** Clearly stated chapter title.
- **Description:** A concise overview of the chapter's content.
- **Learning Outcomes:** Bulleted list of measurable skills or knowledge students will gain.
- **Sections:** A numbered list of topics covered within the chapter. Each section should have a clear, descriptive heading.
- **Assessment:** Every chapter must conclude with a 10-15 item "Technical Mastery Checklist" rubric.
- **Hardware Clarity:** All exercises must explicitly label requirements (e.g., "Requires RTX 4070 Ti" vs "Runs on Jetson").

## Docusaurus Format Requirements

The book will be built using Docusaurus 3.9.2. All content must conform to Docusaurus markdown specifications.
- **File Structure:** Markdown files for chapters and sections should be organized logically within the Docusaurus `docs` directory.
- **Frontmatter:** Each markdown file must include Docusaurus frontmatter (e.g., `sidebar_position`, `title`, `slug`) for proper navigation and indexing.
- **Code Blocks:** Use fenced code blocks with language identifiers (e.g., ````python`, ````cpp`) for all code examples.
- **Images and Assets:** All images and static assets should be placed in the Docusaurus `static` directory and referenced with relative paths.
- **Admonitions:** Utilize Docusaurus admonitions (e.g., `:::note`, `:::tip`, `:::warning`) for important callouts.
- **Accessibility:** All diagrams must be described in text for accessibility.

## Writing Style Guidelines

- **Tone:** Educational, clear, encouraging, and accessible for beginners. Avoid overly academic or jargon-filled language where simpler terms suffice.
- **Clarity and Conciseness:** Content should be direct and to the point.
    - **Readability Score:** Content should target a Flesch-Kincaid Grade Level of 10-12 to ensure broad accessibility for beginners.
    - **Active Voice Usage:** Aim for at least 75% of sentences to be in active voice for direct and clear communication.
    - **Sentence Length:** Strive for an average sentence length of no more than 20 words to enhance readability.
- **Examples and Code Snippets:** Provide practical, runnable code examples to illustrate concepts. Code should be well-commented and easy to understand.
- **Technical Accuracy:** Ensure all technical information, code, and explanations are accurate and up-to-date with current best practices in ROS 2, Gazebo, Unity, and NVIDIA Isaac platforms.
- **Consistency:** Maintain consistent terminology, formatting, and heading styles throughout the book.
- **Inclusivity:** Use inclusive language and examples. Avoid gender-specific pronouns when referring to hypothetical users/engineers; use diverse examples that reflect a global audience; and ensure imagery (if any) represents a broad range of individuals.

## Quality Assurance Checklist

- [ ] **Technical Accuracy Review:** All technical concepts, code, and explanations verified for correctness.
- [ ] **Code Example Verification:** All code snippets are runnable, produce expected results, and are free of errors.
- [ ] **Clarity and Readability Review:** Content is easy to understand for the target beginner audience.
- [ ] **Docusaurus Build Validation:** The book website builds successfully with Docusaurus 3.9.2 without errors or warnings.
- [ ] **Docusaurus Navigation Check:** All chapters and sections are correctly navigable and linked within the Docusaurus site.
- [ ] **Grammar and Spelling Check:** Content is free of grammatical errors and typos.
- [ ] **Formatting Consistency:** Markdown formatting, code blocks, and admonitions are applied consistently.
- [ ] **Learning Outcomes Alignment:** Each section effectively contributes to its chapter's stated learning outcomes.
- [ ] **Code Style Consistency:** All code examples MUST adhere to a consistent style guide (e.g., PEP 8 for Python, Google C++ Style Guide, or a project-specific linter configuration) to ensure readability and maintainability.

### Content Review Process
- **Technical Review:** Each chapter and its associated code MUST undergo a technical review by at least one subject matter expert to verify accuracy, best practices, and functional correctness.
- **Editorial Review:** All content MUST pass an editorial review for clarity, consistency, grammar, spelling, and adherence to style guidelines.
- **Feedback Integration:** All feedback from technical and editorial reviews MUST be logged, addressed, and verified before content is marked as complete.

## Non-Negotiable Rules

- **Docusaurus 3.9.2 Adherence:** All content and site configurations must be compatible with Docusaurus 3.9.2.
- **No Plagiarism:** All content must be original or properly attributed.
- **Beginner-Friendly Focus:** The primary focus must remain on teaching beginners to build Physical AI systems.
- **Practical Application:** Emphasize hands-on learning with practical examples for humanoid robotics.
- **Security Best Practices:** When discussing AI systems, incorporate basic security considerations for robust and safe physical AI deployments.
- **Citation and Source Verification:**
    - **Citation Mandate:** All technical claims, data points, code snippets not original to the book, and references to external tools/papers MUST be accurately cited. Prefer direct hyperlinks to official documentation, academic papers (DOI or URL), or reputable online resources.
    - **Source Verification:** Before inclusion, all factual claims derived from external sources must be cross-referenced with at least one additional independent, authoritative source.
- [ ] **Clear Learning Path:** Each chapter and section must contribute to a clear and progressive learning path.
- **Consistent Referencing:** Use code references (file_path:line_number) when discussing existing code.
- **Content Freshness Policy:** Chapters containing information about rapidly evolving technologies (e.g., specific library versions, API functionalities) MUST include a last-updated date. A review cycle for such content will be established to ensure accuracy and relevance at least annually (or as technology dictates).

## Governance

**Version**: 0.1.0 | **Ratified**: 2025-11-29 | **Last Amended**: 2025-11-30