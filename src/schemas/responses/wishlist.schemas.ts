import { z } from 'zod'

const WishlistItemSchema = z.object({
	appid: z.number(),
	priority: z.number(),
	date_added: z.number(),
})

const WishlistResponseSchema = z.object({
	response: z.object({
		items: z.array(WishlistItemSchema),
	}),
})

const WishlistItemCountResponseSchema = z.object({
	response: z.object({
		count: z.number(),
	}),
})

export type WishlistItem = z.infer<typeof WishlistItemSchema>
export type WishlistResponse = z.infer<typeof WishlistResponseSchema>
export type WishlistItemCountResponse = z.infer<
	typeof WishlistItemCountResponseSchema
>
