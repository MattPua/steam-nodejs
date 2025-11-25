import type { Friend, Player, UserGroup } from '../schemas/responses'
import { BaseService } from './base.service'

export class UserService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'ISteamUser')
	}

	/**
	 * Returns the public profile information for a user
	 */
	async getUser(steamUserId: string): Promise<Player> {
		const url = this.generateSteamUrl(`/GetPlayerSummaries/v2`, {
			steamids: steamUserId,
		})
		const response = await this.sendSteamRequest<{
			response: { players: Player[] }
		}>(url)
		return response.response.players[0] as Player
	}

	/**
	 * Returns the friends list for a user. Does not include the profle information
	 */
	async getFriendsList(steamUserId: string): Promise<Friend[]> {
		const url = this.generateSteamUrl(`/GetFriendList/v0001`, {
			steamid: steamUserId,
			relationship: 'friend',
		})
		const response = await this.sendSteamRequest<{
			friendslist: { friends: Friend[] }
		}>(url)
		return response.friendslist.friends
	}

	/**
	 * Returns the profiles for a list of steam ids
	 */
	async getUsers(steamUserIds: string[]): Promise<Player[]> {
		const url = this.generateSteamUrl(`/GetPlayerSummaries/v2`, {
			steamids: steamUserIds.join(','),
		})
		const data = await this.sendSteamRequest<{
			response: { players: Player[] }
		}>(url)
		return data.response.players
	}

	/**
	 * Returns the list of groups a user is a member of
	 */
	async getUserGroupList(steamUserId: string): Promise<UserGroup[]> {
		const url = this.generateSteamUrl(`/GetUserGroupList/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendSteamRequest<{
			response: {
				success: boolean
				groups: UserGroup[]
			}
		}>(url)
		return response.response.groups
	}

	/**
	 * Returns the friends list for a user with their profiles
	 */
	async getFriendsListWithProfiles(steamUserId: string): Promise<Player[]> {
		const friendsList = await this.getFriendsList(steamUserId)
		const userIds = friendsList.map((friend) => friend.steamid)
		const users = await this.getUsers(userIds)
		return users
	}
}
