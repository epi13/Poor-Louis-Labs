# Poor Louis Labs

**Welcome to the digital skunkworks of Poor Louis Labs — an Alaskan R&D outpost exploring tractable computing, reversible systems, digital senses, and the craft of making better tools.**

This site serves as a lightweight publishing platform for ideas and prototypes coming out of the lab. All assets, writings, and visuals are self-hosted, branchless-friendly, and built for clarity over complexity.

---

## 🧭 Live Site

Visit: https://epi13.github.io/Poor-Louis-Labs/

---

## 🔍 Sections

### `About`
Get to know what drives the lab. We build in the open — and weirdly.

### `Writings`
Essays and micro-posts on:
- Latent vector tractability
- Branchless programming techniques
- Reversible computation (RCR-style)
- Tooling for better debugging, modeling, and control

Markdown posts are served via JSON and rendered in-browser.  
➡ Add new posts to `writings/index.json` and the corresponding `.md` file.

### `Projects`
We log selected builds including:
- MAoD Compiler Pipeline (Zig AIR → reversible IR)
- Digital Senses (real-time CPU jitter samplers)
- Procedural Voxel Engines for Alaska-themed simulations

### `Lab Notes`
Daily/weekly observations, experiments, and raw insights.  
Rendered directly from `labnotes.json`.

---

## 🛠️ Local Dev

You can preview the site locally by launching a static server:

```bash
python -m http.server
# or
npx serve .
```

Then open `http://localhost:8000` in your browser.

---

## ✍️ Writing Posts

Create a new post by:

1. Adding an entry in `writings/index.json`:

```json
{
  "slug": "tractability-intro",
  "title": "Tractability, Latents, and Why Masks Help",
  "date": "2025-09-23"
}
```

2. Creating the corresponding file:

```
writings/tractability-intro.md
```

Markdown supports:
- Headings
- Inline code & fenced blocks
- Links
- Emphasis/bold
- Lists
- Paragraphs

Rendered client-side using a minimal parser in `feeds.js`.

---

## 📋 Updating Lab Notes

Simply update `labnotes.json`:

```json
[
  {
    "date": "2025-09-23",
    "text": "RASM pass reduced spill count by 12% via mask-threaded rewrite."
  },
  {
    "date": "2025-09-20",
    "text": "Sampler now multiplexes 16 channels at 2kHz from intrinsic system noise."
  }
]
```

---

## 🎨 Design

- Minimalist, near-black gradient background
- Frosted-glass style CSS cards for each section
- SVG Big Dipper logo with soft glow
- No heavy frameworks — just HTML, CSS, JS

---

## 🧠 Philosophy

We believe tools should be inspectable, reversible, and explainable.  
This site is a small manifestation of that belief — in both presentation and code.

---

## 🔗 License

MIT — free to fork, remix, and use for your own digital lab.

---

> Built in Alaska. Designed for curiosity.
