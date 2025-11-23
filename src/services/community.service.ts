import type { CommunityAppsResponse } from '../schemas/responses'
import { BaseService } from './base.service'

export class CommunityService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/ICommunityService`
	}

	async getApps(
		steamUserId: string,
		appids: number,
	): Promise<CommunityAppsResponse> {
		const url = this.generateSteamUrl(`/GetApps/v1`, {
			steamid: steamUserId,
			'appids[0]': appids,
		})
		return await this.sendSteamRequest<CommunityAppsResponse>(url)
	}
}
