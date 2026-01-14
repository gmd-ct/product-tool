# Specification Generator Command

Generate a detailed technical specification for a feature or component.

## Instructions
1. Understand the feature request: $ARGUMENTS
2. Research existing patterns in the codebase
3. Design the technical approach
4. Document APIs, data models, and interfaces
5. Output a complete specification

## Output Format
```markdown
# Technical Specification: [Feature Name]

## Overview
[Brief description of the feature]

## Requirements
### Functional Requirements
- FR1: [requirement]
- FR2: [requirement]

### Non-Functional Requirements
- NFR1: [requirement]

## Technical Design

### Data Models
```typescript
interface Example {
  id: string;
  // ...
}
```

### API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/... | ... |

### Component Architecture
[Describe components and their interactions]

## Testing Strategy
- Unit tests for [...]
- Integration tests for [...]

## Open Questions
- [ ] Question 1
```
