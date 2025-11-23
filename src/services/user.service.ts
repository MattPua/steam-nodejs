import type {
	FriendsListResponse,
	ListUsersResponse,
	Player,
	PlayerSummaryResponse,
	UserGroupListResponse,
} from '../schemas/responses'
import { BaseService } from './base.service'

export class UserService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/ISteamUser`
	}

	async getUser(steamUserId: string): Promise<Player> {
		const url = this.generateSteamUrl(`/GetPlayerSummaries/v1`, {
			steamids: steamUserId,
		})
		const response = await this.sendSteamRequest<PlayerSummaryResponse>(url)
		return response.response.players.player[0] as Player
	}

	/**
	 * Returns the friends list for a user
	 */
	async getFriendsList(steamUserId: string): Promise<FriendsListResponse> {
		const url = this.generateSteamUrl(`/GetFriendList/v0001`, {
			steamid: steamUserId,
			relationship: 'friend',
		})
		return await this.sendSteamRequest<FriendsListResponse>(url)
	}

	async getUsers(steamUserIds: string[]): Promise<ListUsersResponse> {
		const url = this.generateSteamUrl(`/GetPlayerSummaries/v1`, {
			steamids: steamUserIds.join(','),
		})
		return await this.sendSteamRequest<ListUsersResponse>(url)
	}

	async getUserGroupList(steamUserId: string): Promise<UserGroupListResponse> {
		const url = this.generateSteamUrl(`/GetUserGroupList/v1`, {
			steamid: steamUserId,
		})
		return await this.sendSteamRequest<UserGroupListResponse>(url)
	}
}
