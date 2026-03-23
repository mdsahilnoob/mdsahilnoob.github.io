import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    stars: z.number().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(999),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
    skills: z.array(z.string()),
    link: z.string().url().optional(),
    linkText: z.string().optional(),
    order: z.number().default(999),
  }),
});

const skillsCollection = defineCollection({
  loader: glob({ base: './src/content/skills', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(999),
    items: z.array(
      z.object({
        name: z.string(),
        level: z.string().optional(),
        icon: z.string().optional(),
        note: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  projects: projectsCollection,
  experience: experienceCollection,
  skills: skillsCollection,
};