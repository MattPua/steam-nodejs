import { z } from 'zod'

const BadgeSchema = z.object({
	badgeid: z.number(),
	level: z.number(),
	completion_time: z.number(),
	xp: z.number(),
	scarcity: z.number(),
	appid: z.number().optional(),
	communityitemid: z.string().optional(),
	border_color: z.number().optional(),
})

const BadgesResponseSchema = z.object({
	player_level: z.number().optional(),
	badges: z.array(BadgeSchema),
})

const GameAppInfoSchema = z
	.object({
		name: z.string().optional(),
		img_icon_url: z.string().optional(),
		img_logo_url: z.string().optional(),
		has_community_visible_stats: z.boolean().optional(),
		content_descriptorids: z.array(z.number()).optional(),
	})
	.describe('If include_appinfo is set, this will be included in the response.')

const ExtendedGameAppInfoSchema = z
	.object({
		capsule_filename: z.string(),
		has_workshop: z.boolean(),
		has_marketplace: z.boolean(),
		has_dlc: z.boolean(),
	})
	.describe(
		'If include_extended_appinfo is set, this will be included in the response.',
	)

const PlaytimeSchema = z.object({
	playtime_windows_forever: z.number(),
	playtime_mac_forever: z.number(),
	playtime_linux_forever: z.number(),
	playtime_deck_forever: z.number(),
	playtime_forever: z.number(),
	playtime_2weeks: z
		.number()
		.optional()
		.describe('Only applicable for recently played games'),
})

const GameSchema = GameAppInfoSchema.extend(ExtendedGameAppInfoSchema)
	.extend(PlaytimeSchema)
	.extend({
		appid: z.number(),
		playtime_forever: z.number(),
		playtime_windows_forever: z.number(),
		playtime_mac_forever: z.number(),
		playtime_linux_forever: z.number(),
		playtime_deck_forever: z.number(),
		rtime_last_played: z.number(),
		playtime_disconnected: z.number(),
	})

const OwnedGamesResponseSchema = z.object({
	response: z.object({
		game_count: z.number(),
		games: z.array(GameSchema),
	}),
})

const RecentlyPlayedGameSchema = z
	.object({
		appid: z.number(),
		name: z.string(),
		playtime_2weeks: z.number().optional(),
		img_icon_url: z.string().optional(),
		img_logo_url: z.string().optional(),
	})
	.extend(PlaytimeSchema)

const RecentlyPlayedGamesResponseSchema = z.object({
	response: z.object({
		total_count: z.number().optional(),
		games: z.array(RecentlyPlayedGameSchema),
	}),
})

const SteamLevelResponseSchema = z.object({
	response: z.object({
		player_level: z.number(),
	}),
})

const LastPlayedTimesResponseSchema = z.object({
	response: z.object({
		games: z.array(
			z
				.object({
					appid: z.number(),
					last_playtime: z.number(),
					first_playtime: z.number(),
					first_windows_playtime: z.number(),
					first_mac_playtime: z.number(),
					first_linux_playtime: z.number(),
					first_deck_playtime: z.number(),
					last_windows_playtime: z.number(),
					last_mac_playtime: z.number(),
					last_linux_playtime: z.number(),
					last_deck_playtime: z.number(),
					playtime_disconnected: z.number(),
				})
				.extend(PlaytimeSchema),
		),
	}),
})

const ProfileItemSchema = z.object({
	communityitemid: z.string(),
	image_small: z.string().optional(),
	image_large: z.string(),
	name: z.string(),
	item_title: z.string(),
	item_description: z.string(),
	appid: z.number(),
	item_type: z.number(),
	item_class: z.number(),
})

const AnimatedAvatarResponseSchema = z.object({
	response: z.object({
		avatar: ProfileItemSchema,
	}),
})

const AvatarFrameResponseSchema = z.object({
	response: z.object({
		avatar_frame: ProfileItemSchema,
	}),
})

const ProfileBackgroundResponseSchema = z.object({
	response: z.object({
		profile_background: ProfileItemSchema.extend({
			movie_webm: z.string(),
			movie_mp4: z.string(),
		}),
	}),
})

const PlayerLinkDetailsResponseSchema = z.object({
	response: z.object({
		accounts: z.array(
			z.object({
				public_data: z.object({
					steamid: z.string(),
					visibility_state: z.number(),
					profile_state: z.number(),
					sha_digest_avatar: z.string(),
					persona_name: z.string(),
					profile_url: z.string(),
					content_country_restricted: z.boolean(),
				}),
				private_data: z.object({
					time_created: z.number(),
					last_logoff_time: z.number(),
					last_seen_online: z.number(),
				}),
			}),
		),
	}),
})

const ProfileCustomizationResponseSchema = z.object({
	response: z.object({
		slots_available: z.number(),
		profile_theme: z.object({
			theme_id: z.string(),
			title: z.string(),
		}),
		profile_preferences: z.object({
			hide_profile_awards: z.boolean(),
		}),
	}),
})

const ProfileItemsEquippedResponseSchema = z.object({
	profile_background: ProfileItemSchema.extend({
		movie_webm: z.string(),
		movie_mp4: z.string(),
		movie_webm_small: z.string(),
		movie_mp4_small: z.string(),
	}),
	mini_profile_background: ProfileItemSchema.extend({
		movie_webm: z.string(),
		movie_mp4: z.string(),
	}),
	avatar_frame: ProfileItemSchema,
	animated_avatar: ProfileItemSchema,
	profile_modifier: ProfileItemSchema.extend({
		profile_colors: z.array(
			z.object({
				style_name: z.string(),
				color: z.string(),
			}),
		),
	}),
})

/**
 * TODO: need to type correctly
 */
const SteamDeckKeyboardSkinsResponseSchema = z.object({
	response: z.object({
		steam_deck_keyboard_skin: z.object(z.any()),
	}),
})

const TopAchievementsForGamesResponseSchema = z.object({
	response: z.object({
		games: z.array(
			z.object({
				appid: z.number(),
				achievements: z.array(
					z.object({
						statid: z.number(),
						bit: z.number(),
						name: z.string(),
						desc: z.string(),
						icon: z.string(),
						icon_gray: z.string(),
						hidden: z.boolean(),
						player_percent_unlocked: z.string(),
					}),
				),
			}),
		),
	}),
})

export type Badge = z.infer<typeof BadgeSchema>
export type BadgesResponse = z.infer<typeof BadgesResponseSchema>
export type GameAppInfo = z.infer<typeof GameAppInfoSchema>
export type Game = z.infer<typeof GameSchema>
export type OwnedGamesResponse = z.infer<typeof OwnedGamesResponseSchema>
export type RecentlyPlayedGame = z.infer<typeof RecentlyPlayedGameSchema>
export type RecentlyPlayedGamesResponse = z.infer<
	typeof RecentlyPlayedGamesResponseSchema
>
export type SteamLevelResponse = z.infer<typeof SteamLevelResponseSchema>
export type LastPlayedTimesResponse = z.infer<
	typeof LastPlayedTimesResponseSchema
>
export type AnimatedAvatarResponse = z.infer<
	typeof AnimatedAvatarResponseSchema
>
export type AvatarFrameResponse = z.infer<typeof AvatarFrameResponseSchema>
export type ProfileBackgroundResponse = z.infer<
	typeof ProfileBackgroundResponseSchema
>

export type PlayerLinkDetailsResponse = z.infer<
	typeof PlayerLinkDetailsResponseSchema
>

export type ProfileCustomizationResponse = z.infer<
	typeof ProfileCustomizationResponseSchema
>

export type ProfileItemsEquippedResponse = z.infer<
	typeof ProfileItemsEquippedResponseSchema
>

export type SteamDeckKeyboardSkinsResponse = z.infer<
	typeof SteamDeckKeyboardSkinsResponseSchema
>
export type TopAchievementsForGamesResponse = z.infer<
	typeof TopAchievementsForGamesResponseSchema
>
