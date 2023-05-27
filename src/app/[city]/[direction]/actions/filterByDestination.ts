"use server";

import { getScheduleData } from "@/lib/getScheduleData";

export async function filterByDestination(city: string, direction: string, input: string) {
  const data = await getScheduleData(city, direction);
  return data.stationboard.filter(station => station.to.toLowerCase().includes(input.toLowerCase()));

}