import { getScheduleData } from "@/lib/getScheduleData";
import List from "@/app/[city]/[direction]/components/List";
import { Cities, Directions } from "@/types/types";

export async function generateStaticParams() {
  return [
    {
      direction: "arrival",
      city: "basel",
    },
    {
      direction: "departure",
      city: "zurich",
    },
  ];
}

export default async function Direction({
  params,
}: {
  params: { direction: Directions; city: Cities };
}) {
  const data = await getScheduleData(params.city, params.direction);

  return (
    <div>
      <List trains={data.stationboard} direction={params.direction} />
    </div>
  );
}
