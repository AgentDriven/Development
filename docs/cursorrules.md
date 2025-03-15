// "ADD" .cursorrules Agent Driven Development
// -------------------------------------
// A set of guidelines for consistent, high-quality project development
// Version: 0.0.20 - Last updated: 2025-03-14

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
9. **ALWAYS** verify system date when updating documentation dates
10. **ALWAYS** review project documentation (README.md, docs/project.md, docs/journal.md) at the start of every interaction
11. **NEVER** work directly on the main branch
12. **ALWAYS** use feature branches with proper prefixes (`feature/`, `fix/`, `spike/`)
13. **ALWAYS** prototype complex implementations before committing to an approach

## 🚨 INITIALIZATION SEQUENCE

**BEFORE ANY PROJECT WORK:**

1. **VERIFY GIT**: Run `git status` (initialize if needed)

2. **START WITH CONFIG PHASE**:

   - Market analysis and dependency evaluation
   - Create exploratory tests for key libraries
   - Document findings in `docs/dependencies.md` and `docs/market-analysis.md`
   - **PROTOTYPE COMPLEX IMPLEMENTATIONS**:
     - Create spike solutions in `spike/[topic]` branches
     - Document findings in `docs/spikes/[topic].md`
     - Evaluate multiple approaches with pros/cons
     - Assess technical risks before proceeding

3. **VERIFY CONFIG COMPLETION**:
   - Git repository initialized
   - Market analysis and dependency documentation completed
   - Exploratory tests and spike solutions committed
   - Technical feasibility and risk assessment documented
   - Foundation files (README, .gitignore, etc.) committed

## 🔄 DEVELOPMENT PHASES

Each phase should be completed sequentially:

1. `v0.0.x`: **CONFIG** - Market analysis, dependencies, spikes, project setup
2. `v0.1.x`: **PROJECT** - Architecture, interfaces, API contracts, method stubs
3. `v0.2.x`: **TESTS** - Test framework, unit/integration tests, fixtures
4. `v0.3.x`: **DATA** - Models, schemas, migrations, validation
5. `v0.4.x`: **CODE** - Business logic, services, error handling
6. `v0.5.x`: **DEVOPS** - CI/CD, deployment, security
7. `v0.6.x`: **PUBLIC** - User interfaces, responsive design
8. `v0.7.x`: **MONEY** - Billing, payments, subscriptions
9. `v0.8.x`: **SUPPORT** - Documentation, support systems, feedback
10. `v0.9.x`: **SCALE** - Performance, caching, load balancing
11. `v1.0.0+`: **RELEASE** - Final testing, documentation, launch

**PHASE RULES**:

- Group related files from same phase in commits
- Complete all requirements before advancing
- Get explicit permission before advancing or skipping phases
- Every feature should follows its own through development phases before being merged

## 📋 COMMIT WORKFLOW

**FOR EVERY CHANGE**:

1. **PLAN** → **STATUS** → **GROUP** → **ADD** → **VERIFY** → **COMMIT** → **CONFIRM**

```bash
git status
git add <files>
git status  # Verify staging
git commit -m "type: message"
git status  # Verify clean state
```

**BEFORE TAGGING**:

1. Update version numbers in all files
2. Commit version updates: `git commit -m "chore: Update version to vX.Y.Z"`
3. Create tag: `git tag -a vX.Y.Z -m "Description of release"`

## 🛠️ TROUBLESHOOTING PROTOCOL

**WHEN ENCOUNTERING TECHNICAL CHALLENGES**:

1. **DOCUMENT** the issue in `docs/issues/[issue-name].md`
2. **ANALYZE** potential causes with evidence
3. **PROPOSE** specific debugging steps
4. **SEEK APPROVAL** before proceeding
5. **DOCUMENT FINDINGS** from debugging
6. **PROPOSE SOLUTIONS** that preserve existing architecture
7. **AWAIT EXPLICIT DIRECTION** before implementing

**CRITICAL REQUIREMENTS**:

- Never abandon established approaches without permission
- Document all debugging steps and findings

## 📚 DOCUMENTATION REQUIREMENTS

- Update `docs/journal.md` with each session
- Maintain documentation for market analysis, dependencies, and features
- Document exploratory tests and spike solutions
- Commit documentation with related code changes

## 🚫 CRITICAL REMINDERS

**NEVER WORK DIRECTLY ON THE MAIN BRANCH**

**ALWAYS PROTOTYPE COMPLEX IMPLEMENTATIONS FIRST**

**APPLY THE ADD PROCESS AT BOTH PROJECT AND FEATURE LEVELS**

**PROCESS IS MORE IMPORTANT THAN SPEED**
