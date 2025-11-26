import type { CommunityAppsResponse } from '../schemas/responses'
import { BaseService } from './_base.service'

export class CommunityService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'ICommunityService')
	}

	/**
	 * Gets the information for a given app id
	 * @param steamUserId
	 * @param appid
	 * @returns
	 */
	async getApps(
		steamUserId: string,
		appid: number,
	): Promise<CommunityAppsResponse> {
		const url = this.generateSteamUrl(`/GetApps/v1`, {
			steamid: steamUserId,
			'appids[0]': appid,
		})
		const response = await this.sendGETRequest<{
			response: CommunityAppsResponse
		}>(url)
		return response.response
	}
}
