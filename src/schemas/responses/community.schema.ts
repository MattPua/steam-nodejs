import { z } from 'zod'

const CommunityAppSchema: z.ZodObject<{
	appid: z.ZodNumber
	name: z.ZodString
	icon: z.ZodString
	community_visible_stats: z.ZodBoolean
	propagation: z.ZodString
	app_type: z.ZodNumber
	content_descriptorids: z.ZodArray<z.ZodNumber>
	content_descriptorids_including_dlc: z.ZodArray<z.ZodNumber>
}> = z.object({
	appid: z.number(),
	name: z.string(),
	icon: z.string(),
	community_visible_stats: z.boolean(),
	propagation: z.string(),
	app_type: z.number(),
	content_descriptorids: z.array(z.number()),
	content_descriptorids_including_dlc: z.array(z.number()),
})
const CommunityAppsResponseSchema: z.ZodObject<{
	apps: z.ZodArray<
		z.ZodObject<
			{
				appid: z.ZodNumber
				name: z.ZodString
				icon: z.ZodString
				community_visible_stats: z.ZodBoolean
				propagation: z.ZodString
				app_type: z.ZodNumber
				content_descriptorids: z.ZodArray<z.ZodNumber>
				content_descriptorids_including_dlc: z.ZodArray<z.ZodNumber>
			},
			z.core.$strip
		>
	>
}> = z.object({
	apps: z.array(CommunityAppSchema),
})

export type CommunityApp = z.infer<typeof CommunityAppSchema>
export type CommunityAppsResponse = z.infer<typeof CommunityAppsResponseSchema>
