import type { WishlistItemCountResponse, WishlistResponse } from '../types'
import { BaseService } from './base.service'

export class WishlistService extends BaseService {
	async getWishlist(steamUserId: string): Promise<WishlistResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/IWishlistService/GetWishlist/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
			},
		)
		return await this.sendSteamRequest<WishlistResponse>(url)
	}

	async getWishlistItemCount(
		steamUserId: string,
	): Promise<WishlistItemCountResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/IWishlistService/GetWishlistItemCount/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
			},
		)
		return await this.sendSteamRequest<WishlistItemCountResponse>(url)
	}
}
