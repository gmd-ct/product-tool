# Product Tool - Research & Specs Viewer

A standalone static viewer for the product research and specs documentation.

## Usage

Just open `index.html` in any web browser. No server required.

## Files

- `index.html` - Main HTML page
- `app.js` - Bundled JavaScript with all content embedded
- `styles.css` - Styling

## Sharing

To share with others, zip up this entire folder and send it. Recipients just need to:

1. Unzip the folder
2. Open `index.html` in their browser

## Rebuilding

If the source content changes, rebuild from the project root:

```bash
cd viewer-dist
node build.cjs
```

This will re-bundle all markdown and JSON content into `app.js`.

## Contents

- **Research**: Competitor analysis of 6 PM tools (ProductPlan, Productboard, Aha!, Airfocus, Tempo, ChatPRD)
- **Product Specs**: Feature specifications across 8 categories (~75 features)
