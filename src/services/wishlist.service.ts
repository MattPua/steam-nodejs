import type {
	WishlistItemCountResponse,
	WishlistResponse,
} from '../schemas/responses/wishlist.schemas'
import { BaseService } from './base.service'

export class WishlistService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/IWishlistService`
	}
	/**
	 * Get a users wishlist
	 */
	async getWishlist(steamUserId: string): Promise<WishlistResponse> {
		const url = this.generateSteamUrl(`/GetWishlist/v1`, {
			steamid: steamUserId,
		})
		return await this.sendSteamRequest<WishlistResponse>(url)
	}

	/**
	 * Get the number of items in a users wishlist
	 */
	async getWishlistItemCount(
		steamUserId: string,
	): Promise<WishlistItemCountResponse> {
		const url = this.generateSteamUrl(`/GetWishlistItemCount/v1`, {
			steamid: steamUserId,
		})
		return await this.sendSteamRequest<WishlistItemCountResponse>(url)
	}
}
