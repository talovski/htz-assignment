import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="font-lg font-bold pb-6">
        <Link href={"/zurich"} className="block">Zurich</Link>
        <Link href={"/basel"} className="block">Basel</Link>
      </div>
    </main>
  )
}
