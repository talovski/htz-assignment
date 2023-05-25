import { Stationboard } from "@/types/types";

export function getUniqueDestinations(stationboard: Stationboard[]) {
  const destinations = stationboard.map((st) => st.to);
  return [...new Set(destinations)];
}
