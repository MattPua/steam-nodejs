import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getTestAppId } from './setup'

describe('NewsService', () => {
	test('should get news for app correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const news = await steamClient.news.getNewsForApp(getTestAppId())
		expect(news).toBeDefined()
	})
})
