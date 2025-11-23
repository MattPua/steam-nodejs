import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId } from './setup'

describe('StoreService', () => {
	test('should get store apps correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const apps = await steamClient.store.getStoreApps()
		expect(apps).toBeDefined()
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
		expect(count).toBeDefined()
	})

	test('should get most popular tags correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const tags = await steamClient.store.getMostPopularTags()
		expect(tags).toBeDefined()
	})
})
