"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Searchbar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [input, setInput] = useState(searchParams.get("search") || "");

  const handleClick = (input: string) => {
    router.push(`${pathname}/?search=${input}`);
  };

  const handleResetClick = () => {
    setInput("");
    router.push(`${pathname}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`${pathname}/?search=${input}`);
    }
  };

  return (
    <div className="sticky pb-2">
      <label htmlFor="userInput" className="block">
        Filter stations by destination:
      </label>
      <div className="flex gap-2">
        <input
          id="userInput"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          className="border-b-[1px] border-b-gray-400 py-1 focus:border-b-orange-600"
        />
        <button
          onClick={() => handleClick(input)}
          className="rounded-md bg-blue-600 px-2 py-1 text-white"
        >
          Filter!
        </button>

        <button
          onClick={() => handleResetClick()}
          className="rounded-md bg-gray-200 px-2 py-1 text-gray-700"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}
