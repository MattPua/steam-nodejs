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
import { BaseService } from './base.service'

export class PlayerService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/IPlayerService`
	}

	/**
	 * Gets the steam level for a user
	 */
	async getSteamLevel(steamUserId: string): Promise<SteamLevelResponse> {
		const url = this.generateSteamUrl(`/GetSteamLevel/v1`, {
			steamid: steamUserId,
		})
		return await this.sendSteamRequest<SteamLevelResponse>(url)
	}

	/**
	 * Gets the badges for a user
	 */
	async getBadges(steamUserId: string): Promise<BadgesResponse> {
		const url = this.generateSteamUrl(`/GetBadges/v1`, {
			steamid: steamUserId,
		})
		return await this.sendSteamRequest<BadgesResponse>(url)
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
		return await this.sendSteamRequest<OwnedGamesResponse>(url)
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
		return await this.sendSteamRequest<RecentlyPlayedGamesResponse>(url)
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
		return await this.sendSteamRequest<LastPlayedTimesResponse>(url)
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
		return await this.sendSteamRequest<AnimatedAvatarResponse>(url)
	}

	/**
	 * Gets which avatar frame is active for a specific user
	 */
	async getAvatarFrame(steamUserId: string): Promise<AvatarFrameResponse> {
		const url = this.generateSteamUrl(`/GetAvatarFrame/v1`, {
			steamid: steamUserId,
		})
		return await this.sendSteamRequest<AvatarFrameResponse>(url)
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
		return await this.sendSteamRequest<ProfileBackgroundResponse>(url)
	}

	/**
	 * Gets the favourite badge for a user
	 * TODO: Not yet typed correctly
	 */
	async getFavouriteBadge(steamUserId: string): Promise<{
		response: {
			has_favorite_badge: boolean
		}
	}> {
		const url = this.generateSteamUrl(`/GetFavoriteBadge/v1`, {
			steamid: steamUserId,
		})
		return await this.sendSteamRequest<any>(url)
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
		return await this.sendSteamRequest<PlayerLinkDetailsResponse>(url)
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
		return await this.sendSteamRequest<ProfileBackgroundResponse>(url)
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
		return await this.sendSteamRequest<ProfileCustomizationResponse>(url)
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
		return await this.sendSteamRequest<ProfileItemsEquippedResponse>(url)
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
		return await this.sendSteamRequest<SteamDeckKeyboardSkinsResponse>(url)
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
	): Promise<TopAchievementsForGamesResponse> {
		const url = this.generateSteamUrl(`/GetTopAchievementsForGames/v1`, {
			steamid: steamUserId,
			'appids[0]': appId,
			...config,
		})
		return await this.sendSteamRequest<TopAchievementsForGamesResponse>(url)
	}
}
