import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey } from './setup'

describe('ChartsService', () => {
	test('should get games by concurrent players correctly and check key properties', async () => {
		const steamClient = new SteamClient(getApiKey())
		const games = await steamClient.charts.getGamesByConcurrentPlayers()
		expect(games).toBeDefined()
		expect(games.last_update).toBeDefined()
		expect(games.ranks).toBeDefined()
		expect(Array.isArray(games.ranks)).toBe(true)
		if (games.ranks.length > 0) {
			const game = games.ranks[0]
			expect(game).toHaveProperty('concurrent_in_game')
			expect(game).toHaveProperty('rank')
			expect(game).toHaveProperty('appid')
			expect(game).toHaveProperty('peak_in_game')
		}
	})

	test('should get most played games correctly and check key properties', async () => {
		const steamClient = new SteamClient(getApiKey())
		const games = await steamClient.charts.getMostPlayedGames()
		expect(games).toBeDefined()
		expect(games.rollup_date).toBeDefined()
		expect(games.ranks).toBeDefined()
		expect(Array.isArray(games.ranks)).toBe(true)
		if (games.ranks.length > 0) {
			const game = games.ranks[0]
			expect(game).toHaveProperty('last_week_rank')
			expect(game).toHaveProperty('rank')
			expect(game).toHaveProperty('appid')
			expect(game).toHaveProperty('peak_in_game')
		}
	})

	test('should get best of year correctly and check key properties', async () => {
		const steamClient = new SteamClient(getApiKey())
		const bestOfYear = await steamClient.charts.getBestOfYear()
		expect(bestOfYear).toBeDefined()
		expect(bestOfYear.pages).toBeDefined()
		expect(Array.isArray(bestOfYear.pages)).toBe(true)
		if (bestOfYear.pages.length > 0) {
			const page = bestOfYear.pages[0]
			expect(page).toHaveProperty('name')
			expect(page).toHaveProperty('url_path')
			expect(page).toHaveProperty('banner_url')
			expect(Array.isArray(page.banner_url)).toBe(true)
			expect(page).toHaveProperty('banner_url_mobile')
			expect(Array.isArray(page.banner_url_mobile)).toBe(true)
			expect(page).toHaveProperty('start_date')
		}
	})
})
