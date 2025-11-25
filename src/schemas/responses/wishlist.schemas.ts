import { z } from 'zod'

const WishlistItemSchema: z.ZodObject<{
	appid: z.ZodNumber
	priority: z.ZodNumber
	date_added: z.ZodNumber
}> = z.object({
	appid: z.number(),
	priority: z.number(),
	date_added: z.number(),
})

const WishlistResponseSchema: z.ZodObject<{
	items: z.ZodArray<
		z.ZodObject<{
			appid: z.ZodNumber
			priority: z.ZodNumber
			date_added: z.ZodNumber
		}>
	>
}> = z.object({
	items: z.array(WishlistItemSchema),
})

const WishlistItemCountResponseSchema: z.ZodObject<{
	count: z.ZodNumber
}> = z.object({
	count: z.number(),
})

export type WishlistItem = z.infer<typeof WishlistItemSchema>
export type WishlistResponse = z.infer<typeof WishlistResponseSchema>
export type WishlistItemCountResponse = z.infer<
	typeof WishlistItemCountResponseSchema
>
