# Deployment Command

Prepare and execute deployment of the application.

## Instructions
1. Verify the deployment target: $ARGUMENTS
2. Run pre-deployment checks
3. Build the application
4. Run tests
5. Execute deployment
6. Verify deployment success

## Pre-Deployment Checklist
- [ ] All tests passing
- [ ] Build completes successfully
- [ ] Environment variables configured
- [ ] Database migrations ready (if applicable)
- [ ] Rollback plan documented

## Deployment Steps
1. Pull latest changes
2. Install dependencies
3. Run build: `bun run build`
4. Run tests: `bun test`
5. Deploy to target environment
6. Run smoke tests
7. Monitor for errors

## Output Format
```markdown
# Deployment Report

## Target
[Environment/Target]

## Pre-Deployment Status
- Tests: [PASS/FAIL]
- Build: [PASS/FAIL]
- Config: [VERIFIED/MISSING]

## Deployment Status
[SUCCESS/FAILED]

## Post-Deployment Verification
- [ ] Application accessible
- [ ] Health checks passing
- [ ] Key features working

## Notes
[Any relevant notes or issues]
```
