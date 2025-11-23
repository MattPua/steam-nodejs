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

const UserYearInReviewResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			stats: z.ZodObject<
				{
					account_id: z.ZodNumber
					year: z.ZodNumber
					playtime_stats: z.ZodObject<
						{
							total_stats: z.ZodObject<
								{
									total_playtime_seconds: z.ZodNumber
									total_sessions: z.ZodNumber
									vr_sessions: z.ZodNumber
									deck_sessions: z.ZodNumber
									controller_sessions: z.ZodNumber
									linux_sessions: z.ZodNumber
									macos_sessions: z.ZodNumber
									windows_sessions: z.ZodNumber
									total_playtime_percentagex100: z.ZodNumber
									vr_playtime_percentagex100: z.ZodNumber
									deck_playtime_percentagex100: z.ZodNumber
									controller_playtime_percentagex100: z.ZodNumber
									linux_playtime_percentagex100: z.ZodNumber
									macos_playtime_percentagex100: z.ZodNumber
									windows_playtime_percentagex100: z.ZodNumber
								},
								z.core.$strip
							>
							games: z.ZodArray<
								z.ZodObject<
									{
										appid: z.ZodNumber
										stats: z.ZodObject<
											{
												total_playtime_seconds: z.ZodNumber
												total_sessions: z.ZodNumber
												vr_sessions: z.ZodNumber
												deck_sessions: z.ZodNumber
												controller_sessions: z.ZodNumber
												linux_sessions: z.ZodNumber
												macos_sessions: z.ZodNumber
												windows_sessions: z.ZodNumber
												total_playtime_percentagex100: z.ZodNumber
												vr_playtime_percentagex100: z.ZodNumber
												deck_playtime_percentagex100: z.ZodNumber
												controller_playtime_percentagex100: z.ZodNumber
												linux_playtime_percentagex100: z.ZodNumber
												macos_playtime_percentagex100: z.ZodNumber
												windows_playtime_percentagex100: z.ZodNumber
											},
											z.core.$strip
										>
										playtime_streak: z.ZodObject<
											{
												longest_consecutive_days: z.ZodNumber
												rtime_start: z.ZodNumber
												streak_games: z.ZodOptional<
													z.ZodArray<
														z.ZodObject<
															{
																appid: z.ZodNumber
															},
															z.core.$strip
														>
													>
												>
											},
											z.core.$strip
										>
										playtime_ranks: z.ZodObject<
											{
												overall_rank: z.ZodOptional<z.ZodNumber>
												vr_rank: z.ZodOptional<z.ZodNumber>
												deck_rank: z.ZodOptional<z.ZodNumber>
												controller_rank: z.ZodOptional<z.ZodNumber>
												linux_rank: z.ZodOptional<z.ZodNumber>
												mac_rank: z.ZodOptional<z.ZodNumber>
												windows_rank: z.ZodOptional<z.ZodNumber>
											},
											z.core.$strip
										>
										rtime_first_played: z.ZodNumber
										relative_game_stats: z.ZodObject<
											{
												total_playtime_seconds: z.ZodNumber
												total_sessions: z.ZodNumber
												vr_sessions: z.ZodNumber
												deck_sessions: z.ZodNumber
												controller_sessions: z.ZodNumber
												linux_sessions: z.ZodNumber
												macos_sessions: z.ZodNumber
												windows_sessions: z.ZodNumber
												total_playtime_percentagex100: z.ZodNumber
												vr_playtime_percentagex100: z.ZodNumber
												deck_playtime_percentagex100: z.ZodNumber
												controller_playtime_percentagex100: z.ZodNumber
												linux_playtime_percentagex100: z.ZodNumber
												macos_playtime_percentagex100: z.ZodNumber
												windows_playtime_percentagex100: z.ZodNumber
											},
											z.core.$strip
										>
									},
									z.core.$strip
								>
							>
							playtime_streak: z.ZodObject<
								{
									longest_consecutive_days: z.ZodNumber
									rtime_start: z.ZodNumber
									streak_games: z.ZodOptional<
										z.ZodArray<
											z.ZodObject<
												{
													appid: z.ZodNumber
												},
												z.core.$strip
											>
										>
									>
								},
								z.core.$strip
							>
							months: z.ZodArray<
								z.ZodObject<
									{
										rtime_month: z.ZodNumber
										stats: z.ZodObject<
											{
												total_playtime_seconds: z.ZodNumber
												total_sessions: z.ZodNumber
												vr_sessions: z.ZodNumber
												deck_sessions: z.ZodNumber
												controller_sessions: z.ZodNumber
												linux_sessions: z.ZodNumber
												macos_sessions: z.ZodNumber
												windows_sessions: z.ZodNumber
												total_playtime_percentagex100: z.ZodNumber
												vr_playtime_percentagex100: z.ZodNumber
												deck_playtime_percentagex100: z.ZodNumber
												controller_playtime_percentagex100: z.ZodNumber
												linux_playtime_percentagex100: z.ZodNumber
												macos_playtime_percentagex100: z.ZodNumber
												windows_playtime_percentagex100: z.ZodNumber
											},
											z.core.$strip
										>
										appid: z.ZodArray<
											z.ZodObject<
												{
													appid: z.ZodNumber
													stats: z.ZodObject<
														{
															total_playtime_seconds: z.ZodNumber
															total_sessions: z.ZodNumber
															vr_sessions: z.ZodNumber
															deck_sessions: z.ZodNumber
															controller_sessions: z.ZodNumber
															linux_sessions: z.ZodNumber
															macos_sessions: z.ZodNumber
															windows_sessions: z.ZodNumber
															total_playtime_percentagex100: z.ZodNumber
															vr_playtime_percentagex100: z.ZodNumber
															deck_playtime_percentagex100: z.ZodNumber
															controller_playtime_percentagex100: z.ZodNumber
															linux_playtime_percentagex100: z.ZodNumber
															macos_playtime_percentagex100: z.ZodNumber
															windows_playtime_percentagex100: z.ZodNumber
														},
														z.core.$strip
													>
													rtime_first_played: z.ZodNumber
													relative_game_stats: z.ZodObject<
														{
															total_playtime_seconds: z.ZodNumber
															total_sessions: z.ZodNumber
															vr_sessions: z.ZodNumber
															deck_sessions: z.ZodNumber
															controller_sessions: z.ZodNumber
															linux_sessions: z.ZodNumber
															macos_sessions: z.ZodNumber
															windows_sessions: z.ZodNumber
															total_playtime_percentagex100: z.ZodNumber
															vr_playtime_percentagex100: z.ZodNumber
															deck_playtime_percentagex100: z.ZodNumber
															controller_playtime_percentagex100: z.ZodNumber
															linux_playtime_percentagex100: z.ZodNumber
															macos_playtime_percentagex100: z.ZodNumber
															windows_playtime_percentagex100: z.ZodNumber
														},
														z.core.$strip
													>
												},
												z.core.$strip
											>
										>
										relative_monthly_stats: z.ZodObject<
											{
												total_playtime_seconds: z.ZodNumber
												total_sessions: z.ZodNumber
												vr_sessions: z.ZodNumber
												deck_sessions: z.ZodNumber
												controller_sessions: z.ZodNumber
												linux_sessions: z.ZodNumber
												macos_sessions: z.ZodNumber
												windows_sessions: z.ZodNumber
												total_playtime_percentagex100: z.ZodNumber
												vr_playtime_percentagex100: z.ZodNumber
												deck_playtime_percentagex100: z.ZodNumber
												controller_playtime_percentagex100: z.ZodNumber
												linux_playtime_percentagex100: z.ZodNumber
												macos_playtime_percentagex100: z.ZodNumber
												windows_playtime_percentagex100: z.ZodNumber
											},
											z.core.$strip
										>
										game_summary: z.ZodArray<
											z.ZodObject<
												{
													appid: z.ZodNumber
													total_playtime_percentagex100: z.ZodNumber
													relative_playtime_percentagex100: z.ZodNumber
												},
												z.core.$strip
											>
										>
									},
									z.core.$strip
								>
							>
							game_summary: z.ZodArray<
								z.ZodObject<
									{
										appid: z.ZodNumber
										new_this_year: z.ZodBoolean
										rtime_first_played_lifetime: z.ZodNumber
										demo: z.ZodBoolean
										playtest: z.ZodBoolean
										played_vr: z.ZodBoolean
										played_deck: z.ZodBoolean
										played_controller: z.ZodBoolean
										played_linux: z.ZodBoolean
										played_mac: z.ZodBoolean
										played_windows: z.ZodBoolean
										total_playtime_percentagex100: z.ZodNumber
										total_sessions: z.ZodNumber
										rtime_release_date: z.ZodNumber
									},
									z.core.$strip
								>
							>
						},
						z.core.$strip
					>
					demos_played: z.ZodNumber
					game_rankings: z.ZodObject<
						{
							overall_ranking: z.ZodObject<
								{
									category: z.ZodString
									rankings: z.ZodOptional<
										z.ZodArray<
											z.ZodObject<
												{
													appid: z.ZodNumber
													rank: z.ZodNumber
													relative_playtime_percentagex100: z.ZodNumber
												},
												z.core.$strip
											>
										>
									>
								},
								z.core.$strip
							>
							vr_ranking: z.ZodObject<
								{
									category: z.ZodString
									rankings: z.ZodOptional<
										z.ZodArray<
											z.ZodObject<
												{
													appid: z.ZodNumber
													rank: z.ZodNumber
													relative_playtime_percentagex100: z.ZodNumber
												},
												z.core.$strip
											>
										>
									>
								},
								z.core.$strip
							>
							deck_ranking: z.ZodObject<
								{
									category: z.ZodString
									rankings: z.ZodOptional<
										z.ZodArray<
											z.ZodObject<
												{
													appid: z.ZodNumber
													rank: z.ZodNumber
													relative_playtime_percentagex100: z.ZodNumber
												},
												z.core.$strip
											>
										>
									>
								},
								z.core.$strip
							>
							controller_ranking: z.ZodObject<
								{
									category: z.ZodString
									rankings: z.ZodOptional<
										z.ZodArray<
											z.ZodObject<
												{
													appid: z.ZodNumber
													rank: z.ZodNumber
													relative_playtime_percentagex100: z.ZodNumber
												},
												z.core.$strip
											>
										>
									>
								},
								z.core.$strip
							>
							linux_ranking: z.ZodObject<
								{
									category: z.ZodString
									rankings: z.ZodOptional<
										z.ZodArray<
											z.ZodObject<
												{
													appid: z.ZodNumber
													rank: z.ZodNumber
													relative_playtime_percentagex100: z.ZodNumber
												},
												z.core.$strip
											>
										>
									>
								},
								z.core.$strip
							>
							mac_ranking: z.ZodObject<
								{
									category: z.ZodString
									rankings: z.ZodOptional<
										z.ZodArray<
											z.ZodObject<
												{
													appid: z.ZodNumber
													rank: z.ZodNumber
													relative_playtime_percentagex100: z.ZodNumber
												},
												z.core.$strip
											>
										>
									>
								},
								z.core.$strip
							>
							windows_ranking: z.ZodObject<
								{
									category: z.ZodString
									rankings: z.ZodOptional<
										z.ZodArray<
											z.ZodObject<
												{
													appid: z.ZodNumber
													rank: z.ZodNumber
													relative_playtime_percentagex100: z.ZodNumber
												},
												z.core.$strip
											>
										>
									>
								},
								z.core.$strip
							>
						},
						z.core.$strip
					>
					playtests_played: z.ZodNumber
					summary_stats: z.ZodObject<
						{
							total_achievements: z.ZodNumber
							total_games_with_achievements: z.ZodNumber
							total_rare_achievements: z.ZodNumber
						},
						z.core.$strip
					>
					substantial: z.ZodBoolean
					tag_stats: z.ZodObject<
						{
							stats: z.ZodArray<
								z.ZodObject<
									{
										tag_id: z.ZodNumber
										tag_weight: z.ZodNumber
										tag_weight_pre_selection: z.ZodNumber
									},
									z.core.$strip
								>
							>
						},
						z.core.$strip
					>
					by_numbers: z.ZodObject<
						{
							screenshots_shared: z.ZodNumber
							gifts_sent: z.ZodNumber
							loyalty_reactions: z.ZodNumber
							written_reviews: z.ZodNumber
							guides_submitted: z.ZodNumber
							workshop_contributions: z.ZodNumber
							badges_earned: z.ZodNumber
							friends_added: z.ZodNumber
							forum_posts: z.ZodNumber
							workshop_subscriptions: z.ZodNumber
							guide_subscribers: z.ZodNumber
							workshop_subscribers: z.ZodNumber
							games_played_pct: z.ZodNumber
							achievements_pct: z.ZodNumber
							game_streak_pct: z.ZodNumber
							games_played_avg: z.ZodNumber
							achievements_avg: z.ZodNumber
							game_streak_avg: z.ZodNumber
						},
						z.core.$strip
					>
					privacy_state: z.ZodNumber
				},
				z.core.$strip
			>
			performance_stats: z.ZodObject<
				{
					from_dbo: z.ZodBoolean
					overall_time_ms: z.ZodString
					dbo_load_ms: z.ZodString
					message_population_ms: z.ZodString
					dbo_lock_load_ms: z.ZodString
				},
				z.core.$strip
			>
			distribution: z.ZodObject<
				{
					new_releases: z.ZodNumber
					recent_releases: z.ZodNumber
					classic_releases: z.ZodNumber
					recent_cutoff_year: z.ZodNumber
				},
				z.core.$strip
			>
			previous_year_summary: z.ZodObject<
				{
					games_played: z.ZodNumber
					unlocked_achievements: z.ZodNumber
					longest_streak: z.ZodNumber
				},
				z.core.$strip
			>
		},
		z.core.$strip
	>
}> = z.object({
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
