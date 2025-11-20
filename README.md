# Steam Node.js Library (Unofficial)

An unofficial Node.js library for the Steam Web API

## Installation

```bash
bun add steam-nodejs
```

## Usage

```typescript
import { SteamClient } from 'steam-nodejs';

const steamClient = new SteamClient('your-api-key');

const friendsList = await steamClient.user.getFriendsList('76561198000000000');

console.log(friendsList);
```

## Documentation

For more information, please see the [documentation](https://steam-unofficial-docs.vercel.app).

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

MIT

## Disclaimer

This project is not affiliated with Valve Corporation or Steam. All trademarks are property of their respective owners in the US and other countries. Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.