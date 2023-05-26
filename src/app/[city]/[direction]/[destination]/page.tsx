import { getScheduleData } from "@/lib/getScheduleData";

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

  const decodedDest = decodeURIComponent(params.destination);

  const trains = data.stationboard.filter(
    (station) => station.to.toLowerCase() === decodedDest.toLowerCase()
  );
  return (
    <div>
      {decodedDest}
      {trains.map((train) => (
        <>
          <p key={train.name}>Train number: {train.name}</p>
          <p>To: {train.to}</p>
        </>
      ))}
    </div>
  );
}
