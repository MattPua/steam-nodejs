import type {
	GetAppListResponse,
	GetGamesFollowedCountResponse,
	GetGamesFollowedResponse,
	GetMostPopularTagsResponse,
} from '../schemas/responses/store.schemas'
import { BaseService } from './base.service'

export class StoreService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/IStoreService`
	}

	/**
	 * Gets list of apps in the store
	 * @param config.if_modified_since - Return only items that have been modified since this date.
	 * @param config.include_games - Include games (defaults to enabled).
	 * @param config.include_dlc - Include DLC, defaults to false
	 * @param config.include_software - Include software items, defaults to false
	 * @param config.include_videos - Include videos and series, defaults to false
	 * @param config.include_hardware - Include hardware, defaults to false
	 * @param config.last_appid - For continuations, this is the last appid returned from the previous call. pass this to the next call to get the next page of results.
	 * @param config.max_results - Number of results to return at a time. Default 100
	 */
	async getStoreApps(
		config: {
			if_modified_since?: number
			include_games?: boolean
			include_dlc?: boolean
			include_software?: boolean
			include_videos?: boolean
			include_hardware?: boolean
			last_appid?: number
			max_results?: number
		} = {
			include_games: true,
			include_dlc: false,
			include_software: false,
			include_videos: false,
			include_hardware: false,
			max_results: 100,
		},
	): Promise<GetAppListResponse> {
		const url = this.generateSteamUrl(`/GetAppList/v1`, {
			...config,
		})
		return await this.sendSteamRequest<GetAppListResponse>(url)
	}

	/**
	 * Returns the list of games a user is following
	 * @param steamUserId - The Steam ID of the user
	 */
	async getGamesFollowed(
		steamUserId: string,
	): Promise<GetGamesFollowedResponse> {
		const url = this.generateSteamUrl(`/GetGamesFollowed/v1`, {
			steamid: steamUserId,
		})
		return await this.sendSteamRequest<GetGamesFollowedResponse>(url)
	}

	/**
	 * Returns the number of games a user is following
	 * @param steamUserId - The Steam ID of the user
	 */
	async getGamesFollowedCount(
		steamUserId: string,
	): Promise<GetGamesFollowedCountResponse> {
		const url = this.generateSteamUrl(`/GetGamesFollowedCount/v1`, {
			steamid: steamUserId,
		})
		return await this.sendSteamRequest<GetGamesFollowedCountResponse>(url)
	}

	async getMostPopularTags(): Promise<GetMostPopularTagsResponse> {
		const url = this.generateSteamUrl(`/GetMostPopularTags/v1`)
		return await this.sendSteamRequest<GetMostPopularTagsResponse>(url)
	}
}
