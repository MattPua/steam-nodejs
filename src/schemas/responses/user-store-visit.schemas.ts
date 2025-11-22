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

const GetMostVisitedItemsOnStoreResponseSchema = z.object({
	response: z.object({
		item_ids: z.array(StoreItemIdSchema),
		items: z.array(StoreItemSchema),
	}),
})

export type GetMostVisitedItemsOnStoreResponse = z.infer<
	typeof GetMostVisitedItemsOnStoreResponseSchema
>
