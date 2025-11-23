import type { UserYearInReviewResponse } from '../schemas/responses'
import { BaseService } from './base.service'

export class SaleService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/ISaleFeatureService`
	}

	/**
	 *
	 * @param appId Gets the year in review for a user (for past years only)
	 * @returns
	 */
	async getUserYearInReview(
		steamUserId: string,
		config: {
			year: number
		},
	): Promise<UserYearInReviewResponse> {
		const url = this.generateSteamUrl(`/GetUserYearInReview/v1`, {
			steamid: steamUserId,
			year: config.year,
			force_regenerate: true,
		})
		return await this.sendSteamRequest<UserYearInReviewResponse>(url)
	}
}
