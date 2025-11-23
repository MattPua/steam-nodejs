import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId } from './setup'

describe('WishlistService', () => {
	test('should get wishlist correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const wishlist = await steamClient.wishlist.getWishlist(getSteamUserId())
		expect(wishlist).toBeDefined()
	})

	test('should get wishlist item count correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const wishlistCount = await steamClient.wishlist.getWishlistItemCount(
			getSteamUserId(),
		)
		expect(wishlistCount).toBeDefined()
	})
})
