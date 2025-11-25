import { z } from 'zod'

const BestOfYearPageSchema = z.object({
	name: z.string(),
	url_path: z.string(),
	banner_url: z.array(z.string()),
	banner_url_mobile: z.array(z.string()),
	start_date: z.number(),
})

const BestOfYearResponseSchema: z.ZodObject<{
	pages: z.ZodArray<
		z.ZodObject<
			{
				name: z.ZodString
				url_path: z.ZodString
				banner_url: z.ZodArray<z.ZodString>
				banner_url_mobile: z.ZodArray<z.ZodString>
				start_date: z.ZodNumber
			},
			z.core.$strip
		>
	>
}> = z.object({
	pages: z.array(BestOfYearPageSchema),
})

const GamesByConcurrentPlayersResponseSchema: z.ZodObject<{
	last_update: z.ZodNumber
	ranks: z.ZodArray<
		z.ZodObject<
			{
				concurrent_in_game: z.ZodNumber
				rank: z.ZodNumber
				appid: z.ZodNumber
				peak_in_game: z.ZodNumber
			},
			z.core.$strip
		>
	>
}> = z.object({
	last_update: z.number(),
	ranks: z.array(
		z.object({
			concurrent_in_game: z.number(),
			rank: z.number(),
			appid: z.number(),
			peak_in_game: z.number(),
		}),
	),
})

const MostPlayedGamesResponseSchema: z.ZodObject<{
	rollup_date: z.ZodNumber
	ranks: z.ZodArray<
		z.ZodObject<
			{
				last_week_rank: z.ZodNumber
				rank: z.ZodNumber
				appid: z.ZodNumber
				peak_in_game: z.ZodNumber
			},
			z.core.$strip
		>
	>
}> = z.object({
	rollup_date: z.number(),
	ranks: z.array(
		z.object({
			last_week_rank: z.number(),
			rank: z.number(),
			appid: z.number(),
			peak_in_game: z.number(),
		}),
	),
})

export type BestOfYearResponse = z.infer<typeof BestOfYearResponseSchema>
export type GamesByConcurrentPlayersResponse = z.infer<
	typeof GamesByConcurrentPlayersResponseSchema
>

export type MostPlayedGamesResponse = z.infer<
	typeof MostPlayedGamesResponseSchema
>
