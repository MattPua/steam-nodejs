import type {
	StoreCategory,
	StoreTag,
} from '../schemas/responses/actions.schemas'
import { BaseService } from './_base.service'

export class ActionsService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'store', 'actions')
	}

	/**
	 *
	 * @returns Returns all categories for the store
	 */
	async getCategories(): Promise<StoreCategory[]> {
		const url = this.generateSteamUrl(`/ajaxgetstorecategories`, {}, false)
		const response = await this.sendGETRequest<StoreCategory[]>(url)
		return response
	}

	/**
	 *
	 * @returns Returns all tags for the store
	 */
	async getTags(): Promise<StoreTag[]> {
		const url = this.generateSteamUrl(`/ajaxgetstoretags`, {}, false)
		const response = await this.sendGETRequest<{
			tags: StoreTag[]
			success: number
		}>(url)
		return response.tags
	}
}
