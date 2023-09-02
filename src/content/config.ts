import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
      category: z.string(),
      createdAt: z.number(),
    }),
});

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
      category: z.string(),
      previewUrl: z.string(),
      sourceUrl: z.string(),
      createdAt: z.number(),
    }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
