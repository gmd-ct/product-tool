# Bug Fix Workflow

## Overview
This workflow guides the process of identifying, fixing, and verifying bug fixes.

## Stages

### 1. Triage
**Tasks**:
- [ ] Reproduce the bug
- [ ] Determine severity (Critical/High/Medium/Low)
- [ ] Identify affected components
- [ ] Assign priority

**Severity Levels**:
- **Critical**: System down, data loss, security breach
- **High**: Major feature broken, no workaround
- **Medium**: Feature impaired, workaround exists
- **Low**: Minor issue, cosmetic

---

### 2. Investigation
**Agent**: Dev Agent
**Tasks**:
- [ ] Analyze stack traces/logs
- [ ] Identify root cause
- [ ] Document findings
- [ ] Propose fix approach

**Output**: Root cause analysis

---

### 3. Fix Implementation
**Agent**: Dev Agent
**Tasks**:
- [ ] Create fix branch
- [ ] Implement fix
- [ ] Write regression test
- [ ] Verify fix locally

**Output**: Bug fix with regression test

---

### 4. Verification
**Agent**: QA Agent
**Tasks**:
- [ ] Verify fix resolves issue
- [ ] Run regression tests
- [ ] Check for side effects
- [ ] Sign off on fix

**Output**: Verification report

---

### 5. Deployment
**Tasks**:
- [ ] Code review
- [ ] Merge to main
- [ ] Deploy to production
- [ ] Monitor for recurrence

**Output**: Fix deployed

## Completion Criteria
- [ ] Bug no longer reproducible
- [ ] Regression test added
- [ ] No new issues introduced
- [ ] User notified (if applicable)
