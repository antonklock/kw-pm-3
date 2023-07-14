import { DataTable } from "./projects/data-table";
import { columns } from "./projects/columns";
import { projects } from "./projects/data/projects";
// import { GetDatabaseEntries, GetProjectIds } from "./notion/notion";
import { forEachChild } from "typescript";
import { ProjectsDisplay } from "./projects/projects";
// import { Button } from "@/components/ui/button";
import { GetProjects } from "./notion/notion";
import { useEffect } from "react";

type Project = {
  id: string;
  name: string;
  localPath: string;
  status: "healthy" | "at risk" | "needs attention";
  statusColor: string;
  notionLink?: string | undefined;
};

export default async function Home() {
  const projects = await GetProjects();

  return (
    <main>
      <div className="flex min-h-screen flex-row justify-start">
        <div className="w-80">
          <h1>Menu</h1>
        </div>
        <div className=" w-full mt-20 mr-10">
          <ProjectsDisplay projects={projects} />
        </div>
      </div>
    </main>
  );
}
