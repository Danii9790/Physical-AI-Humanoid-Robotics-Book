---
id: 0001
title: Initial Constitution for Physical AI Robotics Textbook
stage: constitution
date: 2025-12-05
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: user
command: /sp.constitution Project: AI/Spec-Driven Textbook – “Physical AI and Humanoid Robotics: From Theory to Embodiment” (Hackathon I deliverable: fully functional Docusaurus textbook deployed on GitHub Pages) Core principles: Teachability first: every chapter must be immediately usable by university instructors and upper-level students (CS, EE, robotics, AI majors) Embodiment-centered: prioritize physical AI (real-world sensing, actuation, and interaction) over purely simulation-based approaches Spec-driven development: all content generated and validated against this constitution using Spec-Kit Plus Future-proof and updatable: modular design so new advances (2026+) can be added without breaking structure Key standards: Accuracy: every technical claim traceable to primary sources (papers, official docs, open-source repos) Citation style: APA 7th edition with clickable DOI/URL links Source requirements: ≥60% peer-reviewed papers or authoritative textbooks; remaining from credible industry reports, ROS/ROS2 docs, manufacturer whitepapers Code & reproducibility: every significant algorithm or technique includes runnable, well-commented code (Python/ROS2) generated/reviewed via Claude Code Writing clarity: Flesch-Kincaid Grade Level 12–14 Visual learning: minimum 4–6 high-quality figures/diagrams per chapter (generated or sourced with permission) Zero plagiarism: all AI-generated text must pass Copyscape/Originality.ai at ≤5% similarity Constraints: Total chapters: 10 core chapters + 2 optional advanced chapters Chapter template (enforced by Spec-Kit Plus): Learning objectives Key concepts Theory → Mathematics → Implementation → Exercises Summary & further reading Self-assessment quiz (multiple-choice + open) Minimum 25 cited sources across the book Built exclusively with Docusaurus v3+, MDX, Spec-Kit Plus workflow Fully deployed and publicly accessible via GitHub Pages (https://<your-org>.github.io/physical-ai-textbook or custom domain) Mobile-responsive, dark mode, full-text search enabled Success criteria: 100% technical accuracy verified by cross-referencing all claims Live website passes Lighthouse score ≥90 (performance, accessibility, SEO) All code examples run without error in standard Colab or local ROS2 environment Zero plagiarism flags on final scan Complete navigation (sidebar + top navbar), versioning, and PDF export option working Ready-to-use by any instructor: syllabus suggestions, slide deck links, and lab exercises included Deliverable: One
labels: ["constitution"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
tests: null
---

## Prompt

Project: AI/Spec-Driven Textbook – “Physical AI and Humanoid Robotics: From Theory to Embodiment”
(Hackathon I deliverable: fully functional Docusaurus textbook deployed on GitHub Pages)
Core principles:

Teachability first: every chapter must be immediately usable by university instructors and upper-level students (CS, EE, robotics, AI majors)
Embodiment-centered: prioritize physical AI (real-world sensing, actuation, and interaction) over purely simulation-based approaches
Spec-driven development: all content generated and validated against this constitution using Spec-Kit Plus
Future-proof and updatable: modular design so new advances (2026+) can be added without breaking structure

Key standards:

Accuracy: every technical claim traceable to primary sources (papers, official docs, open-source repos)
Citation style: APA 7th edition with clickable DOI/URL links
Source requirements: ≥60% peer-reviewed papers or authoritative textbooks; remaining from credible industry reports, ROS/ROS2 docs, manufacturer whitepapers
Code & reproducibility: every significant algorithm or technique includes runnable, well-commented code (Python/ROS2) generated/reviewed via Claude Code
Writing clarity: Flesch-Kincaid Grade Level 12–14
Visual learning: minimum 4–6 high-quality figures/diagrams per chapter (generated or sourced with permission)
Zero plagiarism: all AI-generated text must pass Copyscape/Originality.ai at ≤5% similarity

Constraints:

Total chapters: 10 core chapters + 2 optional advanced chapters
Chapter template (enforced by Spec-Kit Plus):
Learning objectives
Key concepts
Theory → Mathematics → Implementation → Exercises
Summary & further reading
Self-assessment quiz (multiple-choice + open)

Minimum 25 cited sources across the book
Built exclusively with Docusaurus v3+, MDX, Spec-Kit Plus workflow
Fully deployed and publicly accessible via GitHub Pages (https://<your-org>.github.io/physical-ai-textbook or custom domain)
Mobile-responsive, dark mode, full-text search enabled

Success criteria:

100% technical accuracy verified by cross-referencing all claims
Live website passes Lighthouse score ≥90 (performance, accessibility, SEO)
All code examples run without error in standard Colab or local ROS2 environment
Zero plagiarism flags on final scan
Complete navigation (sidebar + top navbar), versioning, and PDF export option working
Ready-to-use by any instructor: syllabus suggestions, slide deck links, and lab exercises included

Deliverable: One

## Response snapshot

The constitution has been successfully updated to version 1.0.0. This is an initial major version bump as a comprehensive constitution has been established from a template. Files flagged for manual follow-up to ensure consistency: .specify/templates/plan-template.md, .specify/templates/spec-template.md, .specify/templates/tasks-template.md, .specify/templates/commands/*.md (all command files), README.md, docs/quickstart.md. The RATIFICATION_DATE in .specify/memory/constitution.md also needs to be updated once the original adoption date is known. Suggested commit message: docs: Initial constitution for Physical AI and Humanoid Robotics textbook v1.0.0

## Outcome

- ✅ Impact: Initial project constitution established.
- 🧪 Tests: N/A
- 📁 Files: .specify/memory/constitution.md updated.
- 🔁 Next prompts: User will likely proceed with feature specification or planning.
- 🧠 Reflection: Successfully updated the constitution based on user input, including a Sync Impact Report and flagging dependent files for follow-up.

## Evaluation notes (flywheel)

- Failure modes observed: null
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
