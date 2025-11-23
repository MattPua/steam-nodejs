import { z } from 'zod'

const StoreItemAssetSchema = z.object({
	asset_url_format: z.string(),
	main_capsule: z.string().optional(),
	small_capsule: z.string().optional(),
	header: z.string().optional(),
	package_header: z.string().optional(),
	page_background: z.string().optional(),
	hero_capsule: z.string().optional(),
	hero_capsule_2x: z.string().optional(),
	library_capsule: z.string().optional(),
	library_capsule_2x: z.string().optional(),
	library_hero: z.string().optional(),
	library_hero_2x: z.string().optional(),
	community_icon: z.string().optional(),
	page_background_path: z.string().optional(),
	raw_page_background: z.string().optional(),
})

const StoreItemPublisherSchema = z.object({
	name: z.string(),
	creator_clan_account_id: z.number().optional(),
})
const StoreItemDeveloperSchema = StoreItemPublisherSchema
const StoreItemFranchiseSchema = StoreItemPublisherSchema

const StoreItemReviewSummaryFilteredSchema = z.object({
	review_count: z.number(),
	percent_positive: z.number(),
	review_score: z.number(),
	review_score_label: z.string(),
})
const StoreItemReviewsSchema = z.object({
	summary_filtered: StoreItemReviewSummaryFilteredSchema,
})

const StoreItemScreenshotSchema = z.object({
	filename: z.string(),
	ordinal: z.number(),
})

const StoreItemScreenshotsSchema = z.object({
	all_ages_screenshots: z.array(StoreItemScreenshotSchema).optional(),
	mature_content_screenshots: z.array(StoreItemScreenshotSchema).optional(),
})

const StoreItemCategoriesSchema = z.object({
	supported_player_categoryids: z.array(z.number()).optional(),
	feature_categoryids: z.array(z.number()).optional(),
	controller_categoryids: z.array(z.number()).optional(),
})

const StoreItemBasicInfoSchema = z.object({
	short_description: z.string().optional(),
	publishers: z.array(StoreItemPublisherSchema),
	developers: z.array(StoreItemDeveloperSchema),
	franchises: z.array(StoreItemFranchiseSchema).optional(),
})

const StoreItemReleaseSchema = z.object({
	steam_release_date: z.number().optional(),
	mac_release_date: z.number().optional(),
	linux_release_date: z.number().optional(),
	original_release_date: z.number().optional(),
})

const StoreItemGameRatingSchema = z.object({
	type: z.string(),
	rating: z.string(),
	descriptors: z.array(z.string()),
	required_age: z.number(),
	use_age_gate: z.boolean(),
	image_url: z.string(),
	image_target: z.string(),
})

const StoreItemPlatformsSchema = z.object({
	windows: z.boolean().optional(),
	mac: z.boolean().optional(),
	steamos_linux: z.boolean().optional(),
	vr_support: z.record(z.any(), z.any()).optional(),
	steam_deck_compat_category: z.number().optional(),
	steam_os_compat_category: z.number().optional(),
})

const StoreItemIncludedAppSchema = z.object({
	item_type: z.number(),
	id: z.number(),
	success: z.number(),
	visible: z.boolean(),
	name: z.string(),
	store_url_path: z.string(),
	appid: z.number(),
	type: z.number(),
	is_free: z.boolean(),
	content_descriptorids: z.array(z.number()).optional(),
	categories: StoreItemCategoriesSchema.optional(),
})

const StoreItemIncludedItemsSchema = z.object({
	included_apps: z.array(StoreItemIncludedAppSchema),
})

const StoreItemLinksSchema = z.object({
	link_type: z.number(),
	url: z.string().optional(),
	text: z.string().optional(),
})

const StoreItemSchema = z.object({
	item_type: z.number(),
	id: z.number(),
	success: z.number(),
	visible: z.boolean(),
	name: z.string(),
	store_url_path: z.string(),
	type: z.number(),
	appid: z.number().optional(),
	is_free: z.boolean().optional(),
	content_descriptorids: z.array(z.number()).optional(),
	categories: StoreItemCategoriesSchema.optional(),
	reviews: StoreItemReviewsSchema.optional(),
	basic_info: StoreItemBasicInfoSchema.optional(),
	assets: StoreItemAssetSchema.optional(),
	release: StoreItemReleaseSchema.optional(),
	platforms: StoreItemPlatformsSchema.optional(),
	screenshots: StoreItemScreenshotsSchema.optional(),
	full_description: z.string().optional(),
	included_types: z.array(z.number()).optional(),
	included_appids: z.array(z.number()).optional(),
	included_items: StoreItemIncludedItemsSchema.optional(),
	game_rating: StoreItemGameRatingSchema.optional(),
	free_weekend: z
		.object({
			start_time: z.number(),
			end_time: z.number(),
		})
		.optional(),
	links: z.array(StoreItemLinksSchema).optional(),
})

const StoreItemIdSchema = z.union([
	z.object({ appid: z.number() }),
	z.object({ packageid: z.number() }),
])

const GetMostVisitedItemsOnStoreResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			item_ids: z.ZodArray<
				z.ZodUnion<
					readonly [
						z.ZodObject<
							{
								appid: z.ZodNumber
							},
							z.core.$strip
						>,
						z.ZodObject<
							{
								packageid: z.ZodNumber
							},
							z.core.$strip
						>,
					]
				>
			>
			items: z.ZodArray<
				z.ZodObject<
					{
						item_type: z.ZodNumber
						id: z.ZodNumber
						success: z.ZodNumber
						visible: z.ZodBoolean
						name: z.ZodString
						store_url_path: z.ZodString
						type: z.ZodNumber
						appid: z.ZodOptional<z.ZodNumber>
						is_free: z.ZodOptional<z.ZodBoolean>
						content_descriptorids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
						categories: z.ZodOptional<
							z.ZodObject<
								{
									supported_player_categoryids: z.ZodOptional<
										z.ZodArray<z.ZodNumber>
									>
									feature_categoryids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
									controller_categoryids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
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
											review_score_label: z.ZodString
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
									franchises: z.ZodOptional<
										z.ZodArray<
											z.ZodObject<
												{
													name: z.ZodString
													creator_clan_account_id: z.ZodOptional<z.ZodNumber>
												},
												z.core.$strip
											>
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
									page_background: z.ZodOptional<z.ZodString>
									hero_capsule: z.ZodOptional<z.ZodString>
									hero_capsule_2x: z.ZodOptional<z.ZodString>
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
									steamos_linux: z.ZodOptional<z.ZodBoolean>
									vr_support: z.ZodOptional<z.ZodRecord<z.ZodAny, z.ZodAny>>
									steam_deck_compat_category: z.ZodOptional<z.ZodNumber>
									steam_os_compat_category: z.ZodOptional<z.ZodNumber>
								},
								z.core.$strip
							>
						>
						screenshots: z.ZodOptional<
							z.ZodObject<
								{
									all_ages_screenshots: z.ZodOptional<
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
						full_description: z.ZodOptional<z.ZodString>
						included_types: z.ZodOptional<z.ZodArray<z.ZodNumber>>
						included_appids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
						included_items: z.ZodOptional<
							z.ZodObject<
								{
									included_apps: z.ZodArray<
										z.ZodObject<
											{
												item_type: z.ZodNumber
												id: z.ZodNumber
												success: z.ZodNumber
												visible: z.ZodBoolean
												name: z.ZodString
												store_url_path: z.ZodString
												appid: z.ZodNumber
												type: z.ZodNumber
												is_free: z.ZodBoolean
												content_descriptorids: z.ZodOptional<
													z.ZodArray<z.ZodNumber>
												>
												categories: z.ZodOptional<
													z.ZodObject<
														{
															supported_player_categoryids: z.ZodOptional<
																z.ZodArray<z.ZodNumber>
															>
															feature_categoryids: z.ZodOptional<
																z.ZodArray<z.ZodNumber>
															>
															controller_categoryids: z.ZodOptional<
																z.ZodArray<z.ZodNumber>
															>
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
						>
						game_rating: z.ZodOptional<
							z.ZodObject<
								{
									type: z.ZodString
									rating: z.ZodString
									descriptors: z.ZodArray<z.ZodString>
									required_age: z.ZodNumber
									use_age_gate: z.ZodBoolean
									image_url: z.ZodString
									image_target: z.ZodString
								},
								z.core.$strip
							>
						>
						free_weekend: z.ZodOptional<
							z.ZodObject<
								{
									start_time: z.ZodNumber
									end_time: z.ZodNumber
								},
								z.core.$strip
							>
						>
						links: z.ZodOptional<
							z.ZodArray<
								z.ZodObject<
									{
										link_type: z.ZodNumber
										url: z.ZodOptional<z.ZodString>
										text: z.ZodOptional<z.ZodString>
									},
									z.core.$strip
								>
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
		item_ids: z.array(StoreItemIdSchema),
		items: z.array(StoreItemSchema),
	}),
})

export type GetMostVisitedItemsOnStoreResponse = z.infer<
	typeof GetMostVisitedItemsOnStoreResponseSchema
>
