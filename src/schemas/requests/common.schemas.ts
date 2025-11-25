import { z } from 'zod'

const SteamDataRequestSchema: z.ZodObject<{
	include_assets: z.ZodOptional<z.ZodBoolean>
	include_release: z.ZodOptional<z.ZodBoolean>
	include_platforms: z.ZodOptional<z.ZodBoolean>
	include_all_purchase_options: z.ZodOptional<z.ZodBoolean>
	include_screenshots: z.ZodOptional<z.ZodBoolean>
	include_trailers: z.ZodOptional<z.ZodBoolean>
	include_ratings: z.ZodOptional<z.ZodBoolean>
	include_reviews: z.ZodOptional<z.ZodBoolean>
	include_basic_info: z.ZodOptional<z.ZodBoolean>
	include_full_description: z.ZodOptional<z.ZodBoolean>
	include_links: z.ZodOptional<z.ZodBoolean>
	include_tag_count: z.ZodOptional<z.ZodNumber>
}> = z.object({
	include_assets: z.boolean().optional(),
	include_release: z.boolean().optional(),
	include_platforms: z.boolean().optional(),
	include_all_purchase_options: z.boolean().optional(),
	include_screenshots: z.boolean().optional(),
	include_trailers: z.boolean().optional(),
	include_ratings: z.boolean().optional(),
	include_reviews: z.boolean().optional(),
	include_basic_info: z.boolean().optional(),
	include_full_description: z.boolean().optional(),
	include_links: z.boolean().optional(),
	include_tag_count: z
		.number()
		.optional()
		.describe('If set, will return up to this many tag counts'),
})

export type SteamDataRequest = z.infer<typeof SteamDataRequestSchema>
