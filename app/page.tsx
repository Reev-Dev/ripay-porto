'use client'

import { useEffect, useState } from "react";
import Hero from "@/components/main/Hero";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  // update class HTML
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
      </div>
    </main>
  );
}
