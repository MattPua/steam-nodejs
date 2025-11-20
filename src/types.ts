export interface SteamApiResponse<T> {
	response: T
}

export interface Friend {
	steamid: string
	relationship: string
	friend_since: number
}

export interface FriendsListResponse {
	friendslist: {
		friends: Friend[]
	}
}

export interface Badge {
	badgeid: number
	level: number
	completion_time: number
	xp: number
	scarcity: number
	appid?: number
	communityitemid?: string
	border_color?: number
}

export interface BadgesResponse {
	player_level?: number
	badges: Badge[]
}

export interface NewsItem {
	gid: string
	title: string
	url: string
	is_external_url: boolean
	author: string
	contents: string
	feedlabel: string
	date: number
	feedname: string
	feed_type: number
	appid: number
	tags?: string[]
}

export interface NewsForAppResponse {
	appnews: {
		appid: number
		newsitems: NewsItem[]
		count?: number
	}
}

export interface NumberOfCurrentPlayersResponse {
	response: {
		result: number
		player_count: number
	}
}

export interface Game {
	appid: number
	name?: string
	playtime_forever: number
	img_icon_url?: string
	img_logo_url?: string
	has_community_visible_stats?: boolean
	playtime_windows_forever?: number
	playtime_mac_forever?: number
	playtime_linux_forever?: number
	playtime_deck_forever?: number
	rtime_last_played?: number
	playtime_disconnected?: number
}

export interface OwnedGamesResponse {
	response: {
		game_count: number
		games: Game[]
	}
}

export interface Achievement {
	apiname: string
	achieved: number
	unlocktime: number
	name?: string
	description?: string
}

export interface PlayerAchievementsResponse {
	playerstats: {
		steamID: string
		gameName: string
		achievements: Achievement[]
		success: boolean
	}
}

export interface Player {
	steamid: string
	communityvisibilitystate: number
	profilestate: number
	personaname: string
	profileurl: string
	avatar: string
	avatarmedium: string
	avatarfull: string
	avatarhash: string
	lastlogoff?: number
	personastate?: number
	realname?: string
	primaryclanid?: string
	timecreated?: number
	personastateflags?: number
	loccountrycode?: string
	locstatecode?: string
	loccityid?: number
}

export interface ListUsersResponse {
	response: {
		players: Player[]
	}
}

export interface RecentlyPlayedGame {
	appid: number
	name: string
	playtime_2weeks?: number
	playtime_forever: number
	img_icon_url?: string
	img_logo_url?: string
}

export interface RecentlyPlayedGamesResponse {
	response: {
		total_count?: number
		games: RecentlyPlayedGame[]
	}
}

export interface SteamLevelResponse {
	response: {
		player_level: number
	}
}

export interface UserGroup {
	gid: string
}

export interface UserGroupListResponse {
	response: {
		success: boolean
		groups?: UserGroup[]
	}
}

export interface WishlistItem {
	gid: string
	subs: Array<{
		packageid: number
		bundleid: number
		discount_percent: number
		discount_pct: number
	}>
}

export interface WishlistResponse {
	response: {
		wishlistid: string
		success: number
		wishlist: WishlistItem[]
	}
}

export interface WishlistItemCountResponse {
	response: {
		count: number
	}
}
