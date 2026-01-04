import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ingenuity-lab',
    title: 'Ingenuity Lab',
    shortDescription: 'Internal no-code UI editor for non-technical teams.',
    impactMetric: '750+ production styling bundles shipped',
    heroImage: 'https://picsum.photos/1200/600?grayscale&blur=2',
    subtitle: 'Empowering marketing teams to ship UI changes without engineering bottlenecks.',
    credibilityBullets: [
      'Demoed to 2,000+ employees',
      'Showcased by CTO at All-Hands',
      'Generated 4,000+ lines of production code'
    ],
    problem: {
      text: 'Marketing teams needed to make frequent styling changes to landing pages but were blocked by the engineering deployment cycle. This resulted in a 2-week lead time for simple color or text updates, frustrating stakeholders and wasting valuable engineering hours on pixel-pushing.'
    },
    constraints: [
      'Non-technical user base (Marketing/Design)',
      'Must produce production-grade React code',
      'Zero downtime allowed during bundle injection',
      'Strict brand compliance guardrails'
    ],
    solution: {
      images: [
        {
          src: 'https://picsum.photos/800/500?random=1',
          alt: 'Drag-and-drop UI Editor Interface',
          caption: 'The visual editor allows direct manipulation of component properties, mapping to our design system tokens.'
        },
        {
          src: 'https://picsum.photos/800/500?random=2',
          alt: 'Live Preview and Approval Flow',
          caption: 'Real-time preview with an integrated approval workflow ensures no breaking changes reach production.'
        }
      ]
    },
    impactStats: [
      { label: 'Adoption', value: '100%', description: 'Marketing team adoption' },
      { label: 'Speed', value: '2 Weeks → 5 Mins', description: 'Time to ship style changes' },
      { label: 'Volume', value: '750+', description: 'Bundles deployed to prod' },
      { label: 'Code', value: '4k+', description: 'Lines of code generated' }
    ],
    architectureDiagram: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    shortDescription: 'Migrating 100+ sites to a unified Next.js architecture.',
    impactMetric: '£100M+ revenue processed over Black Friday',
    heroImage: 'https://picsum.photos/1200/600?grayscale&blur=2',
    subtitle: 'A high-performance, multi-tenant headless commerce solution.',
    credibilityBullets: [
      'Unified 100+ distinct web properties',
      'Zero downtime migration',
      'Reduced build times by 92%'
    ],
    problem: {
      text: 'The legacy monolith was crumbling under traffic spikes. With 100+ distinct brand sites running on a single fragile PHP codebase, deployment was risky (40+ mins) and performance was poor (LCP > 4s). We needed a modern, scalable architecture.'
    },
    constraints: [
      'Multi-tenancy: Single codebase, 100+ configs',
      'SEO retention is critical',
      'Hard deadline: Black Friday',
      'Must support legacy payment gateways'
    ],
    solution: {
      images: [
        {
          src: 'https://picsum.photos/800/500?random=4',
          alt: 'Performance Dashboard',
          caption: 'Custom Grafana dashboard tracking Core Web Vitals across all tenants in real-time.'
        },
        {
          src: 'https://picsum.photos/800/500?random=5',
          alt: 'CI/CD Pipeline',
          caption: 'Optimized build pipeline using Nx to only rebuild affected tenants.'
        }
      ]
    },
    impactStats: [
      { label: 'Revenue', value: '£100M+', description: 'Processed seamlessly' },
      { label: 'Performance', value: '1.5MB', description: 'Reduced from 5MB' },
      { label: 'Build Time', value: '40s → 3s', description: 'Incremental builds' },
      { label: 'Uptime', value: '99.99%', description: 'During peak traffic' }
    ],
    architectureDiagram: 'https://picsum.photos/800/400?random=6'
  },
  {
    id: 'little-guy',
    title: 'Little Guy',
    shortDescription: 'AI automation agent integrated with Microsoft Teams.',
    impactMetric: 'Sole owner: Design to Deployment',
    heroImage: 'https://picsum.photos/1200/600?grayscale&blur=2',
    subtitle: 'Bringing LLM-powered workflows to internal communication channels.',
    credibilityBullets: [
      'Automates daily standup aggregation',
      'Vector-search over internal wiki',
      'Used by 5 engineering squads'
    ],
    problem: {
      text: 'Information silos were slowing down cross-team collaboration. Engineers spent too much time searching for documentation or answering repetitive questions in Slack/Teams. We needed an intelligent interface to our internal knowledge base.'
    },
    constraints: [
      'Data privacy: No PII sent to public models',
      'Must integrate with existing OAuth flow',
      'Low latency responses required (<2s)',
      'Cost efficiency constraint'
    ],
    solution: {
      images: [
        {
          src: 'https://picsum.photos/800/500?random=7',
          alt: 'Teams Bot Conversation',
          caption: 'Natural language interface allowing engineers to query documentation directly within chat.'
        },
        {
          src: 'https://picsum.photos/800/500?random=8',
          alt: 'RAG Workflow Diagram',
          caption: 'Retrieval Augmented Generation pipeline overview showing embedding and retrieval steps.'
        }
      ]
    },
    impactStats: [
      { label: 'Queries', value: '500+', description: 'Daily questions answered' },
      { label: 'Time Saved', value: '~10h', description: 'Per week per squad' },
      { label: 'Accuracy', value: '94%', description: 'Verified answer rate' },
      { label: 'Cost', value: '<$50', description: 'Monthly run cost' }
    ]
  }
];
