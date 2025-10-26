/**
 * ==============================================================
 * DigiPort / DragonEye Design System Repository Setup Script
 * ==============================================================
 * PURPOSE:
 * - Creates the r06-design-system-repository folder structure
 * - Populates it with standard subdirectories and placeholder files
 * - Generates an initial digiporttheme.css boilerplate
 * - Provides a README.md template for quick documentation
 * ==============================================================
 */

import fs from "fs";
import path from "path";

// Root folder name
const root = "r06-design-system-repository";

// Folder structure
const folders = [
  "css",
  "js",
  "images/branding",
  "images/backgrounds",
  "images/ui-elements",
  "audio/themes",
  "audio/jingles",
  "video/intros",
  "video/loops",
  "fonts"
];

// Basic digiporttheme.css boilerplate
const cssTemplate = `/* ==============================================================
   DigiPort Theme — Global Design System
   ==============================================================
   This file defines the brand color palette, typography, and
   default component behavior for all DigiPort / DragonEye projects.
   ============================================================== */

:root {
  --color-red: #5c1a14;       /* Ember red */
  --color-gold: #d4af37;      /* Warm metallic gold */
  --color-dark: #0d1117;      /* Charcoal background */
  --color-light: #fdf6e3;     /* Ivory text */
  --color-muted: #e5c97d;     /* Soft pale gold */
  --font-header: 'Cinzel', serif;
  --font-body: 'Roboto', sans-serif;
}

body {
  background-color: var(--color-dark);
  color: var(--color-light);
  font-family: var(--font-body);
}

h1, h2, h3, h4 {
  color: var(--color-gold);
  font-family: var(--font-header);
}

.btn-primary {
  background-color: var(--color-gold);
  color: var(--color-dark);
  border: 1px solid var(--color-gold);
}

.btn-primary:hover {
  background-color: #e5c100;
}
`;

// README.md template
const readmeTemplate = `# DigiPort / DragonEye Design System Repository

This repository is the **core design and asset library** for all DigiPort and DragonEye projects.

## Structure
- \`css/\` — global themes and shared component styles
- \`js/\` — shared scripts and utilities
- \`images/\` — brand imagery, backgrounds, icons
- \`audio/\` — music, jingles, soundscapes
- \`video/\` — intros, loops, brand motion
- \`fonts/\` — local or licensed typefaces

## Usage
Link this repo’s assets directly in any project:
\`\`\`html
<link rel="stylesheet" href="https://YOUR_GITHUB_USERNAME.github.io/r06-design-system-repository/css/digiporttheme.css">
\`\`\`

## Purpose
To unify every DigiPort / DragonEye platform under one consistent,
cinematic design language — the **Molten Ember Theme**.
`;

// Create folders
folders.forEach(folder => {
  const dir = path.join(root, folder);
  fs.mkdirSync(dir, { recursive: true });
});

// Create files
fs.writeFileSync(path.join(root, "css", "digiporttheme.css"), cssTemplate);
fs.writeFileSync(path.join(root, "README.md"), readmeTemplate);

// Optional placeholder files for version control
fs.writeFileSync(path.join(root, "js", "global-scripts.js"), "// Shared JS logic placeholder\n");
fs.writeFileSync(path.join(root, "audio", ".gitkeep"), "");
fs.writeFileSync(path.join(root, "video", ".gitkeep"), "");
fs.writeFileSync(path.join(root, "fonts", ".gitkeep"), "");

console.log(`✅ Successfully created ${root}/ structure and starter files.`);
