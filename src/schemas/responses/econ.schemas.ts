import z from 'zod'

const TradeOffersSummaryResponseSchema: z.ZodObject<{
	pending_received_count: z.ZodNumber
	new_received_count: z.ZodNumber
	updated_received_count: z.ZodNumber
	historical_received_count: z.ZodNumber
	pending_sent_count: z.ZodNumber
	newly_accepted_sent_count: z.ZodNumber
	updated_sent_count: z.ZodNumber
	historical_sent_count: z.ZodNumber
	escrow_received_count: z.ZodNumber
	escrow_sent_count: z.ZodNumber
}> = z.object({
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
})

export type TradeOffersSummaryResponse = z.infer<
	typeof TradeOffersSummaryResponseSchema
>
