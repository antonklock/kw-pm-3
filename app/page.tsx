import { DataTable } from "./projects/data-table";
import { columns } from "./projects/columns";
import { projects } from "./projects/data/projects";

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
        </div>
      </div>
    </main>
  );
}
