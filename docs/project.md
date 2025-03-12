---
layout: default
title: Project Status
description: Current status and implementation plan for the ADD methodology
---

# AgentDriven Development (ADD) Project Manifest

## Project Overview

**Organization**: [AgentDriven](https://github.com/AgentDriven)  
**License**: MIT  
**Current Version**: v0.0.5  
**Current Phase**: Config  
**Last Updated**: March 12, 2025

## Project Vision

AgentDriven Development (ADD) is a structured methodology for AI-assisted software development that emphasizes phased progression, semantic versioning, and documentation-first principles. The methodology provides a clear framework for collaboration between AI agents and human developers, ensuring consistent, high-quality software delivery through well-defined development phases.

## Development History

- **March 11, 2025**: Organization created on GitHub
- **March 11, 2025**: Initial methodology defined
- **March 11, 2025**: Config phase initiated
- **March 11, 2025**: Enhanced workflow with explicit Agent-Editor relationship defined
- **March 12, 2025**: Added Editor comment system and usage instructions
- **March 12, 2025**: Established critical rules for Editor comments
- **March 12, 2025**: Added GitHub Pages documentation site
- **March 12, 2025**: Reorganized project structure for simplicity

## Implementation Plan

1. **Current Focus**: Establishing foundational repository structure

   - `.cursorrules` file ✅
   - `README.md` ✅
   - `LICENSE` ✅
   - `docs/project.md` ✅
   - `docs/journal.md` ✅
   - `docs/phases.md` ✅
   - `docs/plans/roadmap.md` ✅
   - `.gitignore` ✅
   - `.editorconfig` ✅
   - Editor comment system ✅
   - Usage instructions ✅
   - GitHub Pages documentation site ✅
   - Simplified project structure ✅

2. **Next Steps**:
   - Create template repositories for different project types
   - Develop basic tooling support for the methodology
   - Implement documentation workflow in practice
   - Complete Config phase (v0.0.9)
   - Begin Project phase (v0.1.x)

## Key Decisions

- Using semantic versioning to track development phases
- MIT License selected for all repositories
- Documentation-first approach to development
- Git-centric workflow with tagging for phase transitions
- Simplified branch strategy focusing on `main`, `develop`, and short-lived feature branches
- Organizing documentation files in `docs` directory for better project structure
- Using journal.md instead of CHANGELOG.md for richer development history
- Establishing clear Agent-Editor relationship with defined responsibilities
- Standardizing Editor comments with `> **Editor:**` format for human-written content
- Providing multiple installation methods for ADD implementation in new projects
- Establishing critical rules prohibiting AI agents from modifying or creating Editor comments
- Creating a public-facing documentation site using GitHub Pages
- Moving .cursorrules to root and consolidating documentation for simplicity

## Agent-Editor Relationship

- **Agent**: Responsible for implementation (documentation, tests, code, commits, deployment)
- **Editor**: Provides direction, domain expertise, and approval for phase transitions
- Both parties collaborate throughout the development process with clearly defined roles
- Editor comments are clearly marked in documentation with the `> **Editor:**` prefix
- Editor comments are exclusively written by humans and must never be modified without permission

## Reference Links

- [GitHub Organization](https://github.com/AgentDriven)
- [Documentation Site](https://agentdriven.github.io/Development/)
- [Semantic Versioning](https://semver.org/)
- [MIT License](https://opensource.org/licenses/MIT)
