import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ingenuity-lab',
    title: 'Ingenuity Lab',
    shortDescription: 'No-code UI editor enabling non-technical teams to ship production-grade UI changes safely.',
    impactMetric: '500+ production styling bundles shipped autonomously',
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
      'Non-technical end users',
      'Must generate production-grade code',
      'Zero-downtime injection into live multi-tenant sites',
      'Strict design-system and AI guardrails'
    ],
    solution: {
      images: [
        {
          src: 'https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/ingenuitylab-widgetclicker.png',
          alt: 'UI editor with live previews',
          caption: 'A visual editor allowing non-technical users to directly manipulate UI components, widget value and site configurations.'
        },
        {
          src: 'https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/ingenuitylab-checkout.png',
          alt: 'No-review production deployment',
          caption: 'Automated validation, testing, and deployment pipeline enabling safe, no-review releases to production.'
        }
      ],
      text: 'I solely designed, built, deployed, demonstrated, and maintained a no-code UI editor using Astro and React. The system generates production-grade code changes, runs automated tests, and deploys updates to live e-commerce sites without engineering intervention.'
    },
    impactStats: [
      { label: 'Quantity', value: '500+', description: 'Live bundled changes shipped to production' },
      { label: 'Speed', value: 'Weeks → Minutes', description: 'Time to ship UI changes' },
      { label: 'Scale', value: '2nd', description: 'biggest contributor to the platform on a team of 12' },
      { label: 'Efficiency', value: '4,000+', description: 'Lines of correct code generated automatically' }
    ],
    video: 'https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/labs-video.MOV',
    techStack: ['Astro', 'React', 'TypeScript', 'Cloudflare Workers', 'Gemini', 'Supabase']
  },
  {
    id: 'ecommerce-platform',
    title: 'Multi-Tenant E-commerce Platform',
    shortDescription: 'Modern headless platform supporting 100+ high-traffic household company sites.',
    impactMetric: '~£100M+ processed Annually',
    heroImage: 'https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/thg-commerce.png',
    subtitle: 'Re-architecting a fragile monolith into a scalable, high-performance commerce platform.',
    credibilityBullets: [
      'Unified 100+ e-commerce sites',
      'Site build automations',
      'Reduced build times by 92%'
    ],
    problem: {
      text: 'A 15 year old monolithic multi-tenant platform was struggling under scale. All sites were to migrate to a modern architecture utilising the edge and a SSR framework to improve performance, reliability, and developer experience.'
    },
    constraints: [
      'Single codebase serving 100+ tenants',
      'Site downtime results in significant revenue loss',
      'Immovable Black Friday deadline',
      'All legacy features/paths had to be supported'
    ],
    solution: {
      images: [
        {
          src: 'https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/repo-insights.png',
          alt: 'Largest repository contributor',
          caption: 'I am the largest contributor to the platform repository, with 2nd place being the ingenuity-lab commits.'
        },
        {
          src: 'https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/ingenuitylab-analytics.png',
          alt: 'Ticket Vector Embeddings',
          caption: 'I created an internal tool to vectorise and visualise support tickets, enabling data-driven prioritisation of platform features and bug fixes. These could then be send to github copilot to create a solution.'
        }
      ],
      text: 'I was one of the initial engineers tasked to build out the new storefront, creating the multi-tenant styling system and new widgets and features that provide a new modern shopping experience. I built internal tools to improve developer efficiency such as automating site builds, visualising support tickets using vector embeddings and sending developers morning github insights with suggested tickets to review for fast turnaround.'
    },
    impactStats: [
      { label: 'Revenue', value: '~£100M', description: 'Processed revenue' },
      { label: 'Payload', value: '5MB → 1.5MB', description: 'Average page size reduction' },
      { label: 'Build Time', value: '40s → 3s', description: 'Developer build times' },
      { label: 'Reliability', value: '99.99%', description: 'Uptime during peak traffic' }
    ],
    techStack: ['Astro', 'React', 'TypeScript', 'Javascript', 'Grafana', 'CI/CD', 'N8N', 'Vector Embedding Database'],
    externalLink: {
      url: 'https://www.thgingenuity.com/commerce',
      label: 'View THG Ingenuity Commerce'
    }
  },
  {
    id: 'little-guy',
    title: 'Little Guy',
    shortDescription: 'LLM-powered automation agent embedded directly in Microsoft Teams.',
    impactMetric: 'Teams chats to github PRs in minutes',
    heroImage: 'https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/littleguy-1.png',
    subtitle: 'Reducing cognitive load by bringing AI assistance into everyday engineering workflows.',
    credibilityBullets: [
      'Automates platform support requests',
      'RAG with internal knowledge base',
      'Used in chats with over 500+ engineers'
    ],
    problem: {
      text: 'Platform requests interrupt engineering squads throughout the day. Non-technical teams asking questions and request simple bug fixes lead to context switching, lost focus, and reduced productivity.'
    },
    constraints: [
      'Understanding conversational context',
      'Maintain trust by providing accurate answers',
      'Only use internal knowledge',
      'Cost-efficient LLM usage'
    ],
    solution: {
      images: [
        {
          src: 'https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/littleguy-2.png',
          alt: 'Support Request Channel',
          caption: 'Channel where marketing can ask questions and request support from the platform team. The bot decides if it has enough information, if not it asks for more context. Then, it processes the code request with Claude Code and creates a PR and Preview link, commenting the result back in the thread.'
        },
        {
          src: 'https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/littleguy-4.png',
          alt: 'Morning Reminders',
          caption: 'Engineers are sent a morning list of their open PRs, and it splits out all open PRs waiting for reviews so each engineer participates in 1/2 reviews a day instead of 1 person doing all the reviews.'
        },
        {
          src: 'https://c4aoo4zznfhkvamz.public.blob.vercel-storage.com/littleguy-5.png',
          alt: 'Conversational DM and GC',
          caption: 'Connected to internal RAG, github MCP, youtube, ticketing system and web knowledge to allow the bot to answer any questions in normal teams chats when mentioned.'
        }
      ],
      text: 'I have been the sole founder, creator and maintainer of Little Guy. I have built complex documentation to share the architecture and design with other teams through knowledge shares and written documentation.'
    },
    impactStats: [
      { label: 'Usage', value: '20,000', description: 'Average messages processed last month' },
      { label: 'MTTR', value: '24hrs → 3hrs', description: 'Average bug fix response time' },
      { label: 'Accuracy', value: '60%', description: 'Approved Solutions without developer intervention' },
      { label: 'Sentiment', value: '100%', description: 'Positive feedback from non-technical users on response times' }
    ],
    techStack: ['Python', 'N8N', 'Vector Embedding Database', 'LLMs', 'GKE', 'Claude Code', 'RAG']
  }
];
