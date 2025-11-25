import { z } from 'zod'

const NumberOfCurrentPlayersResponseSchema: z.ZodObject<{
	result: z.ZodNumber
	player_count: z.ZodNumber
}> = z.object({
	result: z.number(),
	player_count: z.number(),
})

const AchievementSchema: z.ZodObject<{
	apiname: z.ZodString
	achieved: z.ZodNumber
	unlocktime: z.ZodNumber
	name: z.ZodOptional<z.ZodString>
	description: z.ZodOptional<z.ZodString>
}> = z.object({
	apiname: z.string(),
	achieved: z.number(),
	unlocktime: z.number(),
	name: z.string().optional(),
	description: z.string().optional(),
})

const PlayerAchievementsResponseSchema: z.ZodObject<{
	playerstats: z.ZodUnion<
		readonly [
			z.ZodObject<
				{
					steamID: z.ZodString
					gameName: z.ZodString
					achievements: z.ZodArray<
						z.ZodObject<
							{
								apiname: z.ZodString
								achieved: z.ZodNumber
								unlocktime: z.ZodNumber
								name: z.ZodOptional<z.ZodString>
								description: z.ZodOptional<z.ZodString>
							},
							z.core.$strip
						>
					>
					success: z.ZodUnion<[z.ZodLiteral<true>, z.ZodLiteral<false>]>
				},
				z.core.$strip
			>,
			z.ZodObject<
				{
					error: z.ZodString
					success: z.ZodLiteral<false>
				},
				z.core.$strip
			>,
		]
	>
}> = z.object({
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

const GlobalAchievementPercentagesForAppResponseSchema: z.ZodObject<{
	achievements: z.ZodArray<
		z.ZodObject<
			{
				name: z.ZodString
				percent: z.ZodString
			},
			z.core.$strip
		>
	>
}> = z.object({
	achievements: z.array(
		z.object({
			name: z.string(),
			percent: z.string(),
		}),
	),
})

const SchemaForGameResponseSchema: z.ZodObject<{
	gameName: z.ZodString
	gameVersion: z.ZodString
	availableGameStats: z.ZodObject<
		{
			achievements: z.ZodArray<
				z.ZodObject<
					{
						name: z.ZodString
						defaultvalue: z.ZodNumber
						displayName: z.ZodString
						hidden: z.ZodNumber
						description: z.ZodString
						icon: z.ZodString
						icongray: z.ZodString
					},
					z.core.$strip
				>
			>
			stats: z.ZodObject<
				{
					name: z.ZodString
					defaultvalue: z.ZodNumber
					displayName: z.ZodString
				},
				z.core.$strip
			>
		},
		z.core.$strip
	>
}> = z.object({
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
})

const UserStatsForGameResponseSchema: z.ZodObject<{
	steamID: z.ZodString
	gameName: z.ZodString
	achievements: z.ZodArray<
		z.ZodObject<
			{
				name: z.ZodString
				achieved: z.ZodNumber
			},
			z.core.$strip
		>
	>
}> = z.object({
	steamID: z.string(),
	gameName: z.string(),
	achievements: z.array(
		z.object({
			name: z.string(),
			achieved: z.number(),
		}),
	),
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
