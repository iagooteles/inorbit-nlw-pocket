import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { getPendingGoals } from "../http/get-pending-goals";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createGoalCompletion } from "../http/create-goal-completion";

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
  });

  if (!data) {
    return null;
  }

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId);

    queryClient.invalidateQueries({ queryKey: ["summary"] })
    queryClient.invalidateQueries({ queryKey: ["pending-goals"] })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map((pendingGoal) => (
        <OutlineButton
          key={pendingGoal.id}
          disabled={
            pendingGoal.completionCount >= pendingGoal.desiredWeeklyFrequency
          }
          onClick={() => handleCompleteGoal(pendingGoal.id)}
        >
          <Plus className="size-4 text-zinc-600" />
          {pendingGoal.title}
        </OutlineButton>
      ))}
    </div>
  );
}
