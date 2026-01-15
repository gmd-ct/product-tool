// Research Viewer Application

const STRUCTURE = {
  overview: {
    title: 'Overview',
    items: [
      { name: 'README', path: '/README.md' },
      { name: 'Methodology', path: '/methodology.md' },
      { name: 'Replication Guide', path: '/replication-guide.md' }
    ]
  },
  tools: {
    title: 'Tools',
    subsections: {
      productplan: {
        title: 'ProductPlan',
        items: [
          { name: 'Overview', path: '/tools/productplan/overview.md' },
          { name: 'Features', path: '/tools/productplan/features.md' },
          { name: 'Pricing', path: '/tools/productplan/pricing.md' },
          { name: 'Users', path: '/tools/productplan/users.md' },
          { name: 'Reviews', path: '/tools/productplan/reviews.md' },
          { name: 'Integrations', path: '/tools/productplan/integrations.md' },
          { name: 'Insights', path: '/tools/productplan/insights.md' }
        ]
      },
      productboard: {
        title: 'Productboard',
        items: [
          { name: 'Overview', path: '/tools/productboard/overview.md' },
          { name: 'Features', path: '/tools/productboard/features.md' },
          { name: 'Pricing', path: '/tools/productboard/pricing.md' },
          { name: 'Users', path: '/tools/productboard/users.md' },
          { name: 'Reviews', path: '/tools/productboard/reviews.md' },
          { name: 'Integrations', path: '/tools/productboard/integrations.md' },
          { name: 'Insights', path: '/tools/productboard/insights.md' }
        ]
      },
      aha: {
        title: 'Aha!',
        items: [
          { name: 'Overview', path: '/tools/aha/overview.md' },
          { name: 'Features', path: '/tools/aha/features.md' },
          { name: 'Pricing', path: '/tools/aha/pricing.md' },
          { name: 'Users', path: '/tools/aha/users.md' },
          { name: 'Reviews', path: '/tools/aha/reviews.md' },
          { name: 'Integrations', path: '/tools/aha/integrations.md' },
          { name: 'Insights', path: '/tools/aha/insights.md' }
        ]
      },
      airfocus: {
        title: 'Airfocus',
        items: [
          { name: 'Overview', path: '/tools/airfocus/overview.md' },
          { name: 'Features', path: '/tools/airfocus/features.md' },
          { name: 'Pricing', path: '/tools/airfocus/pricing.md' },
          { name: 'Users', path: '/tools/airfocus/users.md' },
          { name: 'Reviews', path: '/tools/airfocus/reviews.md' },
          { name: 'Integrations', path: '/tools/airfocus/integrations.md' },
          { name: 'Insights', path: '/tools/airfocus/insights.md' }
        ]
      },
      tempo: {
        title: 'Tempo',
        items: [
          { name: 'Overview', path: '/tools/tempo/overview.md' },
          { name: 'Features', path: '/tools/tempo/features.md' },
          { name: 'Pricing', path: '/tools/tempo/pricing.md' },
          { name: 'Users', path: '/tools/tempo/users.md' },
          { name: 'Reviews', path: '/tools/tempo/reviews.md' },
          { name: 'Integrations', path: '/tools/tempo/integrations.md' },
          { name: 'Insights', path: '/tools/tempo/insights.md' }
        ]
      },
      chatprd: {
        title: 'ChatPRD',
        items: [
          { name: 'Overview', path: '/tools/chatprd/overview.md' },
          { name: 'Features', path: '/tools/chatprd/features.md' },
          { name: 'Pricing', path: '/tools/chatprd/pricing.md' },
          { name: 'Users', path: '/tools/chatprd/users.md' },
          { name: 'Reviews', path: '/tools/chatprd/reviews.md' },
          { name: 'Integrations', path: '/tools/chatprd/integrations.md' },
          { name: 'Insights', path: '/tools/chatprd/insights.md' }
        ]
      }
    }
  },
  comparisons: {
    title: 'Comparisons',
    items: [
      { name: 'Feature Matrix', path: '/comparisons/feature-matrix.md' },
      { name: 'Pricing Comparison', path: '/comparisons/pricing-comparison.md' },
      { name: 'Integration Matrix', path: '/comparisons/integration-matrix.md' },
      { name: 'Persona Fit', path: '/comparisons/persona-fit.md' },
      { name: 'Strengths & Weaknesses', path: '/comparisons/strengths-weaknesses.md' }
    ]
  },
  analysis: {
    title: 'Analysis',
    items: [
      { name: 'Market Landscape', path: '/analysis/market-landscape.md' },
      { name: 'Feature Gaps', path: '/analysis/feature-gaps.md' },
      { name: 'User Pain Points', path: '/analysis/user-pain-points.md' },
      { name: 'Emerging Patterns', path: '/analysis/emerging-patterns.md' },
      { name: 'Opportunities', path: '/analysis/opportunities.md' }
    ]
  },
  data: {
    title: 'Data (JSON)',
    items: [
      { name: 'Tools Data', path: '/data/tools.json', isJson: true },
      { name: 'Features Data', path: '/data/features.json', isJson: true },
      { name: 'Pricing Data', path: '/data/pricing.json', isJson: true },
      { name: 'Integrations Data', path: '/data/integrations.json', isJson: true }
    ]
  },
  specs: {
    title: 'Product Specs',
    items: [
      { name: 'Overview', path: '../../specs/00-overview.md' },
      { name: 'Roadmapping', path: '../../specs/01-roadmapping.md' },
      { name: 'Prioritization', path: '../../specs/02-prioritization.md' },
      { name: 'Feedback Management', path: '../../specs/03-feedback-management.md' },
      { name: 'AI Features', path: '../../specs/04-ai-features.md' },
      { name: 'OKRs & Strategy', path: '../../specs/05-okrs-strategy.md' },
      { name: 'Collaboration', path: '../../specs/06-collaboration.md' },
      { name: 'Integrations', path: '../../specs/07-integrations.md' },
      { name: 'Enterprise & Security', path: '../../specs/08-enterprise-security.md' }
    ]
  }
};

class ResearchViewer {
  constructor() {
    this.sidebarNav = document.getElementById('sidebar-nav');
    this.contentTitle = document.getElementById('content-title');
    this.contentBody = document.getElementById('content-body');
    this.menuToggle = document.getElementById('menu-toggle');
    this.sidebar = document.querySelector('.sidebar');

    this.currentPath = null;
    this.init();
  }

  init() {
    this.buildNavigation();
    this.setupEventListeners();
    this.loadFromHash() || this.loadContent('/README.md', 'README');
  }

  buildNavigation() {
    let html = '';

    for (const [sectionKey, section] of Object.entries(STRUCTURE)) {
      html += `<div class="nav-section" data-section="${sectionKey}">`;
      html += `<div class="nav-section-title">
        <span>${section.title}</span>
        <span class="chevron">▼</span>
      </div>`;

      if (section.items) {
        html += '<ul class="nav-items">';
        for (const item of section.items) {
          html += `<li class="nav-item" data-path="${item.path}" data-name="${item.name}" ${item.isJson ? 'data-json="true"' : ''}>${item.name}</li>`;
        }
        html += '</ul>';
      }

      if (section.subsections) {
        html += '<div class="nav-items">';
        for (const [subKey, sub] of Object.entries(section.subsections)) {
          html += `<div class="nav-subsection collapsed" data-subsection="${subKey}">`;
          html += `<div class="nav-subsection-title">${sub.title} ▸</div>`;
          html += '<ul class="nav-subitems">';
          for (const item of sub.items) {
            html += `<li class="nav-subitem" data-path="${item.path}" data-name="${sub.title} - ${item.name}">${item.name}</li>`;
          }
          html += '</ul></div>';
        }
        html += '</div>';
      }

      html += '</div>';
    }

    this.sidebarNav.innerHTML = html;
  }

  setupEventListeners() {
    // Navigation clicks
    this.sidebarNav.addEventListener('click', (e) => {
      const target = e.target;

      // Section toggle
      if (target.classList.contains('nav-section-title')) {
        target.parentElement.classList.toggle('collapsed');
        return;
      }

      // Subsection toggle
      if (target.classList.contains('nav-subsection-title')) {
        target.parentElement.classList.toggle('collapsed');
        return;
      }

      // Item click
      if (target.classList.contains('nav-item') || target.classList.contains('nav-subitem')) {
        const path = target.dataset.path;
        const name = target.dataset.name;
        const isJson = target.dataset.json === 'true';
        this.loadContent(path, name, isJson);
        this.setActive(target);
        this.closeMobileMenu();
      }
    });

    // Mobile menu toggle
    this.menuToggle.addEventListener('click', () => {
      this.sidebar.classList.toggle('open');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.sidebar.contains(e.target) && !this.menuToggle.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
      this.loadFromHash();
    });
  }

  setActive(element) {
    // Remove all active classes
    this.sidebarNav.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  }

  closeMobileMenu() {
    this.sidebar.classList.remove('open');
  }

  loadFromHash() {
    const hash = window.location.hash.slice(1);
    if (!hash) return false;

    const decoded = decodeURIComponent(hash);
    const item = this.sidebarNav.querySelector(`[data-path="${decoded}"]`);
    if (item) {
      const isJson = item.dataset.json === 'true';
      this.loadContent(decoded, item.dataset.name, isJson);
      this.setActive(item);

      // Expand parent sections
      const section = item.closest('.nav-section');
      if (section) section.classList.remove('collapsed');
      const subsection = item.closest('.nav-subsection');
      if (subsection) subsection.classList.remove('collapsed');

      return true;
    }
    return false;
  }

  async loadContent(path, name, isJson = false) {
    this.currentPath = path;
    window.location.hash = encodeURIComponent(path);
    this.contentTitle.textContent = name;
    this.contentBody.innerHTML = '<div class="loading">Loading...</div>';

    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`Failed to load: ${response.status}`);

      const text = await response.text();

      if (isJson) {
        this.renderJson(text);
      } else {
        this.renderMarkdown(text);
      }
    } catch (error) {
      this.contentBody.innerHTML = `<div class="markdown-content"><p style="color: #dc3545;">Error loading content: ${error.message}</p></div>`;
    }
  }

  renderMarkdown(text) {
    const html = marked.parse(text);
    this.contentBody.innerHTML = `<div class="markdown-content">${html}</div>`;
  }

  renderJson(text) {
    try {
      const data = JSON.parse(text);
      const formatted = JSON.stringify(data, null, 2);
      this.contentBody.innerHTML = `<div class="markdown-content"><pre><code>${this.escapeHtml(formatted)}</code></pre></div>`;
    } catch (e) {
      this.contentBody.innerHTML = `<div class="markdown-content"><pre><code>${this.escapeHtml(text)}</code></pre></div>`;
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ResearchViewer();
});
