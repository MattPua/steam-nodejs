import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey } from './setup'

describe('SteamClient', () => {
	test('should throw error when API key is not provided', () => {
		expect(() => new SteamClient('')).toThrow('API key is required')
	})

	test('should create SteamClient with valid API key', () => {
		const steamClient = new SteamClient(getApiKey())
		expect(steamClient).toBeDefined()
		expect(steamClient.wishlist).toBeDefined()
		expect(steamClient.player).toBeDefined()
		expect(steamClient.user).toBeDefined()
		expect(steamClient.news).toBeDefined()
		expect(steamClient.stats).toBeDefined()
		expect(steamClient.econ).toBeDefined()
		expect(steamClient.community).toBeDefined()
		expect(steamClient.sale).toBeDefined()
		expect(steamClient.charts).toBeDefined()
		expect(steamClient.store).toBeDefined()
		expect(steamClient.storeTopSellers).toBeDefined()
	})

	test('should get SteamAuth instance', () => {
		const steamClient = new SteamClient(getApiKey())
		const realm = 'http://localhost:3000'
		const returnUrl = 'http://localhost:3000/auth/steam/callback'
		const steamAuth = steamClient.getSteamAuth({ realm, returnUrl })
		expect(steamAuth).toBeDefined()
	})
})
