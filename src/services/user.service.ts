import type {
	Friend,
	FriendsListResponse,
	ListUsersResponse,
	Player,
	PlayerSummaryResponse,
	UserGroup,
	UserGroupListResponse,
} from '../schemas/responses'
import { BaseService } from './base.service'

export class UserService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/ISteamUser`
	}

	async getUser(steamUserId: string): Promise<Player> {
		const url = this.generateSteamUrl(`/GetPlayerSummaries/v2`, {
			steamids: steamUserId,
		})
		const response = await this.sendSteamRequest<PlayerSummaryResponse>(url)
		return response.response.players[0] as Player
	}

	/**
	 * Returns the friends list for a user
	 */
	async getFriendsList(steamUserId: string): Promise<Friend[]> {
		const url = this.generateSteamUrl(`/GetFriendList/v0001`, {
			steamid: steamUserId,
			relationship: 'friend',
		})
		const response = await this.sendSteamRequest<FriendsListResponse>(url)
		return response.friendslist.friends
	}

	async getUsers(steamUserIds: string[]): Promise<Player[]> {
		const url = this.generateSteamUrl(`/GetPlayerSummaries/v2`, {
			steamids: steamUserIds.join(','),
		})
		const data = await this.sendSteamRequest<ListUsersResponse>(url)
		return data.response.players
	}

	async getUserGroupList(steamUserId: string): Promise<UserGroup[]> {
		const url = this.generateSteamUrl(`/GetUserGroupList/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendSteamRequest<UserGroupListResponse>(url)
		return response.response.groups ?? []
	}

	async getFriendsListWithProfiles(steamUserId: string): Promise<Player[]> {
		const friendsList = await this.getFriendsList(steamUserId)
		const userIds = friendsList.map((friend) => friend.steamid)
		const users = await this.getUsers(userIds)
		return users
	}
}
