// "ADD" .cursorrules Agent Driven Development
// -------------------------------------
// A set of guidelines for consistent, high-quality project development
// Version: 0.0.16 - Last updated: 2024-06-19

# AGENT DRIVEN DEVELOPMENT (ADD) PROTOCOL

> **MANDATORY WORKFLOW FOR ALL AI AGENT INTERACTIONS**

## 🔴 CRITICAL RULES - ZERO EXCEPTIONS

1. **NEVER** create/edit files outside project directory
2. **ALWAYS** request permission for installations/bulk operations
3. **ALWAYS** use Git for all file operations
4. **NEVER** skip initialization sequence
5. **NEVER** commit changes across different development phases
6. **ALWAYS** get explicit permission before advancing to next phase
7. **ALWAYS** update version numbers in all files before cutting a new tag
8. **ALWAYS** validate libraries with tests before architectural commitment

## 🚨 INITIALIZATION SEQUENCE

**BEFORE ANY PROJECT WORK:**

1. **VERIFY GIT**: Run `git status`

   - If not initialized: `git init`
   - If error: STOP and request assistance

2. **START WITH CONFIG PHASE**:

   - Begin with Config Phase (`v0.0.x`) before any other work
   - Conduct market analysis to identify existing solutions and value proposition
   - Evaluate dependencies and libraries to leverage existing solutions
   - Create exploratory tests to validate key libraries and frameworks
   - Document dependency evaluations in `docs/dependencies.md` with reasons for inclusion/exclusion
   - Create foundation files (README, .gitignore, etc.)
   - Establish documentation structure

3. **VERIFY CONFIG COMPLETION**:

   - Git repository initialized
   - Market analysis completed and documented in `docs/market-analysis.md`
   - Dependencies evaluated and documented in `docs/dependencies.md`
   - Exploratory tests for key libraries committed
   - README.md committed
   - .gitignore committed
   - Required dotfiles committed
   - Documentation structure established
   - Initial docs/journal.md created

4. **FOLLOW PHASE SEQUENCE**: After Config Phase, proceed through phases in order (see DEVELOPMENT PHASES)

## 🔄 DEVELOPMENT PHASES

Each phase should be completed sequentially when applicable:

1. `v0.0.x`: **CONFIG** - Project foundation

   - Market analysis (existing solutions, value proposition)
   - Dependency evaluation (libraries, frameworks, tools)
   - Exploratory testing of critical dependencies
   - Project structure and documentation
   - Version control and configuration files

2. `v0.1.x`: **PROJECT** - Architecture design

   - Directory structure
   - Interface definitions
   - API contracts (OpenAPI/Swagger specs)
   - Method stubs with documentation
   - Class/component relationships

3. `v0.2.x`: **TESTS** - Test infrastructure for API contracts

   - Test framework setup
   - Unit test suites
   - Integration test suites
   - Test data generators
   - Mocks and fixtures

4. `v0.3.x`: **DATA** - Data layer implementation

   - Data models and schemas
   - Type definitions
   - Database migrations
   - Data access layer
   - Validation rules

5. `v0.4.x`: **CODE** - Core functionality

   - Implementation of business logic
   - Service layer development
   - Integration with data layer
   - Error handling
   - Performance considerations

6. `v0.5.x`: **DEVOPS** - Infrastructure

   - CI/CD pipeline configuration
   - Deployment scripts
   - Infrastructure as code
   - Monitoring setup
   - Security considerations

7. `v0.6.x`: **PUBLIC** - User interfaces

   - Web frontend
   - Admin interfaces
   - Email templates
   - Social integration
   - Responsive design

8. `v0.7.x`: **MONEY** - Revenue features

   - Billing system integration
   - Payment processing
   - Financial reporting
   - Subscription management
   - Invoicing

9. `v0.8.x`: **SUPPORT** - Customer service

   - Help documentation
   - Automated support systems
   - Q&A infrastructure
   - Feedback mechanisms
   - User onboarding

10. `v0.9.x`: **SCALE** - Performance optimization

    - Metrics collection
    - Performance testing
    - Scaling automation
    - Load balancing
    - Caching strategies

11. `v1.0.0+`: **PRODUCTION** - Release

    - Final testing
    - Documentation completion
    - Release notes
    - Marketing materials
    - Launch strategy

**FOR EVERY PHASE:**

- Group related files from same phase in commits
- NEVER mix files from different phases
- Complete all requirements before requesting phase advancement
- ALWAYS get explicit permission before advancing to next phase or skipping a phase
- ALWAYS validate critical components with tests before proceeding

## 📋 COMMIT WORKFLOW

**FOR EVERY CHANGE:**

1. **PLAN**: Explain what you'll do before doing it
2. **STATUS**: `git status` to check current state
3. **GROUP**: Group related files from same phase
4. **ADD**: `git add <files>` to stage changes
5. **VERIFY**: `git status` to confirm staging
6. **COMMIT**: `git commit -m "type: message"`
7. **CONFIRM**: `git status` to verify clean state

**BEFORE TAGGING:**

1. **UPDATE VERSIONS**: Update version numbers in all relevant files (README, docs, package.json, etc.)
2. **COMMIT UPDATES**: Commit version updates with message "chore: Update version to vX.Y.Z"
3. **CREATE TAG**: Create an annotated tag with `git tag -a vX.Y.Z -m "Description of release"`
4. **PUSH**: Push both commits and tags to remote repository

**EXAMPLE:**

```bash
# Committing related files from Config phase
git status
git add README.md LICENSE
git status
git commit -m "docs: Add project README and LICENSE"
git status

# Committing another group of related files
git status
git add .gitignore .editorconfig .prettierrc
git status
git commit -m "feat: Add configuration files"
git status

# Tag when phase is complete
git tag -a v0.0.1 -m "Initial project setup"
```

## 🔍 COMPLIANCE CHECKLIST

**START OF SESSION:**

1. Run `git status` to check repository state
2. Identify current development phase
3. Review docs/journal.md and docs/project.md
4. State "I will follow ADD protocol for all changes"

**BEFORE IMPLEMENTING REQUESTS:**

1. Assess if request can be implemented within ADD
2. Plan implementation steps
3. Check git status first
4. Group related files from same phase in commits
5. For new dependencies, create exploratory tests first

**IF ADD CANNOT BE FOLLOWED:**

1. STOP immediately
2. Explain why ADD cannot be followed
3. Propose compliant alternative
4. Request guidance from Editor

## 📚 DOCUMENTATION REQUIREMENTS

1. Update `docs/journal.md` with each session
2. Update `docs/project.md` when status changes
3. Maintain `docs/market-analysis.md` with findings about existing solutions
4. Maintain `docs/dependencies.md` with evaluations of libraries and tools
5. Document exploratory tests for key dependencies
6. Maintain phase documentation
7. Update roadmap quarterly
8. Commit documentation with related code changes

## 👥 AGENT-EDITOR RELATIONSHIP

**AGENT RESPONSIBILITIES:**

- Write documentation
- Create tests
- Implement code
- Commit changes
- Deploy solutions
- Maintain project structure
- Validate dependencies with tests

**EDITOR PROVIDES:**

- Problem definition
- Market context
- Solution direction
- Phase transition approval
- Implementation feedback
- Domain expertise

**EDITOR COMMENTS:**

- NEVER edit/remove text marked with "Editor:"
- NEVER tag text with "Editor:" (exclusive to humans)
- Treat Editor comments as immutable
- Editor comments format: "> **Editor**"

## 🚫 CRITICAL REMINDERS

**NEVER COMMIT CHANGES THAT CROSS DEVELOPMENT PHASES**

**ALWAYS GROUP RELATED FILES FROM THE SAME PHASE**

**ALWAYS GET PERMISSION BEFORE ADVANCING TO NEXT PHASE**

**FOLLOW PHASES IN SEQUENTIAL ORDER WHEN APPLICABLE**

- Some projects may not require all phases (e.g., no MONEY phase for open source)
- Phase skipping requires explicit Editor approval and documentation
- Document reasoning for skipped phases in journal.md

**ALWAYS SYNCHRONIZE VERSION NUMBERS BEFORE TAGGING**

- Update version numbers in all relevant files (README, docs, package.json, etc.)
- Commit version updates before creating a new tag
- Use consistent version format across all files

**ALWAYS VALIDATE LIBRARIES WITH TESTS BEFORE ADOPTION**

- Create exploratory tests to verify library capabilities
- Document test results and findings
- Make architectural decisions based on test evidence

**PROCESS IS MORE IMPORTANT THAN SPEED**

**ADD PROTOCOL IS NOT OPTIONAL**
