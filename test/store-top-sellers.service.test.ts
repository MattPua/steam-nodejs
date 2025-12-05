import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey } from './setup'

describe('StoreTopSellersService', () => {
	test('should get store weekly top sellers basic fields', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers({
				context: {
					country_code: 'CA',
				},
				country_code: 'NZ',
			})

		expect(topSellers).toBeDefined()
		expect(topSellers.start_date).toBeDefined()
		if (topSellers.ranks) {
			expect(topSellers.ranks.length).toBe(20)
			expect(topSellers.ranks[0].rank).toBe(1)
			expect(topSellers.ranks[0].item).toBeDefined()
			expect(topSellers.ranks[0].item.release).toBeUndefined()
			expect(topSellers.ranks[0].item.assets).toBeUndefined()
			expect(topSellers.ranks[0].item.purchase_options).toBeUndefined()
			expect(topSellers.ranks[0].item.screenshots).toBeUndefined()
			expect(topSellers.ranks[0].item.trailers).toBeUndefined()
			expect(topSellers.ranks[0].item.reviews).toBeUndefined()
			expect(topSellers.ranks[0].item.basic_info).toBeUndefined()
			expect(topSellers.ranks[0].item.full_description).toBeUndefined()
		}
	})

	test('should paginate correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers({
				page_start: 1,
				page_count: 10,
			})
		expect(topSellers.ranks?.length).toBe(10)
	})
	test('should paginate with offset correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers({
				page_start: 100,
			})
		expect(topSellers.ranks?.[0].rank).toBe(101)
	})

	test('should include assets when requested', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers({
				data_request: {
					include_assets: true,
				},
			})
		expect(topSellers.ranks?.[0].item.assets).toBeDefined()
	})

	test('should include release info when requested', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers({
				data_request: {
					include_release: true,
				},
			})
		expect(topSellers.ranks?.[0].item.release).toBeDefined()
	})

	test('should include platforms info when requested', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers({
				data_request: {
					include_platforms: true,
				},
			})
		expect(topSellers.ranks?.[0].item.platforms).toBeDefined()
	})

	test('should include all purchase options when requested', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers({
				data_request: {
					include_all_purchase_options: true,
				},
			})
		expect(topSellers.ranks?.[0].item.purchase_options ?? []).toBeDefined()
	})

	test('should include screenshots when requested', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers({
				data_request: {
					include_screenshots: true,
				},
			})
		expect(topSellers.ranks?.[0].item.screenshots).toBeDefined()
	})

	test('should include trailers when requested', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers({
				data_request: {
					include_trailers: true,
				},
			})
		expect(topSellers.ranks?.[0].item.trailers).toBeDefined()
	})

	test('should include reviews when requested', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers({
				data_request: {
					include_reviews: true,
				},
			})
		expect(topSellers.ranks?.[0].item.reviews).toBeDefined()
	})

	test('should include basic info when requested', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topSellers =
			await steamClient.storeTopSellers.getStoreWeeklyTopSellers({
				data_request: {
					include_basic_info: true,
				},
			})
		expect(topSellers.ranks?.[0].item.basic_info).toBeDefined()
	})
})
