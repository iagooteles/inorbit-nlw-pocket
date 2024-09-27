import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { getWeekSummary } from "../../functions/get-week-summary"

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get("/summary", async (req, res) => {
    try {
      const summary = await getWeekSummary()
  
      return res.status(200).send(summary)
    } catch (error) {
      return res.status(500).send({ message: "Error fetching pending goals", error })
    }
  })
}
