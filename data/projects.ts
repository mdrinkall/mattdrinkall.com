import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ingenuity-lab',
    title: 'Ingenuity Lab',
    shortDescription: 'No-code UI editor enabling non-technical teams to ship production-grade UI changes safely.',
    impactMetric: '750+ production styling bundles shipped autonomously',
    heroImage: 'https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/IMG_3205.jpg',
    subtitle: 'Eliminating engineering bottlenecks by turning UI changes into safe, automated production releases.',
    credibilityBullets: [
      'Demoed to 2,000+ employees',
      'Showcased by CTO at All-Hands',
      'Generated 4,000+ lines of production code'
    ],
    problem: {
      text: 'Marketing and UX teams needed to make frequent styling changes across live e-commerce sites. Even trivial updates (copy, spacing, colours) required engineering intervention, introducing 1–2 week lead times, deployment risk, and significant opportunity cost for developers.'
    },
    constraints: [
      'Non-technical end users (Marketing & Design)',
      'Must generate production-grade, reviewable React code',
      'Zero-downtime injection into live multi-tenant sites',
      'Strict design-system and brand-compliance guardrails'
    ],
    solution: {
      images: [
        {
          src: 'https://picsum.photos/800/500?random=1',
          alt: 'Drag-and-drop UI editor',
          caption: 'A visual editor allowing non-technical users to directly manipulate UI components mapped to design-system tokens.'
        },
        {
          src: 'https://picsum.photos/800/500?random=2',
          alt: 'Live preview and approval workflow',
          caption: 'Real-time preview with automated validation and approval gates before production release.'
        }
      ],
      text: 'I designed and built a no-code UI editor that converts visual interactions into deterministic, production-ready React code. Changes are validated against brand and safety rules, previewed in real time, and deployed automatically without engineering involvement.'
    },
    impactStats: [
      { label: 'Adoption', value: '100%', description: 'Adoption across Marketing & UX teams' },
      { label: 'Speed', value: 'Weeks → Minutes', description: 'Time to ship UI changes' },
      { label: 'Scale', value: '750+', description: 'Live bundles shipped to production' },
      { label: 'Efficiency', value: '4,000+', description: 'Lines of correct code generated automatically' }
    ],
    architectureDiagram: 'https://picsum.photos/800/400?random=3',
    techStack: ['Astro', 'React', 'TypeScript', 'Cloudflare Workers', 'CI/CD', 'Design Systems']
  },
  {
    id: 'ecommerce-platform',
    title: 'Multi-Tenant E-commerce Platform',
    shortDescription: 'Modern headless platform supporting 100+ high-traffic brand sites.',
    impactMetric: '£100M+ processed during Black Friday peak',
    heroImage: 'https://picsum.photos/1200/600?grayscale&blur=2',
    subtitle: 'Re-architecting a fragile monolith into a scalable, high-performance commerce platform.',
    credibilityBullets: [
      'Unified 100+ distinct web properties',
      'Zero downtime migration',
      'Reduced build times by 92%'
    ],
    problem: {
      text: 'A legacy monolithic PHP platform was struggling under scale. Deployments took 40+ seconds, page payloads exceeded 5MB, and traffic spikes posed serious outage risk—especially approaching Black Friday.'
    },
    constraints: [
      'Single codebase serving 100+ tenants',
      'SEO preservation during migration',
      'Immovable Black Friday deadline',
      'Legacy payments and integrations required'
    ],
    solution: {
      images: [
        {
          src: 'https://picsum.photos/800/500?random=4',
          alt: 'Core Web Vitals dashboard',
          caption: 'Grafana dashboards monitoring performance and stability across all tenants.'
        },
        {
          src: 'https://picsum.photos/800/500?random=5',
          alt: 'CI/CD pipeline',
          caption: 'Incremental CI/CD pipelines reducing build and deploy times by over 90%.'
        }
      ],
      text: 'I helped design and implement a multi-tenant Next.js/Astro architecture with aggressive performance optimisation, feature-flagged tenant customisation, and highly optimised CI/CD workflows.'
    },
    impactStats: [
      { label: 'Revenue', value: '£100M+', description: 'Processed over Black Friday' },
      { label: 'Payload', value: '5MB → 1.5MB', description: 'Average page weight reduction' },
      { label: 'Build Time', value: '40s → 3s', description: 'Incremental builds' },
      { label: 'Reliability', value: '99.99%', description: 'Uptime during peak traffic' }
    ],
    architectureDiagram: 'https://picsum.photos/800/400?random=6',
    techStack: ['Astro', 'React', 'TypeScript', 'Cloudflare Workers', 'Grafana', 'CI/CD']
  },
  {
    id: 'little-guy',
    title: 'Little Guy',
    shortDescription: 'LLM-powered automation agent embedded directly in Microsoft Teams.',
    impactMetric: 'End-to-end ownership: architecture, security, deployment',
    heroImage: 'https://picsum.photos/1200/600?grayscale&blur=2',
    subtitle: 'Reducing cognitive load by bringing AI assistance into everyday engineering workflows.',
    credibilityBullets: [
      'Automates daily standup aggregation',
      'Vector-search over internal wiki',
      'Used by 5 engineering squads'
    ],
    problem: {
      text: 'Engineers lost time searching documentation and answering repetitive questions across Teams. Knowledge lived in silos, and onboarding new team members was inefficient.'
    },
    constraints: [
      'Strict data-privacy requirements',
      'OAuth-based identity and permissions',
      'Low-latency responses (<2s)',
      'Cost-efficient LLM usage'
    ],
    solution: {
      images: [
        {
          src: 'https://picsum.photos/800/500?random=7',
          alt: 'Teams bot conversation',
          caption: 'Natural language queries answered directly inside Microsoft Teams.'
        },
        {
          src: 'https://picsum.photos/800/500?random=8',
          alt: 'RAG pipeline',
          caption: 'Retrieval-Augmented Generation pipeline with embeddings and contextual grounding.'
        }
      ],
      text: 'I built an AI agent using RAG techniques to surface internal knowledge contextually inside Teams, reducing interruption and improving response quality while maintaining strict data controls.'
    },
    impactStats: [
      { label: 'Usage', value: '500+', description: 'Daily questions answered' },
      { label: 'Time Saved', value: '~10h', description: 'Per week per squad' },
      { label: 'Accuracy', value: '94%', description: 'Verified responses' },
      { label: 'Cost', value: '<$50', description: 'Monthly runtime cost' }
    ],
    techStack: ['Python', 'n8n', 'Vector Databases', 'LLMs', 'GKE', 'OAuth']
  }
];
