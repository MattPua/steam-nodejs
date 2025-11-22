import { z } from 'zod'

const SteamApiResponseSchema = <T extends z.ZodTypeAny>(
	responseSchema: T,
): z.ZodObject<{ response: T }> =>
	z.object({
		response: responseSchema,
	}) as z.ZodObject<{ response: T }>

export type SteamApiResponse = z.infer<typeof SteamApiResponseSchema>
