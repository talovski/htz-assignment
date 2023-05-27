import { getScheduleData } from "@/lib/getScheduleData";
import Train from "@/app/[city]/[direction]/components/Train";

export async function generateStaticParams({
  params: { city },
}: {
  params: { city: string };
}) {
  const directions = ["arrival", "departure"];
  return directions.map((direction) => {
    return { city: city, direction: direction };
  });
}

export default async function Direction({
  params,
}: {
  params: { city: string; direction: string };
}) {
  const schedule = await getScheduleData(params.city, params.direction);

  return (
    <div>
      {schedule.stationboard.map((train) => (
        <Train
          key={train.name}
          name={train.name}
          to={train.to}
          time={
            params.direction === "departure"
              ? train.stop.departure
              : train.stop.arrival ?? train.stop.prognosis.arrival
          }
        />
      ))}
    </div>
  );
}
