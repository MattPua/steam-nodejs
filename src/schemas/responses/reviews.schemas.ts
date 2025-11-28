import { z } from 'zod'

const SteamReviewSchema: z.ZodObject<{
	recommendationid: z.ZodString
	author: z.ZodObject<
		{
			steamid: z.ZodString
			num_games_owned: z.ZodNumber
			num_reviews: z.ZodNumber
			playtime_forever: z.ZodNumber
			playtime_last_two_weeks: z.ZodNumber
			playtime_at_review: z.ZodNumber
			last_played: z.ZodNumber
		},
		z.core.$strip
	>
	language: z.ZodString
	review: z.ZodString
	timestamp_created: z.ZodNumber
	timestamp_updated: z.ZodNumber
	voted_up: z.ZodBoolean
	votes_up: z.ZodNumber
	votes_funny: z.ZodNumber
	weighted_vote_score: z.ZodString
	comment_count: z.ZodNumber
	steam_purchase: z.ZodBoolean
	received_for_free: z.ZodBoolean
	written_during_early_access: z.ZodBoolean
}> = z.object({
	recommendationid: z.string().describe('Recommendation ID'),
	author: z
		.object({
			steamid: z.string().describe('Steam ID64 of the review author'),
			num_games_owned: z
				.number()
				.describe('Number of owned games of the review author'),
			num_reviews: z
				.number()
				.describe('Number of published reviews by the review author'),
			playtime_forever: z
				.number()
				.describe('Total playtime of the review author'),
			playtime_last_two_weeks: z
				.number()
				.describe('Playtime of the review author in the last two weeks'),
			playtime_at_review: z
				.number()
				.describe('Playtime of the review author at the time of the review'),
			last_played: z
				.number()
				.describe(
					'Unix timestamp of the last time the review author has started the reviewed game',
				),
		})
		.describe('Data on the review author'),
	language: z.string().describe('Language of the review'),
	review: z.string().describe('Review text'),
	timestamp_created: z
		.number()
		.describe('Unix timestamp of the review creation'),
	timestamp_updated: z.number().describe('Unix timestamp of the review update'),
	voted_up: z
		.boolean()
		.describe('Whether the review has given the reviewed game an upvote'),
	votes_up: z.number().describe('Number of upvotes for the review'),
	votes_funny: z.number().describe('Number of funny votes for the review'),
	weighted_vote_score: z
		.string()
		.describe(
			'Helpfulness score as a percentage weight where scores closer to one are deemed more helpful and scores closer to 0 less helpful, see the corresponding blog article',
		),
	comment_count: z.number().describe('Number of comments on the review'),
	steam_purchase: z
		.boolean()
		.describe('Whether the reviewer bought the game on Steam'),
	received_for_free: z
		.boolean()
		.describe('Whether the reviewer received the game for free'),
	written_during_early_access: z
		.boolean()
		.describe('Whether the review was written during Early Access'),
})

const SteamReviewResponse: z.ZodObject<{
	success: z.ZodNumber
	query_summary: z.ZodObject<
		{
			num_reviews: z.ZodNumber
			review_score: z.ZodNumber
			review_score_desc: z.ZodString
			total_positive: z.ZodNumber
			total_negative: z.ZodNumber
			total_reviews: z.ZodNumber
		},
		z.core.$strip
	>
	reviews: z.ZodArray<
		z.ZodObject<
			{
				recommendationid: z.ZodString
				author: z.ZodObject<
					{
						steamid: z.ZodString
						num_games_owned: z.ZodNumber
						num_reviews: z.ZodNumber
						playtime_forever: z.ZodNumber
						playtime_last_two_weeks: z.ZodNumber
						playtime_at_review: z.ZodNumber
						last_played: z.ZodNumber
					},
					z.core.$strip
				>
				language: z.ZodString
				review: z.ZodString
				timestamp_created: z.ZodNumber
				timestamp_updated: z.ZodNumber
				voted_up: z.ZodBoolean
				votes_up: z.ZodNumber
				votes_funny: z.ZodNumber
				weighted_vote_score: z.ZodString
				comment_count: z.ZodNumber
				steam_purchase: z.ZodBoolean
				received_for_free: z.ZodBoolean
				written_during_early_access: z.ZodBoolean
			},
			z.core.$strip
		>
	>
	cursor: z.ZodOptional<z.ZodString>
}> = z.object({
	success: z.number(),
	query_summary: z.object({
		num_reviews: z.number(),
		review_score: z.number(),
		review_score_desc: z.string(),
		total_positive: z.number(),
		total_negative: z.number(),
		total_reviews: z.number(),
	}),
	reviews: z.array(SteamReviewSchema),
	cursor: z.string().optional(),
})

export type SteamReview = z.infer<typeof SteamReviewSchema>

export type SteamReviewResponse = z.infer<typeof SteamReviewResponse>
