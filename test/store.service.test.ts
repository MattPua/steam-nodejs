import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId } from './setup'

describe('StoreService', () => {
	test('should get store apps correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const apps = await steamClient.store.getStoreApps({
			max_results: 10,
		})
		expect(apps).toBeDefined()
		expect(apps.have_more_results).toBe(true)
		expect(apps.apps.length).toBe(10)
		expect(apps.last_appid).toBeDefined()
	})

	test('should get games followed correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const games = await steamClient.store.getGamesFollowed(getSteamUserId())
		expect(games).toBeDefined()
	})

	test('should get games followed count correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const count = await steamClient.store.getGamesFollowedCount(
			getSteamUserId(),
		)
		expect(count.followed_game_count).toBeDefined()
	})

	test('should get most popular tags correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const response = await steamClient.store.getMostPopularTags()
		expect(response.tags).toBeDefined()
		expect(response.tags.length).toBeGreaterThan(0)
		expect(response.tags[0].tagid).toBeDefined()
		expect(response.tags[0].name).toBeDefined()
	})
})
