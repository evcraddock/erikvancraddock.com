import { defineCollection, z } from 'astro:content';

export const article = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    categories: z.array(z.string()),
    visible: z.boolean(),
		// Transform string to Date object
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		banner: z.string().optional(),
	}),
});

export const collections = { article };

