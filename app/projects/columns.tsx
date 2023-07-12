"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ProjectDropdown } from "./dropdown";

export type Project = {
  id: string;
  name: string;
  localPath: string;
  status: "healthy" | "at risk" | "needs attention";
  notionLink?: string;
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div>
          <p>{row.original.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "localPath",
    header: "Local Path",
    cell: ({ row }) => {
      return <a href={row.original.localPath}>{row.original.localPath}</a>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <p>{row.original.status}</p>;
    },
  },
  {
    accessorKey: "notionLink",
    header: "Notion Link",
    cell: ({ row }) => {
      return <a href={row.original.notionLink}>{row.original.notionLink}</a>;
    },
  },
  {
    accessorKey: "dropDown",
    header: "Actions",
    cell: ({ row }) => {
      return <ProjectDropdown />;
    },
  },
];
