import { z } from 'zod'

const BestOfYearPageSchema = z.object({
	name: z.string(),
	url_path: z.string(),
	banner_url: z.array(z.string()),
	banner_url_mobile: z.array(z.string()),
	start_date: z.number(),
})

const BestOfYearResponseSchema = z.object({
	response: z.object({
		pages: z.array(BestOfYearPageSchema),
	}),
})

const RankSchema = z.object({
	rank: z.number(),
	appid: z.number(),
	peak_in_game: z.number(),
})

const GamesByConcurrentPlayersResponseSchema = z.object({
	response: z.object({
		last_update: z.number(),
		ranks: z.array(
			z
				.object({
					concurrent_in_game: z.number(),
				})
				.extend(RankSchema),
		),
	}),
})

const MostPlayedGamesResponseSchema = z.object({
	response: z.object({
		rollup_date: z.number(),
		ranks: z.array(
			z
				.object({
					last_week_rank: z.number(),
				})
				.extend(RankSchema),
		),
	}),
})

export type BestOfYearResponse = z.infer<typeof BestOfYearResponseSchema>
export type GamesByConcurrentPlayersResponse = z.infer<
	typeof GamesByConcurrentPlayersResponseSchema
>

export type MostPlayedGamesResponse = z.infer<
	typeof MostPlayedGamesResponseSchema
>
