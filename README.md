# Image Search Gallery (Vite)

A simple image search gallery built with Vanilla JavaScript and Vite. Users can search for images via the Pixabay API; results are rendered as a responsive gallery with a lightbox and notifications.

This project is based on a GoIT vanilla app template and has been adapted for this specific homework task.

## Stack and Tooling
- Language: JavaScript (ES Modules)
- Build tool/dev server: Vite
- CSS tooling: PostCSS with postcss-sort-media-queries (mobile-first)
- UI libraries: SimpleLightbox, iziToast
- Package manager: npm

Entry points:
- Vite root: `src/`
- HTML inputs: all `*.html` in `src/` (configured via `glob` in `vite.config.js`)
- Main page: `src/index.html` which loads `src/main.js`

## Requirements
- Node.js LTS (recommended). Download from https://nodejs.org/
- npm (comes with Node.js)

## Getting Started
1. Install dependencies:
   - npm install
2. Start the dev server:
   - npm run dev
3. Open the app in your browser:
   - http://localhost:5173

## Scripts
Defined in package.json:
- npm run dev — Start Vite dev server
- npm run build — Production build (currently configured with a base path: `/.../`)
- npm run preview — Preview the production builds locally

## Environment Variables
Currently, the Pixabay API key is hardcoded in `src/js/pixabay-api.js`.
- File: `src/js/pixabay-api.js`
- Key param: `key: '51289001-701d2fcdb5357aeffdf8b918c'`

TODO:
- Externalize the API key to an environment variable. With Vite, use variables prefixed with `VITE_` (e.g., `VITE_PIXABAY_KEY`) and access via `import.meta.env.VITE_PIXABAY_KEY`.
- Provide `.env.example` documenting required variables.

## Testing
- No automated tests are present in this repository at the moment.

TODO:
- Add unit tests for API helpers and rendering helpers.
- Add a simple E2E test (e.g., Playwright) for the search flow.

## Project Structure
High-level structure relevant to this project:
- README.md — This file
- package.json — Scripts, dependencies, license
- vite.config.js — Vite configuration (root is `src`, HTML inputs via glob, custom chunk/file names)
- src/
  - index.html — Main HTML page
  - main.js — App entry; wires up from submitting, loader, gallery, lightbox, and notifications
  - css/styles.css — App styles
  - js/
    - pixabay-api.js — Fetches data from Pixabay API
    - getImage-api.js — Generates gallery markup from API data
  - img/ — App images (if any)
  - public/ — Static assets served as-is (if used)
- assets/ — Images used by documentation (README) such as screenshots
- vite-project/ — Example Vite scaffold (not used by the current build; Vite root is `src/`)

## Usage
- Enter a search term in the input field and submit.
- The app fetches matching images from Pixabay and displays them in a gallery.
- Click an image to open it in a lightbox. Notifications are shown for errors or empty results.

## Deployment (GitHub Pages)
The production build is configured with a base path suitable for GitHub Pages deployments of this repository:
- Current base: `/goit-js-hw-11/` (set in package.json build script)

To deploy via GitHub Pages:
1. Ensure your build script in `package.json` uses the correct base for your repo name. Example:
   - "build": "vite build --base=/goit-js-hw-11/"
2. Push to the `main` branch. A GitHub Action (if configured) can build and publish to the `gh-pages` branch.
3. In the repository settings, set Pages to deploy from the `gh-pages` branch, `/root` folder (if not automatic).

Helpful screenshots from the original template are kept below:
- ![Creating repo from a template step 1](./assets/template-step-1.png)
- ![Creating repo from a template step 2](./assets/template-step-2.png)
- ![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)
- ![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)
- ![GitHub Pages settings](./assets/repo-settings.png)
- ![Deployment status](./assets/deploy-status.png)

Live page:
- TODO: Add the GitHub Pages URL once published (pattern: https://<username>.github.io/goit-js-hw-11/)

If you see a blank page after deployment, open the browser devtools Console and check for 404 errors on CSS/JS assets. Most often this indicates an incorrect `--base` value during build.

## How it works (CI/CD overview)
![How it works](./assets/how-it-works.png)

1. On each push to `main`, a GitHub Actions workflow (if present at `.github/workflows/deploy.yml`) runs.
2. The project is built and checked.
3. If successful, the production-ready files are published to the `gh-pages` branch. Otherwise, check the workflow logs for details.

## License
ISC — see package.json. Copyright belongs to the original template author(s) and/or this repository’s contributor(s).
