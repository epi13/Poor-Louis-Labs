# Agent instructions

## Authority order

1. Current normative or technical repository documentation.
2. Current README and source code.
3. Public GitHub metadata.
4. Existing Poor Louis Labs copy.
5. Conservative editorial inference identified as such.

## Privacy boundary

Publish only intentionally public repository information. Never expose private repository names, descriptions, branches, issues, commits, local paths, tokens, machine configuration, or unpublished experiments.

## Deployment boundary

- The authoritative site is `https://www.poorlouislabs.com/`.
- Production uses the root base path `/`, not `/Poor-Louis-Labs/`, while the custom domain is active.
- Keep `CNAME`, `public/CNAME`, `astro.config.mjs`, and `.github/workflows/pages.yml` aligned.
- Preserve the root `index.html` and `.nojekyll` as a branch-Pages fallback unless repository settings are verified to use GitHub Actions and an equivalent recovery path is retained.
- Do not enable `actions/setup-node` npm caching without first committing a valid npm lockfile.

## MNCS claim controls

- MNCS and MNCDS are experimental and non-accredited.
- MNCS evaluates implementation evidence; MNCDS evaluates development-process control. Neither implies the other.
- Joern is optional and non-normative.
- GraphFlow results are exploratory and are not statistical proof.
- A signature proves only that a key signed bytes.
- A validator result is scoped to its declared contract, environment, evidence, policy, identities, and record.

## Required checks

Run `npm install`, `npm run check`, and `npm run build`. Verify navigation at the custom-domain root path `/`. Do not invent adoption, performance, maturity, scientific support, collaborators, or release status.
