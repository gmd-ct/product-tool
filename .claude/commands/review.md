# Code Review Command

Perform a thorough code review of the specified files or changes.

## Instructions
1. Identify the files/changes to review: $ARGUMENTS
2. Check for code quality issues
3. Verify best practices are followed
4. Look for potential bugs or security issues
5. Suggest improvements

## Review Checklist
- [ ] Code follows project style guidelines
- [ ] Functions are small and focused
- [ ] Error handling is appropriate
- [ ] No security vulnerabilities (XSS, injection, etc.)
- [ ] Tests are included for new functionality
- [ ] Documentation is updated if needed
- [ ] No hardcoded secrets or credentials
- [ ] Performance considerations addressed

## Output Format
```markdown
# Code Review: [File/PR Name]

## Summary
[Overall assessment]

## Issues Found

### Critical
- [ ] [Issue description] - `file:line`

### Major
- [ ] [Issue description] - `file:line`

### Minor
- [ ] [Issue description] - `file:line`

## Suggestions
- [Improvement suggestion]

## Approval Status
[ ] Approved / [ ] Changes Requested
```
