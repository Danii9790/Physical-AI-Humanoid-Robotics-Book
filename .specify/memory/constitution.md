<!--
Sync Impact Report:
  Version change: N/A -> 1.0.0
  Modified principles:
    - Teachability first: Added
    - Embodiment-centered: Added
    - Spec-driven development: Added
    - Future-proof and updatable: Added
  Added sections: Key Standards, Constraints, Success Criteria
  Removed sections: None
  Templates requiring updates:
    - .specify/templates/plan-template.md: ⚠ pending
    - .specify/templates/spec-template.md: ⚠ pending
    - .specify/templates/tasks-template.md: ⚠ pending
    - .specify/templates/commands/*.md: ⚠ pending
    - README.md: ⚠ pending
    - docs/quickstart.md: ⚠ pending
  Follow-up TODOs:
    - RATIFICATION_DATE (Original adoption date unknown)
-->
# AI/Spec-Driven Textbook – “Physical AI and Humanoid Robotics: From Theory to Embodiment” Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### Teachability first
Every chapter must be immediately usable by university instructors and upper-level students (CS, EE, robotics, AI majors)

### Embodiment-centered
Prioritize physical AI (real-world sensing, actuation, and interaction) over purely simulation-based approaches

### Spec-driven development
All content generated and validated against this constitution using Spec-Kit Plus

### Future-proof and updatable
Modular design so new advances (2026+) can be added without breaking structure

## Key Standards

### Accuracy
Every technical claim traceable to primary sources (papers, official docs, open-source repos)

### Citation style
APA 7th edition with clickable DOI/URL links

### Source requirements
≥60% peer-reviewed papers or authoritative textbooks; remaining from credible industry reports, ROS/ROS2 docs, manufacturer whitepapers

### Code & reproducibility
Every significant algorithm or technique includes runnable, well-commented code (Python/ROS2) generated/reviewed via Claude Code

### Writing clarity
Flesch-Kincaid Grade Level 12–14

### Visual learning
Minimum 4–6 high-quality figures/diagrams per chapter (generated or sourced with permission)

### Zero plagiarism
All AI-generated text must pass Copyscape/Originality.ai at ≤5% similarity

## Constraints

### Total chapters
10 core chapters + 2 optional advanced chapters

### Chapter template (enforced by Spec-Kit Plus)
Learning objectives, Key concepts, Theory → Mathematics → Implementation → Exercises, Summary & further reading, Self-assessment quiz (multiple-choice + open)

### Minimum 25 cited sources
Across the book

### Built exclusively with Docusaurus v3+, MDX, Spec-Kit Plus workflow

### Fully deployed and publicly accessible via GitHub Pages
https://<your-org>.github.io/physical-ai-textbook or custom domain

### Mobile-responsive, dark mode, full-text search enabled

## Success Criteria

### 100% technical accuracy
Verified by cross-referencing all claims

### Live website passes Lighthouse score ≥90
(performance, accessibility, SEO)

### All code examples run without error
In standard Colab or local ROS2 environment

### Zero plagiarism flags on final scan

### Complete navigation (sidebar + top navbar), versioning, and PDF export option working

### Ready-to-use by any instructor
Syllabus suggestions, slide deck links, and lab exercises included

## Governance
Constitution supersedes all other project practices. Amendments require thorough documentation, explicit approval from project leads, and a clear migration plan for any affected components. All pull requests and code reviews MUST verify strict compliance with the principles and standards outlined herein. Any introduction of complexity must be rigorously justified. Refer to the project's runtime guidance file (e.g., `README.md` or `docs/quickstart.md`) for day-to-day development practices.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Original adoption date unknown | **Last Amended**: 2025-12-05
