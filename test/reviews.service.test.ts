import { describe, expect, test } from 'bun:test'
import { SteamClient } from '../src/steam-client'
import { getApiKey, getTestAppId } from './setup'

describe('ReviewsService', () => {
	test('should get reviews for app correctly', async () => {
		const steamClient = new SteamClient(getApiKey())
		const reviews = await steamClient.reviews.getReviews(getTestAppId())
		expect(reviews).toBeDefined()
		// Check basic structure
		expect(reviews).toHaveProperty('success', 1)
		expect(reviews).toHaveProperty('reviews')
		expect(Array.isArray(reviews.reviews)).toBe(true)
		expect(reviews).toHaveProperty('query_summary')
		expect(typeof reviews.query_summary).toBe('object')
		// If reviews are present, validate one
		if (reviews.reviews.length > 0) {
			const first = reviews.reviews[0]
			expect(first).toHaveProperty('recommendationid')
			expect(typeof first.recommendationid).toBe('string')
			expect(first).toHaveProperty('author')
			expect(typeof first.author).toBe('object')
			expect(first.author).toHaveProperty('steamid')
			expect(typeof first.author.steamid).toBe('string')
			expect(first).toHaveProperty('language')
			expect(typeof first.language).toBe('string')
			expect(first).toHaveProperty('review')
			expect(typeof first.review).toBe('string')
			expect(first).toHaveProperty('timestamp_created')
			expect(typeof first.timestamp_created).toBe('number')
			expect(first).toHaveProperty('voted_up')
			expect(typeof first.voted_up).toBe('boolean')
			expect(first).toHaveProperty('votes_up')
			expect(typeof first.votes_up).toBe('number')
			expect(first).toHaveProperty('votes_funny')
			expect(typeof first.votes_funny).toBe('number')
		}
	})

	test('should get reviews sorted by most recent', async () => {
		const steamClient = new SteamClient(getApiKey())
		const reviews = await steamClient.reviews.getReviews(getTestAppId(), {
			filter: 'recent',
		})
		expect(reviews).toBeDefined()
		expect(reviews).toHaveProperty('success', 1)
		expect(Array.isArray(reviews.reviews)).toBe(true)
		// If reviews, timestamps should be in descending order
		const timestamps = reviews.reviews.map((r) => r.timestamp_created)
		for (let i = 1; i < timestamps.length; i++) {
			expect(timestamps[i - 1]).toBeGreaterThanOrEqual(timestamps[i])
		}
	})

	test('should get reviews in only a specific language', async () => {
		const steamClient = new SteamClient(getApiKey())
		const reviews = await steamClient.reviews.getReviews(getTestAppId(), {
			language: 'german',
		})
		expect(reviews).toBeDefined()
		expect(reviews).toHaveProperty('success', 1)
		expect(Array.isArray(reviews.reviews)).toBe(true)
		for (const review of reviews.reviews) {
			expect(review.language.toLowerCase()).toBe('german')
		}
	})

	test('should get only positive reviews', async () => {
		const steamClient = new SteamClient(getApiKey())
		const reviews = await steamClient.reviews.getReviews(getTestAppId(), {
			filter: 'recent',
			review_type: 'positive',
		})
		expect(reviews).toBeDefined()
		expect(reviews).toHaveProperty('success', 1)
		expect(Array.isArray(reviews.reviews)).toBe(true)
		for (const review of reviews.reviews) {
			expect(review.voted_up).toBe(true)
		}
	})

	test('should only get negative reviews', async () => {
		const steamClient = new SteamClient(getApiKey())
		const reviews = await steamClient.reviews.getReviews(getTestAppId(), {
			filter: 'recent',
			review_type: 'negative',
		})
		expect(reviews).toBeDefined()
		expect(reviews).toHaveProperty('success', 1)
		expect(Array.isArray(reviews.reviews)).toBe(true)
		for (const review of reviews.reviews) {
			expect(review.voted_up).toBe(false)
		}
	})

	test('should limit number of reviews returned', async () => {
		const steamClient = new SteamClient(getApiKey())
		const reviews = await steamClient.reviews.getReviews(getTestAppId(), {
			num_per_page: '5',
		})
		expect(reviews).toBeDefined()
		expect(reviews).toHaveProperty('success', 1)
		expect(Array.isArray(reviews.reviews)).toBe(true)
		expect(reviews.reviews.length).toBeLessThanOrEqual(5)
	})

	test('should get negative reviews in English', async () => {
		const steamClient = new SteamClient(getApiKey())
		const reviews = await steamClient.reviews.getReviews(getTestAppId(), {
			review_type: 'negative',
			language: 'english',
			num_per_page: '3',
		})
		expect(reviews).toBeDefined()
		expect(reviews).toHaveProperty('success', 1)
		expect(Array.isArray(reviews.reviews)).toBe(true)
		// Expect all to be voted_down and language english
		for (const review of reviews.reviews) {
			expect(review.voted_up).toBe(false)
			expect(review.language.toLowerCase()).toBe('english')
		}
	})
})
