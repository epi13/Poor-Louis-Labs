# QA report

Implementation date: 2026-07-26.
Incident correction: 2026-07-26.

## Source review

- Replaced the modal architecture with static addressable Astro routes.
- Checked internal route construction against `import.meta.env.BASE_URL`.
- Added semantic landmarks, skip navigation, visible native focus, real links, textual diagram equivalents, responsive layouts, and reduced-motion handling.
- Removed visitor-side network dependencies and third-party analytics.

## Deployment incident and correction

The initial reconstruction did not preserve the repository's existing custom-domain deployment boundary.

Root causes corrected:

- Restored the previous `www.poorlouislabs.com` domain in both `CNAME` and `public/CNAME`.
- Changed the production Astro `site` to `https://www.poorlouislabs.com` and the production base path from `/Poor-Louis-Labs/` to `/`.
- Removed npm caching from `actions/setup-node`; no lockfile is committed, so cache discovery could fail before installation.
- Updated the workflow to current GitHub-owned Pages actions.
- Added root and artifact `.nojekyll` markers.
- Added a complete root-level static site so branch-based `main`/root Pages remains functional.
- Added an Actions fallback that publishes the committed static site if Astro installation or compilation fails.

## Automated validation status

The repository is configured so GitHub Actions attempts the Astro build on `main` and pull requests. A production push always produces a non-empty `dist/index.html`: either the Astro output or the committed static fallback.

The connected GitHub interface used for this correction does not expose push-triggered workflow logs or the repository's Pages settings, so this report does not claim that DNS, HTTPS certificate issuance, or the latest remote deployment has been observed from the public internet.

## Known limitations

- Repository Pages settings must use either GitHub Actions or `main`/root; both publication layouts are now represented in the repository.
- Automated accessibility and Lighthouse suites are not included in this compact production correction; periodic browser and assistive-technology review remains appropriate.
- Several creative repositories have sparse public descriptions and are intentionally represented conservatively.
- Public GitHub metadata is curated in source rather than refreshed automatically at visitor runtime.
