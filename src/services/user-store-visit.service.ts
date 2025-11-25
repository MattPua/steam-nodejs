import type { SteamDataRequest } from '../schemas/requests/common.schemas'
import type { GetMostVisitedItemsOnStoreResponse } from '../schemas/responses/user-store-visit.schemas'
import { BaseService } from './base.service'

export class UserStoreVisitService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'IUserStoreVisitService')
	}

	async getMostVisitedItemsOnStore(
		steamUserId: string,
		config: {
			data_request?: SteamDataRequest
			count?: number
		} = {
			data_request: {
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
			count: 10,
		},
	): Promise<GetMostVisitedItemsOnStoreResponse> {
		const url = this.generateSteamUrl(`/GetMostVisitedItemsOnStore/v1`, {
			steamid: steamUserId,
			input_json: JSON.stringify(config),
		})
		const response = await this.sendSteamRequest<{
			response: GetMostVisitedItemsOnStoreResponse
		}>(url)
		return response.response
	}
}
