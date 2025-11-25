import type {
	WishlistItemCountResponse,
	WishlistResponse,
} from '../schemas/responses/wishlist.schemas'
import { BaseService } from './base.service'

export class WishlistService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'IWishlistService')
	}
	/**
	 * Get a users wishlist
	 */
	async getWishlist(steamUserId: string): Promise<WishlistResponse> {
		const url = this.generateSteamUrl(`/GetWishlist/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendSteamRequest<{
			response: WishlistResponse
		}>(url)
		return response.response
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
		const response = await this.sendSteamRequest<{
			response: WishlistItemCountResponse
		}>(url)
		return response.response
	}
}
