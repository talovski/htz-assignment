import { Schedule as ScheduleType } from "@/types/types"

export async function getScheduleData(
  city: "basel" | "zurich",
  type: "departure" | "arrival"
) {
  const res = await fetch(
    `https://transport.opendata.ch/v1/stationboard?station=${city}&type=${type}&transportations=train`,
    {
      next: { revalidate: 10 },
    }
  );
  return (await res.json()) as Promise<ScheduleType>;
}