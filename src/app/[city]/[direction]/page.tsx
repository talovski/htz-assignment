import { getScheduleData } from "@/lib/getScheduleData";
import Sidebar from "@/app/[city]/[direction]/components/Sidebar";
import { Directions } from "@/types/types";

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
  const data = await getScheduleData(params.city, params.direction);

  return (
    <div>
      {data.stationboard.map((st) => (
        <div key={st.name}>
          <p>{st.to}</p>
          <p>{st.name}</p>
        </div>
      ))}
    </div>
  );
}
