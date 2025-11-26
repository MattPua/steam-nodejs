import type {
	UserYearAchievementsResponse,
	UserYearInReviewResponse,
} from '../schemas/responses'
import { BaseService } from './_base.service'

export class SaleService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'api', 'ISaleFeatureService')
	}

	/**
	 * Attempts to retrieve the achivements for a given app, achieved in that year
	 */
	async getUserYearAchivements(
		steamUserId: string,
		appid: number,
		config: {
			year: number
		},
	): Promise<UserYearAchievementsResponse> {
		const url = this.generateSteamUrl(`/GetUserYearAchievements/v1`, {
			steamid: steamUserId,
			'appids[0]': appid,
			year: config.year,
		})
		const response = await this.sendGETRequest<{
			response: UserYearAchievementsResponse
		}>(url)
		return response.response
	}

	/**
	 * Gets the year in review for a user (for past years only) Attempting to get the current year will return an empty response
	 * @param appId
	 * @returns
	 */
	async getUserYearInReview(
		steamUserId: string,
		config: {
			year: number
		},
	): Promise<UserYearInReviewResponse> {
		const url = this.generateSteamUrl(`/GetUserYearInReview/v1`, {
			steamid: steamUserId,
			year: config.year,
			force_regenerate: true,
			fetch_previous_year_summary: true,
		})
		const response = await this.sendGETRequest<{
			response: UserYearInReviewResponse
		}>(url)
		return response.response
	}
}
