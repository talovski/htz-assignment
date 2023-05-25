import { ReactNode } from "react";
import DirectionSelector from "@/app/[city]/[direction]/components/DirectionSelector";
import { getScheduleData } from "@/lib/getScheduleData";
import Sidebar from "@/app/[city]/[direction]/components/Sidebar";

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

export default async function DirectionLayout({
  params,
  children,
}: {
  children: ReactNode;
  params: { city: string; direction: string };
}) {
  const data = await getScheduleData(params.city, params.direction);
  return (
    <div className="w-full flex items-start gap-9">
      <DirectionSelector />
      <Sidebar trains={data.stationboard} dir={params.direction} city={params.city} />
      {children}
    </div>
  );
}
