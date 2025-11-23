import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId } from './setup'

describe('EconService', () => {
	test('should get trade offers summary correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const summary = await steamClient.econ.getTradeOffersSummary(
			getSteamUserId(),
		)
		expect(summary).toBeDefined()
	})

	test('should get trade history correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const history = await steamClient.econ.getTradeHistory(getSteamUserId())
		expect(history).toBeDefined()
	})

	test('should get trade offers correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const offers = await steamClient.econ.getTradeOffers(getSteamUserId())
		expect(offers).toBeDefined()
	})
})
