export abstract class BaseService {
	protected readonly apiKey: string
	protected baseUrl: string = 'https://api.steampowered.com'

	constructor(apiKey: string) {
		this.apiKey = apiKey
	}

	protected async sendSteamRequest<T>(url: string): Promise<T> {
		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error(`Failed to fetch ${url}: ${response.statusText}.`)
			}
			return response.json()
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	protected generateSteamUrl(
		link: string,
		params?: Record<string, string | number | boolean | undefined>,
	): string {
		const url = new URL(this.baseUrl + link)
		for (const [key, value] of Object.entries(params ?? {})) {
			if (value !== undefined) {
				url.searchParams.set(key, value.toString())
			}
		}
		url.searchParams.set('key', this.apiKey)
		return url.toString()
	}
}
