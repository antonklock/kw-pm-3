import { DataTable } from "./projects/data-table";
import { columns } from "./projects/columns";
import { projects } from "./projects/data/projects";
import { ProjectTable } from "./projects-table/projectsTable";

// import { tauri } from "@tauri-apps/api";

// async function show_in_folder(path: string) {
//   await tauri.invoke("show_in_folder", { path });
// }

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-row justify-start">
        <div className="w-80">
          <h1>Menu</h1>
        </div>
        <div className=" w-full">
          <h1>Projects</h1>
          <DataTable columns={columns} data={projects} />
          {/* <ProjectTable /> */}
        </div>
      </div>
    </main>
  );
}
