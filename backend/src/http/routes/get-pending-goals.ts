import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { getWeekPendingGoals } from "../../functions/get-week-pending-goals"

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get("/pending-goals", async (req, res) => {
    try {
      const { pendingGoals } = await getWeekPendingGoals()
  
      return res.status(200).send(pendingGoals)
    } catch (error) {
      return res.status(500).send({ message: "Error fetching pending goals", error })
    }
  })
}
