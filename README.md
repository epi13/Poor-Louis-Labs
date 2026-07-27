# Poor Louis Labs

The public website and editorial project index for Poor Louis Labs, an independent Alaskan research and engineering practice.

## Live site

- Custom domain: `https://www.poorlouislabs.com/`
- GitHub repository: `https://github.com/epi13/Poor-Louis-Labs`

The custom domain is authoritative. Do not configure the production build for the `/Poor-Louis-Labs/` repository subpath while `CNAME` is active.

## Architecture

- Astro 7 and TypeScript
- Static prerendering
- Custom-domain GitHub Pages deployment at `/`
- Human-reviewed project records in `src/data/projects.ts`
- Minimal progressive enhancement for project filtering
- No visitor-side GitHub API requests
- Root-level static fallback for legacy `main`/root Pages configuration

## Local development

```bash
npm install
npm run dev
npm run build
```

The default production base path is `/` and the canonical site is `https://www.poorlouislabs.com`. Override `SITE_BASE` or `SITE_URL` only for a deliberate alternate deployment.

## Adding or updating a project

Edit `src/data/projects.ts`. Every project record must use only publicly available information, state maturity conservatively, and include material limitations where they affect interpretation. Related project slugs must match another public record.

## Deployment

`.github/workflows/pages.yml` checks pull requests and deploys `main` through GitHub Pages. The workflow intentionally does not enable npm caching because the repository does not currently commit a lockfile.

For Actions deployment, repository settings must use **Pages → Source → GitHub Actions**. The committed root `index.html`, `CNAME`, and `.nojekyll` also provide a working fallback if Pages is still configured for **Deploy from a branch → main / root**.

The following files must remain aligned:

- `CNAME`
- `public/CNAME`
- `astro.config.mjs`
- `.github/workflows/pages.yml`

## Publication boundary

Do not publish private repository names, metadata, branches, issues, local paths, or unpublished experiments. Generated or AI-assisted copy must be checked against public source material before release.
