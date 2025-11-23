import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId, getTestAppId } from './setup'

describe('CommunityService', () => {
	test('should get apps correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const apps = await steamClient.community.getApps(
			getSteamUserId(),
			getTestAppId(),
		)
		expect(apps).toBeDefined()
	})
})
