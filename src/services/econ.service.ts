import type { TradeOffersSummaryResponse } from '../schemas/responses'
import { BaseService } from './base.service'

export class EconService extends BaseService {
	/**
	 * Gets count of pending and new trade offers
	 */
	async getTradeOffersSummary(
		steamUserId: string,
	): Promise<TradeOffersSummaryResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/IEconService/GetTradeOffersSummary/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
			},
		)
		return await this.sendSteamRequest<TradeOffersSummaryResponse>(url)
	}

	/**
	 * Get a history of trades
	 * TODO: Not yet typed
	 */
	async getTradeHistory(steamUserId: string): Promise<any> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/IEconService/GetTradeHistory/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
			},
		)
		return await this.sendSteamRequest<any>(url)
	}

	/**
	 * Get a list of trade offers
	 * TODO: Not yet typed
	 */
	async getTradeOffers(steamUserId: string): Promise<any> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/IEconService/GetTradeOffers/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
			},
		)
		return await this.sendSteamRequest<any>(url)
	}
}
