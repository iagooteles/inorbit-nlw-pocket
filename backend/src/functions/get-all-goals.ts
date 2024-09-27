import { db } from "../db"
import { goals } from "../db/schema"

export async function getAllGoals() {
  const result = await db.select().from(goals)

  return { result }
}
