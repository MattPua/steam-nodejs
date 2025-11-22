import { z } from 'zod'

const NumberOfCurrentPlayersResponseSchema = z.object({
	response: z.object({
		result: z.number(),
		player_count: z.number(),
	}),
})

const AchievementSchema = z.object({
	apiname: z.string(),
	achieved: z.number(),
	unlocktime: z.number(),
	name: z.string().optional(),
	description: z.string().optional(),
})

const PlayerAchievementsResponseSchema = z.object({
	playerstats: z.union([
		z
			.object({
				steamID: z.string(),
				gameName: z.string(),
				achievements: z.array(AchievementSchema),
				success: z.literal(true).or(z.literal(false)), // but see below
			})
			.refine((data) => data.success === true, {
				message: 'Must be success = true for this branch',
				path: ['success'],
			}),
		z.object({
			error: z.string(),
			success: z.literal(false),
		}),
	]),
})

const GlobalAchievementPercentagesForAppResponseSchema = z.object({
	response: z.object({
		achievementpercentages: z.object({
			achievements: z.array(
				z.object({
					name: z.string(),
					percent: z.string(),
				}),
			),
		}),
	}),
})

const SchemaForGameResponseSchema = z.object({
	game: z.object({
		gameName: z.string(),
		gameVersion: z.string(),
		availableGameStats: z.object({
			achievements: z.array(
				z.object({
					name: z.string(),
					defaultvalue: z.number(),
					displayName: z.string(),
					hidden: z.number(),
					description: z.string(),
					icon: z.string(),
					icongray: z.string(),
				}),
			),
			stats: z.object({
				name: z.string(),
				defaultvalue: z.number(),
				displayName: z.string(),
			}),
		}),
	}),
})

const UserStatsForGameResponseSchema = z.object({
	playerstats: z.object({
		steamID: z.string(),
		gameName: z.string(),
		achievements: z.object({
			name: z.string(),
			achived: z.number(),
		}),
	}),
})

export type NumberOfCurrentPlayersResponse = z.infer<
	typeof NumberOfCurrentPlayersResponseSchema
>
export type Achievement = z.infer<typeof AchievementSchema>
export type PlayerAchievementsResponse = z.infer<
	typeof PlayerAchievementsResponseSchema
>
export type GlobalAchievementPercentagesForAppResponse = z.infer<
	typeof GlobalAchievementPercentagesForAppResponseSchema
>
export type SchemaForGameResponse = z.infer<typeof SchemaForGameResponseSchema>
export type UserStatsForGameResponse = z.infer<
	typeof UserStatsForGameResponseSchema
>
