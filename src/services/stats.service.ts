import type {
	GlobalAchievementPercentagesForAppResponse,
	NumberOfCurrentPlayersResponse,
	PlayerAchievementsResponse,
	SchemaForGameResponse,
	UserStatsForGameResponse,
} from '../schemas/responses'
import { BaseService } from './base.service'

export class StatsService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/ISteamUserStats`
	}

	async getNumberOfCurrentPlayers(
		appId: number,
	): Promise<NumberOfCurrentPlayersResponse> {
		const url = this.generateSteamUrl(`/GetNumberOfCurrentPlayers/v1`, {
			appid: appId,
		})
		return await this.sendSteamRequest<NumberOfCurrentPlayersResponse>(url)
	}

	async getPlayerAchievements(
		steamUserId: string,
		appId: number,
	): Promise<PlayerAchievementsResponse> {
		const url = this.generateSteamUrl(`/GetPlayerAchievements/v1`, {
			steamid: steamUserId,
			appid: appId,
		})
		return await this.sendSteamRequest<PlayerAchievementsResponse>(url)
	}

	async getGlobalAchievementPercentagesForApp(
		appId: number,
	): Promise<GlobalAchievementPercentagesForAppResponse> {
		const url = this.generateSteamUrl(
			`/GetGlobalAchievementPercentagesForApp/v2`,
			{
				gameid: appId,
			},
		)
		return await this.sendSteamRequest<GlobalAchievementPercentagesForAppResponse>(
			url,
		)
	}

	async getSchemaForGame(appId: number): Promise<SchemaForGameResponse> {
		const url = this.generateSteamUrl(`/GetSchemaForGame/v2`, {
			appid: appId,
		})
		return await this.sendSteamRequest<SchemaForGameResponse>(url)
	}

	/**
	 * Gets unlocked achievements for a user for a game
	 */
	async getUserStatsForGame(
		steamUserId: string,
		appId: number,
	): Promise<UserStatsForGameResponse> {
		const url = this.generateSteamUrl(`/GetUserStatsForGame/v2`, {
			steamid: steamUserId,
			appid: appId,
		})
		return await this.sendSteamRequest<UserStatsForGameResponse>(url)
	}
}
