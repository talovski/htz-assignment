"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CitySelector() {
  const pathname = usePathname();

  return (
    <div className="font-xl flex gap-6 pb-6">
      <Link
        href={"/zurich/arrival"}
        className={
          pathname.includes("zurich")
            ? "font-bold underline decoration-2 underline-offset-4"
            : "underline decoration-1 underline-offset-4 hover:decoration-2"
        }
      >
        Zurich
      </Link>
      <Link
        href={"/basel/arrival"}
        className={
          pathname.includes("basel")
            ? "font-bold underline decoration-2 underline-offset-4"
            : "underline decoration-1 underline-offset-4 hover:decoration-2"
        }
      >
        Basel
      </Link>
    </div>
  );
}
