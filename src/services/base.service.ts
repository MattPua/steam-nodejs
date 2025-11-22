export abstract class BaseService {
	protected readonly apiKey: string
	protected readonly baseUrl: string = 'https://api.steampowered.com'

	constructor(apiKey: string) {
		this.apiKey = apiKey
	}

	protected async sendSteamRequest<T>(url: string): Promise<T> {
		try {
			const response = await fetch(url)
			return response.json()
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	protected generateSteamUrl(
		link: string,
		params: Record<string, string | number | boolean | undefined>,
		dataRequest?: Record<string, string | number | boolean | undefined>,
	): string {
		const url = new URL(link)
		for (const [key, value] of Object.entries(params)) {
			if (value !== undefined) {
				url.searchParams.set(key, value.toString())
			}
		}
		if (dataRequest) {
			url.searchParams.set('data_request', JSON.stringify(dataRequest))
		}
		return url.toString()
	}
}
