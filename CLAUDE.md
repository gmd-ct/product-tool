# Product Tool

## Project Overview
This is a product management and development tool powered by Claude Code workflows and agents.

## Architecture
- `/src` - Main source code
- `/agents` - Agent definitions and configurations
- `/workflows` - Automated workflow definitions
- `/.claude` - Claude Code configuration

## Development Guidelines
- Use TypeScript for all new code
- Follow functional programming patterns where appropriate
- Write tests for critical functionality
- Keep functions small and focused

## Commands
- `/plan` - Create a product plan
- `/spec` - Generate a specification document
- `/review` - Review code or documentation
- `/deploy` - Deploy the application

## Agents
This project uses specialized agents for different tasks:
- **Product Agent** - Handles product planning and feature prioritization
- **Dev Agent** - Handles development tasks and code generation
- **QA Agent** - Handles testing and quality assurance
- **Docs Agent** - Handles documentation generation

## Environment
- Node.js 20+
- TypeScript 5+
- Bun as package manager (preferred)
