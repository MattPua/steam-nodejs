export function generateImageMediaUrl(
	appId: number,
	imageHash?: string,
): string | undefined {
	if (!imageHash) {
		return undefined
	}
	return `https://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${imageHash}.jpg`
}
