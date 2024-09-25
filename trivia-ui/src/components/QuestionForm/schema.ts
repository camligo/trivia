import * as z from 'zod';

export const schema = z.object({
  selectedAnswer: z.string(),
});

export type QuestionFormData = z.infer<typeof schema>;
