# Tractability, Latents, and Why Masks Help

Latent spaces drift because we treat them like **opaque** intermediates. This note argues for mask-based constraints and branchless transforms.

- Treat latents as first‑class signals
- Constrain with arithmetic masks, not branches
- Prefer reversible steps for auditability

```zig
// pseudocode-ish mask select
out = (mask * a) + ((1 - mask) * b);
