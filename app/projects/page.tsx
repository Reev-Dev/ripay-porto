"use-client";
import AllProjects from "@/components/main/AllProjects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <AllProjects />
      </div>
    </main>
  );
}