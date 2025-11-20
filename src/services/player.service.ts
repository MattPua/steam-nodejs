import type {
	BadgesResponse,
	OwnedGamesResponse,
	RecentlyPlayedGamesResponse,
	SteamLevelResponse,
} from '../types'
import { BaseService } from './base.service'

export class PlayerService extends BaseService {
	async getSteamLevel(steamUserId: string): Promise<SteamLevelResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/IPlayerService/GetSteamLevel/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
			},
		)
		return await this.sendSteamRequest<SteamLevelResponse>(url)
	}

	async getBadges(steamUserId: string): Promise<BadgesResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/IPlayerService/GetBadges/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
			},
		)
		return await this.sendSteamRequest<BadgesResponse>(url)
	}

	async getOwnedGames(steamUserId: string): Promise<OwnedGamesResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/IPlayerService/GetOwnedGames/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
				include_appinfo: 'true',
			},
		)
		return await this.sendSteamRequest<OwnedGamesResponse>(url)
	}

	async getRecentlyPlayedGames(
		steamUserId: string,
	): Promise<RecentlyPlayedGamesResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/IPlayerService/GetRecentlyPlayedGames/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
			},
		)
		return await this.sendSteamRequest<RecentlyPlayedGamesResponse>(url)
	}
}
