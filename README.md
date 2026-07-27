# Poor Louis Labs

The public website and editorial project index for Poor Louis Labs, an independent Alaskan research and engineering practice.

## Architecture

- Astro 7 and TypeScript
- Static prerendering
- Repository-subpath-safe GitHub Pages deployment
- Human-reviewed project records in `src/data/projects.ts`
- Minimal progressive enhancement for project filtering
- No visitor-side GitHub API requests

## Local development

```bash
npm install
npm run dev
npm run build
```

The default production base path is `/Poor-Louis-Labs/`. Set `SITE_BASE=/` when building for a confirmed custom domain.

## Adding or updating a project

Edit `src/data/projects.ts`. Every project record must use only publicly available information, state maturity conservatively, and include material limitations where they affect interpretation. Related project slugs must match another public record.

## Deployment

`.github/workflows/pages.yml` checks pull requests and deploys `main` through GitHub Pages. In repository settings, select **Pages → Source → GitHub Actions**.

## Publication boundary

Do not publish private repository names, metadata, branches, issues, local paths, or unpublished experiments. Generated or AI-assisted copy must be checked against public source material before release.
