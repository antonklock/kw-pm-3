"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ProjectDropdown } from "./dropdown";

export type Project = {
  id: string;
  name: string;
  localPath: string;
  status: string;
  statusColor: string;
  notionLink?: string;
};

const handleStatusColor = (status: string) => {
  switch (status) {
    case "green":
      return "text-green-500";
    case "yellow":
      return "text-yellow-500";
    case "red":
      return "text-red-500";
    case "blue":
      return "text-blue-500";
    case "default":
      return "text-gray-500";
    default:
      return "text-black";
  }
};

export const columns: ColumnDef<Project>[] = [
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
      return (
        <p className={handleStatusColor(row.original.statusColor)}>
          {row.original.status}
        </p>
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
