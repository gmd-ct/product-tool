# Code Review Workflow

## Overview
This workflow ensures all code changes meet quality standards before merging.

## Review Checklist

### Code Quality
- [ ] Code is readable and well-structured
- [ ] Functions are small and focused
- [ ] No code duplication
- [ ] Appropriate error handling
- [ ] No hardcoded values

### Security
- [ ] No SQL injection vulnerabilities
- [ ] No XSS vulnerabilities
- [ ] No exposed secrets/credentials
- [ ] Input validation present
- [ ] Authentication/authorization correct

### Testing
- [ ] Unit tests included
- [ ] Tests cover edge cases
- [ ] All tests passing
- [ ] Adequate code coverage

### Performance
- [ ] No obvious performance issues
- [ ] Database queries optimized
- [ ] No memory leaks
- [ ] Appropriate caching

### Documentation
- [ ] Code comments where needed
- [ ] API docs updated
- [ ] README updated if needed
- [ ] Changelog entry added

## Review Process

### 1. Self-Review
Author reviews their own code before requesting review

### 2. Automated Checks
- Linting passes
- Tests pass
- Build succeeds

### 3. Peer Review
- At least one approval required
- Address all comments
- Re-request review after changes

### 4. Final Approval
- All checks pass
- All comments resolved
- Ready to merge

## Review Comments

### Comment Types
- **Blocker**: Must fix before merge
- **Suggestion**: Consider for improvement
- **Question**: Need clarification
- **Nitpick**: Minor style issue

## Merge Criteria
- [ ] At least 1 approval
- [ ] All automated checks pass
- [ ] No unresolved blockers
- [ ] Branch up to date with main
