# ChatPRD - Integration Ecosystem

## Integration Overview

ChatPRD connects with modern product development tools, focusing on where PMs and engineers work daily. The integration strategy emphasizes output destinations (where documents go) and workflow tools (where work happens).

## Integration Categories

### Project Management / Issue Tracking

#### Linear
| Aspect | Details |
|--------|---------|
| **Type** | Native, Deep Integration |
| **Key Features** | @chatprd mention, issue improvement |
| **Plan** | Available on Pro+ |

**Capabilities**:
- Mention @chatprd in any issue comment
- Assign issues to @chatprd for improvement
- Rewrite issue titles and descriptions
- Generate discipline-specific sub-issues
- Add done criteria to issues
- Point out missing information
- Continue conversation in threads

**How It Works**:
1. Navigate to ChatPRD's integrations settings
2. Connect Linear
3. Authenticate
4. Mention @chatprd from any Linear issue
5. AI responds in thread with suggestions

**Use Cases**:
- Improve vague issue descriptions
- Break down epics into sub-issues
- Get product management feedback
- Clarify requirements without PM bottleneck

### Documentation Platforms

#### Notion
| Aspect | Details |
|--------|---------|
| **Type** | Export/Sync |
| **Plan** | Pro+ |
| **Key Features** | Document export, sync |

**Capabilities**:
- Export PRDs directly to Notion
- Sync documents between platforms
- Maintain single source of truth

#### Google Drive
| Aspect | Details |
|--------|---------|
| **Type** | Integration |
| **Key Features** | File access, export |

**Capabilities**:
- Access Google Drive files
- Export documents to Drive
- Reference existing documentation

#### Confluence
| Aspect | Details |
|--------|---------|
| **Type** | Export |
| **Key Features** | Document export |

**Capabilities**:
- Export PRDs to Confluence
- Integrate with Atlassian workflows

### Communication

#### Slack
| Aspect | Details |
|--------|---------|
| **Type** | Integration |
| **Key Features** | Updates, sharing |

**Capabilities**:
- Share document updates
- Notify team of changes
- Integrate into Slack workflows

### Prototyping Tools

#### v0 (Vercel)
| Aspect | Details |
|--------|---------|
| **Type** | Integration |
| **Key Features** | Prototype generation |

**Capabilities**:
- Export PRDs to v0
- Generate working UI prototypes
- Visualize features before development

#### bolt.new
| Aspect | Details |
|--------|---------|
| **Type** | Integration |
| **Key Features** | Prototype creation |

**Capabilities**:
- Generate functional prototypes
- Rapid idea visualization
- Full-stack prototype generation

#### Lovable
| Aspect | Details |
|--------|---------|
| **Type** | Integration |
| **Key Features** | Design prototypes |

**Capabilities**:
- Create design prototypes
- Visual mockups from PRDs

#### Magic Patterns
| Aspect | Details |
|--------|---------|
| **Type** | Integration |
| **Key Features** | UI pattern generation |

### Developer Tools

#### MCP (Model Context Protocol)
| Aspect | Details |
|--------|---------|
| **Type** | API Protocol |
| **Key Features** | IDE/AI app integration |

**Capabilities**:
- Connect ChatPRD to IDEs
- Integrate with AI desktop apps
- Use PRDs in coding workflows
- Connect with Cursor for AI coding
- Claude integration support

#### Cursor Integration
| Aspect | Details |
|--------|---------|
| **Type** | Via MCP |
| **Key Features** | PRD-driven development |

**Workflow**:
1. Generate PRD in ChatPRD
2. Export or connect via MCP
3. Use PRD as context in Cursor
4. AI coding with requirements context

## Integration Matrix by Plan

| Integration | Free | Basic | Pro | Team | Enterprise |
|-------------|------|-------|-----|------|------------|
| Export (basic) | Limited | Yes | Yes | Yes | Yes |
| Notion | - | - | Yes | Yes | Yes |
| Linear | - | - | Yes | Yes | Yes |
| Slack | - | - | Yes | Yes | Yes |
| Google Drive | - | - | Yes | Yes | Yes |
| v0/bolt.new | - | - | Yes | Yes | Yes |
| MCP | - | - | Yes | Yes | Yes |
| SSO | - | - | - | - | Yes |

## Integration Strengths

### Modern Tool Stack Focus
- Designed for contemporary PM workflows
- Linear over Jira (startup-focused)
- v0/bolt.new for rapid prototyping
- Notion for documentation

### Unique Prototype Workflow
ChatPRD is one of few PRD tools that connects to prototype generators:
- Write PRD → Generate UI prototype
- Idea to visual in 20 minutes
- Validate before engineering

### MCP for Developers
Model Context Protocol enables:
- PRD context in AI coding tools
- Seamless PM → Engineering handoff
- Requirements embedded in development

## Integration Limitations

### Not Integrated
- **Jira** - No native integration (Linear focus)
- **Azure DevOps** - Not supported
- **Salesforce** - Not supported
- **Intercom** - Not supported
- **Productboard** - Not supported
- **Aha!** - Not supported

### Why Limited Integrations
ChatPRD focuses on:
1. Output destinations (where docs go)
2. Modern workflow tools (Linear, Notion)
3. Prototype generation (v0, bolt.new)
4. Developer handoff (MCP)

Traditional PM tool integrations less prioritized as ChatPRD complements rather than replaces those tools.

## Competitive Integration Comparison

| Integration | ChatPRD | Aha! | Productboard | Airfocus |
|-------------|---------|------|--------------|----------|
| Linear | Deep | No | No | No |
| Notion | Yes | Limited | Yes | Yes |
| Jira | No | Deep | Deep | Deep |
| Slack | Yes | Native | Native | Native |
| v0/Prototype | Yes | No | No | No |
| Azure DevOps | No | Yes | Yes | Yes |
| MCP | Yes | No | No | No |

ChatPRD targets different integration surface than traditional PM tools.

## Best Practices

### Recommended Setup
1. **Linear** - Connect for issue workflow
2. **Notion** - Set up for documentation hub
3. **Slack** - Enable for team updates
4. **v0** - Connect for prototyping

### Workflow Integration

**Idea to Production Workflow**:
```
ChatPRD (PRD) → Linear (Issues) → Development
       ↓
       → v0 (Prototype) → Stakeholder Feedback
       ↓
       → Notion (Documentation)
```

**Developer Handoff Workflow**:
```
ChatPRD (PRD) → MCP → Cursor (AI Coding)
```

## Future Integration Potential

### Likely Additions
- Enhanced Jira support (large market demand)
- More prototype tools
- Analytics platform connections
- Feedback tool integrations

### Strategic Direction
ChatPRD's integration strategy appears focused on:
- AI-native development workflows
- Modern startup tool stacks
- Prototype-driven development
- Developer-focused handoff

## Sources

- [ChatPRD Integrations](https://www.chatprd.ai/)
- [Linear ChatPRD Integration](https://linear.app/integrations/chatprd)
- [ChatPRD AI Workflows](https://www.chatprd.ai/how-i-ai/workflows)
- [ChatPRD PRD for Cursor](https://www.chatprd.ai/resources/PRD-for-Cursor)
