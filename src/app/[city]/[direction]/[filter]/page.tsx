import { getScheduleData } from "@/lib/getScheduleData";
import Train from "@/app/[city]/[direction]/components/Train";

export async function generateStaticParams({
  params: { city, direction },
}: {
  params: { city: string; direction: string };
}) {
  const data = await getScheduleData(city, direction);
  const res = data.stationboard.map((train) => train.to);

  // const filters: string[] = [];

  return res.map((filter) => {
    return {
      city: city,
      direction: direction,
      filter: filter,
    };
  });
}

export default async function Filter({
  params,
}: {
  params: {
    city: string;
    direction: string;
    filter: string;
  };
}) {
  const data = await getScheduleData(params.city, params.direction);
  const searchedSchedules = data.stationboard.filter((train) =>
    params.filter?.length
      ? train.to
          .toLowerCase()
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .includes(
            decodeURIComponent(
              params.filter
                .toLowerCase()
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "")
            )
          )
      : data.stationboard
  );
  return (
    <>
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
    </>
  );
}
