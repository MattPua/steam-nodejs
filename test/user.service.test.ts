import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId } from './setup'

describe('UserService', () => {
	test('should get friends list correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const friendsList = await steamClient.user.getFriendsList(getSteamUserId())
		expect(friendsList).toBeDefined()
	})

	test('should list users correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const users = await steamClient.user.getUsers([
			getSteamUserId() || '76561197960435530',
		])
		expect(users).toBeDefined()
	})

	test('should get user group list correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const groups = await steamClient.user.getUserGroupList(getSteamUserId())
		expect(groups).toBeDefined()
	})

	test('should get user correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const user = await steamClient.user.getUser(getSteamUserId())
		expect(user).toBeDefined()
	})
})
