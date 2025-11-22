import type { StoreTopSellersResponse } from '../schemas/responses/store-top-sellers.schema'
import { BaseService } from './base.service'

export class StoreTopSellersService extends BaseService {
	async getStoreTopSellers(): Promise<StoreTopSellersResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamStore/GetStoreTopSellers/v1`,
			{
				key: this.apiKey,
			},
		)
		return await this.sendSteamRequest<StoreTopSellersResponse>(url)
	}
}
