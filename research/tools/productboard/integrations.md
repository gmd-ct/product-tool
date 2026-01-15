# Productboard - Integration Ecosystem

## Integration Overview

Productboard offers 25+ native integrations plus API access. The platform emphasizes consolidating feedback from all customer touchpoints into a single source of truth.

## Integration Categories

### Customer Feedback & Support

#### Intercom
| Aspect | Details |
|--------|---------|
| **Type** | Native, Two-Way |
| **Depth** | Deep |
| **Key Features** | Push feedback, tag features in conversations, notify users of releases |

**Capabilities**:
- Send user feedback from Intercom conversations to Productboard
- Tag Productboard features directly within Intercom interactions
- Proactively inform users about relevant feature releases

#### Zendesk
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Deep |
| **Key Features** | Ticket sync, feedback capture, feature linking |

**Capabilities**:
- New tickets can create Productboard features
- Link tickets to existing features
- Automate feedback collection from support

#### Survicate
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Survey response sync |

#### Screeb
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | In-app feedback capture |

#### InSided
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Community feedback integration |

### CRM & Sales

#### Salesforce
| Aspect | Details |
|--------|---------|
| **Type** | Native, Two-Way |
| **Depth** | Deep |
| **Key Features** | Feedback sync, opportunity value, bidirectional updates |

**Capabilities**:
- Update Productboard with customer feedback from Salesforce
- Track opportunity value against features
- Update Salesforce when features are planned
- Keep sales informed of roadmap changes

#### Gong
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Sales call intelligence |

**Capabilities**:
- Capture product feedback from sales calls
- AI-transcribed insights

### Product Analytics

#### Amplitude
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | User segments, behavioral data |

**Capabilities**:
- Import user segments for targeted feedback analysis
- Behavioral context for prioritization

#### Mixpanel
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Analytics data, user segments |

#### FullStory
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Session insights, UX feedback |

#### Gainsight PX
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Product analytics, usage data |

### Customer Success

#### Gainsight CS
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Customer success data, health scores |

### Communication & Collaboration

#### Slack
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Deep |
| **Key Features** | Feedback capture, notifications, updates |

**Capabilities**:
- Push feedback from Slack to Productboard
- Send notifications on roadmap changes
- Team collaboration workflows

#### Microsoft Teams
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Notifications, updates |

#### Email
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Basic |
| **Key Features** | Forward feedback via email |

#### Chrome Extension
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Capture from any webpage |

### Design & Whiteboarding

#### Figma
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Embed |
| **Key Features** | Design embeds in features |

#### Miro
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Embed |
| **Key Features** | Whiteboard embeds |

#### Mural
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Embed |
| **Key Features** | Collaboration embeds |

### Development Tools

#### Jira
| Aspect | Details |
|--------|---------|
| **Type** | Native, Two-Way |
| **Depth** | Very Deep |
| **Availability** | All plans |
| **Key Features** | Issue sync, status updates, field mapping |

**Capabilities**:
- Import Jira issues into Productboard
- Map fields between systems
- Push features to Jira as new issues
- Two-way status synchronization
- Automate status changes based on roadmap phases

**User Feedback**: Highly praised as the deepest integration

#### Azure DevOps
| Aspect | Details |
|--------|---------|
| **Type** | Native, Two-Way |
| **Depth** | Deep |
| **Key Features** | Work item sync, status updates |

#### GitHub
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Issue sync |

**Note**: Some users report formatting issues compared to Jira

#### Trello
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Card sync |

#### Shortcut
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Story sync |

### Automation

#### Zapier
| Aspect | Details |
|--------|---------|
| **Type** | Native |
| **Depth** | Medium |
| **Key Features** | Workflow automation, 5000+ apps |

**Capabilities**:
- Connect to thousands of apps
- Custom workflow automation
- Trigger-based actions

### Third-Party Connectors

#### Unito
| Aspect | Details |
|--------|---------|
| **Type** | Third-Party |
| **Key Features** | Two-way sync with additional tools |

**Capabilities**:
- Enhanced Salesforce two-way sync
- Additional tool connections

## API Access

### Notes API
| Aspect | Details |
|--------|---------|
| **Purpose** | Push feedback from any source |
| **Use Cases** | Custom integrations, internal tools |

### Features API
| Aspect | Details |
|--------|---------|
| **Purpose** | Export features to external systems |
| **Use Cases** | Custom dashboards, dev tools |

### GDPR API
| Aspect | Details |
|--------|---------|
| **Purpose** | Data compliance operations |
| **Use Cases** | User data deletion, export |

## Integration Matrix by Plan

| Integration | Starter | Essentials | Pro | Enterprise |
|-------------|---------|------------|-----|------------|
| Slack | Yes | Yes | Yes | Yes |
| Jira | Limited | Yes | Yes | Yes |
| Intercom | Yes | Yes | Yes | Yes |
| Zendesk | Yes | Yes | Yes | Yes |
| Salesforce | - | Limited | Yes | Yes |
| SAML SSO | - | - | - | Yes |
| Advanced APIs | - | - | Yes | Yes |

## Integration Limitations

### Known Issues (from reviews)
- **GitLab**: Formatting issues reported
- **Non-Jira tools**: Less robust than Jira integration
- **Some CRM gaps**: Before Salesforce enhancement

### Missing Integrations
- Limited native CRM options (Salesforce only)
- No native HubSpot
- No native Freshdesk
- Limited analytics tool depth

## Integration Best Practices

### Recommended Setup Priority
1. **Jira** - Core development alignment
2. **Slack** - Team communication
3. **Intercom/Zendesk** - Customer feedback
4. **Salesforce** - Sales insights (if applicable)
5. **Chrome Extension** - Ad-hoc capture

### Power User Tips
- Configure two-way sync carefully
- Set up Slack channels per product area
- Use Zapier to fill integration gaps
- Leverage APIs for custom needs

## Competitive Integration Comparison

| Integration | Productboard | ProductPlan | Aha! |
|-------------|--------------|-------------|------|
| Jira | Two-Way (Deep) | Two-Way | Two-Way |
| Azure DevOps | Two-Way | Two-Way | Two-Way |
| GitHub | Native | Native | Native |
| Salesforce | Native | Via Zapier | Native |
| Intercom | Native | Via Zapier | Native |
| Zendesk | Native | Via Zapier | Native |
| Slack | Native | Native | Native |
| Amplitude | Native | - | - |
| Mixpanel | Native | - | - |

## Sources

- [Productboard Integrations Page](https://www.productboard.com/platform/integrations/)
- [Productboard Support - Integrations](https://support.productboard.com/hc/en-us/categories/360004511293-Integrations)
- [Productboard Intercom Integration](https://support.productboard.com/hc/en-us/articles/360058177073-Integrate-with-Intercom)
- [Unito Productboard Salesforce](https://unito.io/integrations/productboard-salesforce/)
