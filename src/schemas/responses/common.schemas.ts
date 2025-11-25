import { z } from 'zod'

const SteamApiResponseSchema = <T extends z.ZodTypeAny>(
	responseSchema: T,
): z.ZodObject<{ response: T }> =>
	z.object({
		response: responseSchema,
	}) as z.ZodObject<{ response: T }>

export type SteamApiResponse = z.infer<typeof SteamApiResponseSchema>

export const AppDataReviewsSchema: z.ZodObject<{
	summary_filtered: z.ZodObject<
		{
			review_count: z.ZodNumber
			percent_positive: z.ZodNumber
			review_score: z.ZodNumber
			review_score_label: z.ZodEnum<{
				'Very Positive': 'Very Positive'
				Positive: 'Positive'
				'Mostly Positive': 'Mostly Positive'
				Mixed: 'Mixed'
				'Mostly Negative': 'Mostly Negative'
				Negative: 'Negative'
				'Very Negative': 'Very Negative'
			}>
		},
		z.core.$strip
	>
}> = z
	.object({
		summary_filtered: z.object({
			review_count: z.number(),
			percent_positive: z.number(),
			review_score: z.number(),
			review_score_label: z.enum([
				'Very Positive',
				'Positive',
				'Mostly Positive',
				'Mixed',
				'Mostly Negative',
				'Negative',
				'Very Negative',
			]),
		}),
	})
	.describe('Requires include_reviews in data_request')

export const AppDataBasicInfoSchema: z.ZodObject<{
	short_description: z.ZodOptional<z.ZodString>
	publishers: z.ZodArray<
		z.ZodObject<
			{
				name: z.ZodString
				creator_clan_account_id: z.ZodOptional<z.ZodNumber>
			},
			z.core.$strip
		>
	>
	developers: z.ZodArray<
		z.ZodObject<
			{
				name: z.ZodString
				creator_clan_account_id: z.ZodOptional<z.ZodNumber>
			},
			z.core.$strip
		>
	>
}> = z
	.object({
		short_description: z.string().optional(),
		publishers: z.array(
			z.object({
				name: z.string(),
				creator_clan_account_id: z.number().optional(),
			}),
		),
		developers: z.array(
			z.object({
				name: z.string(),
				creator_clan_account_id: z.number().optional(),
			}),
		),
	})
	.describe('Requires include_basic_info in data_request')

export const AppDataAssetSchema: z.ZodObject<{
	asset_url_format: z.ZodString
	main_capsule: z.ZodOptional<z.ZodString>
	small_capsule: z.ZodOptional<z.ZodString>
	header: z.ZodOptional<z.ZodString>
	package_header: z.ZodOptional<z.ZodString>
	hero_capsule: z.ZodOptional<z.ZodString>
	library_capsule: z.ZodOptional<z.ZodString>
	library_capsule_2x: z.ZodOptional<z.ZodString>
	library_hero: z.ZodOptional<z.ZodString>
	library_hero_2x: z.ZodOptional<z.ZodString>
	community_icon: z.ZodOptional<z.ZodString>
	page_background_path: z.ZodOptional<z.ZodString>
	raw_page_background: z.ZodOptional<z.ZodString>
}> = z
	.object({
		asset_url_format: z.string(),
		main_capsule: z.string().optional(),
		small_capsule: z.string().optional(),
		header: z.string().optional(),
		package_header: z.string().optional(),
		hero_capsule: z.string().optional(),
		library_capsule: z.string().optional(),
		library_capsule_2x: z.string().optional(),
		library_hero: z.string().optional(),
		library_hero_2x: z.string().optional(),
		community_icon: z.string().optional(),
		page_background_path: z.string().optional(),
		raw_page_background: z.string().optional(),
	})
	.describe('Requires include_assets in data_request')

export const AppDataReleaseSchema: z.ZodObject<{
	steam_release_date: z.ZodOptional<z.ZodNumber>
	mac_release_date: z.ZodOptional<z.ZodNumber>
	linux_release_date: z.ZodOptional<z.ZodNumber>
	original_release_date: z.ZodOptional<z.ZodNumber>
}> = z
	.object({
		steam_release_date: z.number().optional(),
		mac_release_date: z.number().optional(),
		linux_release_date: z.number().optional(),
		original_release_date: z.number().optional(),
	})
	.describe('Requires include_release in data_request')

export const AppDataPlatformsSchema: z.ZodObject<{
	windows: z.ZodOptional<z.ZodBoolean>
	mac: z.ZodOptional<z.ZodBoolean>
	linux: z.ZodOptional<z.ZodBoolean>
	steamos_linux: z.ZodOptional<z.ZodBoolean>
	vr_support: z.ZodOptional<z.ZodRecord<z.ZodAny, z.ZodAny>>
	steam_deck_compat_category: z.ZodOptional<z.ZodNumber>
	steam_os_compat_category: z.ZodOptional<z.ZodNumber>
}> = z
	.object({
		windows: z.boolean().optional(),
		mac: z.boolean().optional(),
		linux: z.boolean().optional(),
		steamos_linux: z.boolean().optional(),
		vr_support: z.record(z.any(), z.any()).optional(),
		steam_deck_compat_category: z.number().optional(),
		steam_os_compat_category: z.number().optional(),
	})
	.describe('Requires include_platforms in data_request')

export const AppDataPurchaseOptionSchema: z.ZodObject<{
	packageid: z.ZodNumber
	purchase_option_name: z.ZodString
	final_price_in_cents: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>
	original_price_in_cents: z.ZodOptional<
		z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>
	>
	formatted_final_price: z.ZodString
	formatted_original_price: z.ZodString
	discount_pct: z.ZodOptional<z.ZodNumber>
	active_discounts: z.ZodOptional<
		z.ZodArray<
			z.ZodObject<
				{
					discount_amount: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>
					discount_description: z.ZodString
					discount_end_date: z.ZodNumber
				},
				z.core.$strip
			>
		>
	>
	user_can_purchase_as_gift: z.ZodOptional<z.ZodBoolean>
	user_can_purchase: z.ZodOptional<z.ZodBoolean>
	hide_discount_pct_for_compliance: z.ZodBoolean
	included_game_count: z.ZodNumber
	requires_shipping: z.ZodOptional<z.ZodBoolean>
	must_purchase_as_set: z.ZodOptional<z.ZodBoolean>
	must_purchase_package: z.ZodOptional<z.ZodBoolean>
}> = z
	.object({
		packageid: z.number(),
		purchase_option_name: z.string(),
		final_price_in_cents: z.union([z.number(), z.string()]),
		original_price_in_cents: z.union([z.number(), z.string()]).optional(),
		formatted_final_price: z
			.string()
			.describe('Formatted price in the currency of the user ex: C$ 399.20'),
		formatted_original_price: z
			.string()
			.describe('Formatted price in the currency of the user ex: C$ 499.00'),
		discount_pct: z.number().optional(),
		active_discounts: z
			.array(
				z.object({
					discount_amount: z.union([z.number(), z.string()]),
					discount_description: z.string(),
					discount_end_date: z.number(),
				}),
			)
			.optional(),
		user_can_purchase_as_gift: z.boolean().optional(),
		user_can_purchase: z.boolean().optional(),
		hide_discount_pct_for_compliance: z.boolean(),
		included_game_count: z.number(),
		requires_shipping: z.boolean().optional(),
		must_purchase_as_set: z.boolean().optional(),
		must_purchase_package: z.boolean().optional(),
	})
	.describe('Not present for free games')

export const AppDataLinksSchema: z.ZodArray<
	z.ZodObject<
		{
			link_type: z.ZodNumber
			url: z.ZodOptional<z.ZodString>
		},
		z.core.$strip
	>
> = z.array(
	z
		.object({
			link_type: z.number().describe(
				`Platform link types:
					 1  - YouTube,
					 2  - Facebook,
					 3  - Twitter,
					 4  - Twitch,
					 5  - Discord,
					 9  - Weibo,
					 10 - Reddit,
					 11 - Instagram,
					 14 - TikTok,
					 19 - Douyin
					`,
			),
			url: z.string().optional(),
		})
		.describe('Requires include_links in data_request'),
)

export const AppDataScreenshotsItemSchema: z.ZodObject<{
	filename: z.ZodString
	ordinal: z.ZodNumber
}> = z.object({
	filename: z.string(),
	ordinal: z.number(),
})

export const AppDataScreenshotsSchema: z.ZodObject<{
	all_ages_screenshots: z.ZodArray<
		z.ZodObject<
			{
				filename: z.ZodString
				ordinal: z.ZodNumber
			},
			z.core.$strip
		>
	>
	mature_content_screenshots: z.ZodOptional<
		z.ZodArray<
			z.ZodObject<
				{
					filename: z.ZodString
					ordinal: z.ZodNumber
				},
				z.core.$strip
			>
		>
	>
}> = z
	.object({
		all_ages_screenshots: z.array(AppDataScreenshotsItemSchema),
		mature_content_screenshots: z
			.array(AppDataScreenshotsItemSchema)
			.optional(),
	})
	.describe('Requires include_screenshots in data_request')

export const AppDataTrailersSchema: z.ZodObject<{
	trailers: z.ZodObject<
		{
			highlights: z.ZodArray<
				z.ZodObject<
					{
						trailer_name: z.ZodString
						trailer_url_format: z.ZodString
						trailer_category: z.ZodNumber
						microtrailer: z.ZodArray<
							z.ZodObject<
								{
									filename: z.ZodString
									type: z.ZodString
								},
								z.core.$strip
							>
						>
						trailer_480p: z.ZodArray<
							z.ZodObject<
								{
									filename: z.ZodString
									type: z.ZodString
								},
								z.core.$strip
							>
						>
						trailer_max: z.ZodArray<
							z.ZodObject<
								{
									filename: z.ZodString
									type: z.ZodString
								},
								z.core.$strip
							>
						>
						adapative_trailers: z.ZodArray<
							z.ZodObject<
								{
									cdn_path: z.ZodString
									encoding: z.ZodString
								},
								z.core.$strip
							>
						>
						screenshot_medium: z.ZodString
						screenshot_large: z.ZodString
						trailer_base_id: z.ZodNumber
						all_ages: z.ZodBoolean
					},
					z.core.$strip
				>
			>
		},
		z.core.$strip
	>
}> = z
	.object({
		trailers: z.object({
			highlights: z.array(
				z.object({
					trailer_name: z.string(),
					trailer_url_format: z.string(),
					trailer_category: z.number(),
					microtrailer: z.array(
						z.object({
							filename: z.string(),
							type: z.string(),
						}),
					),
					trailer_480p: z.array(
						z.object({
							filename: z.string(),
							type: z.string(),
						}),
					),
					trailer_max: z.array(
						z.object({
							filename: z.string(),
							type: z.string(),
						}),
					),
					adapative_trailers: z.array(
						z.object({
							cdn_path: z.string(),
							encoding: z.string(),
						}),
					),
					screenshot_medium: z.string(),
					screenshot_large: z.string(),
					trailer_base_id: z.number(),
					all_ages: z.boolean(),
				}),
			),
		}),
	})
	.describe('Requires include_trailers in data_request')

export const AppDataSupportedLanguagesSchema: z.ZodObject<{
	supported_languages: z.ZodArray<
		z.ZodObject<
			{
				elanguage: z.ZodNumber
				eadditionallanguage: z.ZodNumber
				supported: z.ZodBoolean
				full_audio: z.ZodBoolean
				subtitles: z.ZodBoolean
			},
			z.core.$strip
		>
	>
}> = z
	.object({
		supported_languages: z.array(
			z.object({
				elanguage: z.number(),
				eadditionallanguage: z.number(),
				supported: z.boolean(),
				full_audio: z.boolean(),
				subtitles: z.boolean(),
			}),
		),
	})
	.describe('Requires include_supported_languages in data_request')

export const AppDataCategoriesSchema: z.ZodObject<{
	feature_categoryids: z.ZodArray<z.ZodNumber>
	controller_categoryids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
	supported_player_categoryids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
}> = z.object({
	feature_categoryids: z.array(z.number()),
	controller_categoryids: z.array(z.number()).optional(),
	supported_player_categoryids: z.array(z.number()).optional(),
})
export const AppDataSchema: z.ZodObject<{
	item_type: z.ZodNumber
	id: z.ZodNumber
	success: z.ZodNumber
	visible: z.ZodBoolean
	name: z.ZodString
	store_url_path: z.ZodString
	appid: z.ZodNumber
	type: z.ZodNumber
	is_free: z.ZodBoolean
	content_descriptorids: z.ZodArray<z.ZodNumber>
	categories: z.ZodOptional<
		z.ZodObject<
			{
				feature_categoryids: z.ZodArray<z.ZodNumber>
				controller_categoryids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
				supported_player_categoryids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
			},
			z.core.$strip
		>
	>
	best_purchase_option: z.ZodOptional<
		z.ZodObject<
			{
				packageid: z.ZodNumber
				purchase_option_name: z.ZodString
				final_price_in_cents: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>
				original_price_in_cents: z.ZodOptional<
					z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>
				>
				formatted_final_price: z.ZodString
				formatted_original_price: z.ZodString
				discount_pct: z.ZodOptional<z.ZodNumber>
				active_discounts: z.ZodOptional<
					z.ZodArray<
						z.ZodObject<
							{
								discount_amount: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>
								discount_description: z.ZodString
								discount_end_date: z.ZodNumber
							},
							z.core.$strip
						>
					>
				>
				user_can_purchase_as_gift: z.ZodOptional<z.ZodBoolean>
				user_can_purchase: z.ZodOptional<z.ZodBoolean>
				hide_discount_pct_for_compliance: z.ZodBoolean
				included_game_count: z.ZodNumber
				requires_shipping: z.ZodOptional<z.ZodBoolean>
				must_purchase_as_set: z.ZodOptional<z.ZodBoolean>
				must_purchase_package: z.ZodOptional<z.ZodBoolean>
			},
			z.core.$strip
		>
	>
	reviews: z.ZodOptional<
		z.ZodObject<
			{
				summary_filtered: z.ZodObject<
					{
						review_count: z.ZodNumber
						percent_positive: z.ZodNumber
						review_score: z.ZodNumber
						review_score_label: z.ZodEnum<{
							'Very Positive': 'Very Positive'
							Positive: 'Positive'
							'Mostly Positive': 'Mostly Positive'
							Mixed: 'Mixed'
							'Mostly Negative': 'Mostly Negative'
							Negative: 'Negative'
							'Very Negative': 'Very Negative'
						}>
					},
					z.core.$strip
				>
			},
			z.core.$strip
		>
	>
	basic_info: z.ZodOptional<
		z.ZodObject<
			{
				short_description: z.ZodOptional<z.ZodString>
				publishers: z.ZodArray<
					z.ZodObject<
						{
							name: z.ZodString
							creator_clan_account_id: z.ZodOptional<z.ZodNumber>
						},
						z.core.$strip
					>
				>
				developers: z.ZodArray<
					z.ZodObject<
						{
							name: z.ZodString
							creator_clan_account_id: z.ZodOptional<z.ZodNumber>
						},
						z.core.$strip
					>
				>
			},
			z.core.$strip
		>
	>
	assets: z.ZodOptional<
		z.ZodObject<
			{
				asset_url_format: z.ZodString
				main_capsule: z.ZodOptional<z.ZodString>
				small_capsule: z.ZodOptional<z.ZodString>
				header: z.ZodOptional<z.ZodString>
				package_header: z.ZodOptional<z.ZodString>
				hero_capsule: z.ZodOptional<z.ZodString>
				library_capsule: z.ZodOptional<z.ZodString>
				library_capsule_2x: z.ZodOptional<z.ZodString>
				library_hero: z.ZodOptional<z.ZodString>
				library_hero_2x: z.ZodOptional<z.ZodString>
				community_icon: z.ZodOptional<z.ZodString>
				page_background_path: z.ZodOptional<z.ZodString>
				raw_page_background: z.ZodOptional<z.ZodString>
			},
			z.core.$strip
		>
	>
	release: z.ZodOptional<
		z.ZodObject<
			{
				steam_release_date: z.ZodOptional<z.ZodNumber>
				mac_release_date: z.ZodOptional<z.ZodNumber>
				linux_release_date: z.ZodOptional<z.ZodNumber>
				original_release_date: z.ZodOptional<z.ZodNumber>
			},
			z.core.$strip
		>
	>
	platforms: z.ZodOptional<
		z.ZodObject<
			{
				windows: z.ZodOptional<z.ZodBoolean>
				mac: z.ZodOptional<z.ZodBoolean>
				linux: z.ZodOptional<z.ZodBoolean>
				steamos_linux: z.ZodOptional<z.ZodBoolean>
				vr_support: z.ZodOptional<z.ZodRecord<z.ZodAny, z.ZodAny>>
				steam_deck_compat_category: z.ZodOptional<z.ZodNumber>
				steam_os_compat_category: z.ZodOptional<z.ZodNumber>
			},
			z.core.$strip
		>
	>
	purchase_options: z.ZodOptional<
		z.ZodArray<
			z.ZodObject<
				{
					packageid: z.ZodNumber
					purchase_option_name: z.ZodString
					final_price_in_cents: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>
					original_price_in_cents: z.ZodOptional<
						z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>
					>
					formatted_final_price: z.ZodString
					formatted_original_price: z.ZodString
					discount_pct: z.ZodOptional<z.ZodNumber>
					active_discounts: z.ZodOptional<
						z.ZodArray<
							z.ZodObject<
								{
									discount_amount: z.ZodUnion<
										readonly [z.ZodNumber, z.ZodString]
									>
									discount_description: z.ZodString
									discount_end_date: z.ZodNumber
								},
								z.core.$strip
							>
						>
					>
					user_can_purchase_as_gift: z.ZodOptional<z.ZodBoolean>
					user_can_purchase: z.ZodOptional<z.ZodBoolean>
					hide_discount_pct_for_compliance: z.ZodBoolean
					included_game_count: z.ZodNumber
					requires_shipping: z.ZodOptional<z.ZodBoolean>
					must_purchase_as_set: z.ZodOptional<z.ZodBoolean>
					must_purchase_package: z.ZodOptional<z.ZodBoolean>
				},
				z.core.$strip
			>
		>
	>
	links: z.ZodOptional<
		z.ZodArray<
			z.ZodObject<
				{
					link_type: z.ZodNumber
					url: z.ZodOptional<z.ZodString>
				},
				z.core.$strip
			>
		>
	>
	screenshots: z.ZodOptional<
		z.ZodObject<
			{
				all_ages_screenshots: z.ZodArray<
					z.ZodObject<
						{
							filename: z.ZodString
							ordinal: z.ZodNumber
						},
						z.core.$strip
					>
				>
				mature_content_screenshots: z.ZodOptional<
					z.ZodArray<
						z.ZodObject<
							{
								filename: z.ZodString
								ordinal: z.ZodNumber
							},
							z.core.$strip
						>
					>
				>
			},
			z.core.$strip
		>
	>
	trailers: z.ZodOptional<
		z.ZodObject<
			{
				trailers: z.ZodObject<
					{
						highlights: z.ZodArray<
							z.ZodObject<
								{
									trailer_name: z.ZodString
									trailer_url_format: z.ZodString
									trailer_category: z.ZodNumber
									microtrailer: z.ZodArray<
										z.ZodObject<
											{
												filename: z.ZodString
												type: z.ZodString
											},
											z.core.$strip
										>
									>
									trailer_480p: z.ZodArray<
										z.ZodObject<
											{
												filename: z.ZodString
												type: z.ZodString
											},
											z.core.$strip
										>
									>
									trailer_max: z.ZodArray<
										z.ZodObject<
											{
												filename: z.ZodString
												type: z.ZodString
											},
											z.core.$strip
										>
									>
									adapative_trailers: z.ZodArray<
										z.ZodObject<
											{
												cdn_path: z.ZodString
												encoding: z.ZodString
											},
											z.core.$strip
										>
									>
									screenshot_medium: z.ZodString
									screenshot_large: z.ZodString
									trailer_base_id: z.ZodNumber
									all_ages: z.ZodBoolean
								},
								z.core.$strip
							>
						>
					},
					z.core.$strip
				>
			},
			z.core.$strip
		>
	>
	tagids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
	full_description: z.ZodOptional<z.ZodString>
	supported_languages: z.ZodOptional<
		z.ZodObject<
			{
				supported_languages: z.ZodArray<
					z.ZodObject<
						{
							elanguage: z.ZodNumber
							eadditionallanguage: z.ZodNumber
							supported: z.ZodBoolean
							full_audio: z.ZodBoolean
							subtitles: z.ZodBoolean
						},
						z.core.$strip
					>
				>
			},
			z.core.$strip
		>
	>
	related_items: z.ZodOptional<
		z.ZodObject<
			{
				parent_appid: z.ZodOptional<z.ZodNumber>
			},
			z.core.$strip
		>
	>
	tags: z.ZodOptional<
		z.ZodArray<
			z.ZodObject<
				{
					tagid: z.ZodNumber
					weight: z.ZodNumber
				},
				z.core.$strip
			>
		>
	>
}> = z.object({
	item_type: z.number(),
	id: z.number(),
	success: z.number(),
	visible: z.boolean(),
	name: z.string(),
	store_url_path: z.string(),
	appid: z.number(),
	type: z.number(),
	is_free: z.boolean(),
	content_descriptorids: z.array(z.number()),
	categories: AppDataCategoriesSchema.optional(),
	best_purchase_option: AppDataPurchaseOptionSchema.optional(),
	reviews: AppDataReviewsSchema.optional(),
	basic_info: AppDataBasicInfoSchema.optional(),
	assets: AppDataAssetSchema.optional(),
	release: AppDataReleaseSchema.optional(),
	platforms: AppDataPlatformsSchema.optional(),
	purchase_options: z
		.array(AppDataPurchaseOptionSchema)
		.optional()
		.describe('Requires include_all_purchase_options in data_request'),
	links: AppDataLinksSchema.optional(),
	screenshots: AppDataScreenshotsSchema.optional(),
	trailers: AppDataTrailersSchema.optional(),
	tagids: z
		.array(z.number())
		.optional()
		.describe('Requires include_tag_count in data_request'),
	full_description: z
		.string()
		.optional()
		.describe('Requires include_full_description in data_request'),
	supported_languages: AppDataSupportedLanguagesSchema.optional(),
	related_items: z
		.object({
			parent_appid: z.number().optional(),
		})
		.optional(),
	tags: z
		.array(
			z.object({
				tagid: z.number(),
				weight: z.number(),
			}),
		)
		.optional()
		.describe('Requires include_tag_count in data_request'),
})
export type AppData = z.infer<typeof AppDataSchema>
