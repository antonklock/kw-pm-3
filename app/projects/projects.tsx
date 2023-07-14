"use client";

import react from "react";
import { DataTable } from "../projects/data-table";
import { columns } from "../projects/columns";

type ProjectProps = {
  projects: {
    id: string;
    name: string;
    localPath: string;
    status: string;
    statusColor: string;
    notionLink?: string;
  }[];
};

export const ProjectsDisplay = (props: ProjectProps) => {
  const { projects } = props;
  return (
    <div>
      <h1>Projects</h1>
      {<DataTable columns={columns} data={projects} />}
    </div>
  );
};
