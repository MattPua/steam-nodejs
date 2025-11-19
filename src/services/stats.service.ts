import { BaseService } from './base.service';
import type {
	NumberOfCurrentPlayersResponse,
	PlayerAchievementsResponse,
} from '../types';

export class StatsService extends BaseService {
	async getNumberOfCurrentPlayers(
		appId: number
	): Promise<NumberOfCurrentPlayersResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamUserStats/GetNumberOfCurrentPlayers/v1`,
			{
				key: this.apiKey,
				appid: appId.toString(),
			}
		);
		return await this.sendSteamRequest<NumberOfCurrentPlayersResponse>(url);
	}

	async getPlayerAchievements(
		steamUserId: string,
		appId: number
	): Promise<PlayerAchievementsResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamUserStats/GetPlayerAchievements/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
				appid: appId.toString(),
			}
		);
		return await this.sendSteamRequest<PlayerAchievementsResponse>(url);
	}
}
