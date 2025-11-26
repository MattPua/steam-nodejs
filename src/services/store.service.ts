import type {
	GetAppListResponse,
	GetGamesFollowedCountResponse,
	GetGamesFollowedResponse,
	GetMostPopularTagsResponse,
} from '../schemas/responses/store.schemas'
import { BaseService } from './_base.service'

export class StoreService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'IStoreService')
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
		const response = await this.sendGETRequest<{
			response: GetAppListResponse
		}>(url)
		return response.response
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
		const response = await this.sendGETRequest<{
			response: GetGamesFollowedResponse
		}>(url)
		return response.response
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
		const response = await this.sendGETRequest<{
			response: GetGamesFollowedCountResponse
		}>(url)
		return response.response
	}

	async getMostPopularTags(): Promise<GetMostPopularTagsResponse> {
		const url = this.generateSteamUrl(`/GetMostPopularTags/v1`)
		const response = await this.sendGETRequest<{
			response: GetMostPopularTagsResponse
		}>(url)
		return response.response
	}
}
