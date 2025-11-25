import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getSteamUserId, getTestAppId } from './setup'

describe('SaleService', () => {
	test('should get user year in review correctly and have expected properties', async () => {
		const year = 2024
		const steamClient = new SteamClient(getApiKey())
		const yearInReview = await steamClient.sale.getUserYearInReview(
			getSteamUserId(),
			{ year },
		)
		expect(yearInReview).toBeDefined()
		// Top-level checks
		expect(yearInReview).toHaveProperty('stats')
		expect(yearInReview).toHaveProperty('performance_stats')
		expect(yearInReview).toHaveProperty('distribution')
		expect(yearInReview).toHaveProperty('previous_year_summary')

		const stats = yearInReview.stats
		expect(stats).toHaveProperty('account_id')
		expect(stats).toHaveProperty('year', year)
		expect(stats).toHaveProperty('playtime_stats')
		expect(stats.playtime_stats).toHaveProperty('total_stats')
		expect(stats.playtime_stats).toHaveProperty('games')
		expect(stats.playtime_stats).toHaveProperty('months')

		const perfStats = yearInReview.performance_stats
		expect(perfStats).toHaveProperty('overall_time_ms')

		const distribution = yearInReview.distribution
		expect(distribution).toHaveProperty('new_releases')
		expect(distribution).toHaveProperty('recent_cutoff_year')

		const prevYearSummary = yearInReview.previous_year_summary
		expect(prevYearSummary).toHaveProperty('games_played')
	})

	test('should get user year achievements correctly and have expected properties', async () => {
		const year = 2024
		const steamClient = new SteamClient(getApiKey())
		const yearAchievements = await steamClient.sale.getUserYearAchivements(
			getSteamUserId(),
			getTestAppId(),
			{ year },
		)
		expect(yearAchievements).toBeDefined()
		expect(yearAchievements).toHaveProperty('game_achievements')
		expect(yearAchievements).toHaveProperty('total_achievements')
		expect(yearAchievements).toHaveProperty('total_rare_achievements')
		expect(yearAchievements).toHaveProperty('total_games_with_achievements')
	})
})
