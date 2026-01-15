# ProductPlan - Integration Ecosystem

## Integration Overview

ProductPlan offers 8+ native integrations plus API access for custom connections. The platform emphasizes consolidating data sources and eliminating manual data transfers.

## Native Integrations

### Development Tools

#### Atlassian Jira
| Aspect | Details |
|--------|---------|
| **Type** | Two-Way Sync |
| **Availability** | Professional & Enterprise |
| **Key Features** | Epic/container sync, story/task import, status sync, dependency sync |

**Capabilities**:
- Automatically recognize and maintain Jira epics as containers
- Define user stories or tasks as bars within containers
- Two-way dependency link synchronization
- Status updates flow between systems
- Drill down from roadmaps directly into Jira issues

**User Feedback**: "The Jira integration adds so much value, giving you up-to-date status on the implementation/engineering effort."

#### Microsoft Azure DevOps
| Aspect | Details |
|--------|---------|
| **Type** | Two-Way Sync |
| **Availability** | Professional & Enterprise |
| **Key Features** | Multi-instance support (new), custom field sync, work item sync |

**Capabilities**:
- Sync custom fields in ADO with roadmap legend and lanes
- Multi-instance ADO support (Winter 2025 release)
- Visualize strategic picture from ADO work items
- Two-way synchronization

#### GitHub
| Aspect | Details |
|--------|---------|
| **Type** | Native Integration |
| **Availability** | All plans |
| **Key Features** | Development project synchronization |

**Capabilities**:
- Synchronize development project details with roadmaps
- Help engineering teams stay coordinated on product direction
- Connect development work to strategic initiatives

#### Trello
| Aspect | Details |
|--------|---------|
| **Type** | Import |
| **Availability** | All plans |
| **Key Features** | Card import, Table Layout integration |

**Capabilities**:
- Import Trello cards into ProductPlan's Table Layout
- Streamline prioritization from Trello boards
- One-way data flow (Trello → ProductPlan)

#### Pivotal Tracker
| Aspect | Details |
|--------|---------|
| **Type** | Native Integration |
| **Availability** | All plans |
| **Key Features** | Project synchronization |

**Capabilities**:
- Connect Pivotal Tracker projects to roadmaps
- Sync project status and progress

### Communication Tools

#### Slack
| Aspect | Details |
|--------|---------|
| **Type** | Native Integration |
| **Availability** | All plans |
| **Key Features** | Change notifications, channel alerts |

**Capabilities**:
- Send roadmap modification alerts to Slack channels
- Keep teams informed of updates in real-time
- Configure notification preferences

#### Microsoft Teams
| Aspect | Details |
|--------|---------|
| **Type** | Native Integration |
| **Availability** | All plans |
| **Key Features** | Roadmap change notifications |

**Capabilities**:
- Deliver roadmap change notifications within Teams
- Keep distributed teams informed
- Real-time update alerts

### Productivity & Documentation

#### Atlassian Confluence
| Aspect | Details |
|--------|---------|
| **Type** | Native Embed |
| **Availability** | All plans |
| **Key Features** | Live roadmap embedding |

**Capabilities**:
- Embed live roadmap versions into Confluence spaces
- Align organizational stakeholders
- Roadmaps update automatically in embedded views

### Automation Platforms

#### Zapier
| Aspect | Details |
|--------|---------|
| **Type** | Native Integration |
| **Availability** | All plans |
| **Key Features** | 5,000+ app connections, workflow automation |

**Capabilities**:
- Connect ProductPlan to the rest of your product stack
- Trigger-based automation (e.g., completed build → add comment)
- Cross-platform workflow automation
- No-code integration building

**Example Workflows**:
- Azure DevOps completed build → Add comment to ProductPlan bar
- New Jira issue → Create ProductPlan initiative
- ProductPlan update → Post to Slack channel

#### Workato
| Aspect | Details |
|--------|---------|
| **Type** | Native Integration |
| **Availability** | Enterprise |
| **Key Features** | Enterprise automation |

**Capabilities**:
- Enterprise-grade workflow automation
- Complex multi-step integrations
- Advanced data transformation

## API Access

### Public API
| Aspect | Details |
|--------|---------|
| **Availability** | All plans |
| **Type** | REST API |
| **Authentication** | API key |

**Capabilities**:
- Custom integrations with third-party systems
- Programmatic roadmap management
- Data export and import
- Webhook support for event-driven automation

### API Use Cases
- Custom dashboard integration
- Data warehouse sync
- Internal tool connections
- Reporting automation

## Integration Matrix

### By Category

| Category | Integrations |
|----------|--------------|
| **Dev Tools** | Jira, Azure DevOps, GitHub, Trello, Pivotal Tracker |
| **Communication** | Slack, Microsoft Teams |
| **Documentation** | Confluence |
| **Automation** | Zapier, Workato |
| **Custom** | Public API |

### By Sync Type

| Sync Type | Integrations |
|-----------|--------------|
| **Two-Way Sync** | Jira, Azure DevOps |
| **One-Way Import** | Trello, GitHub, Pivotal Tracker |
| **Notifications** | Slack, Teams |
| **Embed** | Confluence |
| **Automation** | Zapier, Workato |

### By Plan Availability

| Plan | Available Integrations |
|------|----------------------|
| **All Plans** | GitHub, Trello, Slack, Teams, Confluence, Zapier, API |
| **Professional+** | Jira two-way, Azure DevOps two-way |
| **Enterprise** | Workato, Advanced API features |

## Integration Limitations

### Missing Integrations
- No native Salesforce integration (via Zapier)
- No native HubSpot integration (via Zapier)
- No native Intercom integration (via Zapier)
- No native Zendesk integration (via Zapier)
- No native Amplitude/Mixpanel integration
- No native Figma integration

### Known Issues (from reviews)
- Some integrations noted as having setup complexity
- Integration depth varies by platform
- Two-way sync requires Professional or higher

## Integration Best Practices

### Recommended Setup
1. **Start with Jira/ADO** - Core development alignment
2. **Add Slack/Teams** - Real-time notifications
3. **Embed in Confluence** - Documentation alignment
4. **Use Zapier** - Fill integration gaps

### Power User Tips
- Configure dependency sync for cross-team visibility
- Use custom field mapping in ADO
- Set up Slack channels per roadmap
- Leverage Zapier for CRM connections

## Competitive Integration Comparison

| Integration | ProductPlan | Productboard | Aha! |
|-------------|-------------|--------------|------|
| Jira | Two-Way | Two-Way | Two-Way |
| Azure DevOps | Two-Way | One-Way | Two-Way |
| GitHub | Native | Native | Native |
| Slack | Native | Native | Native |
| Salesforce | Via Zapier | Native | Native |
| Zendesk | Via Zapier | Native | Native |
| Intercom | Via Zapier | Native | Native |

## Sources

- [ProductPlan Integrations Page](https://www.productplan.com/integrations/)
- [ProductPlan Support - Jira & ADO Sync](https://support.productplan.com/two-way-jira-azure-devops-sync)
- [Zapier ProductPlan Integrations](https://zapier.com/apps/productplan/integrations)
