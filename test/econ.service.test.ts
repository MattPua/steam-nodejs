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
		expect(summary.pending_received_count).toBeDefined()
		expect(summary.new_received_count).toBeDefined()
		expect(summary.updated_received_count).toBeDefined()
		expect(summary.historical_received_count).toBeDefined()
		expect(summary.pending_sent_count).toBeDefined()
		expect(summary.newly_accepted_sent_count).toBeDefined()
		expect(summary.updated_sent_count).toBeDefined()
		expect(summary.historical_sent_count).toBeDefined()
		expect(summary.escrow_received_count).toBeDefined()
		expect(summary.escrow_sent_count).toBeDefined()
	})

	test.skip('should get trade history correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const history = await steamClient.econ.getTradeHistory(getSteamUserId())
		expect(history).toBeDefined()
	})

	test.skip('should get trade offers correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const offers = await steamClient.econ.getTradeOffers(getSteamUserId())
		expect(offers).toBeDefined()
	})
})
