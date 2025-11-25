import { z } from 'zod'

export const SteamStoreRequirementSchema: z.ZodObject<{
	minimum: z.ZodOptional<z.ZodString>
	recommended: z.ZodOptional<z.ZodString>
}> = z.object({
	minimum: z.string().optional(),
	recommended: z.string().optional(),
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
	notes: z.ZodString
}> = z.object({
	ids: z.array(z.number()),
	notes: z.string(),
})

export const SteamStoreRatingsSubSchema: z.ZodObject<{
	rating: z.ZodOptional<z.ZodString>
	rating_generated: z.ZodOptional<z.ZodString>
	required_age: z.ZodOptional<z.ZodString>
	banned: z.ZodOptional<z.ZodString>
	use_age_gate: z.ZodOptional<z.ZodString>
	descriptors: z.ZodOptional<z.ZodString>
}> = z.object({
	rating: z.string().optional(),
	rating_generated: z.string().optional(),
	required_age: z.string().optional(),
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
				required_age: z.ZodOptional<z.ZodString>
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
				required_age: z.ZodOptional<z.ZodString>
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
				required_age: z.ZodOptional<z.ZodString>
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
})

export const SteamStoreDataSchema: z.ZodObject<{
	type: z.ZodString
	name: z.ZodString
	steam_appid: z.ZodNumber
	required_age: z.ZodString
	is_free: z.ZodBoolean
	detailed_description: z.ZodString
	about_the_game: z.ZodString
	short_description: z.ZodString
	supported_languages: z.ZodString
	header_image: z.ZodString
	capsule_image: z.ZodString
	capsule_imagev5: z.ZodString
	website: z.ZodNullable<z.ZodString>
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
	categories: z.ZodArray<
		z.ZodObject<
			{
				id: z.ZodNumber
				description: z.ZodString
			},
			z.core.$strip
		>
	>
	genres: z.ZodArray<
		z.ZodObject<
			{
				id: z.ZodString
				description: z.ZodString
			},
			z.core.$strip
		>
	>
	screenshots: z.ZodArray<
		z.ZodObject<
			{
				id: z.ZodNumber
				path_thumbnail: z.ZodString
				path_full: z.ZodString
			},
			z.core.$strip
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
			notes: z.ZodString
		},
		z.core.$strip
	>
	ratings: z.ZodOptional<
		z.ZodObject<
			{
				usk: z.ZodOptional<
					z.ZodObject<
						{
							rating: z.ZodOptional<z.ZodString>
							rating_generated: z.ZodOptional<z.ZodString>
							required_age: z.ZodOptional<z.ZodString>
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
							required_age: z.ZodOptional<z.ZodString>
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
							required_age: z.ZodOptional<z.ZodString>
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
}> = z.object({
	type: z.string(),
	name: z.string(),
	steam_appid: z.number(),
	required_age: z.string(),
	is_free: z.boolean(),
	detailed_description: z.string(),
	about_the_game: z.string(),
	short_description: z.string(),
	supported_languages: z.string(),
	header_image: z.string(),
	capsule_image: z.string(),
	capsule_imagev5: z.string(),
	website: z.string().nullable(),
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
	categories: z.array(SteamStoreCategorySchema),
	genres: z.array(SteamStoreGenreSchema),
	screenshots: z.array(SteamStoreScreenshotSchema),
	recommendations: SteamStoreRecommendationsSchema.optional(),
	release_date: SteamStoreReleaseDateSchema,
	support_info: SteamStoreSupportInfoSchema,
	background: z.string(),
	background_raw: z.string(),
	content_descriptors: SteamStoreContentDescriptorsSchema,
	ratings: SteamStoreRatingsSchema.optional(),
})

export const SteamStoreResponseSchema: z.ZodObject<{
	success: z.ZodBoolean
	data: z.ZodObject<
		{
			type: z.ZodString
			name: z.ZodString
			steam_appid: z.ZodNumber
			required_age: z.ZodString
			is_free: z.ZodBoolean
			detailed_description: z.ZodString
			about_the_game: z.ZodString
			short_description: z.ZodString
			supported_languages: z.ZodString
			header_image: z.ZodString
			capsule_image: z.ZodString
			capsule_imagev5: z.ZodString
			website: z.ZodNullable<z.ZodString>
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
			categories: z.ZodArray<
				z.ZodObject<
					{
						id: z.ZodNumber
						description: z.ZodString
					},
					z.core.$strip
				>
			>
			genres: z.ZodArray<
				z.ZodObject<
					{
						id: z.ZodString
						description: z.ZodString
					},
					z.core.$strip
				>
			>
			screenshots: z.ZodArray<
				z.ZodObject<
					{
						id: z.ZodNumber
						path_thumbnail: z.ZodString
						path_full: z.ZodString
					},
					z.core.$strip
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
					notes: z.ZodString
				},
				z.core.$strip
			>
			ratings: z.ZodOptional<
				z.ZodObject<
					{
						usk: z.ZodOptional<
							z.ZodObject<
								{
									rating: z.ZodOptional<z.ZodString>
									rating_generated: z.ZodOptional<z.ZodString>
									required_age: z.ZodOptional<z.ZodString>
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
									required_age: z.ZodOptional<z.ZodString>
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
									required_age: z.ZodOptional<z.ZodString>
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
					required_age: z.ZodString
					is_free: z.ZodBoolean
					detailed_description: z.ZodString
					about_the_game: z.ZodString
					short_description: z.ZodString
					supported_languages: z.ZodString
					header_image: z.ZodString
					capsule_image: z.ZodString
					capsule_imagev5: z.ZodString
					website: z.ZodNullable<z.ZodString>
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
					categories: z.ZodArray<
						z.ZodObject<
							{
								id: z.ZodNumber
								description: z.ZodString
							},
							z.core.$strip
						>
					>
					genres: z.ZodArray<
						z.ZodObject<
							{
								id: z.ZodString
								description: z.ZodString
							},
							z.core.$strip
						>
					>
					screenshots: z.ZodArray<
						z.ZodObject<
							{
								id: z.ZodNumber
								path_thumbnail: z.ZodString
								path_full: z.ZodString
							},
							z.core.$strip
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
							notes: z.ZodString
						},
						z.core.$strip
					>
					ratings: z.ZodOptional<
						z.ZodObject<
							{
								usk: z.ZodOptional<
									z.ZodObject<
										{
											rating: z.ZodOptional<z.ZodString>
											rating_generated: z.ZodOptional<z.ZodString>
											required_age: z.ZodOptional<z.ZodString>
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
											required_age: z.ZodOptional<z.ZodString>
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
											required_age: z.ZodOptional<z.ZodString>
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
