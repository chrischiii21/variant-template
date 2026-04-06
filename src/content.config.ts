import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tradesCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/trades' }),
    schema: z.object({
        name: z.string(),
        slug: z.string(),
        tagline: z.string(),
        hoverTitle: z.string(),
        hoverDescription: z.string(),
        image: z.string(),
        hoverColor: z.string(),
        order: z.number(),
    }),
});

const templatesCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/templates' }),
    schema: z.object({
        title: z.string(),
        trade: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        liveDemoUrl: z.string(),
        mainSiteUrl: z.string(),
        category: z.string(),
    }),
});

const contactCollection = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/contact',
    }),
    schema: z.object({
        type: z.enum(['phone', 'email', 'location', 'chat']),
        title: z.string(),
        subtitle: z.string(),
        link: z.string(),
        linkText: z.string(),
        icon: z.string(),
        order: z.number(),
    }),
});

const socialCollection = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/social',
    }),
    schema: z.object({
        name: z.string(),
        url: z.string(),
        icon: z.string(),
        order: z.number(),
    }),
});

const pagesCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = {
    'trades': tradesCollection,
    'templates': templatesCollection,
    'contact': contactCollection,
    'social': socialCollection,
    'pages': pagesCollection,
};
