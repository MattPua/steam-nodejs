import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId, getTestAppId } from './setup'

describe('PlayerService', () => {
	test('should get badges correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const badges = await steamClient.player.getBadges(getSteamUserId())
		expect(badges).toBeDefined()
		expect(badges.player_level).toBeDefined()
		expect(badges.player_xp).toBeDefined()
		expect(badges.player_xp_needed_to_level_up).toBeDefined()
		expect(badges.player_xp_needed_current_level).toBeDefined()
		expect(badges.badges).toBeDefined()
		expect(badges.badges.length).toBeGreaterThan(0)
		expect(badges.badges[0]).toHaveProperty('badgeid')
		expect(badges.badges[0]).toHaveProperty('level')
		expect(badges.badges[0]).toHaveProperty('completion_time')
	})

	test('should get owned games correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const ownedGames = await steamClient.player.getOwnedGames(getSteamUserId())
		expect(ownedGames).toBeDefined()
		expect(ownedGames.games).toBeDefined()
		expect(ownedGames.games.length).toBeGreaterThan(0)
		expect(ownedGames.games[0]).toHaveProperty('appid')
		expect(ownedGames.games[0]).toHaveProperty('name')
		expect(ownedGames.games[0]).toHaveProperty('has_community_visible_stats')
		expect(ownedGames.games[0]).toHaveProperty('content_descriptorids')
	})

	test('should get recently played games correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const recentGames = await steamClient.player.getRecentlyPlayedGames(
			getSteamUserId(),
		)
		expect(recentGames).toBeDefined()
	})

	test('should get Steam level correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const level = await steamClient.player.getSteamLevel(getSteamUserId())
		expect(level).toBeDefined()
	})

	test('should get last played times correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const lastPlayedTimes =
			await steamClient.player.getLastPlayedTimes(undefined)
		expect(lastPlayedTimes).toBeDefined()
	})

	test('should get animated avatar correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const avatar = await steamClient.player.getAnimatedAvatar(getSteamUserId())
		expect(avatar).toBeDefined()
	})

	test('should get avatar frame correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const avatarFrame = await steamClient.player.getAvatarFrame(
			getSteamUserId(),
		)
		expect(avatarFrame).toBeDefined()
	})

	test('should get mini profile background correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const background = await steamClient.player.getMiniProfileBackground(
			getSteamUserId(),
		)
		expect(background).toBeDefined()
	})

	test('should get favourite badge correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const favouriteBadge = await steamClient.player.getFavouriteBadge(
			getSteamUserId(),
		)
		expect(favouriteBadge).toBeDefined()
	})

	test('should get player link details correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const linkDetails = await steamClient.player.getPlayerLinkDetails(
			getSteamUserId(),
		)
		expect(linkDetails).toBeDefined()
	})

	test('should get profile background correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const background = await steamClient.player.getProfileBackground(
			getSteamUserId(),
		)
		expect(background).toBeDefined()
	})

	test('should get profile customization correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const customization = await steamClient.player.getProfileCustomization(
			getSteamUserId(),
		)
		expect(customization).toBeDefined()
	})

	test('should get profile items equipped correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const items = await steamClient.player.getProfileItemsEquipped(
			getSteamUserId(),
		)
		expect(items).toBeDefined()
	})

	test('should get Steam Deck keyboard skin correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const keyboardSkin = await steamClient.player.getSteamDeckKeyboardSkin(
			getSteamUserId(),
		)
		expect(keyboardSkin).toBeDefined()
	})

	test('should get top achievements for games correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const topAchievements = await steamClient.player.getTopAchievementsForGames(
			getSteamUserId(),
			getTestAppId(),
		)
		expect(topAchievements).toBeDefined()
	})
})
