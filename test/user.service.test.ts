import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId } from './setup'

describe('UserService', () => {
	test('should get friends list correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const friendsList = await steamClient.user.getFriendsList(getSteamUserId())
		expect(friendsList).toBeDefined()
		expect(Array.isArray(friendsList)).toBe(true)
	})

	test('should list users correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const users = await steamClient.user.getUsers([getSteamUserId()])
		expect(users).toBeDefined()
		expect(Array.isArray(users)).toBe(true)
		expect(users.length).toBeGreaterThan(0)
		expect(users[0]).toHaveProperty('steamid')
		expect(users[0]).toHaveProperty('personaname')
		expect(users[0]).toHaveProperty('profileurl')
		expect(users[0]).toHaveProperty('avatar')
		expect(users[0]).toHaveProperty('avatarmedium')
		expect(users[0]).toHaveProperty('avatarfull')
		expect(users[0]).toHaveProperty('avatarhash')
		expect(users[0]).toHaveProperty('lastlogoff')
		expect(users[0]).toHaveProperty('personastate')
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
		expect(user.steamid).toBe(getSteamUserId())
		expect(user.personaname).toBeDefined()
		expect(user.profileurl).toBeDefined()
		expect(user.avatar).toBeDefined()
		expect(user.avatarmedium).toBeDefined()
		expect(user.avatarfull).toBeDefined()
		expect(user.avatarhash).toBeDefined()
	})

	test('should get friends list with profiles correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const friendsList = await steamClient.user.getFriendsListWithProfiles(
			getSteamUserId(),
		)
		expect(friendsList).toBeDefined()
	})
})
