import { notFound, redirect } from "next/navigation";

export async function generateStaticParams() {
  return [
    {
      city: "basel",
    },
    {
      city: "zurich",
    },
  ];
}

export default async function City({
  params,
}: {
  params: { city: "basel" | "zurich" };
}) {
  if (params.city !== "basel" || "zurich") {
    notFound();
  }
  return (
    <div>
      <div>Hi this is city {params.city}</div>
    </div>
  );
}
