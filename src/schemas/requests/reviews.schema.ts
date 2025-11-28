import { z } from 'zod'

const SteamReviewRequestSchema: z.ZodObject<{
	cursor: z.ZodOptional<z.ZodString>
	day_range: z.ZodOptional<z.ZodString>
	start_date: z.ZodOptional<z.ZodString>
	end_date: z.ZodOptional<z.ZodString>
	date_range_type: z.ZodOptional<z.ZodString>
	filter: z.ZodOptional<z.ZodString>
	language: z.ZodOptional<z.ZodString>
	review_type: z.ZodOptional<z.ZodString>
	purchase_type: z.ZodOptional<z.ZodString>
	playtime_filter_min: z.ZodOptional<z.ZodString>
	playtime_filter_max: z.ZodOptional<z.ZodString>
	filter_offtopic_activity: z.ZodOptional<z.ZodString>
	summary_num_positive_reviews: z.ZodOptional<z.ZodString>
	summary_num_reviews: z.ZodOptional<z.ZodString>
	num_per_page: z.ZodOptional<z.ZodString>
	use_review_quality: z.ZodOptional<z.ZodString>
}> = z.object({
	cursor: z
		.string()
		.optional()
		.describe(
			`Reviews are returned in batches of 20, so pass "*" for the first set, then the value of "cursor" that was returned in the response for the next set, etc. Note that cursor values may contain characters that need to be URLEncoded for use in the querystring.`,
		),
	json: z
		.string()
		.optional()
		.describe(
			`1 – true, returns the response in the JSON format. 0 – false, returns the response as JSON with HTML fields.`,
		),
	day_range: z
		.string()
		.optional()
		.describe(
			`Range from now to n days ago to look for helpful reviews. Only applicable for the “all” filter. Maximum value is 365.`,
		),
	start_date: z
		.string()
		.optional()
		.describe(
			`Unix timestamp marking the earliest time to include or exclude reviews. See date_range_type.`,
		),
	end_date: z
		.string()
		.optional()
		.describe(
			`Unix timestamp marking the latest time to include or exclude reviews. See date_range_type.`,
		),
	date_range_type: z
		.string()
		.optional()
		.describe(
			`include – include only reviews between start_date and end_date; exclude – exclude all reviews between start_date and end_date; all – (default) include all reviews irrespective of time. Ignores start_date and end_date.`,
		),
	filter: z
		.string()
		.optional()
		.describe(
			`recent – sorted by creation time; updated – sorted by last updated time; all – sorted by helpfulness, with sliding windows based on day_range parameter, will always find results to return; summary – (default) sorted by helpfulness, strictly returns 10 reviews without paging (ignores num_per_page), represents the summary score by including reviews based on the proportion of positive to negative votes; If paging through the reviews with cursor then choose either the recent option or the updated option to eventually receive an empty response list.`,
		),
	language: z
		.string()
		.optional()
		.describe(
			`Comma-separated list of review languages. Reviews written in a different language will be filtered out. See https://partner.steamgames.com/documentation/languages or pass “all” for all reviews.`,
		),
	l: z
		.string()
		.optional()
		.describe(
			`Language. If specified, it will return language data for the requested language. Does not change the language filter for reviews, but changes the language of language data provided by Steam.`,
		),
	review_type: z
		.string()
		.optional()
		.describe(
			`all – all reviews (default); positive – only positive reviews; negative – only negative reviews`,
		),
	purchase_type: z
		.string()
		.optional()
		.describe(
			`all – all reviews; non_steam_purchase – reviews written by users who did not pay for the product on Steam; steam – reviews written by users who paid for the product on Steam (default)`,
		),
	playtime_filter_min: z
		.string()
		.optional()
		.describe(
			`Minimum number of hours of time that reviewers need to have played a game, otherwise they are filtered out and are not returned in this API. Pass 0 to ignore minimum playtime.`,
		),
	playtime_filter_max: z
		.string()
		.optional()
		.describe(
			`Maximum number of hours of time that reviewers need to have played a game, otherwise they are filtered out and are not returned in this API. Pass 0 to ignore maximum playtime.`,
		),
	filter_offtopic_activity: z
		.string()
		.optional()
		.describe(
			`By default, off-topic reviews (aka "Review Bombs") are filtered out and are not returned in this API. Pass 0 to include them.`,
		),
	summary_num_positive_reviews: z.string().optional(),
	summary_num_reviews: z.string().optional(),
	num_per_page: z
		.string()
		.optional()
		.describe(
			`By default, up to 20 reviews will be returned. More reviews can be returned based on this parameter (with a maximum of 100 reviews).`,
		),
	use_review_quality: z
		.string()
		.optional()
		.describe(
			`By default, not informative reviews are filtered out by the New Helpfulness System. Pass 0 to include them.`,
		),
})

export type SteamReviewRequest = z.infer<typeof SteamReviewRequestSchema>
