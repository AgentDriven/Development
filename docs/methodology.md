---
layout: default
title: ADD Methodology
description: Detailed explanation of the Agent Driven Development methodology
---

# ADD Methodology

Agent Driven Development (ADD) is a structured approach to software development that leverages AI agents and human developers working in tandem. This methodology emphasizes a phased, incremental development process with clear milestones tracked through semantic versioning.

## Core Principles

- **Documentation-First**: We document before we code
- **Test-Driven**: Tests are written before implementation
- **Git-Centric**: Git is our source of truth and progress tracker
- **Phased Development**: Clear, sequential development phases
- **Minimal, Production-Ready Code**: Quality over quantity

## Agent-Editor Relationship

The Agent-Editor relationship is a core concept in Agent Driven Development. It defines the roles, responsibilities, and interactions between the AI Agent and the human Editor.

### Roles and Responsibilities

#### AI Agent

The Agent is responsible for ALL implementation tasks:

- Writing documentation
- Creating tests
- Implementing code
- Committing changes
- Deploying solutions
- Maintaining project structure

#### Human Editor

The Editor (human) provides:

- Problem definition
- Market context
- Solution direction
- Approval for phase transitions
- Feedback on implementations
- Domain expertise

### Collaboration Principles

- Both parties collaborate throughout the development process with clearly defined roles
- The Agent seeks permission for significant changes
- The Agent presents options when multiple approaches exist
- The Agent explains technical decisions in non-technical terms
- The Editor makes key decisions and provides direction

### Editor Comments

Throughout the documentation, Editor comments are clearly marked with the `> **Editor:**` prefix. These comments are:

- Exclusively written by humans
- Never modified without permission
- Used to provide additional context, insights, or clarifications
- Visually distinct from AI-generated content

Example:

> **Editor:** This approach was chosen because it aligns with our team's existing workflow and reduces the learning curve for new developers.

### Benefits of the Agent-Editor Model

- **Clear Accountability**: Each party knows exactly what they're responsible for
- **Efficient Collaboration**: Leverages the strengths of both AI and human contributors
- **Knowledge Preservation**: Editor comments capture human insights and context
- **Streamlined Decision-Making**: Clear delineation of who makes which decisions
- **Consistent Implementation**: The Agent follows established patterns and practices

## Development Workflow

### Branch Strategy

- `main`: Production-ready code
- `develop`: Integration branch for ongoing work
- Feature branches: Short-lived branches for specific features

### Version Tagging

- Each development phase corresponds to a minor version range (0.x.0)
- Patch versions (0.x.y) indicate iterations within a phase
- Major version 1.0.0 indicates first production release

### Workflow Example

```bash
# Config phase
git checkout -b feature/initial-setup
# Work on setup...
git commit -m "feat: Initialize repository structure"
git commit -m "feat: Add configuration files"
git checkout develop
git merge feature/initial-setup
git tag -a v0.0.1 -m "Initial project setup"

# More config work...
git tag -a v0.0.9 -m "Complete Config phase"

# Project phase
git checkout -b feature/directory-structure
# Work on architecture...
git commit -m "feat: Define directory structure"
git checkout develop
git merge feature/directory-structure
git tag -a v0.1.0 -m "Begin Project phase"
```

## Benefits of ADD

- **Clear Progress Tracking**: Semantic versions show exactly where the project stands
- **Structured Development**: Methodical approach prevents skipping important steps
- **Quality Assurance**: Each phase has clear completion criteria
- **Documentation**: Comprehensive documentation is built throughout development
- **Collaboration**: Clear framework for human-AI collaboration

[Back to Home](index.html)
