"use client";

import { Directions, Stationboard } from "@/types/types";
import { getUniqueDestinations } from "@/lib/getUniqueDestinations";
import { useState } from "react";
import Train from "@/app/[city]/[direction]/components/Train";

export default function List({
  trains,
  direction,
}: {
  trains: Stationboard[];
  direction: Directions;
}) {
  const [selectedDestination, setSelectedDestination] = useState<string>();
  const uniqueDestinations = getUniqueDestinations(trains);

  const filteredTrains = selectedDestination?.length
    ? trains.filter((train) =>
        train.to.toLowerCase().includes(selectedDestination.toLowerCase())
      )
    : trains;

  return (
    <div className="relative">
      <div className="md:flex md:items-start md:gap-16">
        <div className="pb-8 md:pb-0 md:sticky md:left-0 md:top-4 md:mr-6 md:block">
          <h2 className="font-bold">Destinations</h2>
          <div className="">
            {uniqueDestinations.map((dest) => (
              <p
                key={dest}
                onClick={() =>
                  setSelectedDestination(
                    selectedDestination === dest ? "" : dest
                  )
                }
                className={
                  dest === selectedDestination
                    ? "cursor-pointer font-bold underline decoration-1 underline-offset-4"
                    : "cursor-pointer hover:underline hover:decoration-1 hover:underline-offset-4"
                }
              >
                {dest}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full max-w-2xl">
          <h2 className="font-bold">Trains</h2>
          <div className="hidden grid-cols-5 gap-x-4 border-b-[1px] border-b-gray-300 py-2 md:grid">
            <p className="col-span-1">Train number</p>
            <p className="col-span-3">Destination</p>
            <p className="col-span-1">Time</p>
          </div>

          {filteredTrains.map((train) => (
            <Train
              key={train.name}
              to={train.to}
              name={train.name}
              time={
                direction === "arrival"
                  ? train.stop.arrival ?? train.stop.prognosis.arrival
                  : train.stop.departure
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
