# Steam Node.js Library (Unofficial)

[![npm version](https://img.shields.io/npm/v/steam-nodejs.svg?style=flat-square)](https://www.npmjs.com/package/steam-nodejs)
[![npm downloads](https://img.shields.io/npm/dm/steam-nodejs.svg?style=flat-square)](https://www.npmjs.com/package/steam-nodejs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/mattpua/steam-nodejs/issues)

An unofficial Node.js library for the Steam Web API written in TypeScript. This library is built with [Bun](https://bun.sh) and [Zod](https://zod.dev).

Based on the also unofficial [Steam API documentation](https://steamapi.xpaw.me/#) by [XPaw](https://xpaw.me/).

This SDK provides a simple way to interact with different parts of the Steam API. Specifically, it operates on endpoints that have been validated to work (by manually testing each endpoint from the unofficial documentation).

It also provides a simple way to redirect users to a Steam login page and authenticate users with Steam using OpenID Connect.

This library is not affiliated with Valve Corporation or Steam. All trademarks are property of their respective owners in the US and other countries. Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.

## Installation

```bash
bun add steam-nodejs
```

## Authentication

```typescript
import { SteamClient } from 'steam-nodejs';

const steamClient = new SteamClient('your-api-key');

// Generate a redirect URL to login with Steam with openID Connect. This refers 
const redirectUrl = await steamClient
.getSteamAuth({
  realm: "https://your-website.com",
  returnUrl: "https://your-website.com/callback",
})
.getRedirectUrl();

```

## Usage

```typescript

import { SteamClient } from 'steam-nodejs';

const steamClient = new SteamClient('your-api-key');

// On receiving the callback, authenticate the user
const user = await steamClient
.getSteamAuth({
  realm: "https://your-website.com",
  returnUrl: "https://your-website.com/callback",
})
.authenticate(request);

// After authenticating the user, you can operate on different parts of the Steam API
const friendsList = await steamClient.user.getFriendsList(user.steamid);

console.log(friendsList);
```

## More Examples

```typescript
import { SteamClient } from 'steam-nodejs';

const steamClient = new SteamClient('your-api-key');

const followedGames = await steamClient.store.getGamesFollowed(user.steamid);

console.log(appDetails.name);
```

## Available Services

Currently, the following services are available:
- [ChartsService](./src/services/charts.service.ts)
- [CommunityService](./src/services/community.service.ts)
- [EconService](./src/services/econ.service.ts)
- [NewsService](./src/services/news.service.ts)
- [PlayerService](./src/services/player.service.ts)
- [SaleService](./src/services/sale.service.ts)
- [StatsService](./src/services/stats.service.ts)
- [StoreService](./src/services/store.service.ts)
- [StoreTopSellersService](./src/services/store-top-sellers.service.ts)
- [SteamStoreService](./src/services/steam-store.service.ts)
- [UserService](./src/services/user.service.ts)
- [WishlistService](./src/services/wishlist.service.ts)

## Features

| Service            | Features                                                                                                                |
|--------------------|-------------------------------------------------------------------------------------------------------------------------|
| **Charts**         | Get games by concurrent players<br>Get most played games<br>Get best of year                                            |
| **Community**      | Get apps                                                                                                                |
| **Econ**           | Get trade offers summary<br>Get trade history<br>Get trade offers                                                       |
| **News**           | Get news for app                                                                                                        |
| **Player**         | Get Steam level<br>Get badges<br>Get owned games<br>Get recently played games<br>Get last played times<br>Get animated avatar<br>Get avatar frame<br>Get mini profile background<br>Get favourite badge<br>Get player link details<br>Get profile background<br>Get profile customization<br>Get profile items equipped<br>Get Steam Deck keyboard skins<br>Get top achievements for games |
| **Sale**           | Get user year in review<br>Get user year achievements                                                                   |
| **Stats**          | Get number of current players<br>Get player achievements<br>Get global achievement percentages for app<br>Get schema for game<br>Get user stats for game |
| **Store Top Sellers** | Get weekly top sellers                                                                                               |
| **Steam Store**    | Get app details (use this specifically to get information about a particular app)                                       |
| **Store**          | Get app list on store<br>Get games followed<br>Get games followed count<br>Get most popular tags                        |
| **User Store Visit** | Get most visited items on store                                                                                       |
| **User**           | Get user<br>Get friends list<br>Get users<br>Get user group list                                                        |
| **Wishlist**       | Get wishlist<br>Get wishlist item count                                                                                 |

## Documentation

For more information, please see the [documentation](https://steamapi.xpaw.me/#).

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## Developing Locally

This project requires the following dependencies to be installed:
- [Bun](https://bun.sh)
- [Node.js](https://nodejs.org)

To install the dependencies, run the following command:

```bash
bun install
```

## Testing

Please create a `.env.test` file with the following content:

```env
TEST_STEAM_API_KEY=your-api-key
TEST_STEAM_USER_ID=your-steam-user-id
```

You can get your Steam API key from the [Steam Developer Portal](https://steamcommunity.com/dev/apikey).

After which, you can run the tests with the following command:
```bash
bun test
```


## License

MIT

## Disclaimer

This project is not affiliated with Valve Corporation or Steam. All trademarks are property of their respective owners in the US and other countries. Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.