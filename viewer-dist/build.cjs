#!/usr/bin/env node
// Build script to bundle all content into a standalone viewer

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Define all content to bundle
const CONTENT = {
  // Research overview
  '/research/README.md': 'research/README.md',
  '/research/methodology.md': 'research/methodology.md',
  '/research/replication-guide.md': 'research/replication-guide.md',

  // Tools
  ...generateToolPaths('productplan'),
  ...generateToolPaths('productboard'),
  ...generateToolPaths('aha'),
  ...generateToolPaths('airfocus'),
  ...generateToolPaths('tempo'),
  ...generateToolPaths('chatprd'),

  // Comparisons
  '/research/comparisons/feature-matrix.md': 'research/comparisons/feature-matrix.md',
  '/research/comparisons/pricing-comparison.md': 'research/comparisons/pricing-comparison.md',
  '/research/comparisons/integration-matrix.md': 'research/comparisons/integration-matrix.md',
  '/research/comparisons/persona-fit.md': 'research/comparisons/persona-fit.md',
  '/research/comparisons/strengths-weaknesses.md': 'research/comparisons/strengths-weaknesses.md',

  // Analysis
  '/research/analysis/market-landscape.md': 'research/analysis/market-landscape.md',
  '/research/analysis/feature-gaps.md': 'research/analysis/feature-gaps.md',
  '/research/analysis/user-pain-points.md': 'research/analysis/user-pain-points.md',
  '/research/analysis/emerging-patterns.md': 'research/analysis/emerging-patterns.md',
  '/research/analysis/opportunities.md': 'research/analysis/opportunities.md',

  // Data (JSON)
  '/research/data/tools.json': 'research/data/tools.json',
  '/research/data/features.json': 'research/data/features.json',
  '/research/data/pricing.json': 'research/data/pricing.json',
  '/research/data/integrations.json': 'research/data/integrations.json',

  // Specs
  '/specs/00-overview.md': 'specs/00-overview.md',
  '/specs/01-roadmapping.md': 'specs/01-roadmapping.md',
  '/specs/02-prioritization.md': 'specs/02-prioritization.md',
  '/specs/03-feedback-management.md': 'specs/03-feedback-management.md',
  '/specs/04-ai-features.md': 'specs/04-ai-features.md',
  '/specs/05-okrs-strategy.md': 'specs/05-okrs-strategy.md',
  '/specs/06-collaboration.md': 'specs/06-collaboration.md',
  '/specs/07-integrations.md': 'specs/07-integrations.md',
  '/specs/08-enterprise-security.md': 'specs/08-enterprise-security.md',
};

function generateToolPaths(tool) {
  const files = ['overview', 'features', 'pricing', 'users', 'reviews', 'integrations', 'insights'];
  const result = {};
  for (const file of files) {
    result[`/research/tools/${tool}/${file}.md`] = `research/tools/${tool}/${file}.md`;
  }
  return result;
}

// Read all files and build content object
const content = {};
for (const [key, filePath] of Object.entries(CONTENT)) {
  const fullPath = path.join(ROOT, filePath);
  try {
    content[key] = fs.readFileSync(fullPath, 'utf-8');
    console.log(`✓ ${filePath}`);
  } catch (e) {
    console.error(`✗ ${filePath}: ${e.message}`);
  }
}

// Generate the bundled app.js
const appJs = `// Research & Specs Viewer - Standalone Bundle
// Generated: ${new Date().toISOString()}

const CONTENT = ${JSON.stringify(content, null, 2)};

const STRUCTURE = {
  overview: {
    title: 'Overview',
    items: [
      { name: 'README', path: '/research/README.md' },
      { name: 'Methodology', path: '/research/methodology.md' },
      { name: 'Replication Guide', path: '/research/replication-guide.md' }
    ]
  },
  tools: {
    title: 'Tools',
    subsections: {
      productplan: {
        title: 'ProductPlan',
        items: [
          { name: 'Overview', path: '/research/tools/productplan/overview.md' },
          { name: 'Features', path: '/research/tools/productplan/features.md' },
          { name: 'Pricing', path: '/research/tools/productplan/pricing.md' },
          { name: 'Users', path: '/research/tools/productplan/users.md' },
          { name: 'Reviews', path: '/research/tools/productplan/reviews.md' },
          { name: 'Integrations', path: '/research/tools/productplan/integrations.md' },
          { name: 'Insights', path: '/research/tools/productplan/insights.md' }
        ]
      },
      productboard: {
        title: 'Productboard',
        items: [
          { name: 'Overview', path: '/research/tools/productboard/overview.md' },
          { name: 'Features', path: '/research/tools/productboard/features.md' },
          { name: 'Pricing', path: '/research/tools/productboard/pricing.md' },
          { name: 'Users', path: '/research/tools/productboard/users.md' },
          { name: 'Reviews', path: '/research/tools/productboard/reviews.md' },
          { name: 'Integrations', path: '/research/tools/productboard/integrations.md' },
          { name: 'Insights', path: '/research/tools/productboard/insights.md' }
        ]
      },
      aha: {
        title: 'Aha!',
        items: [
          { name: 'Overview', path: '/research/tools/aha/overview.md' },
          { name: 'Features', path: '/research/tools/aha/features.md' },
          { name: 'Pricing', path: '/research/tools/aha/pricing.md' },
          { name: 'Users', path: '/research/tools/aha/users.md' },
          { name: 'Reviews', path: '/research/tools/aha/reviews.md' },
          { name: 'Integrations', path: '/research/tools/aha/integrations.md' },
          { name: 'Insights', path: '/research/tools/aha/insights.md' }
        ]
      },
      airfocus: {
        title: 'Airfocus',
        items: [
          { name: 'Overview', path: '/research/tools/airfocus/overview.md' },
          { name: 'Features', path: '/research/tools/airfocus/features.md' },
          { name: 'Pricing', path: '/research/tools/airfocus/pricing.md' },
          { name: 'Users', path: '/research/tools/airfocus/users.md' },
          { name: 'Reviews', path: '/research/tools/airfocus/reviews.md' },
          { name: 'Integrations', path: '/research/tools/airfocus/integrations.md' },
          { name: 'Insights', path: '/research/tools/airfocus/insights.md' }
        ]
      },
      tempo: {
        title: 'Tempo',
        items: [
          { name: 'Overview', path: '/research/tools/tempo/overview.md' },
          { name: 'Features', path: '/research/tools/tempo/features.md' },
          { name: 'Pricing', path: '/research/tools/tempo/pricing.md' },
          { name: 'Users', path: '/research/tools/tempo/users.md' },
          { name: 'Reviews', path: '/research/tools/tempo/reviews.md' },
          { name: 'Integrations', path: '/research/tools/tempo/integrations.md' },
          { name: 'Insights', path: '/research/tools/tempo/insights.md' }
        ]
      },
      chatprd: {
        title: 'ChatPRD',
        items: [
          { name: 'Overview', path: '/research/tools/chatprd/overview.md' },
          { name: 'Features', path: '/research/tools/chatprd/features.md' },
          { name: 'Pricing', path: '/research/tools/chatprd/pricing.md' },
          { name: 'Users', path: '/research/tools/chatprd/users.md' },
          { name: 'Reviews', path: '/research/tools/chatprd/reviews.md' },
          { name: 'Integrations', path: '/research/tools/chatprd/integrations.md' },
          { name: 'Insights', path: '/research/tools/chatprd/insights.md' }
        ]
      }
    }
  },
  comparisons: {
    title: 'Comparisons',
    items: [
      { name: 'Feature Matrix', path: '/research/comparisons/feature-matrix.md' },
      { name: 'Pricing Comparison', path: '/research/comparisons/pricing-comparison.md' },
      { name: 'Integration Matrix', path: '/research/comparisons/integration-matrix.md' },
      { name: 'Persona Fit', path: '/research/comparisons/persona-fit.md' },
      { name: 'Strengths & Weaknesses', path: '/research/comparisons/strengths-weaknesses.md' }
    ]
  },
  analysis: {
    title: 'Analysis',
    items: [
      { name: 'Market Landscape', path: '/research/analysis/market-landscape.md' },
      { name: 'Feature Gaps', path: '/research/analysis/feature-gaps.md' },
      { name: 'User Pain Points', path: '/research/analysis/user-pain-points.md' },
      { name: 'Emerging Patterns', path: '/research/analysis/emerging-patterns.md' },
      { name: 'Opportunities', path: '/research/analysis/opportunities.md' }
    ]
  },
  data: {
    title: 'Data (JSON)',
    items: [
      { name: 'Tools Data', path: '/research/data/tools.json', isJson: true },
      { name: 'Features Data', path: '/research/data/features.json', isJson: true },
      { name: 'Pricing Data', path: '/research/data/pricing.json', isJson: true },
      { name: 'Integrations Data', path: '/research/data/integrations.json', isJson: true }
    ]
  },
  specs: {
    title: 'Product Specs',
    items: [
      { name: 'Overview', path: '/specs/00-overview.md' },
      { name: 'Roadmapping', path: '/specs/01-roadmapping.md' },
      { name: 'Prioritization', path: '/specs/02-prioritization.md' },
      { name: 'Feedback Management', path: '/specs/03-feedback-management.md' },
      { name: 'AI Features', path: '/specs/04-ai-features.md' },
      { name: 'OKRs & Strategy', path: '/specs/05-okrs-strategy.md' },
      { name: 'Collaboration', path: '/specs/06-collaboration.md' },
      { name: 'Integrations', path: '/specs/07-integrations.md' },
      { name: 'Enterprise & Security', path: '/specs/08-enterprise-security.md' }
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
    this.loadFromHash() || this.loadContent('/research/README.md', 'README');
  }

  buildNavigation() {
    let html = '';
    for (const [sectionKey, section] of Object.entries(STRUCTURE)) {
      html += \`<div class="nav-section" data-section="\${sectionKey}">\`;
      html += \`<div class="nav-section-title"><span>\${section.title}</span><span class="chevron">▼</span></div>\`;
      if (section.items) {
        html += '<ul class="nav-items">';
        for (const item of section.items) {
          html += \`<li class="nav-item" data-path="\${item.path}" data-name="\${item.name}" \${item.isJson ? 'data-json="true"' : ''}>\${item.name}</li>\`;
        }
        html += '</ul>';
      }
      if (section.subsections) {
        html += '<div class="nav-items">';
        for (const [subKey, sub] of Object.entries(section.subsections)) {
          html += \`<div class="nav-subsection collapsed" data-subsection="\${subKey}">\`;
          html += \`<div class="nav-subsection-title">\${sub.title} ▸</div>\`;
          html += '<ul class="nav-subitems">';
          for (const item of sub.items) {
            html += \`<li class="nav-subitem" data-path="\${item.path}" data-name="\${sub.title} - \${item.name}">\${item.name}</li>\`;
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
    this.sidebarNav.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('nav-section-title')) {
        target.parentElement.classList.toggle('collapsed');
        return;
      }
      if (target.classList.contains('nav-subsection-title')) {
        target.parentElement.classList.toggle('collapsed');
        return;
      }
      if (target.classList.contains('nav-item') || target.classList.contains('nav-subitem')) {
        const path = target.dataset.path;
        const name = target.dataset.name;
        const isJson = target.dataset.json === 'true';
        this.loadContent(path, name, isJson);
        this.setActive(target);
        this.closeMobileMenu();
      }
    });
    this.menuToggle.addEventListener('click', () => {
      this.sidebar.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!this.sidebar.contains(e.target) && !this.menuToggle.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
    window.addEventListener('hashchange', () => {
      this.loadFromHash();
    });
  }

  setActive(element) {
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
    const item = this.sidebarNav.querySelector(\`[data-path="\${decoded}"]\`);
    if (item) {
      const isJson = item.dataset.json === 'true';
      this.loadContent(decoded, item.dataset.name, isJson);
      this.setActive(item);
      const section = item.closest('.nav-section');
      if (section) section.classList.remove('collapsed');
      const subsection = item.closest('.nav-subsection');
      if (subsection) subsection.classList.remove('collapsed');
      return true;
    }
    return false;
  }

  loadContent(path, name, isJson = false) {
    this.currentPath = path;
    window.location.hash = encodeURIComponent(path);
    this.contentTitle.textContent = name;

    const text = CONTENT[path];
    if (!text) {
      this.contentBody.innerHTML = '<div class="markdown-content"><p style="color: #dc3545;">Content not found</p></div>';
      return;
    }

    if (isJson) {
      this.renderJson(text);
    } else {
      this.renderMarkdown(text);
    }
  }

  renderMarkdown(text) {
    const html = marked.parse(text);
    this.contentBody.innerHTML = \`<div class="markdown-content">\${html}</div>\`;
  }

  renderJson(text) {
    try {
      const data = JSON.parse(text);
      const formatted = JSON.stringify(data, null, 2);
      this.contentBody.innerHTML = \`<div class="markdown-content"><pre><code>\${this.escapeHtml(formatted)}</code></pre></div>\`;
    } catch (e) {
      this.contentBody.innerHTML = \`<div class="markdown-content"><pre><code>\${this.escapeHtml(text)}</code></pre></div>\`;
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ResearchViewer();
});
`;

// Write bundled app.js
fs.writeFileSync(path.join(__dirname, 'app.js'), appJs);
console.log('\\n✓ Generated app.js');

// Copy styles.css
fs.copyFileSync(
  path.join(ROOT, 'research/viewer/styles.css'),
  path.join(__dirname, 'styles.css')
);
console.log('✓ Copied styles.css');

// Create index.html
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Tool - Research & Specs</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="app">
    <aside class="sidebar">
      <div class="sidebar-header">
        <h1>Research & Specs</h1>
      </div>
      <nav class="sidebar-nav" id="sidebar-nav"></nav>
    </aside>
    <main class="content">
      <header class="content-header">
        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <h2 id="content-title">Welcome</h2>
      </header>
      <article class="content-body" id="content-body">
        <div class="loading">Loading...</div>
      </article>
    </main>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml);
console.log('✓ Created index.html');

console.log('\\n✅ Build complete! Open viewer-dist/index.html in a browser.');
