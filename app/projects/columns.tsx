"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ProjectDropdown } from "./dropdown";

export type Project = {
  id: string;
  name: string;
  localPath: string;
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
  },
  {
    accessorKey: "localPath",
    header: "Local Path",
    cell: ({ row }) => {
      return (
        <div>
          <a href={row.original.localPath}>{row.original.localPath}</a>
        </div>
      );
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
