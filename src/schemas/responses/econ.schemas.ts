import z from 'zod'

const TradeOffersSummaryResponseSchema = z.object({
	response: z.object({
		pending_received_count: z.number(),
		new_received_count: z.number(),
		updated_received_count: z.number(),
		historical_received_count: z.number(),
		pending_sent_count: z.number(),
		newly_accepted_sent_count: z.number(),
		updated_sent_count: z.number(),
		historical_sent_count: z.number(),
		escrow_received_count: z.number(),
		escrow_sent_count: z.number(),
	}),
})

export type TradeOffersSummaryResponse = z.infer<
	typeof TradeOffersSummaryResponseSchema
>
