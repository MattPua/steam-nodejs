import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId, getTestAppId } from './setup'

describe('SaleService', () => {
	test('should get user year in review correctly and have expected properties', async () => {
		const year = 2024
		const steamClient = new SteamClient(getApiKey())
		const yearInReview = await steamClient.sale.getUserYearInReview(
			getSteamUserId(),
			{ year },
		)
		expect(yearInReview).toBeDefined()
	})

	test('should get user year achievements correctly and have expected properties', async () => {
		const year = 2024
		const steamClient = new SteamClient(getApiKey())
		const yearAchievements = await steamClient.sale.getUserYearAchivements(
			getSteamUserId(),
			getTestAppId(),
			{ year },
		)
		expect(yearAchievements).toBeDefined()
	})
})
