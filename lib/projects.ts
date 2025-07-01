import { cache } from 'react';
import { promises as fs } from 'fs';
import path from 'path';

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  timeframe: string;
  link: string;
  linkTitle: string;
  imageUrl?: string;
  technologies: string[];
  contributors?: string[];
  links?: { title: string; url: string }[];
}

export const getProjects = cache(async (): Promise<ProjectData[]> => {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data) as ProjectData[];
});

export const getProjectBySlug = cache(async (slug: string): Promise<ProjectData | undefined> => {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug);
});
