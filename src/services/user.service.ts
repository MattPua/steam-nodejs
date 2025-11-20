import type {
	FriendsListResponse,
	ListUsersResponse,
	UserGroupListResponse,
} from '../types'
import { BaseService } from './base.service'

export class UserService extends BaseService {
	async getFriendsList(steamUserId: string): Promise<FriendsListResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamUser/GetFriendList/v0001`,
			{
				key: this.apiKey,
				steamid: steamUserId,
				relationship: 'friend',
			},
		)
		return await this.sendSteamRequest<FriendsListResponse>(url)
	}

	async listUsers(steamUserIds: string[]): Promise<ListUsersResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamUser/GetPlayerSummaries/v1`,
			{
				key: this.apiKey,
				steamids: steamUserIds.join(','),
			},
		)
		return await this.sendSteamRequest<ListUsersResponse>(url)
	}

	async getUserGroupList(steamUserId: string): Promise<UserGroupListResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamUser/GetUserGroupList/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
			},
		)
		return await this.sendSteamRequest<UserGroupListResponse>(url)
	}
}
