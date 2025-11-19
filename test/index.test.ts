import { expect, test } from 'bun:test';
import { SteamClient } from '../src';

const apiKey = process.env.TEST_STEAM_API_KEY;
const steamUserId = process.env.TEST_STEAM_USER_ID;
const testAppId = process.env.TEST_APP_ID
	? Number.parseInt(process.env.TEST_APP_ID, 10)
	: 730; // Default to CS:GO if not provided

if (!apiKey) {
	throw new Error('TEST_STEAM_API_KEY is not set');
}
if (!steamUserId) {
	throw new Error('TEST_STEAM_USER_ID is not set');
}

test('should throw error when API key is not provided', () => {
	expect(() => new SteamClient('')).toThrow('API key is required');
});

test('should create SteamClient with valid API key', () => {
	const steamClient = new SteamClient(apiKey || 'test-key');
	expect(steamClient).toBeDefined();
	expect(steamClient.wishlist).toBeDefined();
	expect(steamClient.player).toBeDefined();
	expect(steamClient.user).toBeDefined();
	expect(steamClient.news).toBeDefined();
	expect(steamClient.stats).toBeDefined();
});

test('should get SteamAuth instance', () => {
	const steamClient = new SteamClient(apiKey);
	const realm = 'http://localhost:3000';
	const returnUrl = 'http://localhost:3000/auth/steam/callback';
	const steamAuth = steamClient.getSteamAuth({ realm, returnUrl });
	expect(steamAuth).toBeDefined();
});

test('should get friends list correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const friendsList = await steamClient.user.getFriendsList(steamUserId);
	expect(friendsList).toBeDefined();
});

test('should get badges correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const badges = await steamClient.player.getBadges(steamUserId);
	expect(badges).toBeDefined();
});

test('should get news for app correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const news = await steamClient.news.getNewsForApp(testAppId);
	expect(news).toBeDefined();
});

test('should get number of current players correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const playerCount = await steamClient.stats.getNumberOfCurrentPlayers(
		testAppId
	);
	expect(playerCount).toBeDefined();
});

test('should get owned games correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const ownedGames = await steamClient.player.getOwnedGames(steamUserId);
	expect(ownedGames).toBeDefined();
});

test('should get player achievements correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const achievements = await steamClient.stats.getPlayerAchievements(
		steamUserId,
		testAppId
	);
	expect(achievements).toBeDefined();
});

test('should list users correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const users = await steamClient.user.listUsers([
		steamUserId || '76561197960435530',
	]);
	expect(users).toBeDefined();
});

test('should get recently played games correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const recentGames = await steamClient.player.getRecentlyPlayedGames(
		steamUserId
	);
	expect(recentGames).toBeDefined();
});

test('should get Steam level correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const level = await steamClient.player.getSteamLevel(steamUserId);
	expect(level).toBeDefined();
});

test('should get user group list correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const groups = await steamClient.user.getUserGroupList(steamUserId);
	expect(groups).toBeDefined();
});

test('should get wishlist correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const wishlist = await steamClient.wishlist.getWishlist(steamUserId);
	expect(wishlist).toBeDefined();
});

test('should get wishlist item count correctly', async () => {
	const steamClient = new SteamClient(apiKey);
	const wishlistCount = await steamClient.wishlist.getWishlistItemCount(
		steamUserId
	);
	expect(wishlistCount).toBeDefined();
});
