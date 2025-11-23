import { z } from 'zod'

const NewsItemSchema: z.ZodObject<{
	gid: z.ZodString
	title: z.ZodString
	url: z.ZodString
	is_external_url: z.ZodBoolean
	author: z.ZodString
	contents: z.ZodString
	feedlabel: z.ZodString
	date: z.ZodNumber
	feedname: z.ZodString
	feed_type: z.ZodNumber
	appid: z.ZodNumber
	tags: z.ZodOptional<z.ZodArray<z.ZodString>>
}> = z.object({
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

const NewsForAppResponseSchema: z.ZodObject<{
	appnews: z.ZodObject<
		{
			appid: z.ZodNumber
			newsitems: z.ZodArray<
				z.ZodObject<
					{
						gid: z.ZodString
						title: z.ZodString
						url: z.ZodString
						is_external_url: z.ZodBoolean
						author: z.ZodString
						contents: z.ZodString
						feedlabel: z.ZodString
						date: z.ZodNumber
						feedname: z.ZodString
						feed_type: z.ZodNumber
						appid: z.ZodNumber
						tags: z.ZodOptional<z.ZodArray<z.ZodString>>
					},
					z.core.$strip
				>
			>
			count: z.ZodOptional<z.ZodNumber>
		},
		z.core.$strip
	>
}> = z.object({
	appnews: z.object({
		appid: z.number(),
		newsitems: z.array(NewsItemSchema),
		count: z.number().optional(),
	}),
})

export type NewsItem = z.infer<typeof NewsItemSchema>
export type NewsForAppResponse = z.infer<typeof NewsForAppResponseSchema>
