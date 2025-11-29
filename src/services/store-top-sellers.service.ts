import type { SteamDataRequest } from '../schemas'
import type { StoreTopSellersResponse } from '../schemas/responses/store-top-sellers.schema'
import { BaseService } from './_base.service'

export class StoreTopSellersService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'IStoreTopSellersService')
	}

	/**
	 * @param data_request - The data request to include in the request
	 * @param context - The context to include in the request
	 * @param country_code - The country code to use for the request. If not provided, will default to 'US'. Must be a valid ISO 3166-1 alpha-2 country code.
	 * @param page_start - For pagination, start at the Nth top seller (0-indexed)
	 * @param page_count - # of top sellers to return per page
	 * @param start_date - The start date of the week to return. LEave blank for current week.
	 */
	async getStoreWeeklyTopSellers({
		data_request,
		context = {
			// Note: this doesnt seem to make a difference as to what country code is used, but it is required by the API.
			country_code: 'US',
		},
		country_code = 'US',
		page_start = 0,
		page_count = 20,
		start_date,
	}: {
		data_request?: SteamDataRequest
		context?: {
			country_code: string
		}
		country_code?: string
		page_start?: number
		page_count?: number
		start_date?: number
	}): Promise<StoreTopSellersResponse> {
		const url = this.generateSteamUrl(`/GetWeeklyTopSellers/v1`, {
			input_json: JSON.stringify({
				data_request,
				context,
				country_code,
				page_start,
				page_count,
				start_date,
			}),
		})
		const response = await this.sendGETRequest<{
			response: StoreTopSellersResponse
		}>(url)
		return response.response
	}
}
