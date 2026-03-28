import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        readingTime: z.string().optional(),
        location: z.string().optional()
      })
    })
  }
})
