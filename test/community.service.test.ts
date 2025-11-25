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
		expect(apps.apps).toBeDefined()
		expect(apps.apps.length).toBeGreaterThan(0)
		expect(apps.apps[0]).toHaveProperty('appid')
		expect(apps.apps[0]).toHaveProperty('name')
		expect(apps.apps[0]).toHaveProperty('icon')
		expect(apps.apps[0]).toHaveProperty('community_visible_stats')
		expect(apps.apps[0]).toHaveProperty('propagation')
		expect(apps.apps[0]).toHaveProperty('app_type')
		expect(apps.apps[0]).toHaveProperty('content_descriptorids')
		expect(apps.apps[0]).toHaveProperty('content_descriptorids_including_dlc')
	})
})
