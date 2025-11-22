import { z } from 'zod'

const RankingSchema = z.object({
	category: z.string(),
	rankings: z
		.array(
			z.object({
				appid: z.number(),
				rank: z.number(),
				relative_playtime_percentagex100: z.number(),
			}),
		)
		.optional(),
})

const GameRankingsSchema = z.object({
	overall_ranking: RankingSchema,
	vr_ranking: RankingSchema,
	deck_ranking: RankingSchema,
	controller_ranking: RankingSchema,
	linux_ranking: RankingSchema,
	mac_ranking: RankingSchema,
	windows_ranking: RankingSchema,
})

const GameSummaryItemSchema = z.object({
	appid: z.number(),
	new_this_year: z.boolean(),
	rtime_first_played_lifetime: z.number(),
	demo: z.boolean(),
	playtest: z.boolean(),
	played_vr: z.boolean(),
	played_deck: z.boolean(),
	played_controller: z.boolean(),
	played_linux: z.boolean(),
	played_mac: z.boolean(),
	played_windows: z.boolean(),
	total_playtime_percentagex100: z.number(),
	total_sessions: z.number(),
	rtime_release_date: z.number(),
})

const TagStatsSchema = z.object({
	stats: z.array(
		z.object({
			tag_id: z.number(),
			tag_weight: z.number(),
			tag_weight_pre_selection: z.number(),
		}),
	),
})

const ByNumbersSchema = z.object({
	screenshots_shared: z.number(),
	gifts_sent: z.number(),
	loyalty_reactions: z.number(),
	written_reviews: z.number(),
	guides_submitted: z.number(),
	workshop_contributions: z.number(),
	badges_earned: z.number(),
	friends_added: z.number(),
	forum_posts: z.number(),
	workshop_subscriptions: z.number(),
	guide_subscribers: z.number(),
	workshop_subscribers: z.number(),
	games_played_pct: z.number(),
	achievements_pct: z.number(),
	game_streak_pct: z.number(),
	games_played_avg: z.number(),
	achievements_avg: z.number(),
	game_streak_avg: z.number(),
})

const PlaytimeStatsSchema = z.object({
	total_playtime_seconds: z.number(),
	total_sessions: z.number(),
	vr_sessions: z.number(),
	deck_sessions: z.number(),
	controller_sessions: z.number(),
	linux_sessions: z.number(),
	macos_sessions: z.number(),
	windows_sessions: z.number(),
	total_playtime_percentagex100: z.number(),
	vr_playtime_percentagex100: z.number(),
	deck_playtime_percentagex100: z.number(),
	controller_playtime_percentagex100: z.number(),
	linux_playtime_percentagex100: z.number(),
	macos_playtime_percentagex100: z.number(),
	windows_playtime_percentagex100: z.number(),
})

const RelativeGameStatsSchema = PlaytimeStatsSchema

const PlaytimeStreakSchema = z.object({
	longest_consecutive_days: z.number(),
	rtime_start: z.number(),
	streak_games: z.array(z.object({ appid: z.number() })).optional(),
})

const PlaytimeRanksSchema = z.object({
	overall_rank: z.number().optional(),
	vr_rank: z.number().optional(),
	deck_rank: z.number().optional(),
	controller_rank: z.number().optional(),
	linux_rank: z.number().optional(),
	mac_rank: z.number().optional(),
	windows_rank: z.number().optional(),
})

const GameStatsSchema = z.object({
	appid: z.number(),
	stats: PlaytimeStatsSchema,
	playtime_streak: PlaytimeStreakSchema,
	playtime_ranks: PlaytimeRanksSchema,
	rtime_first_played: z.number(),
	relative_game_stats: RelativeGameStatsSchema,
})

const MonthGameSchema = z.object({
	appid: z.number(),
	stats: PlaytimeStatsSchema,
	rtime_first_played: z.number(),
	relative_game_stats: RelativeGameStatsSchema,
})

const MonthGameSummarySchema = z.object({
	appid: z.number(),
	total_playtime_percentagex100: z.number(),
	relative_playtime_percentagex100: z.number(),
})

const MonthlyStatsSchema = z.object({
	rtime_month: z.number(),
	stats: PlaytimeStatsSchema,
	appid: z.array(MonthGameSchema),
	relative_monthly_stats: PlaytimeStatsSchema,
	game_summary: z.array(MonthGameSummarySchema),
})

const StatsSchema = z.object({
	account_id: z.number(),
	year: z.number(),
	playtime_stats: z.object({
		total_stats: PlaytimeStatsSchema,
		games: z.array(GameStatsSchema),
		playtime_streak: PlaytimeStreakSchema,
		months: z.array(MonthlyStatsSchema),
		game_summary: z.array(GameSummaryItemSchema),
	}),
	demos_played: z.number(),
	game_rankings: GameRankingsSchema,
	playtests_played: z.number(),
	summary_stats: z.object({
		total_achievements: z.number(),
		total_games_with_achievements: z.number(),
		total_rare_achievements: z.number(),
	}),
	substantial: z.boolean(),
	tag_stats: TagStatsSchema,
	by_numbers: ByNumbersSchema,
	privacy_state: z.number(),
})

const PerformanceStatsSchema = z.object({
	from_dbo: z.boolean(),
	overall_time_ms: z.string(),
	dbo_load_ms: z.string(),
	message_population_ms: z.string(),
	dbo_lock_load_ms: z.string(),
})

const DistributionSchema = z.object({
	new_releases: z.number(),
	recent_releases: z.number(),
	classic_releases: z.number(),
	recent_cutoff_year: z.number(),
})

const PreviousYearSummarySchema = z.object({
	games_played: z.number(),
	unlocked_achievements: z.number(),
	longest_streak: z.number(),
})

const UserYearInReviewResponseSchema = z.object({
	response: z.object({
		stats: StatsSchema,
		performance_stats: PerformanceStatsSchema,
		distribution: DistributionSchema,
		previous_year_summary: PreviousYearSummarySchema,
	}),
})

export type UserYearInReviewResponse = z.infer<
	typeof UserYearInReviewResponseSchema
>
