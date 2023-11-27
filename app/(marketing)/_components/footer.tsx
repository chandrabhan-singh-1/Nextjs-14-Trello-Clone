import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center w-full justify-between">
        <p className="text-md">
          All rights are reserved. &copy;
          <span className="text-neutral-600 font-semibold">Taskify Inc.</span>
        </p>
        <div className="space-x-4 w-full md:w-auto md:block flex justify-center">
          <Button size={"sm"} variant={"ghost"}>
            Privacy Policy!
          </Button>
          <Button size={"sm"} variant={"ghost"}>
            Terms of Service.
          </Button>
        </div>
      </div>
    </div>
  );
};
