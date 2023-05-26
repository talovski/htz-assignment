import { getScheduleData } from "@/lib/getScheduleData";
import Train from "@/app/[city]/[direction]/components/Train";

async function generateStaticParams({
  params,
}: {
  params: { city: string; direction: string };
}) {
  const data = await getScheduleData(params.city, params.direction);
  return data.stationboard.map((x) => {
    return {
      city: params.city,
      direction: params.direction,
      destination: x.name,
    };
  });
}

export default async function Destination({
  params,
}: {
  params: {
    city: string;
    direction: string;
    destination: string;
  };
}) {
  const data = await getScheduleData(params.city, params.direction);

  const decodedDestination = decodeURI(params.destination);

  const trains = data.stationboard.filter(
    (station) => station.to.toLowerCase() === decodedDestination.toLowerCase()
  );
  return (
    <div>
      {decodedDestination}
      {trains.map((train) => (
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
