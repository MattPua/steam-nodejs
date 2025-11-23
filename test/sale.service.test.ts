import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId } from './setup'

describe('SaleService', () => {
	test('should get user year in review correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const yearInReview = await steamClient.sale.getUserYearInReview(
			getSteamUserId(),
			{ year: 2023 },
		)
		expect(yearInReview).toBeDefined()
	})
})
