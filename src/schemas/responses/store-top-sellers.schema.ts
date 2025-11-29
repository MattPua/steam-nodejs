import { z } from 'zod'
import { AppDataSchema } from './common.schemas'

const StoreTopSellersResponseSchema: z.ZodObject<{
	start_date: z.ZodNumber
	ranks: z.ZodOptional<
		z.ZodArray<
			z.ZodObject<
				{
					rank: z.ZodNumber
					last_week_rank: z.ZodNumber
					consecutive_weeks: z.ZodNumber
					item: typeof AppDataSchema
				},
				z.core.$strip
			>
		>
	>
}> = z.object({
	start_date: z.number(),
	ranks: z.optional(
		z.array(
			z.object({
				rank: z.number(),
				last_week_rank: z.number(),
				consecutive_weeks: z.number(),
				item: AppDataSchema,
			}),
		),
	),
})
export type StoreTopSellersResponse = z.infer<
	typeof StoreTopSellersResponseSchema
>
