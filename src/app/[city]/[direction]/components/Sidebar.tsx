"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({
  uniqueDestinations,
  dir,
  city,
}: {
  uniqueDestinations: string[];
  dir: string;
  city: string;
}) {
  const pathname = usePathname();

  return (
    <div className="relative">
      <div className="md:flex md:items-start md:gap-16">
        <div className="pb-8 md:sticky md:left-0 md:top-4 md:mr-6 md:block md:pb-0">
          <h2 className="font-bold">Destinations</h2>
          <div className="flex flex-col">
            <Link
              href={`${city}/${dir}/`}
              className={
                pathname.endsWith(`${dir}`)
                  ? "cursor-pointer font-bold underline decoration-1 underline-offset-4"
                  : "cursor-pointer hover:underline hover:decoration-1 hover:underline-offset-4"
              }
            >
              All destinations
            </Link>
            {uniqueDestinations.map((dest) => (
              <Link
                as={`${city}/${dir}/${encodeURIComponent(dest)}`}
                key={dest}
                href={`${city}/${dir}/${encodeURIComponent(dest)}`}
                className={
                  pathname.includes(encodeURIComponent(dest))
                    ? "cursor-pointer font-bold underline decoration-1 underline-offset-4"
                    : "cursor-pointer hover:underline hover:decoration-1 hover:underline-offset-4"
                }
              >
                {dest}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
