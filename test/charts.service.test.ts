import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey } from './setup'

describe('ChartsService', () => {
	test('should get games by concurrent players correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const games = await steamClient.charts.getGamesByConcurrentPlayers()
		expect(games).toBeDefined()
	})

	test('should get most played games correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const games = await steamClient.charts.getMostPlayedGames()
		expect(games).toBeDefined()
	})

	test('should get best of year correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const bestOfYear = await steamClient.charts.getBestOfYear()
		expect(bestOfYear).toBeDefined()
	})
})
