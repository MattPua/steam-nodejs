import { z } from 'zod'

const BadgeSchema: z.ZodObject<{
	badgeid: z.ZodNumber
	level: z.ZodNumber
	completion_time: z.ZodNumber
	xp: z.ZodNumber
	scarcity: z.ZodNumber
	appid: z.ZodOptional<z.ZodNumber>
	communityitemid: z.ZodOptional<z.ZodString>
	border_color: z.ZodOptional<z.ZodNumber>
}> = z.object({
	badgeid: z.number(),
	level: z.number(),
	completion_time: z.number(),
	xp: z.number(),
	scarcity: z.number(),
	appid: z.number().optional(),
	communityitemid: z.string().optional(),
	border_color: z.number().optional(),
})

const BadgesResponseSchema: z.ZodObject<{
	player_level: z.ZodOptional<z.ZodNumber>
	badges: z.ZodArray<
		z.ZodObject<
			{
				badgeid: z.ZodNumber
				level: z.ZodNumber
				completion_time: z.ZodNumber
				xp: z.ZodNumber
				scarcity: z.ZodNumber
				appid: z.ZodOptional<z.ZodNumber>
				communityitemid: z.ZodOptional<z.ZodString>
				border_color: z.ZodOptional<z.ZodNumber>
			},
			z.core.$strip
		>
	>
}> = z.object({
	player_level: z.number().optional(),
	badges: z.array(BadgeSchema),
})

const GameAppInfoSchema: z.ZodObject<{
	name: z.ZodOptional<z.ZodString>
	img_icon_url: z.ZodOptional<z.ZodString>
	img_logo_url: z.ZodOptional<z.ZodString>
	has_community_visible_stats: z.ZodOptional<z.ZodBoolean>
	content_descriptorids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
}> = z
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

const GameSchema: z.ZodIntersection<
	z.ZodIntersection<
		z.ZodIntersection<
			z.ZodObject<
				{
					name: z.ZodOptional<z.ZodString>
					img_icon_url: z.ZodOptional<z.ZodString>
					img_logo_url: z.ZodOptional<z.ZodString>
					has_community_visible_stats: z.ZodOptional<z.ZodBoolean>
					content_descriptorids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
				},
				z.core.$strip
			>,
			z.ZodObject<
				{
					capsule_filename: z.ZodString
					has_workshop: z.ZodBoolean
					has_marketplace: z.ZodBoolean
					has_dlc: z.ZodBoolean
				},
				z.core.$strip
			>
		>,
		z.ZodObject<
			{
				playtime_windows_forever: z.ZodNumber
				playtime_mac_forever: z.ZodNumber
				playtime_linux_forever: z.ZodNumber
				playtime_deck_forever: z.ZodNumber
				playtime_forever: z.ZodNumber
				playtime_2weeks: z.ZodOptional<z.ZodNumber>
			},
			z.core.$strip
		>
	>,
	z.ZodObject<
		{
			appid: z.ZodNumber
			playtime_forever: z.ZodNumber
			playtime_windows_forever: z.ZodNumber
			playtime_mac_forever: z.ZodNumber
			playtime_linux_forever: z.ZodNumber
			playtime_deck_forever: z.ZodNumber
			rtime_last_played: z.ZodNumber
			playtime_disconnected: z.ZodNumber
		},
		z.core.$strip
	>
> = GameAppInfoSchema.and(ExtendedGameAppInfoSchema)
	.and(PlaytimeSchema)
	.and(
		z.object({
			appid: z.number(),
			playtime_forever: z.number(),
			playtime_windows_forever: z.number(),
			playtime_mac_forever: z.number(),
			playtime_linux_forever: z.number(),
			playtime_deck_forever: z.number(),
			rtime_last_played: z.number(),
			playtime_disconnected: z.number(),
		}),
	)

const OwnedGamesResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			game_count: z.ZodNumber
			games: z.ZodArray<
				z.ZodIntersection<
					z.ZodIntersection<
						z.ZodIntersection<
							z.ZodObject<
								{
									name: z.ZodOptional<z.ZodString>
									img_icon_url: z.ZodOptional<z.ZodString>
									img_logo_url: z.ZodOptional<z.ZodString>
									has_community_visible_stats: z.ZodOptional<z.ZodBoolean>
									content_descriptorids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
								},
								z.core.$strip
							>,
							z.ZodObject<
								{
									capsule_filename: z.ZodString
									has_workshop: z.ZodBoolean
									has_marketplace: z.ZodBoolean
									has_dlc: z.ZodBoolean
								},
								z.core.$strip
							>
						>,
						z.ZodObject<
							{
								playtime_windows_forever: z.ZodNumber
								playtime_mac_forever: z.ZodNumber
								playtime_linux_forever: z.ZodNumber
								playtime_deck_forever: z.ZodNumber
								playtime_forever: z.ZodNumber
								playtime_2weeks: z.ZodOptional<z.ZodNumber>
							},
							z.core.$strip
						>
					>,
					z.ZodObject<
						{
							appid: z.ZodNumber
							playtime_forever: z.ZodNumber
							playtime_windows_forever: z.ZodNumber
							playtime_mac_forever: z.ZodNumber
							playtime_linux_forever: z.ZodNumber
							playtime_deck_forever: z.ZodNumber
							rtime_last_played: z.ZodNumber
							playtime_disconnected: z.ZodNumber
						},
						z.core.$strip
					>
				>
			>
		},
		z.core.$strip
	>
}> = z.object({
	response: z.object({
		game_count: z.number(),
		games: z.array(GameSchema),
	}),
})

const RecentlyPlayedGameSchema: z.ZodIntersection<
	z.ZodObject<
		{
			appid: z.ZodNumber
			name: z.ZodString
			playtime_2weeks: z.ZodOptional<z.ZodNumber>
			img_icon_url: z.ZodOptional<z.ZodString>
			img_logo_url: z.ZodOptional<z.ZodString>
		},
		z.core.$strip
	>,
	z.ZodObject<
		{
			playtime_windows_forever: z.ZodNumber
			playtime_mac_forever: z.ZodNumber
			playtime_linux_forever: z.ZodNumber
			playtime_deck_forever: z.ZodNumber
			playtime_forever: z.ZodNumber
			playtime_2weeks: z.ZodOptional<z.ZodNumber>
		},
		z.core.$strip
	>
> = z
	.object({
		appid: z.number(),
		name: z.string(),
		playtime_2weeks: z.number().optional(),
		img_icon_url: z.string().optional(),
		img_logo_url: z.string().optional(),
	})
	.and(PlaytimeSchema)

const RecentlyPlayedGamesResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			total_count: z.ZodOptional<z.ZodNumber>
			games: z.ZodArray<
				z.ZodIntersection<
					z.ZodObject<
						{
							appid: z.ZodNumber
							name: z.ZodString
							playtime_2weeks: z.ZodOptional<z.ZodNumber>
							img_icon_url: z.ZodOptional<z.ZodString>
							img_logo_url: z.ZodOptional<z.ZodString>
						},
						z.core.$strip
					>,
					z.ZodObject<
						{
							playtime_windows_forever: z.ZodNumber
							playtime_mac_forever: z.ZodNumber
							playtime_linux_forever: z.ZodNumber
							playtime_deck_forever: z.ZodNumber
							playtime_forever: z.ZodNumber
							playtime_2weeks: z.ZodOptional<z.ZodNumber>
						},
						z.core.$strip
					>
				>
			>
		},
		z.core.$strip
	>
}> = z.object({
	response: z.object({
		total_count: z.number().optional(),
		games: z.array(RecentlyPlayedGameSchema),
	}),
})

const SteamLevelResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			player_level: z.ZodNumber
		},
		z.core.$strip
	>
}> = z.object({
	response: z.object({
		player_level: z.number(),
	}),
})

const LastPlayedTimesResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			games: z.ZodArray<
				z.ZodIntersection<
					z.ZodObject<
						{
							appid: z.ZodNumber
							last_playtime: z.ZodNumber
							first_playtime: z.ZodNumber
							first_windows_playtime: z.ZodNumber
							first_mac_playtime: z.ZodNumber
							first_linux_playtime: z.ZodNumber
							first_deck_playtime: z.ZodNumber
							last_windows_playtime: z.ZodNumber
							last_mac_playtime: z.ZodNumber
							last_linux_playtime: z.ZodNumber
							last_deck_playtime: z.ZodNumber
							playtime_disconnected: z.ZodNumber
						},
						z.core.$strip
					>,
					z.ZodObject<
						{
							playtime_windows_forever: z.ZodNumber
							playtime_mac_forever: z.ZodNumber
							playtime_linux_forever: z.ZodNumber
							playtime_deck_forever: z.ZodNumber
							playtime_forever: z.ZodNumber
							playtime_2weeks: z.ZodOptional<z.ZodNumber>
						},
						z.core.$strip
					>
				>
			>
		},
		z.core.$strip
	>
}> = z.object({
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
				.and(PlaytimeSchema),
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

const AnimatedAvatarResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			avatar: z.ZodObject<
				{
					communityitemid: z.ZodString
					image_small: z.ZodOptional<z.ZodString>
					image_large: z.ZodString
					name: z.ZodString
					item_title: z.ZodString
					item_description: z.ZodString
					appid: z.ZodNumber
					item_type: z.ZodNumber
					item_class: z.ZodNumber
				},
				z.core.$strip
			>
		},
		z.core.$strip
	>
}> = z.object({
	response: z.object({
		avatar: ProfileItemSchema,
	}),
})

const AvatarFrameResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			avatar_frame: z.ZodObject<
				{
					communityitemid: z.ZodString
					image_small: z.ZodOptional<z.ZodString>
					image_large: z.ZodString
					name: z.ZodString
					item_title: z.ZodString
					item_description: z.ZodString
					appid: z.ZodNumber
					item_type: z.ZodNumber
					item_class: z.ZodNumber
				},
				z.core.$strip
			>
		},
		z.core.$strip
	>
}> = z.object({
	response: z.object({
		avatar_frame: ProfileItemSchema,
	}),
})

const ProfileBackgroundResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			profile_background: z.ZodObject<
				{
					communityitemid: z.ZodString
					image_small: z.ZodOptional<z.ZodString>
					image_large: z.ZodString
					name: z.ZodString
					item_title: z.ZodString
					item_description: z.ZodString
					appid: z.ZodNumber
					item_type: z.ZodNumber
					item_class: z.ZodNumber
					movie_webm: z.ZodString
					movie_mp4: z.ZodString
				},
				z.core.$strip
			>
		},
		z.core.$strip
	>
}> = z.object({
	response: z.object({
		profile_background: ProfileItemSchema.extend({
			movie_webm: z.string(),
			movie_mp4: z.string(),
		}),
	}),
})

const PlayerLinkDetailsResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			accounts: z.ZodArray<
				z.ZodObject<
					{
						public_data: z.ZodObject<
							{
								steamid: z.ZodString
								visibility_state: z.ZodNumber
								profile_state: z.ZodNumber
								sha_digest_avatar: z.ZodString
								persona_name: z.ZodString
								profile_url: z.ZodString
								content_country_restricted: z.ZodBoolean
							},
							z.core.$strip
						>
						private_data: z.ZodObject<
							{
								time_created: z.ZodNumber
								last_logoff_time: z.ZodNumber
								last_seen_online: z.ZodNumber
							},
							z.core.$strip
						>
					},
					z.core.$strip
				>
			>
		},
		z.core.$strip
	>
}> = z.object({
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

const ProfileCustomizationResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			slots_available: z.ZodNumber
			profile_theme: z.ZodObject<
				{
					theme_id: z.ZodString
					title: z.ZodString
				},
				z.core.$strip
			>
			profile_preferences: z.ZodObject<
				{
					hide_profile_awards: z.ZodBoolean
				},
				z.core.$strip
			>
		},
		z.core.$strip
	>
}> = z.object({
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

const ProfileItemsEquippedResponseSchema: z.ZodObject<{
	profile_background: z.ZodObject<
		{
			communityitemid: z.ZodString
			image_small: z.ZodOptional<z.ZodString>
			image_large: z.ZodString
			name: z.ZodString
			item_title: z.ZodString
			item_description: z.ZodString
			appid: z.ZodNumber
			item_type: z.ZodNumber
			item_class: z.ZodNumber
			movie_webm: z.ZodString
			movie_mp4: z.ZodString
			movie_webm_small: z.ZodString
			movie_mp4_small: z.ZodString
		},
		z.core.$strip
	>
	mini_profile_background: z.ZodObject<
		{
			communityitemid: z.ZodString
			image_small: z.ZodOptional<z.ZodString>
			image_large: z.ZodString
			name: z.ZodString
			item_title: z.ZodString
			item_description: z.ZodString
			appid: z.ZodNumber
			item_type: z.ZodNumber
			item_class: z.ZodNumber
			movie_webm: z.ZodString
			movie_mp4: z.ZodString
		},
		z.core.$strip
	>
	avatar_frame: z.ZodObject<
		{
			communityitemid: z.ZodString
			image_small: z.ZodOptional<z.ZodString>
			image_large: z.ZodString
			name: z.ZodString
			item_title: z.ZodString
			item_description: z.ZodString
			appid: z.ZodNumber
			item_type: z.ZodNumber
			item_class: z.ZodNumber
		},
		z.core.$strip
	>
	animated_avatar: z.ZodObject<
		{
			communityitemid: z.ZodString
			image_small: z.ZodOptional<z.ZodString>
			image_large: z.ZodString
			name: z.ZodString
			item_title: z.ZodString
			item_description: z.ZodString
			appid: z.ZodNumber
			item_type: z.ZodNumber
			item_class: z.ZodNumber
		},
		z.core.$strip
	>
	profile_modifier: z.ZodObject<
		{
			communityitemid: z.ZodString
			image_small: z.ZodOptional<z.ZodString>
			image_large: z.ZodString
			name: z.ZodString
			item_title: z.ZodString
			item_description: z.ZodString
			appid: z.ZodNumber
			item_type: z.ZodNumber
			item_class: z.ZodNumber
			profile_colors: z.ZodArray<
				z.ZodObject<
					{
						style_name: z.ZodString
						color: z.ZodString
					},
					z.core.$strip
				>
			>
		},
		z.core.$strip
	>
}> = z.object({
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
const SteamDeckKeyboardSkinsResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			steam_deck_keyboard_skin: z.ZodUnknown
		},
		z.core.$strip
	>
}> = z.object({
	response: z.object({
		steam_deck_keyboard_skin: z.unknown(),
	}),
})

const TopAchievementsForGamesResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			games: z.ZodArray<
				z.ZodObject<
					{
						appid: z.ZodNumber
						achievements: z.ZodArray<
							z.ZodObject<
								{
									statid: z.ZodNumber
									bit: z.ZodNumber
									name: z.ZodString
									desc: z.ZodString
									icon: z.ZodString
									icon_gray: z.ZodString
									hidden: z.ZodBoolean
									player_percent_unlocked: z.ZodString
								},
								z.core.$strip
							>
						>
					},
					z.core.$strip
				>
			>
		},
		z.core.$strip
	>
}> = z.object({
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
