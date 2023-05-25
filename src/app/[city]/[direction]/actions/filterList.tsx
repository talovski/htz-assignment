import { Stationboard } from "@/types/types";

export async function filterList(selectedDestination: string, trains: Stationboard[]) {
  "use server";

  return selectedDestination?.length
    ? trains.filter((train) =>
        train.to.toLowerCase().includes(selectedDestination.toLowerCase())
      )
    : trains;
}