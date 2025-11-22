import { z } from 'zod'

const CommunityAppSchema = z.object({
	appid: z.number(),
	name: z.string(),
	icon: z.string(),
	community_visible_stats: z.boolean(),
	propagation: z.string(),
	app_type: z.number(),
	content_descriptorids: z.array(z.number()),
	content_descriptorids_including_dlc: z.array(z.number()),
})
const CommunityAppsResponseSchema = z.object({
	response: z.object({
		apps: z.array(CommunityAppSchema),
	}),
})

export type CommunityApp = z.infer<typeof CommunityAppSchema>
export type CommunityAppsResponse = z.infer<typeof CommunityAppsResponseSchema>
