import type { GetMostVisitedItemsOnStoreResponse } from '../schemas/responses/user-store-visit.schemas'
import { BaseService } from './base.service'

export class UserStoreVisitService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/IUserStoreVisitService`
	}

	async getMostVisitedItemsOnStore(
		steamUserId: string,
		config: {
			include_assets?: boolean
			include_release?: boolean
			include_platforms?: boolean
			include_all_purchase_options?: boolean
			include_screenshots?: boolean
			include_trailers?: boolean
			include_ratings?: boolean
			include_reviews?: boolean
			include_basic_info?: boolean
			include_full_description?: boolean
		} = {
			include_assets: false,
			include_release: false,
			include_platforms: false,
			include_all_purchase_options: false,
			include_screenshots: false,
			include_trailers: false,
			include_ratings: false,
			include_reviews: false,
			include_basic_info: false,
			include_full_description: false,
		},
	): Promise<GetMostVisitedItemsOnStoreResponse> {
		const url = this.generateSteamUrl(`/GetMostVisitedItemsOnStore/v1`, {
			steamid: steamUserId,
			input_json: JSON.stringify(config),
		})
		return await this.sendSteamRequest<GetMostVisitedItemsOnStoreResponse>(url)
	}
}
