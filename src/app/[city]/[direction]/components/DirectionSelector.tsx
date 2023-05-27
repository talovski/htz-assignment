"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DirectionSelector() {
  const pathname = usePathname();

  let city = pathname.split("/")[1];

  return (
    <div className="flex gap-6 pb-8">
      <Link
        href={`/${city}/arrival/`}
        className={
          pathname.includes("arrival")
            ? "block font-bold underline decoration-2 underline-offset-4"
            : "cursor-pointer underline decoration-1 underline-offset-4 hover:decoration-2"
        }
      >
        Arrivals
      </Link>
      <Link
        href={`/${city}/departure/`}
        className={
          pathname.includes("departure")
            ? "block font-bold underline decoration-2 underline-offset-4"
            : "cursor-pointer underline decoration-1 underline-offset-4 hover:decoration-2"
        }
      >
        Departures
      </Link>
    </div>
  );
}
