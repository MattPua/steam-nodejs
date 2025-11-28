import { z } from 'zod'

const StoreCategorySchema: z.ZodObject<{
	categoryid: z.ZodNumber
	type: z.ZodNumber
	name: z.ZodString
	loc_name: z.ZodString
	image_path: z.ZodString
	show_in_search: z.ZodNumber
}> = z.object({
	categoryid: z.number(),
	type: z.number(),
	name: z.string(),
	loc_name: z.string(),
	image_path: z.string(),
	show_in_search: z.number(),
})

const StoreTagSchema: z.ZodObject<{
	tagid: z.ZodNumber
	name: z.ZodString
}> = z.object({
	tagid: z.number(),
	name: z.string(),
})

export type StoreCategory = z.infer<typeof StoreCategorySchema>

export type StoreTag = z.infer<typeof StoreTagSchema>
