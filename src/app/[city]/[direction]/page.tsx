export const dynamic = "force-dynamic";

import { Suspense } from "react";

import { getScheduleData } from "@/lib/getScheduleData";
import Train from "@/app/[city]/[direction]/components/Train";
import Searchbar from "@/app/[city]/[direction]/components/Searchbar";

function SearchBarFallback() {
  return <></>;
}

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
  searchParams,
}: {
  params: { city: string; direction: string; searchParams: string };
  searchParams?: { search: string };
}) {
  const schedule = await getScheduleData(params.city, params.direction);

  const searchedSchedules = schedule.stationboard.filter((train) =>
    searchParams?.search?.length
      ? train.to
          .toLowerCase()
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .includes(
            searchParams.search
              .toLowerCase()
              .normalize("NFD")
              .replace(/\p{Diacritic}/gu, "")
          )
      : schedule.stationboard
  );
  return (
    <>
      <Suspense fallback={<SearchBarFallback />}>
        <Searchbar />
      </Suspense>
      <div>
        {searchedSchedules.map((train) => (
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
    </>
  );
}
