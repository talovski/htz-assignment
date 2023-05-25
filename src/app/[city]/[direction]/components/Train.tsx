import { Directions, Stationboard } from "@/types/types";

export default function Train({
  name,
  to,
  time,
}: {
  name: string;
  to: string;
  time: string | null;
}) {
  const formattedTime = time
    ? new Date(time).toLocaleTimeString("de-CH", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "No information";

  return (
    <div className="flex flex-col gap-x-4 border-t-[1px] border-dotted border-gray-400 py-2 md:grid md:grid-cols-5">
      <p className="col-span-1">
        <span className="font-bold md:hidden">Train number: </span>
        {name}
      </p>
      <p className="col-span-3">
        <span className="font-bold md:hidden">Destination: </span>
        {to}
      </p>
      <p className="col-span-1 tabular-nums">
        <span className="font-bold md:hidden">Time: </span>
        {formattedTime}
      </p>
    </div>
  );
}
