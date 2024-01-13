"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board/index";

import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { FormPicker } from "./form-picker";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useProModal } from "@/hooks/use-pro-modal";
import { useMediaQuery } from "usehooks-ts";

interface FormPopoverProps {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

export const FormPopover = ({
  children,
  side = "bottom",
  sideOffset = 0,
  align = "center",
}: FormPopoverProps) => {
  const proModal = useProModal();
  const closeRef = useRef<ElementRef<"button">>(null);
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:768px)");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      toast.success("Board created!");
      closeRef.current?.click();
      router.push(`/board/${data.id}`);
    },
    onError: (error) => {
      toast.error(error);
      proModal.onOpen();
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;

    execute({ title, image });
  };

  if (!mounted) {
    return null;
  }
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-full md:w-80 pt-3"
        side={isMobile ? "bottom" : side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create Board
        </div>
        <PopoverClose asChild ref={closeRef}>
          <Button
            variant={"ghost"}
            className="h-auto w-auto p-1 absolute top-2 right-2 text-neutral-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <form action={onSubmit} className="space-y-4 ">
          <div className="space-y-4">
            <FormPicker id={"image"} errors={fieldErrors} />
            <FormInput
              id="title"
              label="Board Title"
              type="text"
              errors={fieldErrors}
            />
          </div>
          <FormSubmit className="w-full">Create</FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};
