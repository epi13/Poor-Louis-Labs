export type Project = {
  slug: string;
  name: string;
  repository: string;
  summary: string;
  description: string;
  category: string;
  projectType: string;
  maturity: string;
  status: string;
  featured?: boolean;
  flagship?: boolean;
  languages?: string[];
  relationships?: string[];
  limitations?: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'machine-native-complexity-standard',
    name: 'Machine-Native Complexity Standard',
    repository: 'https://github.com/epi13/machine-native-complexity-standard',
    summary: 'An experimental, tool-neutral standard for accepting generated implementations whose internal complexity may exceed ordinary human-maintainability limits.',
    description: 'MNCS relocates readable human control into contracts, reference behavior, evidence, provenance, limits, trust policy, regeneration, rollback, and governance. Its companion MNCDS specification addresses the development process used to generate, evaluate, select, release, replace, and retire machine-native implementations.',
    category: 'Machine-native assurance',
    projectType: 'Open standard and validator',
    maturity: 'Experimental standard',
    status: 'Active development',
    featured: true,
    flagship: true,
    languages: ['Python', 'JSON Schema', 'Markdown'],
    relationships: ['mncs-validator-rs', 'joern-agent-bridge', 'graphflow-agent-bench'],
    limitations: ['Not accredited by ISO, ANSI, IEEE, IETF, or an equivalent body.', 'A PASS is scoped to the declared contract, environment, evidence, policy, identities, and process record.'],
    links: [
      { label: 'Repository', href: 'https://github.com/epi13/machine-native-complexity-standard' },
      { label: 'MNCS specification', href: 'https://github.com/epi13/machine-native-complexity-standard/blob/main/spec/MNCS-v0.2.md' },
      { label: 'MNCDS draft', href: 'https://github.com/epi13/machine-native-complexity-standard/blob/main/spec/MNCDS-v0.1-draft.md' }
    ]
  },
  {
    slug: 'mncs-validator-rs', name: 'MNCS Validator for Rust', repository: 'https://github.com/epi13/mncs-validator-rs',
    summary: 'An independent, offline Rust implementation of the interoperable MNCS 0.2 validation subset.',
    description: 'The validator independently checks canonical identities, manifests, bundles, attestations, trust policy, reproducible packages, and cross-implementation corpus agreement without wrapping the Python implementation or executing evidence binaries.',
    category: 'Machine-native assurance', projectType: 'Validator', maturity: 'Experimental', status: 'Active development', featured: true,
    languages: ['Rust'], relationships: ['machine-native-complexity-standard'],
    limitations: ['It intentionally does not implement every Python reporting convenience.', 'A valid signature does not prove correctness, safety, performance, or honesty.']
  },
  {
    slug: 'joern-agent-bridge', name: 'Joern Agent Bridge', repository: 'https://github.com/epi13/joern-agent-bridge',
    summary: 'Bounded, machine-readable Code Property Graph access for Codex and other MCP clients.',
    description: 'The bridge gives coding agents focused access to control-flow, dominance, reachability, call-graph, and data-flow evidence through a typed local service, deterministic snapshots, and fail-closed validation hooks.',
    category: 'Agent infrastructure', projectType: 'MCP and CLI tooling', maturity: 'Prototype', status: 'Active development', featured: true,
    languages: ['Python', 'Scala'], relationships: ['graphflow-agent-bench', 'machine-native-complexity-standard'],
    limitations: ['Static analysis can produce false positives and false negatives.', 'Joern is an optional analysis provider and not a normative MNCS dependency.']
  },
  {
    slug: 'graphflow-agent-bench', name: 'GraphFlow Agent Bench', repository: 'https://github.com/epi13/graphflow-agent-bench',
    summary: 'A reproducible paired benchmark for graph-grounded control-flow refactoring workflows.',
    description: 'GraphFlow compares a source-and-test control workflow against a workflow using deterministic Joern graph analysis, bounded evidence, snapshots, and enforcement hooks. It also contains a separate exploratory machine-native complexity lane.',
    category: 'Agent infrastructure', projectType: 'Benchmark', maturity: 'Exploratory research', status: 'Active development', featured: true,
    languages: ['Python', 'C'], relationships: ['joern-agent-bridge', 'machine-native-complexity-standard'],
    limitations: ['Initial results are exploratory and do not establish statistical significance.', 'The intervention combines Joern access with surrounding workflow controls rather than isolating one factor.']
  },
  {
    slug: 'dsense', name: 'dSense', repository: 'https://github.com/epi13/dSense',
    summary: 'Machine-proprioception experiments built from the timing and operating behavior of a host computer.',
    description: 'dSense records intrinsic timing, scheduler, latency, drift, and process signals as cautious local sensory channels for baseline learning, controlled scenes, anomaly analysis, and substrate-aware software experiments.',
    category: 'Substrate-aware computing', projectType: 'Research prototype', maturity: 'Experimental', status: 'Active development', featured: true,
    languages: ['Python'], limitations: ['It does not prove biological presence or awareness.', 'Current sensing claims require repeated controlled validation.']
  },
  {
    slug: 'dvf', name: 'DvF', repository: 'https://github.com/epi13/DvF',
    summary: 'An assumption-indexed research program examining whether physical law selects unique outcomes or constrains ranges of admissible outcomes.',
    description: 'DvF brings philosophical analysis, formal models, literature review, proposed experiments, software, and reproducibility records into one open research workspace.',
    category: 'Open research', projectType: 'Research program', maturity: 'Formative research', status: 'Active development',
    languages: ['Python', 'Markdown'], limitations: ['The repository does not contain completed physical experiments establishing metaphysical indeterminism.']
  },
  {
    slug: 'estimatorlab', name: 'EstimatorLab', repository: 'https://github.com/epi13/EstimatorLab',
    summary: 'Transparent browser-based estimating tools for construction and engineering workflows.',
    description: 'EstimatorLab develops modular calculators for takeoffs, labor and material modeling, field calculations, and exportable estimate data, with an emphasis on understandable assumptions and offline use.',
    category: 'Practical tools', projectType: 'Construction software', maturity: 'Prototype', status: 'Active development', featured: true,
    languages: ['HTML', 'JavaScript', 'CSS']
  },
  {
    slug: 'dtree', name: 'dTree', repository: 'https://github.com/epi13/dTree',
    summary: 'A zero-dependency Python directory tree and file-list exporter.',
    description: 'dTree produces human-readable Markdown trees and structured JSON inventories for documentation, repository review, and machine-assisted analysis.',
    category: 'Practical tools', projectType: 'CLI utility', maturity: 'Usable utility', status: 'Maintained', languages: ['Python']
  },
  {
    slug: 'loopline', name: 'LoopLine', repository: 'https://github.com/epi13/LoopLine',
    summary: 'An experimental computing project in the Poor Louis Labs public repository collection.',
    description: 'LoopLine is retained in the complete public inventory while its public documentation and project framing continue to mature.',
    category: 'Experimental computing', projectType: 'Prototype', maturity: 'Experimental', status: 'Public repository', languages: []
  },
  {
    slug: 'rgbmatrix-painter', name: 'RGB Matrix Painter', repository: 'https://github.com/epi13/rgbmatrix_painter',
    summary: 'Creative tooling for composing and displaying work on RGB matrix hardware.',
    description: 'A public creative-computing project connecting software tooling with physical LED-matrix output.',
    category: 'Creative computing', projectType: 'Creative tool', maturity: 'Prototype', status: 'Public repository', languages: []
  },
  {
    slug: 'shinywheel', name: 'ShinyWheel', repository: 'https://github.com/epi13/ShinyWheel',
    summary: 'A public Poor Louis Labs creative-computing project.',
    description: 'ShinyWheel is cataloged conservatively pending fuller public technical documentation.',
    category: 'Creative computing', projectType: 'Prototype', maturity: 'Experimental', status: 'Public repository', languages: []
  },
  {
    slug: 'isocastle', name: 'IsoCastle', repository: 'https://github.com/epi13/IsoCastle',
    summary: 'An isometric game and procedural world-building project.',
    description: 'IsoCastle represents the game-development and visual-systems side of the Labs portfolio.',
    category: 'Games and simulations', projectType: 'Game project', maturity: 'Prototype', status: 'Public repository', languages: []
  },
  {
    slug: 'alaska-duck-hunt', name: 'Alaska Duck Hunt', repository: 'https://github.com/epi13/Alaska-Duck-Hunt',
    summary: 'An Alaska-themed game project in the Poor Louis Labs portfolio.',
    description: 'The project is presented as creative software rather than as research or production infrastructure.',
    category: 'Games and simulations', projectType: 'Game project', maturity: 'Prototype', status: 'Public repository', languages: []
  },
  {
    slug: 'poor-louis-farms', name: 'Poor Louis Farms Digital System', repository: 'https://github.com/epi13/PoorLouisFarms',
    summary: 'The editorial and technical companion to the Poor Louis Farms storefront.',
    description: 'This static system helps visitors explore the farm, products, Alaskan botanicals, processes, seasons, and journal while the Square storefront remains authoritative for pricing, availability, options, and checkout.',
    category: 'Farm digital systems', projectType: 'Static editorial site', maturity: 'Active development', status: 'Maintained', featured: true,
    languages: ['Astro', 'TypeScript'],
    links: [
      { label: 'Repository', href: 'https://github.com/epi13/PoorLouisFarms' },
      { label: 'Square storefront', href: 'https://poor-louis-farms.square.site/' }
    ]
  },
  {
    slug: 'poor-louis-labs', name: 'Poor Louis Labs Website', repository: 'https://github.com/epi13/Poor-Louis-Labs',
    summary: 'The public index and editorial layer for the Poor Louis Labs project network.',
    description: 'This site provides a human-reviewed map of projects, relationships, maturity, limitations, and entry points without making visitor-side GitHub API requests.',
    category: 'Lab infrastructure', projectType: 'Static website', maturity: 'Maintained', status: 'Active development', languages: ['Astro', 'TypeScript']
  }
];

export const categories = [...new Set(projects.map((project) => project.category))];
export const projectBySlug = new Map(projects.map((project) => [project.slug, project]));
