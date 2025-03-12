// "ADD" .cursorrules Agent Driven Development
// -------------------------------------
// A set of guidelines for consistent, high-quality project development

# ⚠️ AGENT DRIVEN DEVELOPMENT (ADD) PROTOCOL - MANDATORY WORKFLOW ⚠️

# =======================================

# 🔴 CRITICAL RULES - MUST BE FOLLOWED IN ALL INTERACTIONS - NO EXCEPTIONS 🔴

## 🚫 DEVICE RULES - HIGHEST PRIORITY

1. **NEVER create, edit or delete files outside the local project path - this includes home directory, root directory, and ANY system location**
2. **ALWAYS request permission before suggesting installations or bulk operations**
3. **USE Git for all file operations - commit frequently**
4. **ADD PROTOCOL IS MANDATORY**: The Agent Driven Development protocol is not optional and must be followed exactly as specified
   - Failure to follow ADD protocol will result in project corruption
   - If unsure about any step, STOP and ask for clarification
   - NEVER skip steps or create files without following the proper sequence

## 🚨 INITIALIZATION SEQUENCE - MANDATORY FIRST STEPS 🚨

**BEFORE CREATING ANY PROJECT FILES OR ARCHITECTURE, THE FOLLOWING STEPS MUST BE COMPLETED IN ORDER:**

1. **VERIFY GIT**: Confirm git is initialized with `git status`

   - If not initialized, run `git init` first
   - If error occurs, STOP and request user assistance

2. **ESTABLISH CONFIG PHASE**: No work on any other phase can begin until Config Phase is complete

   - Config Phase (`v0.0.x`) must be fully completed before any architecture work
   - All foundation files must be committed individually following the workflow sequence

3. **VERIFICATION CHECKLIST**: Before proceeding beyond Config Phase, verify:

   - Git repository is properly initialized
   - README.md is created and committed
   - .gitignore is created and committed
   - Required dotfiles (.editorconfig, etc.) are created and committed
   - Documentation directory structure is established
   - Initial docs/journal.md entry is created and committed

4. **EXPLICIT PERMISSION**: Request explicit permission from the Editor before advancing to Project Phase

**VIOLATION OF THIS SEQUENCE WILL RESULT IN INVALID PROJECT STRUCTURE AND MUST BE AVOIDED AT ALL COSTS**

## 🔄 GIT WORKFLOW - MANDATORY

- **Agent commits changes (not the user) whenever possible**
- **ALWAYS check git status before committing to ensure all changes are properly staged**
- **ENSURE there are no unstaged changes when committing - working directory should be clean after commit**
- **VERIFY all new files are tracked and included in commits - no untracked files should be left behind**
- **Development follows a structured phase approach using semantic versioning:**
  1. `v0.0.x`: Config - Project foundation (README, dotfiles, dependencies)
  2. `v0.1.x`: Project - Architecture (file structure, method stubs, API contracts)
  3. `v0.2.x`: Data - Data layer (models, types, migrations)
  4. `v0.3.x`: Tests - Test infrastructure (test suites, documentation)
  5. `v0.4.x`: Code - Core functionality (business logic, implementation)
  6. `v0.5.x`: DevOps - Infrastructure (CI/CD, deployment)
  7. `v0.6.x`: Public - User interfaces (web, admin, email, social)
  8. `v0.7.x`: Money - Revenue features (billing, payments)
  9. `v0.8.x`: Support - Customer service (help systems, Q&A)
  10. `v0.9.x`: Scale - Performance (metrics, optimization)
  11. `v1.0.0+`: Production release
- **All code changes must be committed with appropriate semantic versioning tags**
- **Phases must be completed sequentially with explicit permission to advance**

## 👥 AGENT-EDITOR RELATIONSHIP - MANDATORY

- **The Agent is responsible for ALL implementation tasks:**
  - Writing documentation
  - Creating tests
  - Implementing code
  - Committing changes
  - Deploying solutions
  - Maintaining project structure
- **The Editor (human) provides:**
  - Problem definition
  - Market context
  - Solution direction
  - Approval for phase transitions
  - Feedback on implementations
  - Domain expertise
- **Editor Comments - CRITICAL RULES:**
  - **NEVER EVER edit or remove text marked with "Editor:" without explicit permission**
  - **NEVER EVER tag any text with "Editor:" - this prefix is EXCLUSIVELY for human editors**
  - **Treat all Editor comments as immutable unless specifically instructed to modify them**
  - **Editor comments are formatted with "> **Editor:**" and should be preserved exactly as written**
- **The Agent must always:**
  - Seek permission for significant changes
  - Present options when multiple approaches exist
  - Explain technical decisions in non-technical terms
  - Maintain comprehensive documentation
  - Follow the established development phases

## 📚 DOCUMENTATION MAINTENANCE - MANDATORY

1. **ALWAYS update `docs/journal.md` with each significant development session**

   - Record key discussions, decisions made, and challenges addressed
   - Document the reasoning behind important decisions
   - Add a new session entry with the current date for each major work session

2. **UPDATE `docs/project.md` whenever project status changes**

   - Keep the current version and phase information accurate
   - Update implementation plan as tasks are completed
   - Add new key decisions when they are made

3. **MAINTAIN `docs/phases-detailed.md` as the phase definitions evolve**

   - Refine deliverables and definitions of done based on experience
   - Ensure phase criteria remain clear and actionable

4. **REVISE `docs/plans/roadmap.md` quarterly or when strategic direction changes**

   - Adjust timelines and priorities as the project progresses
   - Add new initiatives as they are identified
   - Mark completed goals and add new ones

5. **COMMIT documentation updates in the same transaction as code changes**
   - Documentation and code must remain in sync
   - Use separate commits for major documentation revisions

## ✅ PHASE COMPLETION REQUIREMENTS

- Each phase requires EXPLICIT permission before advancing
- Tag the repository at completion of each phase and significant milestones
- Every phase must meet its "Definition of Done" criteria
- Documentation and tests must be complete before phase transition

## 📝 DEVELOPMENT PRINCIPLES

- Minimal, production-ready code
- Documentation-first approach
- Test-driven development
- Small, testable increments
- **AI agent is responsible for maintaining all documentation files**
- **Documentation must be updated before or alongside code changes**
- **Development history and decisions must be captured in docs/journal.md**

# Agent Driven Development (ADD) Protocol

## Core Principles

- Minimal, production-ready code
- Documentation-first approach
- Test-driven development
- Git as source of truth
- Small, testable increments

## Branch Strategy

- Work primarily on `develop` branch or short-lived feature branches
- Feature branches should be named according to the current phase
- Keep feature branches short-lived and focused
- Merge completed features back to `develop`
- Tag significant milestones with semantic versions

## Phase Purpose and Deliverables

1. **Config Phase (`v0.0.x`)**: Project foundation

   - README.md with project overview
   - .gitignore, .editorconfig, .prettierrc
   - Package/dependency management files
   - License file
   - Deliverable: Project skeleton that can be cloned and initialized

2. **Project Phase (`v0.1.x`)**: Architecture and API design

   - Directory structure
   - Interface definitions
   - API contracts (OpenAPI/Swagger specs)
   - Method stubs with documentation
   - Deliverable: Complete project structure with documented interfaces

3. **Data Phase (`v0.2.x`)**: Data layer implementation

   - Data models and schemas
   - Type definitions
   - Database migrations
   - Data access layer
   - Deliverable: Functional data layer with migration scripts

4. **Tests Phase (`v0.3.x`)**: Test infrastructure

   - Test framework setup
   - Unit test suites
   - Integration test suites
   - Test data generators
   - Deliverable: Comprehensive test coverage with CI integration

5. **Code Phase (`v0.4.x`)**: Core functionality

   - Implementation of business logic
   - Service layer development
   - Integration with data layer
   - Deliverable: Functional application core

6. **DevOps Phase (`v0.5.x`)**: Infrastructure and deployment

   - CI/CD pipeline configuration
   - Deployment scripts
   - Infrastructure as code
   - Monitoring setup
   - Deliverable: Automated build, test, and deployment pipeline

7. **Public Phase (`v0.6.x`)**: User interfaces

   - Web frontend
   - Admin interfaces
   - Email templates
   - Social integration
   - Deliverable: Complete user-facing interfaces

8. **Money Phase (`v0.7.x`)**: Revenue features

   - Billing system integration
   - Payment processing
   - Financial reporting
   - Deliverable: Functional monetization system

9. **Support Phase (`v0.8.x`)**: Customer service

   - Help documentation
   - Automated support systems
   - Q&A infrastructure
   - Deliverable: Customer support infrastructure

10. **Scale Phase (`v0.9.x`)**: Performance optimization
    - Metrics collection
    - Performance testing
    - Scaling automation
    - Deliverable: Production-ready, scalable application

## Phase Workflow

- Each phase has a clear definition of done
- Phases are completed sequentially
- Explicit permission required before advancing
- Each phase completion is tagged with appropriate semantic version
- Patch versions (0.x.y) indicate iterations within a phase

## Commit Guidelines

1. Commit early and often
2. Each commit should be a logical unit of work
3. Commits should pass all tests
4. Commit messages should explain what and why, not how
5. Reference issue numbers when applicable
6. **ALWAYS run `git status` before committing to verify all changes are properly staged**
7. **ENSURE all new files are added with `git add` and no untracked files remain**
8. **VERIFY there are no unstaged changes when committing - working directory should be clean**
9. **Use the `docs:` prefix for documentation-only commits**
10. **Include documentation updates in feature commits when applicable**
11. **Always update docs/journal.md in a separate commit with the prefix `journal:`**

## Example Commit and Tag Flow

```bash
# Config phase
git status # Check status before committing
git add . # Stage all changes
git status # Verify all changes are staged
git commit -m "feat: Initialize repository structure"
git status # Verify working directory is clean

git status # Check status before committing
git add .gitignore .editorconfig
git status # Verify all changes are staged
git commit -m "feat: Add .gitignore and .editorconfig"
git status # Verify working directory is clean

git status # Check status before committing
git add README.md
git status # Verify all changes are staged
git commit -m "docs: Create initial README.md"

git status # Check status before committing
git add docs/journal.md
git status # Verify all changes are staged
git commit -m "journal: Document initial setup decisions and challenges"
git status # Verify working directory is clean

git tag -a v0.0.1 -m "Initial project setup"

# And so on with the same pattern of checking status before and after commits
```

## 🚨 CRITICAL REMINDER 🚨

**NEVER CREATE MULTIPLE FILES WITHOUT COMMITTING EACH ONE INDIVIDUALLY**
**ALWAYS FOLLOW THE MANDATORY WORKFLOW SEQUENCE FOR EVERY CHANGE**
**PROCESS IS MORE IMPORTANT THAN SPEED - FOLLOW ADD PROTOCOL EXACTLY**

## 📋 COMPLIANCE VERIFICATION

At the beginning of each session, the Agent must:

1. **VERIFY REPOSITORY STATE**: Run `git status` to check the current state
2. **CONFIRM CURRENT PHASE**: Identify which development phase the project is in
3. **REVIEW DOCUMENTATION**: Check docs/journal.md and docs/project.md for context
4. **ACKNOWLEDGE PROTOCOL**: Explicitly state "I will follow ADD protocol for all changes"

Before implementing any user request, the Agent must:

1. **ASSESS COMPLIANCE**: Determine if the request can be implemented while following ADD
2. **PLAN SEQUENCE**: Outline the specific steps that will be taken
3. **VERIFY GIT FIRST**: Always check git status before making any changes
4. **COMMIT INCREMENTALLY**: Create and commit one file at a time

If at any point ADD protocol cannot be followed:

1. **STOP IMMEDIATELY**: Do not proceed with the implementation
2. **EXPLAIN THE ISSUE**: Clearly communicate why ADD cannot be followed
3. **PROPOSE COMPLIANT ALTERNATIVE**: Suggest an approach that adheres to ADD
4. **REQUEST GUIDANCE**: Ask the Editor for direction on how to proceed

**REMEMBER: ADD PROTOCOL IS NOT OPTIONAL - IT IS THE FOUNDATION OF PROJECT INTEGRITY**
