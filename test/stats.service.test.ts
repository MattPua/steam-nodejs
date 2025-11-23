import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId, getTestAppId } from './setup'

describe('StatsService', () => {
	test('should get number of current players correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const playerCount = await steamClient.stats.getNumberOfCurrentPlayers(
			getTestAppId(),
		)
		expect(playerCount).toBeDefined()
	})

	test('should get player achievements correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const achievements = await steamClient.stats.getPlayerAchievements(
			getSteamUserId(),
			getTestAppId(),
		)
		expect(achievements).toBeDefined()
	})

	test('should get global achievement percentages for app correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const percentages =
			await steamClient.stats.getGlobalAchievementPercentagesForApp(
				getTestAppId(),
			)
		expect(percentages).toBeDefined()
	})

	test('should get schema for game correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const schema = await steamClient.stats.getSchemaForGame(getTestAppId())
		expect(schema).toBeDefined()
	})

	test('should get user stats for game correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const userStats = await steamClient.stats.getUserStatsForGame(
			getSteamUserId(),
			getTestAppId(),
		)
		expect(userStats).toBeDefined()
	})
})
