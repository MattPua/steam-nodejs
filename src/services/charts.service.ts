import type {
	BestOfYearResponse,
	GamesByConcurrentPlayersResponse,
	MostPlayedGamesResponse,
} from '../schemas/responses/charts.schemas'
import { BaseService } from './base.service'

export class ChartsService extends BaseService {
	async getGamesByConcurrentPlayers(): Promise<GamesByConcurrentPlayersResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamCharts/GetGamesByConcurrentPlayers/v1`,
			{
				key: this.apiKey,
			},
		)
		return await this.sendSteamRequest<GamesByConcurrentPlayersResponse>(url)
	}
	async getMostPlayedGames(): Promise<MostPlayedGamesResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamCharts/GetMostPlayedGames/v1`,
			{
				key: this.apiKey,
			},
		)
		return await this.sendSteamRequest<MostPlayedGamesResponse>(url)
	}

	async getBestOfYear(): Promise<BestOfYearResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamCharts/GetBestOfYear/v1`,
			{
				key: this.apiKey,
			},
		)
		return await this.sendSteamRequest<BestOfYearResponse>(url)
	}
}
