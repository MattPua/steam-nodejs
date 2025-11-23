import { describe, expect, test } from 'bun:test'
import { UserStoreVisitService } from '../src/services/user-store-visit.service'
import { getApiKey, getSteamUserId } from './setup'

describe('UserStoreVisitService', () => {
	test('should get most visited items on store correctly', async () => {
		const service = new UserStoreVisitService(getApiKey())
		const items = await service.getMostVisitedItemsOnStore(getSteamUserId())
		expect(items).toBeDefined()
	})
})
