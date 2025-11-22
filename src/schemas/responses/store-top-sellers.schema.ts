import { z } from 'zod'

const StoreTopSellersResponseSchema = z.object({
	countries: z.array(
		z.object({
			country_code: z.string(),
			name: z.array(z.number()),
		}),
	),
})
export type StoreTopSellersResponse = z.infer<
	typeof StoreTopSellersResponseSchema
>
