import { z } from 'zod'

const FriendSchema: z.ZodObject<{
	steamid: z.ZodString
	relationship: z.ZodString
	friend_since: z.ZodNumber
}> = z.object({
	steamid: z.string(),
	relationship: z.string(),
	friend_since: z.number(),
})

const FriendsListResponseSchema: z.ZodObject<{
	friendslist: z.ZodObject<
		{
			friends: z.ZodArray<
				z.ZodObject<
					{
						steamid: z.ZodString
						relationship: z.ZodString
						friend_since: z.ZodNumber
					},
					z.core.$strip
				>
			>
		},
		z.core.$strip
	>
}> = z.object({
	friendslist: z.object({
		friends: z.array(FriendSchema),
	}),
})

const PlayerSchema: z.ZodObject<{
	steamid: z.ZodString
	communityvisibilitystate: z.ZodNumber
	profilestate: z.ZodNumber
	personaname: z.ZodString
	profileurl: z.ZodString
	avatar: z.ZodString
	avatarmedium: z.ZodString
	avatarfull: z.ZodString
	avatarhash: z.ZodString
	lastlogoff: z.ZodOptional<z.ZodNumber>
	personastate: z.ZodOptional<z.ZodNumber>
	realname: z.ZodOptional<z.ZodString>
	primaryclanid: z.ZodOptional<z.ZodString>
	timecreated: z.ZodOptional<z.ZodNumber>
	personastateflags: z.ZodOptional<z.ZodNumber>
	loccountrycode: z.ZodOptional<z.ZodString>
	locstatecode: z.ZodOptional<z.ZodString>
	loccityid: z.ZodOptional<z.ZodNumber>
}> = z.object({
	steamid: z.string(),
	communityvisibilitystate: z.number(),
	profilestate: z.number(),
	personaname: z.string(),
	profileurl: z.string(),
	avatar: z.string(),
	avatarmedium: z.string(),
	avatarfull: z.string(),
	avatarhash: z.string(),
	lastlogoff: z.number().optional(),
	personastate: z.number().optional(),
	realname: z.string().optional(),
	primaryclanid: z.string().optional(),
	timecreated: z.number().optional(),
	personastateflags: z.number().optional(),
	loccountrycode: z.string().optional(),
	locstatecode: z.string().optional(),
	loccityid: z.number().optional(),
})

const ListUsersResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			players: z.ZodArray<
				z.ZodObject<
					{
						steamid: z.ZodString
						communityvisibilitystate: z.ZodNumber
						profilestate: z.ZodNumber
						personaname: z.ZodString
						profileurl: z.ZodString
						avatar: z.ZodString
						avatarmedium: z.ZodString
						avatarfull: z.ZodString
						avatarhash: z.ZodString
						lastlogoff: z.ZodOptional<z.ZodNumber>
						personastate: z.ZodOptional<z.ZodNumber>
						realname: z.ZodOptional<z.ZodString>
						primaryclanid: z.ZodOptional<z.ZodString>
						timecreated: z.ZodOptional<z.ZodNumber>
						personastateflags: z.ZodOptional<z.ZodNumber>
						loccountrycode: z.ZodOptional<z.ZodString>
						locstatecode: z.ZodOptional<z.ZodString>
						loccityid: z.ZodOptional<z.ZodNumber>
					},
					z.core.$strip
				>
			>
		},
		z.core.$strip
	>
}> = z.object({
	response: z.object({
		players: z.array(PlayerSchema),
	}),
})

const PlayerSummaryResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			players: z.ZodArray<
				z.ZodObject<
					{
						steamid: z.ZodString
						communityvisibilitystate: z.ZodNumber
						profilestate: z.ZodNumber
						personaname: z.ZodString
						profileurl: z.ZodString
						avatar: z.ZodString
						avatarmedium: z.ZodString
						avatarfull: z.ZodString
						avatarhash: z.ZodString
						lastlogoff: z.ZodOptional<z.ZodNumber>
						personastate: z.ZodOptional<z.ZodNumber>
						realname: z.ZodOptional<z.ZodString>
						primaryclanid: z.ZodOptional<z.ZodString>
						timecreated: z.ZodOptional<z.ZodNumber>
						personastateflags: z.ZodOptional<z.ZodNumber>
						loccountrycode: z.ZodOptional<z.ZodString>
						locstatecode: z.ZodOptional<z.ZodString>
						loccityid: z.ZodOptional<z.ZodNumber>
					},
					z.core.$strip
				>
			>
		},
		z.core.$strip
	>
}> = z.object({
	response: z.object({
		players: z.array(PlayerSchema),
	}),
})

const UserGroupSchema: z.ZodObject<{
	gid: z.ZodString
}> = z.object({
	gid: z.string(),
})

const UserGroupListResponseSchema: z.ZodObject<{
	response: z.ZodObject<
		{
			success: z.ZodBoolean
			groups: z.ZodOptional<
				z.ZodArray<
					z.ZodObject<
						{
							gid: z.ZodString
						},
						z.core.$strip
					>
				>
			>
		},
		z.core.$strip
	>
}> = z.object({
	response: z.object({
		success: z.boolean(),
		groups: z.array(UserGroupSchema).optional(),
	}),
})

export type Friend = z.infer<typeof FriendSchema>
export type FriendsListResponse = z.infer<typeof FriendsListResponseSchema>
export type Player = z.infer<typeof PlayerSchema>
export type ListUsersResponse = z.infer<typeof ListUsersResponseSchema>
export type PlayerSummaryResponse = z.infer<typeof PlayerSummaryResponseSchema>
export type UserGroup = z.infer<typeof UserGroupSchema>
export type UserGroupListResponse = z.infer<typeof UserGroupListResponseSchema>
