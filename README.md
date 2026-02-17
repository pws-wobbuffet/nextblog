NextBlog – Next.js blog scaffold

Overview
- A minimal Next.js project scaffolded to publish as a static site on GitHub Pages via the docs export.

Project structure (recommended):
- docs/           -> output of npm run export; serves as GitHub Pages source
- package.json    -> dev/build scripts
- next.config.js  -> Next.js config for static export
- pages/          -> source pages (for local dev), will export to docs
- public/         -> static assets
- styles/         -> CSS assets
- README.md       -> this file (explanation and how-to)

Getting started
1) Install
   npm install

2) Build a static site for Pages
   npm run export
   This will generate the static site into docs/ ready for GitHub Pages publishing.

3) Run locally (optional)
   npm run dev
   or build+start: npm run build && npm run start

4) Deploy to GitHub Pages
   - Ensure Pages source is main/docs
   - Push the generated docs folder contents to GitHub (usually via git push or via Actions deployment workflow)

NextBlog basics
- This is a minimal scaffold; you can add content under pages/ and rebuild/export to update docs/
- To customize, edit pages/index.js, components, styles, etc.

Notes
- GitHub Pages deployment strategy uses docs/ as a static site; ensure Actions workflow exports to docs on main pushes.
- If you intend to keep Next.js dynamic features, consider hosting on a Node.js environment; Pages is a static-export alternative.

License: MIT
