"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbar({
  city,
  direction,
}: {
  city: string;
  direction: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState(pathname.split("/")[3] || "");


  const handleClick = () => {
    router.replace(`${city}/${direction}/${encodeURIComponent(input)}`);
  };

  const handleResetClick = () => {
    setInput("");
    router.replace(`${city}/${direction}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.replace(`${city}/${direction}/${encodeURIComponent(input)}`);
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
          className="rounded-md border-[1px] border-gray-600 py-1"
        />
        <button
          onClick={() => handleClick()}
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
