import type { SteamReviewRequest } from '../schemas/requests/reviews.schema'
import type { SteamReviewResponse } from '../schemas/responses'
import { BaseService } from './_base.service'

export class ReviewsService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'store', 'appreviews')
	}

	/**
	 * Does NOT require an api key
	 * Gets the reviews for a given app
	 */
	async getReviews(
		appId: number,
		options: SteamReviewRequest = {
			date_range_type: 'all',
			language: 'all',
			review_type: 'all',
			purchase_type: 'steam',
			num_per_page: '20',
		},
	): Promise<SteamReviewResponse> {
		const url = this.generateSteamUrl(
			`/${appId}`,
			{ ...options, json: '1' },
			false,
		)
		const response = await this.sendGETRequest<SteamReviewResponse>(url)
		return response
	}
}
