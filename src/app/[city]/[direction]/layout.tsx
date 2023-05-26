import { ReactNode } from "react";
import DirectionSelector from "@/app/[city]/[direction]/components/DirectionSelector";
import { getScheduleData } from "@/lib/getScheduleData";
import Sidebar from "@/app/[city]/[direction]/components/Sidebar";
import { getUniqueDestinations } from "@/lib/getUniqueDestinations";

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

export default async function DirectionLayout({
  params,
  children,
}: {
  children: ReactNode;
  params: { city: string; direction: string };
}) {
  const data = await getScheduleData(params.city, params.direction);
  const uniqueDestinations = getUniqueDestinations(data.stationboard);

  return (
    <div>
      <DirectionSelector />
      <div className="block w-full items-start gap-9 md:flex">
        <Sidebar
          uniqueDestinations={uniqueDestinations}
          direction={params.direction}
          city={params.city}
        />
        {children}
      </div>
    </div>
  );
}
