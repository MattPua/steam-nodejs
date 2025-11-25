import type { SteamDataRequest } from '../schemas'
import type { StoreTopSellersResponse } from '../schemas/responses/store-top-sellers.schema'
import { BaseService } from './base.service'

export class StoreTopSellersService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'IStoreTopSellersService')
	}

	/**
	 * TODO: Currently pagination doesnt work correctly. Would need to figure out how to do this exactly
	 */
	async getStoreWeeklyTopSellers({
		data_request,
		context = {
			// TODO: this doesnt seem to make a difference as to what country code is used, but it is required by the API.
			country_code: 'US',
		},
	}: {
		data_request?: SteamDataRequest
		context?: {
			country_code: string
		}
	}): Promise<StoreTopSellersResponse> {
		const url = this.generateSteamUrl(`/GetWeeklyTopSellers/v1`, {
			input_json: JSON.stringify({ data_request, context }),
		})
		const response = await this.sendSteamRequest<{
			response: StoreTopSellersResponse
		}>(url)
		return response.response
	}
}
