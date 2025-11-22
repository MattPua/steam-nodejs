import type { UserYearInReviewResponse } from '../schemas/responses'
import { BaseService } from './base.service'

export class SaleService extends BaseService {
	/**
	 *
	 * @param appId Gets the year in review for a user (for past years only)
	 * @returns
	 */
	async getUserYearInReview(
		appId: number,
		config: {
			year: number
		},
	): Promise<UserYearInReviewResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamSale/GetSaleForApp/v1`,
			{
				key: this.apiKey,
				appid: appId,
				year: config.year,
				force_regenerate: true,
			},
		)
		return await this.sendSteamRequest<UserYearInReviewResponse>(url)
	}
}
