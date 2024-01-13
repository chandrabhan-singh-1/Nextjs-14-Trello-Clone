"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useMediaQuery } from "usehooks-ts";

export const SwipeToast = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isMobile) {
      toast("Scrolling Enabled 🔛", {
        position: "top-center",
        duration: 5000,
      });
    }
  }, [isMobile]);

  return <></>;
};
