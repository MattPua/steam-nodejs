import type { StoreTopSellersResponse } from '../schemas/responses/store-top-sellers.schema'
import { BaseService } from './base.service'

export class StoreTopSellersService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/IStoreTopSellersService`
	}

	async getStoreWeeklyTopSellers(): Promise<StoreTopSellersResponse> {
		const url = this.generateSteamUrl(`/GetWeeklyTopSellers/v1`)
		return await this.sendSteamRequest<StoreTopSellersResponse>(url)
	}
}
