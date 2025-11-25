import type {
	BestOfYearResponse,
	GamesByConcurrentPlayersResponse,
	MostPlayedGamesResponse,
} from '../schemas/responses/charts.schemas'
import { BaseService } from './base.service'

export class ChartsService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'ISteamChartsService')
	}

	async getGamesByConcurrentPlayers(): Promise<GamesByConcurrentPlayersResponse> {
		const url = this.generateSteamUrl(`/GetGamesByConcurrentPlayers/v1`)
		const response = await this.sendSteamRequest<{
			response: GamesByConcurrentPlayersResponse
		}>(url)
		return response.response
	}
	async getMostPlayedGames(): Promise<MostPlayedGamesResponse> {
		const url = this.generateSteamUrl(`/GetMostPlayedGames/v1`)
		const response = await this.sendSteamRequest<{
			response: MostPlayedGamesResponse
		}>(url)
		return response.response
	}

	async getBestOfYear(): Promise<BestOfYearResponse> {
		const url = this.generateSteamUrl(`/GetBestOfYearPages/v1`)
		const response = await this.sendSteamRequest<{
			response: BestOfYearResponse
		}>(url)
		return response.response
	}
}
