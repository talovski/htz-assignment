import { getScheduleData } from "@/lib/getScheduleData";

export async function generateStaticParams({
  params: { city },
}: {
  params: { city: string };
}) {
  const dirs = ["arrival", "departure"];
  const res = dirs.map((dir) => {
    return { city: city, direction: dir };
  });
  return res;
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
        <div key={train.name}>
          <p>{train.to}</p>
          <p>{train.name}</p>
        </div>
      ))}
    </div>
  );
}
