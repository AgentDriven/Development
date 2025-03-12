# Development - Agent Driven Development (ADD)

> **Editor:** Everything, except where explicitly labeled (**Editor:**), was written by an AI Agent (Cursor/Claude) with human prompting.

## Quick Start

```bash
# Download .cursorrules file
curl -o .cursorrules https://agentdriven.dev/cursorrules.md
```

## Overview

Agent Driven Development (ADD) is a structured approach to software development that leverages AI agents and human developers working in tandem, emphasizing a phased, incremental development process with clear milestones tracked through semantic versioning. The methodology establishes a systematic, regimented process through a set of rules (.cursorrules) that enforce thorough planning, documentation, testing, and strict version control, with the AI Agent implementing all aspects under the supervision and direction of the human Editor.

ADD establishes a clear division of responsibilities:

- **AI Agent**: Handles implementation details, documentation, testing, and code management
- **Human Editor**: Provides direction, domain expertise, and makes key decisions

The methodology is designed to maximize the strengths of both AI and human collaborators while maintaining high quality standards through structured phases and clear documentation.

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
3. Check the phase-specific documentation in the `docs` directory
4. Follow the development workflow outlined above

## Using ADD in Your Projects

There are several ways to implement Agent Driven Development in your own projects:

### Option 1: Direct Download

```bash
# Create a new directory for your project
mkdir my-add-project && cd my-add-project

# Initialize git repository
git init

# Download .cursorrules file
curl -o .cursorrules https://agentdriven.dev/cursorrules.md

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

### Option 3: Manual Setup

1. Create a new repository
2. Create a `docs` directory
3. Copy the `.cursorrules` file from this repository into your root directory
4. Initialize your project following the Config phase guidelines

> **Editor:** Once the .cursorrules file is in place, your AI assistant will automatically follow the ADD methodology when working in your repository. Make sure to introduce the assistant to the project and ask it to help you complete the Config phase first.

## Project Documentation

The ADD methodology is documented in several key files:

- `.cursorrules`: Guidelines for AI agents working on the project
- `docs/project.md`: Project manifest and overview
- `docs/phases-detailed.md`: Detailed definitions of each development phase
- `docs/journal.md`: Development history and decision log
- `docs/plans/`: Directory for planning documents and roadmaps
- `LICENSE`: MIT License for the project

## Project Structure

```
project-root/
├── .cursorrules          # Symlink to docs/cursorrules.md
├── docs/                # Documentation directory (maintained by the Agent)
│   ├── cursorrules.md   # AI assistant guidelines (main file)
│   ├── project.md       # Project manifest
│   ├── phases.md        # Development phase definitions
│   ├── journal.md       # Development history
│   └── plans/           # Planning documents
├── .gitignore           # Git ignore rules
├── .editorconfig        # Editor configuration
├── LICENSE              # MIT License
└── README.md            # This file
```

> **Editor:** The `docs` directory is the Agent's responsibility to maintain. All documentation and planning files should be kept here, making it easier for both humans and AI to find and update project information.

## Current Status

Current version: v0.0.6
Current phase: Config
Next milestone: Complete Config phase (v0.0.9)

## Documentation

For comprehensive documentation on the ADD methodology, visit our [GitHub Pages site](https://agentdriven.github.io/Development/).

The documentation includes:

- Detailed methodology overview and Agent-Editor relationship
- Development phases explanation
- Project status and implementation plan
- Development journal and history
- Installation and usage instructions

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Editor Comments

Throughout this documentation, you'll find comments prefixed with **Editor:**. These are written by human editors to provide additional context, insights, or clarifications that may be helpful for other humans. The standard format is:

> **Editor:** [Comment text here]

This helps distinguish between AI-generated content and human additions while maintaining a cohesive document.
