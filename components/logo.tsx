import { merriweather } from "@/app/(marketing)/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hidden md:flex gap-x-2 items-center transition hover:opacity-75">
        <Image src={"/logo.svg"} alt="Logo" width={35} height={35} priority />
        <p
          className={cn(
            "text-xl text-neutral-700 font-semibold",
            merriweather.className
          )}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};
