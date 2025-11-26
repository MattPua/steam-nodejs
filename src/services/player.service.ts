import type {
	AnimatedAvatarResponse,
	AvatarFrameResponse,
	BadgesResponse,
	LastPlayedTimesResponse,
	OwnedGamesResponse,
	PlayerLinkDetailsResponse,
	ProfileBackgroundResponse,
	ProfileCustomizationResponse,
	ProfileItemsEquippedResponse,
	RecentlyPlayedGamesResponse,
	SteamDeckKeyboardSkinsResponse,
	SteamLevelResponse,
	TopAchievementsForGamesResponse,
} from '../schemas/responses'
import { generateImageMediaUrl } from '../utils'
import { BaseService } from './_base.service'

export class PlayerService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'IPlayerService')
	}

	/**
	 * Gets the steam level for a user
	 */
	async getSteamLevel(steamUserId: string): Promise<SteamLevelResponse> {
		const url = this.generateSteamUrl(`/GetSteamLevel/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: SteamLevelResponse
		}>(url)
		return response.response
	}

	/**
	 * Gets the badges for a user
	 */
	async getBadges(steamUserId: string): Promise<BadgesResponse> {
		const url = this.generateSteamUrl(`/GetBadges/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: BadgesResponse
		}>(url)
		return response.response
	}

	/**
	 * Returns list of games owned by the the user
	 * @param config.include_appinfo - If true, includes additional details (name, icon) about each game
	 * @param config.include_played_free_games - Free games are excluded by default. If true, free games that have been played will be included.
	 * @param config.include_free_sub - Some games are in the free sub, which are excluded by default. If true, free sub games will be included.
	 * @param config.skip_unvetted_apps - If true, skip unvetted store apps.
	 * @param config.include_extended_appinfo - If true, include extended app info. include_appinfo must also be true.
	 */
	async getOwnedGames(
		steamUserId: string,
		config: {
			include_appinfo?: boolean
			include_played_free_games?: boolean
			include_free_sub?: boolean
			skip_unvetted_apps?: boolean
			include_extended_appinfo?: boolean
		} = {
			include_appinfo: true,
			include_played_free_games: false,
			include_free_sub: false,
			skip_unvetted_apps: false,
			include_extended_appinfo: true,
		},
	): Promise<OwnedGamesResponse> {
		const url = this.generateSteamUrl(`/GetOwnedGames/v1`, {
			steamid: steamUserId,
			...config,
		})
		const response = await this.sendGETRequest<{
			response: OwnedGamesResponse
		}>(url)
		return response.response
	}

	/**
	 * Returns information about the games a user has played in the last two weeks
	 */
	async getRecentlyPlayedGames(
		steamUserId: string,
	): Promise<RecentlyPlayedGamesResponse> {
		const url = this.generateSteamUrl(`/GetRecentlyPlayedGames/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: RecentlyPlayedGamesResponse
		}>(url)
		const games = response.response.games.map((game) => ({
			...game,
			img_logo_url: generateImageMediaUrl(game.appid, game.img_logo_url),
			img_icon_url: generateImageMediaUrl(game.appid, game.img_icon_url),
		}))
		return {
			...response.response,
			games,
		}
	}

	/**
	 *
	 * Gets the last played times for a user
	 * @param minLastPlayedTime - The minimum last played time to filter by
	 */
	async getLastPlayedTimes(
		minLastPlayedTime: number | undefined,
	): Promise<LastPlayedTimesResponse> {
		const url = this.generateSteamUrl(`/ClientGetLastPlayedTimes/v1`, {
			minlastplayedtime: minLastPlayedTime,
		})
		const response = await this.sendGETRequest<{
			response: LastPlayedTimesResponse
		}>(url)
		return response.response
	}

	/**
	 * Gets which animated avatar is active for the user
	 */
	async getAnimatedAvatar(
		steamUserId: string,
	): Promise<AnimatedAvatarResponse> {
		const url = this.generateSteamUrl(`/GetAnimatedAvatar/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: { avatar: AnimatedAvatarResponse }
		}>(url)
		return response.response.avatar
	}

	/**
	 * Gets which avatar frame is active for a specific user
	 */
	async getAvatarFrame(steamUserId: string): Promise<AvatarFrameResponse> {
		const url = this.generateSteamUrl(`/GetAvatarFrame/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: { avatar_frame: AvatarFrameResponse }
		}>(url)
		return response.response.avatar_frame
	}

	/**
	 * Gets the active mini profile background for a user
	 */
	async getMiniProfileBackground(
		steamUserId: string,
	): Promise<ProfileBackgroundResponse> {
		const url = this.generateSteamUrl(`/GetMiniProfileBackground/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: { profile_background: ProfileBackgroundResponse }
		}>(url)
		return response.response.profile_background
	}

	/**
	 * Gets the favourite badge for a user
	 * TODO: Not yet typed correctly
	 */
	async getFavouriteBadge(
		steamUserId: string,
	): Promise<{ has_favorite_badge: boolean }> {
		const url = this.generateSteamUrl(`/GetFavoriteBadge/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: {
				has_favorite_badge: boolean
			}
		}>(url)
		return response.response
	}

	/**
	 * Replacement for WG GetPlayerLinkDetails
	 */
	async getPlayerLinkDetails(
		steamUserId: string,
	): Promise<PlayerLinkDetailsResponse> {
		const url = this.generateSteamUrl(`/GetPlayerLinkDetails/v1`, {
			'steamids[0]': steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: { accounts: PlayerLinkDetailsResponse }
		}>(url)
		return response.response.accounts
	}

	/**
	 * Gets which profile background is active for a user
	 */
	async getProfileBackground(
		steamUserId: string,
	): Promise<ProfileBackgroundResponse> {
		const url = this.generateSteamUrl(`/GetProfileBackground/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: { profile_background: ProfileBackgroundResponse }
		}>(url)
		return response.response.profile_background
	}

	/**
	 *
	 * Gets the customizations (if any) for a profile
	 * @param config.include_purchased_customizations - If true, include purchased customizations.
	 * @param config.include_inactive_customizations - If true, include inactive customizations.
	 */
	async getProfileCustomization(
		steamUserId: string,
		config: {
			include_purchased_customizations?: boolean
			include_inactive_customizations?: boolean
		} = {
			include_purchased_customizations: false,
			include_inactive_customizations: false,
		},
	): Promise<ProfileCustomizationResponse> {
		const url = this.generateSteamUrl(`/GetProfileCustomization/v1`, {
			steamid: steamUserId,
			...config,
		})
		const response = await this.sendGETRequest<{
			response: ProfileCustomizationResponse
		}>(url)
		return response.response
	}

	/**
	 * Returns the items the user has equipped on their profile
	 */
	async getProfileItemsEquipped(
		steamUserId: string,
	): Promise<ProfileItemsEquippedResponse> {
		const url = this.generateSteamUrl(`/GetProfileItemsEquipped/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: ProfileItemsEquippedResponse
		}>(url)
		return response.response
	}

	/**
	 * Gets the steam deck keyboard skin for a user
	 */
	async getSteamDeckKeyboardSkin(
		steamUserId: string,
	): Promise<SteamDeckKeyboardSkinsResponse> {
		const url = this.generateSteamUrl(`/GetSteamDeckKeyboardSkin/v1`, {
			steamid: steamUserId,
		})
		const response = await this.sendGETRequest<{
			response: SteamDeckKeyboardSkinsResponse
		}>(url)
		return response.response
	}

	/**
	 * Gets the top achievements for a user for a specific game
	 * @param config.max_achievements - The maximum number of achievements to return. If not set, will not show any achivement details
	 */
	async getTopAchievementsForGames(
		steamUserId: string,
		appId: number,
		config: {
			max_achievements?: number
		} = {
			max_achievements: 20,
		},
	): Promise<Array<TopAchievementsForGamesResponse>> {
		const url = this.generateSteamUrl(`/GetTopAchievementsForGames/v1`, {
			steamid: steamUserId,
			'appids[0]': appId,
			...config,
		})
		const response = await this.sendGETRequest<{
			response: { games: Array<TopAchievementsForGamesResponse> }
		}>(url)
		return response.response.games
	}
}
