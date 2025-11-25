import { describe, expect, test } from 'bun:test'
import { UserStoreVisitService } from '../src/services/user-store-visit.service'
import { getApiKey, getSteamUserId } from './setup'

describe('UserStoreVisitService', () => {
	const limit = 2
	const service = new UserStoreVisitService(getApiKey())
	const steamUserId = getSteamUserId()

	test('should get most visited items on store with all includes', async () => {
		const response = await service.getMostVisitedItemsOnStore(steamUserId, {
			data_request: {
				include_assets: true,
				include_release: true,
				include_platforms: true,
				include_all_purchase_options: true,
				include_screenshots: true,
				include_trailers: true,
				include_ratings: true,
				include_reviews: true,
				include_basic_info: true,
				include_full_description: true,
			},
			count: limit,
		})
		expect(response.item_ids).toBeDefined()
		expect(response.item_ids.length).toBe(limit)
		expect(response.items.length).toBe(limit)
	})

	test('should get items with only assets', async () => {
		const response = await service.getMostVisitedItemsOnStore(steamUserId, {
			data_request: {
				include_assets: true,
			},
			count: limit,
		})
		expect(response.items).toBeDefined()
		expect(response.items.length).toBe(limit)
		expect(response.items[0].assets).toBeDefined()
	})

	test('should get items with only reviews', async () => {
		const response = await service.getMostVisitedItemsOnStore(steamUserId, {
			data_request: {
				include_reviews: true,
			},
			count: limit,
		})
		expect(response.items).toBeDefined()
		expect(response.items.length).toBe(limit)
		expect(response.items[0].reviews).toBeDefined()
	})

	test('should get items with only platforms', async () => {
		const response = await service.getMostVisitedItemsOnStore(steamUserId, {
			data_request: {
				include_platforms: true,
			},
			count: limit,
		})
		expect(response.items).toBeDefined()
		expect(response.items.length).toBe(limit)
		expect(response.items[0].platforms).toBeDefined()
	})

	test('should get items with only release info', async () => {
		const response = await service.getMostVisitedItemsOnStore(steamUserId, {
			data_request: {
				include_release: true,
			},
			count: limit,
		})
		expect(response.items).toBeDefined()
		expect(response.items.length).toBe(limit)
		expect(response.items[0].release).toBeDefined()
	})
})
