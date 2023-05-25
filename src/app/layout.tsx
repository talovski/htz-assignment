import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import CitySelector from "@/app/components/CitySelector";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "htz assignment by nika talovski",
  description: "htz assignment by nika talovski",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-6`}>
        <CitySelector />
        {children}
      </body>
    </html>
  );
}
