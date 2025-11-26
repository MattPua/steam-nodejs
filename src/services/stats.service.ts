import type {
	GlobalAchievementPercentagesForAppResponse,
	NumberOfCurrentPlayersResponse,
	PlayerAchievementsResponse,
	SchemaForGameResponse,
	UserStatsForGameResponse,
} from '../schemas/responses'
import { BaseService } from './_base.service'

export class StatsService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'ISteamUserStats')
	}

	async getNumberOfCurrentPlayers(
		appId: number,
	): Promise<NumberOfCurrentPlayersResponse> {
		const url = this.generateSteamUrl(`/GetNumberOfCurrentPlayers/v1`, {
			appid: appId,
		})
		const response = await this.sendGETRequest<{
			response: NumberOfCurrentPlayersResponse
		}>(url)
		return response.response
	}

	async getPlayerAchievements(
		steamUserId: string,
		appId: number,
	): Promise<PlayerAchievementsResponse> {
		const url = this.generateSteamUrl(`/GetPlayerAchievements/v1`, {
			steamid: steamUserId,
			appid: appId,
		})
		return await this.sendGETRequest<PlayerAchievementsResponse>(url)
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
		const response = await this.sendGETRequest<{
			achievementpercentages: GlobalAchievementPercentagesForAppResponse
		}>(url)
		return response.achievementpercentages
	}

	/**
	 * Gets available game achivements and stats for the given app
	 */
	async getSchemaForGame(appId: number): Promise<SchemaForGameResponse> {
		const url = this.generateSteamUrl(`/GetSchemaForGame/v2`, {
			appid: appId,
		})
		const response = await this.sendGETRequest<{
			game: SchemaForGameResponse
		}>(url)
		return response.game
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
		const response = await this.sendGETRequest<{
			playerstats: UserStatsForGameResponse
		}>(url)
		return response.playerstats
	}
}
