import type {
	BestOfYearResponse,
	GamesByConcurrentPlayersResponse,
	MostPlayedGamesResponse,
} from '../schemas/responses/charts.schemas'
import { BaseService } from './base.service'

export class ChartsService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/ISteamChartsService`
	}

	async getGamesByConcurrentPlayers(): Promise<GamesByConcurrentPlayersResponse> {
		const url = this.generateSteamUrl(`/GetGamesByConcurrentPlayers/v1`)
		return await this.sendSteamRequest<GamesByConcurrentPlayersResponse>(url)
	}
	async getMostPlayedGames(): Promise<MostPlayedGamesResponse> {
		const url = this.generateSteamUrl(`/GetMostPlayedGames/v1`)
		return await this.sendSteamRequest<MostPlayedGamesResponse>(url)
	}

	async getBestOfYear(): Promise<BestOfYearResponse> {
		const url = this.generateSteamUrl(`/GetBestOfYearPages/v1`)
		return await this.sendSteamRequest<BestOfYearResponse>(url)
	}
}
