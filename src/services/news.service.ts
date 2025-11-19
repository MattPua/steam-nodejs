import { BaseService } from './base.service';
import type { NewsForAppResponse } from '../types';

export class NewsService extends BaseService {
	async getNewsForApp(appId: number): Promise<NewsForAppResponse> {
		const url = this.generateSteamUrl(
			`${this.baseUrl}/ISteamNews/GetNewsForApp/v1`,
			{
				key: this.apiKey,
				appid: appId.toString(),
			}
		);
		return await this.sendSteamRequest<NewsForAppResponse>(url);
	}
}
