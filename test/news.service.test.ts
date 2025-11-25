import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getTestAppId } from './setup'

describe('NewsService', () => {
	test('should get news for app correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const news = await steamClient.news.getNewsForApp(getTestAppId())
		expect(news).toBeDefined()
		expect(news.appid).toBeDefined()
		expect(news.newsitems).toBeDefined()
		expect(news.newsitems.newsitem.length).toBeGreaterThan(0)
		expect(news.newsitems.newsitem[0]).toHaveProperty('gid')
		expect(news.newsitems.newsitem[0]).toHaveProperty('title')
		expect(news.newsitems.newsitem[0]).toHaveProperty('url')
		expect(news.newsitems.newsitem[0]).toHaveProperty('is_external_url')
		expect(news.newsitems.newsitem[0]).toHaveProperty('author')
		expect(news.newsitems.newsitem[0]).toHaveProperty('contents')
	})
})
