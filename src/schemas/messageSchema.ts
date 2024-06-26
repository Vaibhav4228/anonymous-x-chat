import { Content } from "next/font/google"
import {z} from "zod"

export const messageSchema = z.object({
Content: z
.string()
.min(10, {message: 'contentmust be 10 char'})
.max(400, {message: 'content must be no longer than 400 char'})
 
})
