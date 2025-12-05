export function generateImageMediaUrl(
	appId: number,
	imageHash?: string
): string | undefined {
	if (!imageHash) {
		return undefined;
	}
	return `https://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${imageHash}.jpg`;
}

export function getSteamAppImageUrl(appId: number): string {
	return `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/library_600x900.jpg`;
}

export function getSteamAppBackgroundImageUrl(appId: number): string {
	return `https://store.akamai.steamstatic.com/images/storepagebackground/app/${appId}.jpg`;
}

export function getSteamAppCapsuleImageUrl(appId: number): string {
	return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/capsule_231x87.jpg?t=1686360180`;
}

export function getSteamAppCapsuleImageSmallUrl(appId: number): string {
	return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/capsule_184x69.jpg?t=1686360180`;
}
