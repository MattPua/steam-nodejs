import { z } from 'zod'
import { AppDataSchema } from './common.schemas'

const StoreItemSchema = AppDataSchema

const StoreItemIdSchema = z.union([
	z.object({ appid: z.number() }),
	z.object({ packageid: z.number() }),
])

const GetMostVisitedItemsOnStoreResponseSchema: z.ZodObject<{
	item_ids: z.ZodArray<
		z.ZodUnion<
			readonly [
				z.ZodObject<
					{
						appid: z.ZodNumber
					},
					z.core.$strip
				>,
				z.ZodObject<
					{
						packageid: z.ZodNumber
					},
					z.core.$strip
				>,
			]
		>
	>
	items: z.ZodArray<
		z.ZodObject<
			{
				item_type: z.ZodNumber
				id: z.ZodNumber
				success: z.ZodNumber
				visible: z.ZodBoolean
				name: z.ZodString
				store_url_path: z.ZodString
				appid: z.ZodNumber
				type: z.ZodNumber
				is_free: z.ZodBoolean
				content_descriptorids: z.ZodArray<z.ZodNumber>
				categories: z.ZodOptional<
					z.ZodObject<
						{
							feature_categoryids: z.ZodArray<z.ZodNumber>
							controller_categoryids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
							supported_player_categoryids: z.ZodOptional<
								z.ZodArray<z.ZodNumber>
							>
						},
						z.core.$strip
					>
				>
				best_purchase_option: z.ZodOptional<
					z.ZodObject<
						{
							packageid: z.ZodNumber
							purchase_option_name: z.ZodString
							final_price_in_cents: z.ZodUnion<
								readonly [z.ZodNumber, z.ZodString]
							>
							original_price_in_cents: z.ZodOptional<
								z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>
							>
							formatted_final_price: z.ZodString
							formatted_original_price: z.ZodString
							discount_pct: z.ZodOptional<z.ZodNumber>
							active_discounts: z.ZodOptional<
								z.ZodArray<
									z.ZodObject<
										{
											discount_amount: z.ZodUnion<
												readonly [z.ZodNumber, z.ZodString]
											>
											discount_description: z.ZodString
											discount_end_date: z.ZodNumber
										},
										z.core.$strip
									>
								>
							>
							user_can_purchase_as_gift: z.ZodOptional<z.ZodBoolean>
							user_can_purchase: z.ZodOptional<z.ZodBoolean>
							hide_discount_pct_for_compliance: z.ZodBoolean
							included_game_count: z.ZodNumber
							requires_shipping: z.ZodOptional<z.ZodBoolean>
							must_purchase_as_set: z.ZodOptional<z.ZodBoolean>
							must_purchase_package: z.ZodOptional<z.ZodBoolean>
						},
						z.core.$strip
					>
				>
				reviews: z.ZodOptional<
					z.ZodObject<
						{
							summary_filtered: z.ZodObject<
								{
									review_count: z.ZodNumber
									percent_positive: z.ZodNumber
									review_score: z.ZodNumber
									review_score_label: z.ZodEnum<{
										'Very Positive': 'Very Positive'
										Positive: 'Positive'
										'Mostly Positive': 'Mostly Positive'
										Mixed: 'Mixed'
										'Mostly Negative': 'Mostly Negative'
										Negative: 'Negative'
										'Very Negative': 'Very Negative'
									}>
								},
								z.core.$strip
							>
						},
						z.core.$strip
					>
				>
				basic_info: z.ZodOptional<
					z.ZodObject<
						{
							short_description: z.ZodOptional<z.ZodString>
							publishers: z.ZodArray<
								z.ZodObject<
									{
										name: z.ZodString
										creator_clan_account_id: z.ZodOptional<z.ZodNumber>
									},
									z.core.$strip
								>
							>
							developers: z.ZodArray<
								z.ZodObject<
									{
										name: z.ZodString
										creator_clan_account_id: z.ZodOptional<z.ZodNumber>
									},
									z.core.$strip
								>
							>
						},
						z.core.$strip
					>
				>
				assets: z.ZodOptional<
					z.ZodObject<
						{
							asset_url_format: z.ZodString
							main_capsule: z.ZodOptional<z.ZodString>
							small_capsule: z.ZodOptional<z.ZodString>
							header: z.ZodOptional<z.ZodString>
							package_header: z.ZodOptional<z.ZodString>
							hero_capsule: z.ZodOptional<z.ZodString>
							library_capsule: z.ZodOptional<z.ZodString>
							library_capsule_2x: z.ZodOptional<z.ZodString>
							library_hero: z.ZodOptional<z.ZodString>
							library_hero_2x: z.ZodOptional<z.ZodString>
							community_icon: z.ZodOptional<z.ZodString>
							page_background_path: z.ZodOptional<z.ZodString>
							raw_page_background: z.ZodOptional<z.ZodString>
						},
						z.core.$strip
					>
				>
				release: z.ZodOptional<
					z.ZodObject<
						{
							steam_release_date: z.ZodOptional<z.ZodNumber>
							mac_release_date: z.ZodOptional<z.ZodNumber>
							linux_release_date: z.ZodOptional<z.ZodNumber>
							original_release_date: z.ZodOptional<z.ZodNumber>
						},
						z.core.$strip
					>
				>
				platforms: z.ZodOptional<
					z.ZodObject<
						{
							windows: z.ZodOptional<z.ZodBoolean>
							mac: z.ZodOptional<z.ZodBoolean>
							linux: z.ZodOptional<z.ZodBoolean>
							steamos_linux: z.ZodOptional<z.ZodBoolean>
							vr_support: z.ZodOptional<z.ZodRecord<z.ZodAny, z.ZodAny>>
							steam_deck_compat_category: z.ZodOptional<z.ZodNumber>
							steam_os_compat_category: z.ZodOptional<z.ZodNumber>
						},
						z.core.$strip
					>
				>
				purchase_options: z.ZodOptional<
					z.ZodArray<
						z.ZodObject<
							{
								packageid: z.ZodNumber
								purchase_option_name: z.ZodString
								final_price_in_cents: z.ZodUnion<
									readonly [z.ZodNumber, z.ZodString]
								>
								original_price_in_cents: z.ZodOptional<
									z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>
								>
								formatted_final_price: z.ZodString
								formatted_original_price: z.ZodString
								discount_pct: z.ZodOptional<z.ZodNumber>
								active_discounts: z.ZodOptional<
									z.ZodArray<
										z.ZodObject<
											{
												discount_amount: z.ZodUnion<
													readonly [z.ZodNumber, z.ZodString]
												>
												discount_description: z.ZodString
												discount_end_date: z.ZodNumber
											},
											z.core.$strip
										>
									>
								>
								user_can_purchase_as_gift: z.ZodOptional<z.ZodBoolean>
								user_can_purchase: z.ZodOptional<z.ZodBoolean>
								hide_discount_pct_for_compliance: z.ZodBoolean
								included_game_count: z.ZodNumber
								requires_shipping: z.ZodOptional<z.ZodBoolean>
								must_purchase_as_set: z.ZodOptional<z.ZodBoolean>
								must_purchase_package: z.ZodOptional<z.ZodBoolean>
							},
							z.core.$strip
						>
					>
				>
				links: z.ZodOptional<
					z.ZodArray<
						z.ZodObject<
							{
								link_type: z.ZodNumber
								url: z.ZodOptional<z.ZodString>
							},
							z.core.$strip
						>
					>
				>
				screenshots: z.ZodOptional<
					z.ZodObject<
						{
							all_ages_screenshots: z.ZodArray<
								z.ZodObject<
									{
										filename: z.ZodString
										ordinal: z.ZodNumber
									},
									z.core.$strip
								>
							>
							mature_content_screenshots: z.ZodOptional<
								z.ZodArray<
									z.ZodObject<
										{
											filename: z.ZodString
											ordinal: z.ZodNumber
										},
										z.core.$strip
									>
								>
							>
						},
						z.core.$strip
					>
				>
				trailers: z.ZodOptional<
					z.ZodObject<
						{
							trailers: z.ZodObject<
								{
									highlights: z.ZodArray<
										z.ZodObject<
											{
												trailer_name: z.ZodString
												trailer_url_format: z.ZodString
												trailer_category: z.ZodNumber
												microtrailer: z.ZodArray<
													z.ZodObject<
														{
															filename: z.ZodString
															type: z.ZodString
														},
														z.core.$strip
													>
												>
												trailer_480p: z.ZodArray<
													z.ZodObject<
														{
															filename: z.ZodString
															type: z.ZodString
														},
														z.core.$strip
													>
												>
												trailer_max: z.ZodArray<
													z.ZodObject<
														{
															filename: z.ZodString
															type: z.ZodString
														},
														z.core.$strip
													>
												>
												adapative_trailers: z.ZodArray<
													z.ZodObject<
														{
															cdn_path: z.ZodString
															encoding: z.ZodString
														},
														z.core.$strip
													>
												>
												screenshot_medium: z.ZodString
												screenshot_large: z.ZodString
												trailer_base_id: z.ZodNumber
												all_ages: z.ZodBoolean
											},
											z.core.$strip
										>
									>
								},
								z.core.$strip
							>
						},
						z.core.$strip
					>
				>
				tagids: z.ZodOptional<z.ZodArray<z.ZodNumber>>
				full_description: z.ZodOptional<z.ZodString>
				supported_languages: z.ZodOptional<
					z.ZodObject<
						{
							supported_languages: z.ZodArray<
								z.ZodObject<
									{
										elanguage: z.ZodNumber
										eadditionallanguage: z.ZodNumber
										supported: z.ZodBoolean
										full_audio: z.ZodBoolean
										subtitles: z.ZodBoolean
									},
									z.core.$strip
								>
							>
						},
						z.core.$strip
					>
				>
				related_items: z.ZodOptional<
					z.ZodObject<
						{
							parent_appid: z.ZodOptional<z.ZodNumber>
						},
						z.core.$strip
					>
				>
				tags: z.ZodOptional<
					z.ZodArray<
						z.ZodObject<
							{
								tagid: z.ZodNumber
								weight: z.ZodNumber
							},
							z.core.$strip
						>
					>
				>
			},
			z.core.$strip
		>
	>
}> = z.object({
	item_ids: z.array(StoreItemIdSchema),
	items: z.array(StoreItemSchema),
})

export type GetMostVisitedItemsOnStoreResponse = z.infer<
	typeof GetMostVisitedItemsOnStoreResponseSchema
>
