import { z } from 'astro:content';

export const APIResponseSchema = z.object({
    results: z.array(
        z.object({
            name: z.string(),
            url: z.string().url(),
        })
    ),
});