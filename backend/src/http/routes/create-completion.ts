import { z } from "zod"
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { createGoalCompletion } from "../../functions/create-goal-completion"

export const createGoalCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    "/completions",
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async (req, res) => {
      const { goalId } = req.body
  
      await createGoalCompletion({
        goalId,
      })
    }
  )
}
