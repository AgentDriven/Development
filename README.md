# Development - Agent Driven Development (ADD)

Editor: Everything, except where explicitly labeled, is written by an AI Agent (Cursor/Claude). I was frustrated, and prompted it to develop a better workflow

I was excited to expirement with the Agent feature, only to have the project go off the rails once it got to complex.  This approach to software development, is to leverage an AI Agent to enforce a regemented product development process, requiring thorough planning, documentation, testing, and a strict semantic versioning and gitworkflow.  To keep both the Agent, and the human Editor, focused, on the same page, and working together with a clear purpose, plan 

## Overview

Agent Driven Development (ADD) is a structured approach to software development that leverages AI agents and human developers working in tandem. This methodology emphasizes a phased, incremental development process with clear milestones tracked through semantic versioning.

Developed by the [AgentDriven](https://github.com/AgentDriven) organization, this approach provides a framework for consistent, high-quality software delivery through well-defined development phases.

## Core Principles

- **Documentation-First**: We document before we code
- **Test-Driven**: Tests are written before implementation
- **Git-Centric**: Git is our source of truth and progress tracker
- **Phased Development**: Clear, sequential development phases
- **Minimal, Production-Ready Code**: Quality over quantity

## Development Phases

Our development follows a structured phase approach using semantic versioning:

| Phase   | Version Range | Focus               | Deliverables                                   |
| ------- | ------------- | ------------------- | ---------------------------------------------- |
| Config  | `v0.0.x`      | Project foundation  | Repository structure, dotfiles, dependencies   |
| Project | `v0.1.x`      | Architecture        | Directory structure, interfaces, API contracts |
| Data    | `v0.2.x`      | Data layer          | Models, schemas, migrations                    |
| Tests   | `v0.3.x`      | Test infrastructure | Test framework, test suites                    |
| Code    | `v0.4.x`      | Core functionality  | Business logic, service layer                  |
| DevOps  | `v0.5.x`      | Infrastructure      | CI/CD, deployment, monitoring                  |
| Public  | `v0.6.x`      | User interfaces     | Frontend, admin interfaces                     |
| Money   | `v0.7.x`      | Revenue features    | Billing, payment processing                    |
| Support | `v0.8.x`      | Customer service    | Documentation, support systems                 |
| Scale   | `v0.9.x`      | Performance         | Optimization, scaling                          |
| Release | `v1.0.0+`     | Production          | Stable release                                 |

## How It Works

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

### Phase Transitions

1. Complete all deliverables for the current phase
2. Ensure all tests pass and documentation is complete
3. Tag the repository with the appropriate version
4. Get explicit approval to move to the next phase
5. Begin work on the next phase

## Working with AI Agents

When working with AI agents in this workflow:

1. The agent will commit changes on your behalf when possible
2. The agent will track progress through the development phases
3. You must explicitly approve phase transitions
4. The agent will maintain documentation throughout the process

## Benefits

- **Clear Progress Tracking**: Semantic versions show exactly where the project stands
- **Structured Development**: Methodical approach prevents skipping important steps
- **Quality Assurance**: Each phase has clear completion criteria
- **Documentation**: Comprehensive documentation is built throughout development
- **Collaboration**: Clear framework for human-AI collaboration

## Getting Started

1. Clone this repository
2. Review the current version tag to understand the project's phase
3. Check the phase-specific documentation in the `.agent` directory
4. Follow the development workflow outlined above

## Project Documentation

The ADD methodology is documented in several key files:

- `.agent/.cursorrules`: Guidelines for AI agents working on the project
- `.agent/PROJECT.md`: Project manifest and overview
- `.agent/PHASES.md`: Detailed definitions of each development phase
- `.agent/JOURNAL.md`: Development history and decision log
- `.agent/plans/`: Directory for planning documents and roadmaps
- `LICENSE`: MIT License for the project

## Project Structure

```
project-root/
├── .agent/               # Agent configuration directory
│   ├── .cursorrules      # AI assistant guidelines
│   ├── PROJECT.md        # Project manifest
│   ├── PHASES.md         # Development phase definitions
│   ├── JOURNAL.md        # Development history
│   └── plans/            # Planning documents
├── .gitignore            # Git ignore rules
├── .editorconfig         # Editor configuration
├── LICENSE               # MIT License
└── README.md             # This file
```

## Current Status

Current version: v0.0.1
Current phase: Config
Next milestone: Complete Config phase (v0.0.9)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
