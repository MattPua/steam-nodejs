import { z } from 'zod'

const StoreTopSellersResponseSchema: z.ZodObject<{
	countries: z.ZodArray<
		z.ZodObject<
			{
				country_code: z.ZodString
				name: z.ZodArray<z.ZodNumber>
			},
			z.core.$strip
		>
	>
}> = z.object({
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
