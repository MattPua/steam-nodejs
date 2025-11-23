import type { NewsForAppResponse } from '../schemas/responses'
import { BaseService } from './base.service'

export class NewsService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey)
		this.baseUrl = `${this.baseUrl}/ISteamNews`
	}

	/**
	 * Returns the latest news for a game
	 * @param config.count - The number of news items to return. If not set, will return the default number of 20.
	 * @param config.maxlength - The maximum length of the news item contents field to return. If not set, will return the full content. Otherwise will truncate
	 */
	async getNewsForApp(
		appId: number,
		config: {
			count?: number
			maxlength?: number
		} = {
			count: 20,
			maxlength: undefined,
		},
	): Promise<NewsForAppResponse> {
		const url = this.generateSteamUrl(`/GetNewsForApp/v1`, {
			appid: appId,
			...config,
		})
		return await this.sendSteamRequest<NewsForAppResponse>(url)
	}
}
