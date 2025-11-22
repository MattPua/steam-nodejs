import type {
	WishlistItemCountResponse,
	WishlistResponse,
} from '../schemas/responses/wishlist.schemas'
import { BaseService } from './base.service'

export class WishlistService extends BaseService {
	/**
	 * Get a users wishlist
	 */
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

	/**
	 * Get the number of items in a users wishlist
	 */
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
