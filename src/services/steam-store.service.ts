import type {
	SteamStoreAppDetails,
	SteamStoreSchemasRoot,
} from '../schemas/responses/steam-store.schemas'
import { BaseService } from './base.service'

export class SteamStoreService extends BaseService {
	constructor(apiKey: string) {
		super(apiKey, 'store', 'api/appdetails')
	}

	/**
	 * Returns information aobut a given app id from the steam store
	 */
	async getAppDetails(appId: string): Promise<SteamStoreAppDetails> {
		const url = this.generateSteamUrl(`/GetAppDetails/v2`, {
			appids: appId,
		})
		const data = await this.sendSteamRequest<SteamStoreSchemasRoot>(url)
		const response = data?.[appId]
		if (response?.success) {
			return response.data
		}
		throw new Error(`Failed to get app details for app id: ${appId}`)
	}
}
