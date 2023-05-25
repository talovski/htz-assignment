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

  const res = data.stationboard.filter(
    (station) => station.to.toLowerCase() === decodedDest.toLowerCase()
  );
  return (
    <div>
      {decodedDest}
      {res.map((r) => (
        <>
          <p key={r.name}>Train number: {r.name}</p>
          <p>To: {r.to}</p>
        </>
      ))}
    </div>
  );
}
