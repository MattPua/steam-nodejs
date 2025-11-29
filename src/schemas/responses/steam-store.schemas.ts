import { z } from 'zod'

export const SteamStoreRequirementSchema: z.ZodObject<{
	minimum: z.ZodOptional<z.ZodString>
	recommended: z.ZodOptional<z.ZodString>
}> = z.object({
	minimum: z.string().optional().describe('Can be in HTML or plain text'),
	recommended: z.string().optional().describe('Can be in HTML or plain text'),
})

export const SteamStorePriceOverviewSchema: z.ZodObject<{
	currency: z.ZodString
	initial: z.ZodNumber
	final: z.ZodNumber
	discount_percent: z.ZodNumber
	initial_formatted: z.ZodString
	final_formatted: z.ZodString
}> = z.object({
	currency: z.string(),
	initial: z.number(),
	final: z.number(),
	discount_percent: z.number(),
	initial_formatted: z.string(),
	final_formatted: z.string(),
})

export const SteamStorePackageGroupSubSchema: z.ZodObject<{
	packageid: z.ZodNumber
	percent_savings_text: z.ZodString
	percent_savings: z.ZodNumber
	option_text: z.ZodString
	option_description: z.ZodString
	can_get_free_license: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
	is_free_license: z.ZodUnion<readonly [z.ZodBoolean, z.ZodNumber, z.ZodString]>
	price_in_cents_with_discount: z.ZodNumber
}> = z.object({
	packageid: z.number(),
	percent_savings_text: z.string(),
	percent_savings: z.number(),
	option_text: z.string(),
	option_description: z.string(),
	can_get_free_license: z.union([z.string(), z.number()]),
	is_free_license: z.union([z.boolean(), z.number(), z.string()]),
	price_in_cents_with_discount: z.number(),
})

export const SteamStorePackageGroupSchema: z.ZodObject<{
	name: z.ZodString
	title: z.ZodString
	description: z.ZodString
	selection_text: z.ZodString
	save_text: z.ZodString
	display_type: z.ZodNumber
	is_recurring_subscription: z.ZodUnion<readonly [z.ZodString, z.ZodBoolean]>
	subs: z.ZodArray<
		z.ZodObject<
			{
				packageid: z.ZodNumber
				percent_savings_text: z.ZodString
				percent_savings: z.ZodNumber
				option_text: z.ZodString
				option_description: z.ZodString
				can_get_free_license: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
				is_free_license: z.ZodUnion<
					readonly [z.ZodBoolean, z.ZodNumber, z.ZodString]
				>
				price_in_cents_with_discount: z.ZodNumber
			},
			z.core.$strip
		>
	>
}> = z.object({
	name: z.string(),
	title: z.string(),
	description: z.string(),
	selection_text: z.string(),
	save_text: z.string(),
	display_type: z.number(),
	is_recurring_subscription: z.union([z.string(), z.boolean()]),
	subs: z.array(SteamStorePackageGroupSubSchema),
})

export const SteamStorePlatformsSchema: z.ZodObject<{
	windows: z.ZodBoolean
	mac: z.ZodBoolean
	linux: z.ZodBoolean
}> = z.object({
	windows: z.boolean(),
	mac: z.boolean(),
	linux: z.boolean(),
})

export const SteamStoreMetacriticSchema: z.ZodObject<{
	score: z.ZodNumber
	url: z.ZodString
}> = z.object({
	score: z.number(),
	url: z.string(),
})

export const SteamStoreCategorySchema: z.ZodObject<{
	id: z.ZodNumber
	description: z.ZodString
}> = z.object({
	id: z.number(),
	description: z.string(),
})

export const SteamStoreGenreSchema: z.ZodObject<{
	id: z.ZodString
	description: z.ZodString
}> = z.object({
	id: z.string(),
	description: z.string(),
})

export const SteamStoreScreenshotSchema: z.ZodObject<{
	id: z.ZodNumber
	path_thumbnail: z.ZodString
	path_full: z.ZodString
}> = z.object({
	id: z.number(),
	path_thumbnail: z.string(),
	path_full: z.string(),
})

export const SteamStoreMovieSchema: z.ZodObject<{
	id: z.ZodString
	name: z.ZodString
	thumbnail: z.ZodString
	dash_av1: z.ZodOptional<z.ZodString>
	dash_h264: z.ZodOptional<z.ZodString>
	hls_h264: z.ZodOptional<z.ZodString>
	highlight: z.ZodBoolean
}> = z.object({
	id: z.string(),
	name: z.string(),
	thumbnail: z.string(),
	dash_av1: z.string().optional(),
	dash_h264: z.string().optional(),
	hls_h264: z.string().optional(),
	highlight: z.boolean(),
})

export const SteamStoreRecommendationsSchema: z.ZodObject<{
	total: z.ZodNumber
}> = z.object({
	total: z.number(),
})

export const SteamStoreReleaseDateSchema: z.ZodObject<{
	coming_soon: z.ZodBoolean
	date: z.ZodString
}> = z.object({
	coming_soon: z.boolean(),
	date: z.string(),
})

export const SteamStoreSupportInfoSchema: z.ZodObject<{
	url: z.ZodString
	email: z.ZodString
}> = z.object({
	url: z.string(),
	email: z.string(),
})

export const SteamStoreContentDescriptorsSchema: z.ZodObject<{
	ids: z.ZodArray<z.ZodNumber>
	notes: z.ZodNullable<z.ZodString>
}> = z.object({
	ids: z.array(z.number()),
	notes: z.string().nullable(),
})

export const SteamStoreRatingsSubSchema: z.ZodObject<{
	rating: z.ZodOptional<z.ZodString>
	rating_generated: z.ZodOptional<z.ZodString>
	required_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>
	banned: z.ZodOptional<z.ZodString>
	use_age_gate: z.ZodOptional<z.ZodString>
	descriptors: z.ZodOptional<z.ZodString>
}> = z.object({
	rating: z.string().optional(),
	rating_generated: z.string().optional(),
	required_age: z.union([z.string(), z.number()]).optional(),
	banned: z.string().optional(),
	use_age_gate: z.string().optional(),
	descriptors: z.string().optional(),
})

export const SteamStoreRatingsSchema: z.ZodObject<{
	usk: z.ZodOptional<
		z.ZodObject<
			{
				rating: z.ZodOptional<z.ZodString>
				rating_generated: z.ZodOptional<z.ZodString>
				required_age: z.ZodOptional<
					z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
				>
				banned: z.ZodOptional<z.ZodString>
				use_age_gate: z.ZodOptional<z.ZodString>
				descriptors: z.ZodOptional<z.ZodString>
			},
			z.core.$strip
		>
	>
	dejus: z.ZodOptional<
		z.ZodObject<
			{
				rating: z.ZodOptional<z.ZodString>
				rating_generated: z.ZodOptional<z.ZodString>
				required_age: z.ZodOptional<
					z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
				>
				banned: z.ZodOptional<z.ZodString>
				use_age_gate: z.ZodOptional<z.ZodString>
				descriptors: z.ZodOptional<z.ZodString>
			},
			z.core.$strip
		>
	>
	steam_germany: z.ZodOptional<
		z.ZodObject<
			{
				rating: z.ZodOptional<z.ZodString>
				rating_generated: z.ZodOptional<z.ZodString>
				required_age: z.ZodOptional<
					z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
				>
				banned: z.ZodOptional<z.ZodString>
				use_age_gate: z.ZodOptional<z.ZodString>
				descriptors: z.ZodOptional<z.ZodString>
			},
			z.core.$strip
		>
	>
	esrb: z.ZodOptional<
		z.ZodObject<
			{
				rating: z.ZodOptional<z.ZodString>
				rating_generated: z.ZodOptional<z.ZodString>
				required_age: z.ZodOptional<
					z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
				>
				banned: z.ZodOptional<z.ZodString>
				use_age_gate: z.ZodOptional<z.ZodString>
				descriptors: z.ZodOptional<z.ZodString>
			},
			z.core.$strip
		>
	>
	pegi: z.ZodOptional<
		z.ZodObject<
			{
				rating: z.ZodOptional<z.ZodString>
				rating_generated: z.ZodOptional<z.ZodString>
				required_age: z.ZodOptional<
					z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
				>
				banned: z.ZodOptional<z.ZodString>
				use_age_gate: z.ZodOptional<z.ZodString>
				descriptors: z.ZodOptional<z.ZodString>
			},
			z.core.$strip
		>
	>
	bbfc: z.ZodOptional<
		z.ZodObject<
			{
				rating: z.ZodOptional<z.ZodString>
				rating_generated: z.ZodOptional<z.ZodString>
				required_age: z.ZodOptional<
					z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
				>
				banned: z.ZodOptional<z.ZodString>
				use_age_gate: z.ZodOptional<z.ZodString>
				descriptors: z.ZodOptional<z.ZodString>
			},
			z.core.$strip
		>
	>
	oflc: z.ZodOptional<
		z.ZodObject<
			{
				rating: z.ZodOptional<z.ZodString>
				rating_generated: z.ZodOptional<z.ZodString>
				required_age: z.ZodOptional<
					z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
				>
				banned: z.ZodOptional<z.ZodString>
				use_age_gate: z.ZodOptional<z.ZodString>
				descriptors: z.ZodOptional<z.ZodString>
			},
			z.core.$strip
		>
	>
	nzoflc: z.ZodOptional<
		z.ZodObject<
			{
				rating: z.ZodOptional<z.ZodString>
				rating_generated: z.ZodOptional<z.ZodString>
				required_age: z.ZodOptional<
					z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
				>
				banned: z.ZodOptional<z.ZodString>
				use_age_gate: z.ZodOptional<z.ZodString>
				descriptors: z.ZodOptional<z.ZodString>
			},
			z.core.$strip
		>
	>
}> = z.object({
	usk: SteamStoreRatingsSubSchema.optional(),
	dejus: SteamStoreRatingsSubSchema.optional(),
	steam_germany: SteamStoreRatingsSubSchema.optional(),
	esrb: SteamStoreRatingsSubSchema.optional(),
	pegi: SteamStoreRatingsSubSchema.optional(),
	bbfc: SteamStoreRatingsSubSchema.optional(),
	oflc: SteamStoreRatingsSubSchema.optional(),
	nzoflc: SteamStoreRatingsSubSchema.optional(),
})

export const SteamStoreDataSchema: z.ZodObject<{
	type: z.ZodString
	name: z.ZodString
	steam_appid: z.ZodNumber
	required_age: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
	is_free: z.ZodBoolean
	controller_support: z.ZodOptional<
		z.ZodEnum<{
			full: 'full'
		}>
	>
	dlc: z.ZodOptional<z.ZodArray<z.ZodNumber>>
	detailed_description: z.ZodString
	about_the_game: z.ZodString
	short_description: z.ZodString
	supported_languages: z.ZodString
	reviews: z.ZodOptional<z.ZodString>
	header_image: z.ZodNullable<z.ZodOptional<z.ZodString>>
	capsule_image: z.ZodString
	fullgame: z.ZodOptional<
		z.ZodObject<
			{
				appid: z.ZodString
				name: z.ZodString
			},
			z.core.$strip
		>
	>
	capsule_imagev5: z.ZodString
	website: z.ZodNullable<z.ZodString>
	legal_notice: z.ZodOptional<z.ZodString>
	pc_requirements: z.ZodObject<
		{
			minimum: z.ZodOptional<z.ZodString>
			recommended: z.ZodOptional<z.ZodString>
		},
		z.core.$strip
	>
	mac_requirements: z.ZodObject<
		{
			minimum: z.ZodOptional<z.ZodString>
			recommended: z.ZodOptional<z.ZodString>
		},
		z.core.$strip
	>
	linux_requirements: z.ZodObject<
		{
			minimum: z.ZodOptional<z.ZodString>
			recommended: z.ZodOptional<z.ZodString>
		},
		z.core.$strip
	>
	developers: z.ZodArray<z.ZodString>
	publishers: z.ZodArray<z.ZodString>
	price_overview: z.ZodOptional<
		z.ZodObject<
			{
				currency: z.ZodString
				initial: z.ZodNumber
				final: z.ZodNumber
				discount_percent: z.ZodNumber
				initial_formatted: z.ZodString
				final_formatted: z.ZodString
			},
			z.core.$strip
		>
	>
	packages: z.ZodArray<z.ZodNumber>
	package_groups: z.ZodArray<
		z.ZodObject<
			{
				name: z.ZodString
				title: z.ZodString
				description: z.ZodString
				selection_text: z.ZodString
				save_text: z.ZodString
				display_type: z.ZodNumber
				is_recurring_subscription: z.ZodUnion<
					readonly [z.ZodString, z.ZodBoolean]
				>
				subs: z.ZodArray<
					z.ZodObject<
						{
							packageid: z.ZodNumber
							percent_savings_text: z.ZodString
							percent_savings: z.ZodNumber
							option_text: z.ZodString
							option_description: z.ZodString
							can_get_free_license: z.ZodUnion<
								readonly [z.ZodString, z.ZodNumber]
							>
							is_free_license: z.ZodUnion<
								readonly [z.ZodBoolean, z.ZodNumber, z.ZodString]
							>
							price_in_cents_with_discount: z.ZodNumber
						},
						z.core.$strip
					>
				>
			},
			z.core.$strip
		>
	>
	platforms: z.ZodObject<
		{
			windows: z.ZodBoolean
			mac: z.ZodBoolean
			linux: z.ZodBoolean
		},
		z.core.$strip
	>
	metacritic: z.ZodOptional<
		z.ZodObject<
			{
				score: z.ZodNumber
				url: z.ZodString
			},
			z.core.$strip
		>
	>
	categories: z.ZodOptional<
		z.ZodArray<
			z.ZodObject<
				{
					id: z.ZodNumber
					description: z.ZodString
				},
				z.core.$strip
			>
		>
	>
	genres: z.ZodOptional<
		z.ZodArray<
			z.ZodObject<
				{
					id: z.ZodString
					description: z.ZodString
				},
				z.core.$strip
			>
		>
	>
	screenshots: z.ZodOptional<
		z.ZodArray<
			z.ZodObject<
				{
					id: z.ZodNumber
					path_thumbnail: z.ZodString
					path_full: z.ZodString
				},
				z.core.$strip
			>
		>
	>
	recommendations: z.ZodOptional<
		z.ZodObject<
			{
				total: z.ZodNumber
			},
			z.core.$strip
		>
	>
	release_date: z.ZodObject<
		{
			coming_soon: z.ZodBoolean
			date: z.ZodString
		},
		z.core.$strip
	>
	support_info: z.ZodObject<
		{
			url: z.ZodString
			email: z.ZodString
		},
		z.core.$strip
	>
	background: z.ZodString
	background_raw: z.ZodString
	content_descriptors: z.ZodObject<
		{
			ids: z.ZodArray<z.ZodNumber>
			notes: z.ZodNullable<z.ZodString>
		},
		z.core.$strip
	>
	ratings: z.ZodNullable<
		z.ZodOptional<
			z.ZodObject<
				{
					usk: z.ZodOptional<
						z.ZodObject<
							{
								rating: z.ZodOptional<z.ZodString>
								rating_generated: z.ZodOptional<z.ZodString>
								required_age: z.ZodOptional<
									z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
								>
								banned: z.ZodOptional<z.ZodString>
								use_age_gate: z.ZodOptional<z.ZodString>
								descriptors: z.ZodOptional<z.ZodString>
							},
							z.core.$strip
						>
					>
					dejus: z.ZodOptional<
						z.ZodObject<
							{
								rating: z.ZodOptional<z.ZodString>
								rating_generated: z.ZodOptional<z.ZodString>
								required_age: z.ZodOptional<
									z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
								>
								banned: z.ZodOptional<z.ZodString>
								use_age_gate: z.ZodOptional<z.ZodString>
								descriptors: z.ZodOptional<z.ZodString>
							},
							z.core.$strip
						>
					>
					steam_germany: z.ZodOptional<
						z.ZodObject<
							{
								rating: z.ZodOptional<z.ZodString>
								rating_generated: z.ZodOptional<z.ZodString>
								required_age: z.ZodOptional<
									z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
								>
								banned: z.ZodOptional<z.ZodString>
								use_age_gate: z.ZodOptional<z.ZodString>
								descriptors: z.ZodOptional<z.ZodString>
							},
							z.core.$strip
						>
					>
					esrb: z.ZodOptional<
						z.ZodObject<
							{
								rating: z.ZodOptional<z.ZodString>
								rating_generated: z.ZodOptional<z.ZodString>
								required_age: z.ZodOptional<
									z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
								>
								banned: z.ZodOptional<z.ZodString>
								use_age_gate: z.ZodOptional<z.ZodString>
								descriptors: z.ZodOptional<z.ZodString>
							},
							z.core.$strip
						>
					>
					pegi: z.ZodOptional<
						z.ZodObject<
							{
								rating: z.ZodOptional<z.ZodString>
								rating_generated: z.ZodOptional<z.ZodString>
								required_age: z.ZodOptional<
									z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
								>
								banned: z.ZodOptional<z.ZodString>
								use_age_gate: z.ZodOptional<z.ZodString>
								descriptors: z.ZodOptional<z.ZodString>
							},
							z.core.$strip
						>
					>
					bbfc: z.ZodOptional<
						z.ZodObject<
							{
								rating: z.ZodOptional<z.ZodString>
								rating_generated: z.ZodOptional<z.ZodString>
								required_age: z.ZodOptional<
									z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
								>
								banned: z.ZodOptional<z.ZodString>
								use_age_gate: z.ZodOptional<z.ZodString>
								descriptors: z.ZodOptional<z.ZodString>
							},
							z.core.$strip
						>
					>
					oflc: z.ZodOptional<
						z.ZodObject<
							{
								rating: z.ZodOptional<z.ZodString>
								rating_generated: z.ZodOptional<z.ZodString>
								required_age: z.ZodOptional<
									z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
								>
								banned: z.ZodOptional<z.ZodString>
								use_age_gate: z.ZodOptional<z.ZodString>
								descriptors: z.ZodOptional<z.ZodString>
							},
							z.core.$strip
						>
					>
					nzoflc: z.ZodOptional<
						z.ZodObject<
							{
								rating: z.ZodOptional<z.ZodString>
								rating_generated: z.ZodOptional<z.ZodString>
								required_age: z.ZodOptional<
									z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
								>
								banned: z.ZodOptional<z.ZodString>
								use_age_gate: z.ZodOptional<z.ZodString>
								descriptors: z.ZodOptional<z.ZodString>
							},
							z.core.$strip
						>
					>
				},
				z.core.$strip
			>
		>
	>
	movies: z.ZodOptional<
		z.ZodArray<
			z.ZodObject<
				{
					id: z.ZodString
					name: z.ZodString
					thumbnail: z.ZodString
					dash_av1: z.ZodOptional<z.ZodString>
					dash_h264: z.ZodOptional<z.ZodString>
					hls_h264: z.ZodOptional<z.ZodString>
					highlight: z.ZodBoolean
				},
				z.core.$strip
			>
		>
	>
	achievements: z.ZodOptional<
		z.ZodObject<
			{
				total: z.ZodNumber
				highlighted: z.ZodArray<
					z.ZodObject<
						{
							name: z.ZodString
							path: z.ZodString
						},
						z.core.$strip
					>
				>
			},
			z.core.$strip
		>
	>
}> = z.object({
	type: z.string(),
	name: z.string(),
	steam_appid: z.number(),
	required_age: z.union([z.string(), z.number()]),
	is_free: z.boolean(),
	controller_support: z.enum(['full']).optional(),
	dlc: z.array(z.number()).optional(),
	detailed_description: z.string().describe('can be in HTML or plain text'),
	about_the_game: z.string().describe('can be in HTML or plain text'),
	short_description: z.string().describe('in plain text'),
	supported_languages: z
		.string()
		.describe('Sometimes in HTML, Comma separated list of languages'),
	reviews: z.string().optional(),
	header_image: z.string().optional().nullable(),
	capsule_image: z.string(),
	fullgame: z
		.object({
			appid: z.string(),
			name: z.string(),
		})
		.optional(),
	capsule_imagev5: z.string(),
	website: z.string().nullable(),
	legal_notice: z.string().optional(),
	pc_requirements: SteamStoreRequirementSchema,
	mac_requirements: SteamStoreRequirementSchema,
	linux_requirements: SteamStoreRequirementSchema,
	developers: z.array(z.string()),
	publishers: z.array(z.string()),
	price_overview: SteamStorePriceOverviewSchema.optional(),
	packages: z.array(z.number()),
	package_groups: z.array(SteamStorePackageGroupSchema),
	platforms: SteamStorePlatformsSchema,
	metacritic: SteamStoreMetacriticSchema.optional(),
	categories: z.array(SteamStoreCategorySchema).optional(),
	genres: z.array(SteamStoreGenreSchema).optional(),
	screenshots: z.array(SteamStoreScreenshotSchema).optional(),
	recommendations: SteamStoreRecommendationsSchema.optional(),
	release_date: SteamStoreReleaseDateSchema,
	support_info: SteamStoreSupportInfoSchema,
	background: z.string(),
	background_raw: z.string(),
	content_descriptors: SteamStoreContentDescriptorsSchema,
	ratings: SteamStoreRatingsSchema.optional().nullable(),
	movies: z.array(SteamStoreMovieSchema).optional(),
	achievements: z
		.object({
			total: z.number(),
			highlighted: z.array(
				z.object({
					name: z.string(),
					path: z.string(),
				}),
			),
		})
		.optional(),
})

export const SteamStoreResponseSchema: z.ZodObject<{
	success: z.ZodBoolean
	data: z.ZodObject<
		{
			type: z.ZodString
			name: z.ZodString
			steam_appid: z.ZodNumber
			required_age: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
			is_free: z.ZodBoolean
			controller_support: z.ZodOptional<
				z.ZodEnum<{
					full: 'full'
				}>
			>
			dlc: z.ZodOptional<z.ZodArray<z.ZodNumber>>
			detailed_description: z.ZodString
			about_the_game: z.ZodString
			short_description: z.ZodString
			supported_languages: z.ZodString
			reviews: z.ZodOptional<z.ZodString>
			header_image: z.ZodNullable<z.ZodOptional<z.ZodString>>
			capsule_image: z.ZodString
			fullgame: z.ZodOptional<
				z.ZodObject<
					{
						appid: z.ZodString
						name: z.ZodString
					},
					z.core.$strip
				>
			>
			capsule_imagev5: z.ZodString
			website: z.ZodNullable<z.ZodString>
			legal_notice: z.ZodOptional<z.ZodString>
			pc_requirements: z.ZodObject<
				{
					minimum: z.ZodOptional<z.ZodString>
					recommended: z.ZodOptional<z.ZodString>
				},
				z.core.$strip
			>
			mac_requirements: z.ZodObject<
				{
					minimum: z.ZodOptional<z.ZodString>
					recommended: z.ZodOptional<z.ZodString>
				},
				z.core.$strip
			>
			linux_requirements: z.ZodObject<
				{
					minimum: z.ZodOptional<z.ZodString>
					recommended: z.ZodOptional<z.ZodString>
				},
				z.core.$strip
			>
			developers: z.ZodArray<z.ZodString>
			publishers: z.ZodArray<z.ZodString>
			price_overview: z.ZodOptional<
				z.ZodObject<
					{
						currency: z.ZodString
						initial: z.ZodNumber
						final: z.ZodNumber
						discount_percent: z.ZodNumber
						initial_formatted: z.ZodString
						final_formatted: z.ZodString
					},
					z.core.$strip
				>
			>
			packages: z.ZodArray<z.ZodNumber>
			package_groups: z.ZodArray<
				z.ZodObject<
					{
						name: z.ZodString
						title: z.ZodString
						description: z.ZodString
						selection_text: z.ZodString
						save_text: z.ZodString
						display_type: z.ZodNumber
						is_recurring_subscription: z.ZodUnion<
							readonly [z.ZodString, z.ZodBoolean]
						>
						subs: z.ZodArray<
							z.ZodObject<
								{
									packageid: z.ZodNumber
									percent_savings_text: z.ZodString
									percent_savings: z.ZodNumber
									option_text: z.ZodString
									option_description: z.ZodString
									can_get_free_license: z.ZodUnion<
										readonly [z.ZodString, z.ZodNumber]
									>
									is_free_license: z.ZodUnion<
										readonly [z.ZodBoolean, z.ZodNumber, z.ZodString]
									>
									price_in_cents_with_discount: z.ZodNumber
								},
								z.core.$strip
							>
						>
					},
					z.core.$strip
				>
			>
			platforms: z.ZodObject<
				{
					windows: z.ZodBoolean
					mac: z.ZodBoolean
					linux: z.ZodBoolean
				},
				z.core.$strip
			>
			metacritic: z.ZodOptional<
				z.ZodObject<
					{
						score: z.ZodNumber
						url: z.ZodString
					},
					z.core.$strip
				>
			>
			categories: z.ZodOptional<
				z.ZodArray<
					z.ZodObject<
						{
							id: z.ZodNumber
							description: z.ZodString
						},
						z.core.$strip
					>
				>
			>
			genres: z.ZodOptional<
				z.ZodArray<
					z.ZodObject<
						{
							id: z.ZodString
							description: z.ZodString
						},
						z.core.$strip
					>
				>
			>
			screenshots: z.ZodOptional<
				z.ZodArray<
					z.ZodObject<
						{
							id: z.ZodNumber
							path_thumbnail: z.ZodString
							path_full: z.ZodString
						},
						z.core.$strip
					>
				>
			>
			recommendations: z.ZodOptional<
				z.ZodObject<
					{
						total: z.ZodNumber
					},
					z.core.$strip
				>
			>
			release_date: z.ZodObject<
				{
					coming_soon: z.ZodBoolean
					date: z.ZodString
				},
				z.core.$strip
			>
			support_info: z.ZodObject<
				{
					url: z.ZodString
					email: z.ZodString
				},
				z.core.$strip
			>
			background: z.ZodString
			background_raw: z.ZodString
			content_descriptors: z.ZodObject<
				{
					ids: z.ZodArray<z.ZodNumber>
					notes: z.ZodNullable<z.ZodString>
				},
				z.core.$strip
			>
			ratings: z.ZodNullable<
				z.ZodOptional<
					z.ZodObject<
						{
							usk: z.ZodOptional<
								z.ZodObject<
									{
										rating: z.ZodOptional<z.ZodString>
										rating_generated: z.ZodOptional<z.ZodString>
										required_age: z.ZodOptional<
											z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
										>
										banned: z.ZodOptional<z.ZodString>
										use_age_gate: z.ZodOptional<z.ZodString>
										descriptors: z.ZodOptional<z.ZodString>
									},
									z.core.$strip
								>
							>
							dejus: z.ZodOptional<
								z.ZodObject<
									{
										rating: z.ZodOptional<z.ZodString>
										rating_generated: z.ZodOptional<z.ZodString>
										required_age: z.ZodOptional<
											z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
										>
										banned: z.ZodOptional<z.ZodString>
										use_age_gate: z.ZodOptional<z.ZodString>
										descriptors: z.ZodOptional<z.ZodString>
									},
									z.core.$strip
								>
							>
							steam_germany: z.ZodOptional<
								z.ZodObject<
									{
										rating: z.ZodOptional<z.ZodString>
										rating_generated: z.ZodOptional<z.ZodString>
										required_age: z.ZodOptional<
											z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
										>
										banned: z.ZodOptional<z.ZodString>
										use_age_gate: z.ZodOptional<z.ZodString>
										descriptors: z.ZodOptional<z.ZodString>
									},
									z.core.$strip
								>
							>
							esrb: z.ZodOptional<
								z.ZodObject<
									{
										rating: z.ZodOptional<z.ZodString>
										rating_generated: z.ZodOptional<z.ZodString>
										required_age: z.ZodOptional<
											z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
										>
										banned: z.ZodOptional<z.ZodString>
										use_age_gate: z.ZodOptional<z.ZodString>
										descriptors: z.ZodOptional<z.ZodString>
									},
									z.core.$strip
								>
							>
							pegi: z.ZodOptional<
								z.ZodObject<
									{
										rating: z.ZodOptional<z.ZodString>
										rating_generated: z.ZodOptional<z.ZodString>
										required_age: z.ZodOptional<
											z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
										>
										banned: z.ZodOptional<z.ZodString>
										use_age_gate: z.ZodOptional<z.ZodString>
										descriptors: z.ZodOptional<z.ZodString>
									},
									z.core.$strip
								>
							>
							bbfc: z.ZodOptional<
								z.ZodObject<
									{
										rating: z.ZodOptional<z.ZodString>
										rating_generated: z.ZodOptional<z.ZodString>
										required_age: z.ZodOptional<
											z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
										>
										banned: z.ZodOptional<z.ZodString>
										use_age_gate: z.ZodOptional<z.ZodString>
										descriptors: z.ZodOptional<z.ZodString>
									},
									z.core.$strip
								>
							>
							oflc: z.ZodOptional<
								z.ZodObject<
									{
										rating: z.ZodOptional<z.ZodString>
										rating_generated: z.ZodOptional<z.ZodString>
										required_age: z.ZodOptional<
											z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
										>
										banned: z.ZodOptional<z.ZodString>
										use_age_gate: z.ZodOptional<z.ZodString>
										descriptors: z.ZodOptional<z.ZodString>
									},
									z.core.$strip
								>
							>
							nzoflc: z.ZodOptional<
								z.ZodObject<
									{
										rating: z.ZodOptional<z.ZodString>
										rating_generated: z.ZodOptional<z.ZodString>
										required_age: z.ZodOptional<
											z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
										>
										banned: z.ZodOptional<z.ZodString>
										use_age_gate: z.ZodOptional<z.ZodString>
										descriptors: z.ZodOptional<z.ZodString>
									},
									z.core.$strip
								>
							>
						},
						z.core.$strip
					>
				>
			>
			movies: z.ZodOptional<
				z.ZodArray<
					z.ZodObject<
						{
							id: z.ZodString
							name: z.ZodString
							thumbnail: z.ZodString
							dash_av1: z.ZodOptional<z.ZodString>
							dash_h264: z.ZodOptional<z.ZodString>
							hls_h264: z.ZodOptional<z.ZodString>
							highlight: z.ZodBoolean
						},
						z.core.$strip
					>
				>
			>
			achievements: z.ZodOptional<
				z.ZodObject<
					{
						total: z.ZodNumber
						highlighted: z.ZodArray<
							z.ZodObject<
								{
									name: z.ZodString
									path: z.ZodString
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
	success: z.boolean(),
	data: SteamStoreDataSchema,
})

export const SteamStoreSchemasRoot: z.ZodRecord<
	z.ZodString,
	z.ZodObject<
		{
			success: z.ZodBoolean
			data: z.ZodObject<
				{
					type: z.ZodString
					name: z.ZodString
					steam_appid: z.ZodNumber
					required_age: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
					is_free: z.ZodBoolean
					controller_support: z.ZodOptional<
						z.ZodEnum<{
							full: 'full'
						}>
					>
					dlc: z.ZodOptional<z.ZodArray<z.ZodNumber>>
					detailed_description: z.ZodString
					about_the_game: z.ZodString
					short_description: z.ZodString
					supported_languages: z.ZodString
					reviews: z.ZodOptional<z.ZodString>
					header_image: z.ZodNullable<z.ZodOptional<z.ZodString>>
					capsule_image: z.ZodString
					fullgame: z.ZodOptional<
						z.ZodObject<
							{
								appid: z.ZodString
								name: z.ZodString
							},
							z.core.$strip
						>
					>
					capsule_imagev5: z.ZodString
					website: z.ZodNullable<z.ZodString>
					legal_notice: z.ZodOptional<z.ZodString>
					pc_requirements: z.ZodObject<
						{
							minimum: z.ZodOptional<z.ZodString>
							recommended: z.ZodOptional<z.ZodString>
						},
						z.core.$strip
					>
					mac_requirements: z.ZodObject<
						{
							minimum: z.ZodOptional<z.ZodString>
							recommended: z.ZodOptional<z.ZodString>
						},
						z.core.$strip
					>
					linux_requirements: z.ZodObject<
						{
							minimum: z.ZodOptional<z.ZodString>
							recommended: z.ZodOptional<z.ZodString>
						},
						z.core.$strip
					>
					developers: z.ZodArray<z.ZodString>
					publishers: z.ZodArray<z.ZodString>
					price_overview: z.ZodOptional<
						z.ZodObject<
							{
								currency: z.ZodString
								initial: z.ZodNumber
								final: z.ZodNumber
								discount_percent: z.ZodNumber
								initial_formatted: z.ZodString
								final_formatted: z.ZodString
							},
							z.core.$strip
						>
					>
					packages: z.ZodArray<z.ZodNumber>
					package_groups: z.ZodArray<
						z.ZodObject<
							{
								name: z.ZodString
								title: z.ZodString
								description: z.ZodString
								selection_text: z.ZodString
								save_text: z.ZodString
								display_type: z.ZodNumber
								is_recurring_subscription: z.ZodUnion<
									readonly [z.ZodString, z.ZodBoolean]
								>
								subs: z.ZodArray<
									z.ZodObject<
										{
											packageid: z.ZodNumber
											percent_savings_text: z.ZodString
											percent_savings: z.ZodNumber
											option_text: z.ZodString
											option_description: z.ZodString
											can_get_free_license: z.ZodUnion<
												readonly [z.ZodString, z.ZodNumber]
											>
											is_free_license: z.ZodUnion<
												readonly [z.ZodBoolean, z.ZodNumber, z.ZodString]
											>
											price_in_cents_with_discount: z.ZodNumber
										},
										z.core.$strip
									>
								>
							},
							z.core.$strip
						>
					>
					platforms: z.ZodObject<
						{
							windows: z.ZodBoolean
							mac: z.ZodBoolean
							linux: z.ZodBoolean
						},
						z.core.$strip
					>
					metacritic: z.ZodOptional<
						z.ZodObject<
							{
								score: z.ZodNumber
								url: z.ZodString
							},
							z.core.$strip
						>
					>
					categories: z.ZodOptional<
						z.ZodArray<
							z.ZodObject<
								{
									id: z.ZodNumber
									description: z.ZodString
								},
								z.core.$strip
							>
						>
					>
					genres: z.ZodOptional<
						z.ZodArray<
							z.ZodObject<
								{
									id: z.ZodString
									description: z.ZodString
								},
								z.core.$strip
							>
						>
					>
					screenshots: z.ZodOptional<
						z.ZodArray<
							z.ZodObject<
								{
									id: z.ZodNumber
									path_thumbnail: z.ZodString
									path_full: z.ZodString
								},
								z.core.$strip
							>
						>
					>
					recommendations: z.ZodOptional<
						z.ZodObject<
							{
								total: z.ZodNumber
							},
							z.core.$strip
						>
					>
					release_date: z.ZodObject<
						{
							coming_soon: z.ZodBoolean
							date: z.ZodString
						},
						z.core.$strip
					>
					support_info: z.ZodObject<
						{
							url: z.ZodString
							email: z.ZodString
						},
						z.core.$strip
					>
					background: z.ZodString
					background_raw: z.ZodString
					content_descriptors: z.ZodObject<
						{
							ids: z.ZodArray<z.ZodNumber>
							notes: z.ZodNullable<z.ZodString>
						},
						z.core.$strip
					>
					ratings: z.ZodNullable<
						z.ZodOptional<
							z.ZodObject<
								{
									usk: z.ZodOptional<
										z.ZodObject<
											{
												rating: z.ZodOptional<z.ZodString>
												rating_generated: z.ZodOptional<z.ZodString>
												required_age: z.ZodOptional<
													z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
												>
												banned: z.ZodOptional<z.ZodString>
												use_age_gate: z.ZodOptional<z.ZodString>
												descriptors: z.ZodOptional<z.ZodString>
											},
											z.core.$strip
										>
									>
									dejus: z.ZodOptional<
										z.ZodObject<
											{
												rating: z.ZodOptional<z.ZodString>
												rating_generated: z.ZodOptional<z.ZodString>
												required_age: z.ZodOptional<
													z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
												>
												banned: z.ZodOptional<z.ZodString>
												use_age_gate: z.ZodOptional<z.ZodString>
												descriptors: z.ZodOptional<z.ZodString>
											},
											z.core.$strip
										>
									>
									steam_germany: z.ZodOptional<
										z.ZodObject<
											{
												rating: z.ZodOptional<z.ZodString>
												rating_generated: z.ZodOptional<z.ZodString>
												required_age: z.ZodOptional<
													z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
												>
												banned: z.ZodOptional<z.ZodString>
												use_age_gate: z.ZodOptional<z.ZodString>
												descriptors: z.ZodOptional<z.ZodString>
											},
											z.core.$strip
										>
									>
									esrb: z.ZodOptional<
										z.ZodObject<
											{
												rating: z.ZodOptional<z.ZodString>
												rating_generated: z.ZodOptional<z.ZodString>
												required_age: z.ZodOptional<
													z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
												>
												banned: z.ZodOptional<z.ZodString>
												use_age_gate: z.ZodOptional<z.ZodString>
												descriptors: z.ZodOptional<z.ZodString>
											},
											z.core.$strip
										>
									>
									pegi: z.ZodOptional<
										z.ZodObject<
											{
												rating: z.ZodOptional<z.ZodString>
												rating_generated: z.ZodOptional<z.ZodString>
												required_age: z.ZodOptional<
													z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
												>
												banned: z.ZodOptional<z.ZodString>
												use_age_gate: z.ZodOptional<z.ZodString>
												descriptors: z.ZodOptional<z.ZodString>
											},
											z.core.$strip
										>
									>
									bbfc: z.ZodOptional<
										z.ZodObject<
											{
												rating: z.ZodOptional<z.ZodString>
												rating_generated: z.ZodOptional<z.ZodString>
												required_age: z.ZodOptional<
													z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
												>
												banned: z.ZodOptional<z.ZodString>
												use_age_gate: z.ZodOptional<z.ZodString>
												descriptors: z.ZodOptional<z.ZodString>
											},
											z.core.$strip
										>
									>
									oflc: z.ZodOptional<
										z.ZodObject<
											{
												rating: z.ZodOptional<z.ZodString>
												rating_generated: z.ZodOptional<z.ZodString>
												required_age: z.ZodOptional<
													z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
												>
												banned: z.ZodOptional<z.ZodString>
												use_age_gate: z.ZodOptional<z.ZodString>
												descriptors: z.ZodOptional<z.ZodString>
											},
											z.core.$strip
										>
									>
									nzoflc: z.ZodOptional<
										z.ZodObject<
											{
												rating: z.ZodOptional<z.ZodString>
												rating_generated: z.ZodOptional<z.ZodString>
												required_age: z.ZodOptional<
													z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>
												>
												banned: z.ZodOptional<z.ZodString>
												use_age_gate: z.ZodOptional<z.ZodString>
												descriptors: z.ZodOptional<z.ZodString>
											},
											z.core.$strip
										>
									>
								},
								z.core.$strip
							>
						>
					>
					movies: z.ZodOptional<
						z.ZodArray<
							z.ZodObject<
								{
									id: z.ZodString
									name: z.ZodString
									thumbnail: z.ZodString
									dash_av1: z.ZodOptional<z.ZodString>
									dash_h264: z.ZodOptional<z.ZodString>
									hls_h264: z.ZodOptional<z.ZodString>
									highlight: z.ZodBoolean
								},
								z.core.$strip
							>
						>
					>
					achievements: z.ZodOptional<
						z.ZodObject<
							{
								total: z.ZodNumber
								highlighted: z.ZodArray<
									z.ZodObject<
										{
											name: z.ZodString
											path: z.ZodString
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
		},
		z.core.$strip
	>
> = z.record(z.string(), SteamStoreResponseSchema)

export type SteamStoreResponse = z.infer<typeof SteamStoreResponseSchema>
export type SteamStoreSchemasRoot = z.infer<typeof SteamStoreSchemasRoot>

export type SteamStoreAppDetails = z.infer<typeof SteamStoreDataSchema>
