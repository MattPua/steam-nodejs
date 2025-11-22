import { z } from 'zod'

const NewsItemSchema = z.object({
	gid: z.string(),
	title: z.string(),
	url: z.string().describe('The URL of the news item'),
	is_external_url: z.boolean(),
	author: z.string(),
	contents: z.string().describe('Content of the news items in HTML format'),
	feedlabel: z.string(),
	date: z.number(),
	feedname: z.string(),
	feed_type: z.number(),
	appid: z.number(),
	tags: z.array(z.string()).optional(),
})

const NewsForAppResponseSchema = z.object({
	appnews: z.object({
		appid: z.number(),
		newsitems: z.array(NewsItemSchema),
		count: z.number().optional(),
	}),
})

export type NewsItem = z.infer<typeof NewsItemSchema>
export type NewsForAppResponse = z.infer<typeof NewsForAppResponseSchema>
