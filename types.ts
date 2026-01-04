export interface ProjectStats {
  label: string;
  value: string;
  description: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  impactMetric: string;
  heroImage: string;
  subtitle: string;
  credibilityBullets: string[];
  problem: {
    text: string;
  };
  constraints: string[];
  solution: {
    images: ProjectImage[];
    text: string;
  };
  impactStats: ProjectStats[];
  architectureDiagram?: string;
  techStack?: string[];
}
