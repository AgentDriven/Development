---
layout: default
title: Agent Driven Development
description: A structured methodology for AI-assisted software development
---

# Agent Driven Development (ADD)

Agent Driven Development (ADD) is a structured approach to software development that leverages AI agents and human developers working in tandem. The methodology establishes a systematic, regimented process through a set of rules (`.cursorrules`) that enforce thorough planning, documentation, testing, and strict version control, with the AI Agent implementing all aspects under the supervision and direction of the human Editor.

> **Editor:** Everything, except where explicitly labeled (**Editor:**), was written by an AI Agent (Cursor/Claude) with human prompting.

## What Makes ADD Different

At its core, ADD is defined by three key elements that work together:

1. **Enforced Git Workflow**: The `.cursorrules` file mandates specific Git practices that both the AI Agent and human Editor must follow, ensuring consistent version control and project history.

2. **Phased Development with Semantic Versioning**: Development progresses through clearly defined phases, each with specific deliverables and completion criteria, tracked through semantic versioning.

3. **Clear Agent-Editor Relationship**: The methodology establishes distinct roles and responsibilities between the AI Agent (implementer) and human Editor (director).

## The `.cursorrules` File: Enforcing the Methodology

The `.cursorrules` file is the cornerstone of ADD, containing mandatory rules that AI assistants must follow. This file:

- Defines the Git workflow that must be followed
- Establishes the phased development approach
- Outlines the Agent-Editor relationship
- Mandates documentation maintenance requirements
- Sets phase completion requirements

When an AI assistant (like Claude or GPT) encounters this file in your repository, it automatically follows these rules, ensuring consistent application of the methodology.

## Git Workflow: The Foundation of ADD

The ADD Git workflow is strictly enforced by the `.cursorrules` file:

- **Status Verification**: The Agent must always check git status before committing
- **Clean Working Directory**: No unstaged changes should remain when committing
- **Comprehensive Tracking**: All new files must be tracked and included in commits
- **Semantic Commit Messages**: Commits follow a structured format explaining what and why
- **Documentation Synchronization**: Documentation updates are committed alongside code changes

## Phased Development: Structured Progress

Development follows a structured phase approach using semantic versioning:

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

Each phase:

- Has a clear definition of done
- Requires explicit permission before advancing
- Is tagged with appropriate semantic version
- Must have complete documentation and tests

## Agent-Editor Relationship: Clear Division of Responsibilities

ADD establishes a clear division of responsibilities:

### AI Agent Responsibilities

- Writing documentation
- Creating tests
- Implementing code
- Committing changes
- Deploying solutions
- Maintaining project structure

### Human Editor Responsibilities

- Problem definition
- Market context
- Solution direction
- Approval for phase transitions
- Feedback on implementations
- Domain expertise

## Getting Started

There are several ways to implement Agent Driven Development in your own projects:

### Option 1: Direct Download

```bash
# Create a new directory for your project
mkdir my-add-project && cd my-add-project

# Initialize git repository
git init

# Download .cursorrules file
curl -o .cursorrules https://raw.githubusercontent.com/AgentDriven/Development/main/.cursorrules

# Create docs directory
mkdir -p docs

# Initialize with basic README
echo "# My ADD Project" > README.md

# Make initial commit
git add .
git commit -m "feat: Initialize ADD project"
```

### Option 2: Clone Template

```bash
# Clone the Development repository
git clone https://github.com/AgentDriven/Development.git my-add-project

# Remove the existing git history
cd my-add-project
rm -rf .git

# Initialize a new git repository
git init
git add .
git commit -m "feat: Initialize ADD project from template"
```

## Documentation

- [Methodology Overview](methodology.html) - Core principles and Agent-Editor relationship
- [Development Phases](phases.html) - Detailed explanation of all development phases
- [Project Status](project.html) - Current status and implementation plan
- [Development Journal](journal.html) - History of development sessions and decisions
- [Roadmap](plans/roadmap.html) - Future plans and goals
- [GitHub Repository](https://github.com/AgentDriven/Development)
- [.cursorrules File](https://github.com/AgentDriven/Development/blob/main/.cursorrules) - The core file that guides AI agents

## Project Structure

```
project-root/
├── .cursorrules         # AI assistant guidelines (main file)
├── docs/                # Documentation directory (maintained by the Agent)
│   ├── project.md       # Project manifest
│   ├── phases.md        # Development phase definitions
│   ├── journal.md       # Development history
│   └── plans/           # Planning documents
├── .gitignore           # Git ignore rules
├── .editorconfig        # Editor configuration
├── LICENSE              # MIT License
└── README.md            # Project overview
```

> **Editor:** The `docs` directory is the Agent's responsibility to maintain. All documentation and planning files should be kept here, making it easier for both humans and AI to find and update project information.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/AgentDriven/Development/blob/main/LICENSE) file for details.
