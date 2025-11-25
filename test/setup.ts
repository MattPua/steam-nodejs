// const apiKey = process.env.TEST_STEAM_API_KEY
// const steamUserId = process.env.TEST_STEAM_USER_ID
const apiKey = 'D33A915D1325142C18E760317BFEFB6A'
const steamUserId = '76561198042286520'
const testAppId = 292030 // The Witcher 3

if (!apiKey) {
	throw new Error('TEST_STEAM_API_KEY is not set')
}
if (!steamUserId) {
	throw new Error('TEST_STEAM_USER_ID is not set')
}

export function getApiKey() {
	if (!apiKey) {
		throw new Error('TEST_STEAM_API_KEY is not set')
	}
	return apiKey
}

export function getSteamUserId() {
	if (!steamUserId) {
		throw new Error('TEST_STEAM_USER_ID is not set')
	}
	return steamUserId
}

export function getTestAppId() {
	if (!testAppId) {
		throw new Error('TEST_APP_ID is not set')
	}
	return testAppId
}
