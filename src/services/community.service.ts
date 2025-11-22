import type { CommunityAppsResponse } from '../schemas/responses'
import { BaseService } from './base.service'

export class CommunityService extends BaseService {
	async getApps(
		steamUserId: string,
		appids: number,
	): Promise<CommunityAppsResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamCommunity/GetAppList/v1`,
			{
				key: this.apiKey,
				steamid: steamUserId,
				'appids[0]': appids,
			},
		)
		return await this.sendSteamRequest<CommunityAppsResponse>(url)
	}
}
