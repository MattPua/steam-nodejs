import type { TradeOffersSummaryResponse } from '../schemas/responses'
import { BaseService } from './_base.service'

export class EconService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'IEconService')
	}

	/**
	 * Gets count of pending and new trade offers
	 */
	async getTradeOffersSummary(
		steamUserId: string,
	): Promise<TradeOffersSummaryResponse> {
		const url = this.generateSteamUrl(`/GetTradeOffersSummary/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: TradeOffersSummaryResponse
		}>(url)
		return response.response
	}

	/**
	 * Get a history of trades
	 * TODO: Not yet typed
	 */
	async getTradeHistory(steamUserId: string): Promise<any> {
		const url = this.generateSteamUrl(`/GetTradeHistory/v1`, {
			steamid: steamUserId,
		})
		return await this.sendGETRequest<any>(url)
	}

	/**
	 * Get a list of trade offers
	 * TODO: Not yet typed
	 */
	async getTradeOffers(steamUserId: string): Promise<any> {
		const url = this.generateSteamUrl(`/GetTradeOffers/v1`, {
			steamid: steamUserId,
		})
		return await this.sendGETRequest<any>(url)
	}
}
