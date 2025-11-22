import z from 'zod'

const GetAppListResponseSchema = z.object({
	response: z.object({
		apps: z.array(
			z.object({
				appid: z.number(),
				name: z.string(),
				last_modified: z.number(),
				price_change_number: z.number(),
			}),
		),
		have_more: z.boolean(),
		last_appid: z
			.number()
			.describe(
				'The last appid in the list. Use this as the cursor for the next page of results.',
			),
	}),
})

const GetGamesFollowedResponseSchema = z.object({
	response: z.object({
		appids: z.array(z.number()),
	}),
})

const GetGamesFollowedCountResponseSchema = z.object({
	response: z.object({
		followed_game_count: z.number(),
	}),
})

const GetMostPopularTagsResponseSchema = z.object({
	response: z.object({
		tags: z.array(
			z.object({
				tag: z.string(),
				name: z.string(),
			}),
		),
	}),
})

export type GetAppListResponse = z.infer<typeof GetAppListResponseSchema>
export type GetGamesFollowedResponse = z.infer<
	typeof GetGamesFollowedResponseSchema
>
export type GetGamesFollowedCountResponse = z.infer<
	typeof GetGamesFollowedCountResponseSchema
>
export type GetMostPopularTagsResponse = z.infer<
	typeof GetMostPopularTagsResponseSchema
>
