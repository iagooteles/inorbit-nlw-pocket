import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { getAllGoals } from "../../functions/get-all-goals"

export const getAllGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get("/goals", async (req, res) => {
    try {
      const result = await getAllGoals()
  
      return res.status(200).send(result)
    } catch (error) {
      return res.status(500).send({ message: "Error fetching goals", error })
    }
  })
}
