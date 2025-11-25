import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getTestAppId } from './setup'

describe('SteamStoreService', () => {
	test('should get app details correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const appDetails = await steamClient.steamStore.getAppDetails(
			getTestAppId().toString(),
		)

		expect(appDetails).toBeDefined()
		expect(typeof appDetails.name).toBe('string')
		expect(typeof appDetails.type).toBe('string')
		expect(typeof appDetails.steam_appid).toBe('number')
		expect(typeof appDetails.required_age).toBe('string')

		expect(Array.isArray(appDetails.developers)).toBe(true)
		expect(Array.isArray(appDetails.publishers)).toBe(true)

		expect(appDetails.header_image).toEqual(expect.stringContaining('http'))
		expect(typeof appDetails.detailed_description).toBe('string')
		expect(appDetails.short_description.length).toBeGreaterThan(0)

		// Optional: check some nested/optional fields
		if (appDetails.price_overview) {
			expect(typeof appDetails.price_overview.currency).toBe('string')
			expect(typeof appDetails.price_overview.final).toBe('number')
		}
		expect(Array.isArray(appDetails.packages)).toBe(true)
		expect(Array.isArray(appDetails.package_groups)).toBe(true)
	})
})
