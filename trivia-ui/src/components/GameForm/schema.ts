import * as z from 'zod';

export const schema = z.object({
    category: z.string(),
    difficulty: z.string(),
});

export type GameFormData = z.infer<typeof schema>;