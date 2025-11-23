import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey } from './setup'

describe('StoreTopSellersService', () => {
	test('should get store weekly top sellers correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers()
		expect(topSellers).toBeDefined()
	})
})
