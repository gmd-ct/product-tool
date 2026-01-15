# Tempo Strategic Roadmaps - Integration Ecosystem

## Integration Overview

Tempo Strategic Roadmaps offers native integrations with development tools, project management platforms, and the broader Tempo suite. Deep Jira integration is the flagship capability, reflecting Tempo's Atlassian marketplace heritage.

## Integration Categories

### Development Tools

#### Jira Cloud
| Aspect | Details |
|--------|---------|
| **Type** | Two-Way, Bi-directional |
| **Depth** | Very Deep (Native) |
| **Plan** | Available in trial, full access Business+ |
| **Key Features** | Custom field mapping, epic sync, status tracking |

**Capabilities**:
- One-way or two-way sync options
- Custom JQL for filtering imported issues
- Automatic field mapping from Jira
- Start/finish dates auto-populate
- Status tracking from roadmap
- Epic and story synchronization
- Confluence page embedding

**User Feedback**: "It integrates perfectly well with JIRA and has a simple, effective and intuitive user interface."

#### Jira Server/Data Center
| Aspect | Details |
|--------|---------|
| **Type** | Two-Way |
| **Depth** | Deep |
| **Plan** | Business+ |
| **Key Features** | On-premise support |

#### Azure DevOps
| Aspect | Details |
|--------|---------|
| **Type** | Two-Way, Bi-directional |
| **Depth** | Deep |
| **Plan** | Business+ |
| **Key Features** | Work item sync, field mapping |

**Capabilities**:
- Bi-directional sync
- Work item import
- Field data mapping
- Flexible sync schedules
- Azure DevOps remains source of truth
- Manual push option

#### GitHub
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Issue synchronization |

#### GitLab
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Issue synchronization |

### Project Management Tools

#### Asana
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Task synchronization |

#### Monday.com
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Work item sync |

#### Trello
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Card sync |

#### Shortcut (formerly Clubhouse)
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Story synchronization |

#### Pivotal Tracker
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Story sync |

### Atlassian Ecosystem

#### Confluence
| Aspect | Details |
|--------|---------|
| **Type** | Native Embed |
| **Depth** | Medium |
| **Key Features** | Roadmap embedding in Confluence pages |

**Capabilities**:
- Embed roadmaps directly in Confluence pages
- Contextualize project plans
- Auto-update embedded views
- Share roadmap context with documentation

#### Jira Align
| Aspect | Details |
|--------|---------|
| **Type** | Integration |
| **Depth** | Medium |
| **Key Features** | Enterprise alignment |

### Tempo Suite Integrations

#### Tempo Timesheets
| Aspect | Details |
|--------|---------|
| **Type** | Native Suite |
| **Depth** | Deep |
| **Key Features** | Time tracking against roadmap items |

**Capabilities**:
- Track time on roadmap items
- Compare planned vs. actual effort
- Budget tracking integration
- Billable hour alignment

#### Tempo Capacity Planner
| Aspect | Details |
|--------|---------|
| **Type** | Native Suite |
| **Depth** | Deep |
| **Key Features** | Resource planning alignment |

**Capabilities**:
- View team capacity against roadmap
- Plan work based on availability
- Forecast capacity needs
- Align roadmap to resources

#### Structure PPM
| Aspect | Details |
|--------|---------|
| **Type** | Native Suite |
| **Depth** | Deep |
| **Key Features** | Portfolio management |

**Capabilities**:
- Portfolio hierarchy alignment
- Cross-project visualization
- Program-level planning
- Multi-team coordination

### Authentication

#### Single Sign-On (SSO/SAML)
| Aspect | Details |
|--------|---------|
| **Type** | Authentication |
| **Plan** | Professional+ |
| **Key Features** | Enterprise identity management |

### API & Automation

#### REST API
| Aspect | Details |
|--------|---------|
| **Availability** | Business plan+ |
| **Type** | REST |
| **Key Features** | Custom integrations |

**Capabilities**:
- API access tokens
- Custom integration building
- Data import/export
- Automation capabilities

## Integration Matrix by Plan

| Integration | Starter | Business | Professional | Enterprise |
|-------------|---------|----------|--------------|------------|
| Jira Cloud (basic) | Trial | Yes | Yes | Yes |
| Jira Cloud (full) | - | Yes | Yes | Yes |
| Azure DevOps | - | Yes | Yes | Yes |
| GitHub | - | Yes | Yes | Yes |
| GitLab | - | Yes | Yes | Yes |
| Asana | - | Yes | Yes | Yes |
| Trello | - | Yes | Yes | Yes |
| Monday.com | - | Yes | Yes | Yes |
| Confluence | - | Yes | Yes | Yes |
| API Access | - | Yes | Yes | Yes |
| SSO/SAML | - | - | Yes | Yes |

**Note**: Most integrations require Business plan or higher. Starter plan focused on standalone use.

## Integration Strengths

### Jira Integration Excellence
- Deep, native Atlassian integration
- Bi-directional sync options
- Custom field mapping
- JQL filtering support
- Real-time status tracking
- Confluence embedding

### Tempo Suite Synergy
- Timesheets for effort tracking
- Capacity Planner for resource alignment
- Structure for portfolio hierarchy
- Unified platform experience

### Development Tool Breadth
- Covers major dev platforms
- Azure DevOps alternative to Jira
- GitHub/GitLab for code-centric teams

## Integration Limitations

### Plan Restrictions
- Most integrations require Business+
- API access not in Starter
- SSO requires Professional+

### Missing Integrations
- Limited CRM integrations
- No native Salesforce
- No native Intercom
- No native Slack notifications
- Limited analytics tool connections

### User Concerns
> "Its integration with other systems is rather poor, which means I must manually update things constantly."

> "Integration with other tools can be limited, which may require manual workarounds for some teams."

## Competitive Integration Comparison

| Integration | Tempo | ProductPlan | Productboard | Aha! |
|-------------|-------|-------------|--------------|------|
| Jira | Two-Way | Basic | Two-Way | Two-Way |
| Azure DevOps | Two-Way | No | Two-Way | Two-Way |
| GitHub | Native | No | Native | Native |
| Salesforce | No | No | Native | Native |
| Intercom | No | No | Native | Native |
| Slack | No | Yes | Yes | Native |
| Confluence | Embed | No | No | Native |
| Total Native | ~10 | 5+ | 25+ | 65+ |

Tempo has fewer native integrations than larger competitors but covers key development tools well.

## Integration Best Practices

### Recommended Setup Priority
1. **Jira/Azure DevOps** - Connect roadmaps to development
2. **Tempo Timesheets** - Track effort on roadmap items
3. **Tempo Capacity Planner** - Align with resources
4. **Confluence** - Embed roadmaps in documentation

### Power User Tips
- Use custom JQL for precise Jira filtering
- Set up bi-directional sync for real-time alignment
- Leverage field mapping to preserve data fidelity
- Embed roadmaps in Confluence for stakeholder context

## Future Integration Considerations

### Potential Developments
- Deeper Tempo suite unification
- Expanded Atlassian ecosystem
- Additional project management tools
- Analytics platform connections

### Post-Acquisition Evolution
Since Tempo's acquisition of Roadmunk (2021):
- Increased focus on Atlassian ecosystem
- Tempo suite integration priorities
- Enterprise integration features

## Sources

- [Tempo Strategic Roadmaps Integrations](https://www.tempo.io/products/roadmaps)
- [Tempo Jira Integration](https://www.tempo.io/products/roadmaps/jira-roadmap-integration)
- [Tempo Azure DevOps Integration](https://www.tempo.io/products/roadmaps/azure-devops-roadmap-integration)
- [Tempo Help Center](https://help.tempo.io/roadmaps/latest)
- [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1219133/strategic-roadmaps-advanced-jira-roadmapping-tempo)
