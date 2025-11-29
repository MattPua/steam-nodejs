export abstract class BaseService {
	private readonly _apiKey: string
	private readonly type: 'api' | 'store'
	private readonly route: string

	constructor(apiKey: string, type: 'api' | 'store', route: string) {
		this._apiKey = apiKey
		this.type = type
		this.route = route
	}

	get baseUrl(): string {
		return `https://${this.type}.steampowered.com/${this.route}`
	}

	protected async sendGETRequest<T>(url: string): Promise<T> {
		try {
			const response = await fetch(url)
			if (!response.ok) {
				console.error(response)
				throw new Error(response.statusText)
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
		authenticated = true,
	): string {
		const url = new URL(this.baseUrl + link)
		for (const [key, value] of Object.entries(params ?? {})) {
			if (value !== undefined) {
				url.searchParams.set(key, value.toString())
			}
		}
		if (authenticated) {
			url.searchParams.set('key', this._apiKey)
		}
		return url.toString()
	}
}
