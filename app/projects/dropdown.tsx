import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

export const ProjectDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button asChild variant="outline">
          <p>...</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Hide</DropdownMenuItem>
        <DropdownMenuItem>Complete</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className=" text-red-800">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
