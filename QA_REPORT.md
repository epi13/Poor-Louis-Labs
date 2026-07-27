# QA report

Implementation date: 2026-07-26.

## Source review

- Replaced the modal architecture with static addressable Astro routes.
- Checked all internal route construction against `import.meta.env.BASE_URL`.
- Added semantic landmarks, skip navigation, visible native focus, real links, textual diagram equivalents, responsive layouts, and reduced-motion handling.
- Removed visitor-side network dependencies and third-party analytics.

## Automated validation status

The repository is configured so GitHub Actions runs `npm install` and `npm run build` on `main` and pull requests. The final workflow result must be treated as the authoritative build status after this commit runs. This report does not claim a successful CI result before GitHub Actions records it.

## Known limitations

- Automated accessibility and Lighthouse suites are not included in this compact first production commit; periodic browser and assistive-technology review remains appropriate.
- Several creative repositories have sparse public descriptions and are intentionally represented conservatively.
- Public GitHub metadata is curated in source rather than refreshed automatically at visitor runtime.
