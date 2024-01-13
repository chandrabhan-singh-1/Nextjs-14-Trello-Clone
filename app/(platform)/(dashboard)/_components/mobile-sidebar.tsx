"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  const { isOpen, onOpen, onClose } = useMobileSidebar((state) => ({
    isOpen: state.isOpen,
    onOpen: state.onOpen,
    onClose: state.onClose,
  }));

  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        variant={"ghost"}
        size={"sm"}
        className="block md:hidden"
      >
        <Menu className="h-6 w-6 shrink-0" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side={"left"} className="p-2 pt-10">
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};
