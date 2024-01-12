"use client";

import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";
import { MoreHorizontal, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface BoardOptionsProps {
  id: string;
}

export const BoardOptions = ({ id }: BoardOptionsProps) => {
  const router = useRouter();
  const { execute, isLoading } = useAction(deleteBoard, {
    onError: (error) => {
      toast.error(error);
      router.push("/");
    },
    onSuccess: (data) => {
      toast.success(`Board "${data.title}" deleted!`);
      router.push("/");
    },
  });

  const onDelete = () => {
    execute({ id });
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"transparent"} className="h-auto w-auto p-2">
            <MoreHorizontal className="h-4 w-4 " />
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" align="start" className="px-0 pt-3 pb-3">
          <div className="text-sm font-medium text-center text-neutral-600 pb-4">
            Board Actions
          </div>
          <PopoverClose asChild>
            <Button
              variant={"ghost"}
              className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            >
              <X className={"h-4 w-4"} />
            </Button>
          </PopoverClose>
          <Button
            variant={"ghost"}
            disabled={isLoading}
            onClick={onDelete}
            className="rounded-none w-full h-auto"
          >
            Delete This Board
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};
