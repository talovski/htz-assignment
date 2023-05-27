import { ReactNode } from "react";
import DirectionSelector from "@/app/[city]/[direction]/components/DirectionSelector";
import { getUniqueDestinations } from "@/lib/getUniqueDestinations";
import { getScheduleData } from "@/lib/getScheduleData";

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
  return (
    <div className="w-full max-w-[70%]">
      <DirectionSelector />
      {children}
    </div>
  );
}
