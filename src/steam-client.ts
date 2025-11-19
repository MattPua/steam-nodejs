import SteamAuth from 'node-steam-openid';
import { WishlistService } from './services/wishlist.service';
import { PlayerService } from './services/player.service';
import { UserService } from './services/user.service';
import { NewsService } from './services/news.service';
import { StatsService } from './services/stats.service';

export class SteamClient {
	private readonly apiKey: string;
	public readonly wishlist: WishlistService;
	public readonly player: PlayerService;
	public readonly user: UserService;
	public readonly news: NewsService;
	public readonly stats: StatsService;

	constructor(apiKey: string) {
		if (!apiKey) {
			throw new Error('API key is required');
		}
		this.apiKey = apiKey;
		this.wishlist = new WishlistService(apiKey);
		this.player = new PlayerService(apiKey);
		this.user = new UserService(apiKey);
		this.news = new NewsService(apiKey);
		this.stats = new StatsService(apiKey);
	}

	getSteamAuth({
		realm,
		returnUrl,
	}: {
		realm: string;
		returnUrl: string;
	}): SteamAuth {
		return new SteamAuth({
			realm,
			returnUrl,
			apiKey: this.apiKey,
		});
	}
}
