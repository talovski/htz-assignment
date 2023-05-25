import { ReactNode } from "react";
import DirectionSelector from "@/app/[city]/[direction]/components/DirectionSelector";

export default async function DirectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full">
      <DirectionSelector />
      {children}
    </div>
  );
}
