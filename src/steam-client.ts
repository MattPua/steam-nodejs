import { ActionsService } from './services/actions.service'
import { ChartsService } from './services/charts.service'
import { CommunityService } from './services/community.service'
import { EconService } from './services/econ.service'
import { NewsService } from './services/news.service'
import { PlayerService } from './services/player.service'
import { ReviewsService } from './services/reviews.service'
import { SaleService } from './services/sale.service'
import { StatsService } from './services/stats.service'
import { SteamStoreService } from './services/steam-store.service'
import { StoreService } from './services/store.service'
import { StoreTopSellersService } from './services/store-top-sellers.service'
import { UserService } from './services/user.service'
import { WishlistService } from './services/wishlist.service'

export class SteamClient {
	private readonly apiKey: string
	public readonly wishlist: WishlistService
	public readonly player: PlayerService
	public readonly user: UserService
	public readonly news: NewsService
	public readonly stats: StatsService
	public readonly econ: EconService
	public readonly community: CommunityService
	public readonly sale: SaleService
	public readonly charts: ChartsService
	public readonly store: StoreService
	public readonly storeTopSellers: StoreTopSellersService
	public readonly steamStore: SteamStoreService
	public readonly reviews: ReviewsService

	public readonly actions: ActionsService
	constructor(apiKey: string) {
		if (!apiKey) {
			throw new Error('API key is required')
		}
		this.apiKey = apiKey
		this.wishlist = new WishlistService(apiKey)
		this.player = new PlayerService(apiKey)
		this.user = new UserService(apiKey)
		this.news = new NewsService(apiKey)
		this.stats = new StatsService(apiKey)
		this.econ = new EconService(apiKey)
		this.community = new CommunityService(apiKey)
		this.sale = new SaleService(apiKey)
		this.charts = new ChartsService(apiKey)
		this.store = new StoreService(apiKey)
		this.storeTopSellers = new StoreTopSellersService(apiKey)
		this.steamStore = new SteamStoreService(apiKey)
		this.reviews = new ReviewsService(apiKey)
		this.actions = new ActionsService(apiKey)
	}
}
