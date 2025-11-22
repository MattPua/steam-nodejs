import type {
	GlobalAchievementPercentagesForAppResponse,
	NumberOfCurrentPlayersResponse,
	PlayerAchievementsResponse,
	SchemaForGameResponse,
	UserStatsForGameResponse,
} from '../schemas/responses'
import { BaseService } from './base.service'

export class StatsService extends BaseService {
	async getNumberOfCurrentPlayers(
		appId: number,
	): Promise<NumberOfCurrentPlayersResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamUserStats/GetNumberOfCurrentPlayers/v1`,
			{
				key: this.apiKey,
				appid: appId,
			},
		)
		return await this.sendSteamRequest<NumberOfCurrentPlayersResponse>(url)
	}

	async getPlayerAchievements(
		steamUserId: string,
		appId: number,
	): Promise<PlayerAchievementsResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamUserStats/GetPlayerAchievements/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
				appid: appId,
			},
		)
		return await this.sendSteamRequest<PlayerAchievementsResponse>(url)
	}

	async getGlobalAchievementPercentagesForApp(
		appId: number,
	): Promise<GlobalAchievementPercentagesForAppResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2`,
			{
				key: this.apiKey,
				appid: appId,
			},
		)
		return await this.sendSteamRequest<GlobalAchievementPercentagesForAppResponse>(
			url,
		)
	}

	async getSchemaForGame(appId: number): Promise<SchemaForGameResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamUserStats/GetSchemaForGame/v2`,
			{
				key: this.apiKey,
				appid: appId,
			},
		)
		return await this.sendSteamRequest<SchemaForGameResponse>(url)
	}

	/**
	 * Gets unlocked achievements for a user for a game
	 */
	async getUserStatsForGame(
		steamUserId: string,
		appId: number,
	): Promise<UserStatsForGameResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamUserStats/GetUserStatsForGame/v2`,
			{
				key: this.apiKey,
				steamid: steamUserId,
				appid: appId,
			},
		)
		return await this.sendSteamRequest<UserStatsForGameResponse>(url)
	}
}
