import {z} from 'zod';

export const postSchema = z.object({
    title: z.string().min(5, "Title must be 5+ chars long"),
    content: z.string().min(20, "Content is too short"),
    author: z.string()
});