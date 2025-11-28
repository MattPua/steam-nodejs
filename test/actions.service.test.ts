import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey } from './setup'

describe('ActionsService', () => {
	test('should get categories correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const categories = await steamClient.actions.getCategories()
		expect(categories).toBeDefined()
		expect(categories.length).toBeGreaterThan(0)
	})

	test('should get tags correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const tags = await steamClient.actions.getTags()
		expect(tags).toBeDefined()
		expect(tags.length).toBeGreaterThan(0)
	})
})
