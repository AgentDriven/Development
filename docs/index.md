---
layout: default
title: Agent Driven Development
description: A structured methodology for AI-assisted software development
---

# Agent Driven Development (ADD)

Agent Driven Development (ADD) is a structured approach to software development that leverages AI agents and human developers working in tandem, emphasizing a phased, incremental development process with clear milestones tracked through semantic versioning. The methodology establishes a systematic, regimented process through a set of rules (.cursorrules) that enforce thorough planning, documentation, testing, and strict version control, with the AI Agent implementing all aspects under the supervision and direction of the human Editor.

## Key Features

- **Clear Division of Responsibilities** between AI Agents and Human Editors
- **Phased Development** with semantic versioning
- **Documentation-First** approach
- **Git-Centric** workflow
- **Test-Driven** methodology

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
