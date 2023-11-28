import { Merriweather, Poppins } from "next/font/google";
import { MedalIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col px-8 sm:px-20 md:px-36">
      <div className="flex items-center justify-center flex-col gap-3">
        <div className="flex px-4 py-3 justify-center items-center rounded-full bg-amber-200 text-amber-700">
          <MedalIcon className="h-6 w-6 mr-2" />
          The Best Task Management Service
        </div>
        <div className="mt-3 mb-1">
          <h1
            className={cn(
              "text-3xl md:text-6xl text-center bg-gradient-to-br from-rose-400 to-purple-500 text-transparent bg-clip-text font-extrabold",
              merriweather.className
            )}
          >
            TASKIFY
          </h1>
          <h2 className="text-center font-semibold">
            The software your business need to organize its tasks.
          </h2>
        </div>
        <article className="uppercase bg-gradient-to-br from-sky-400 to-orange-400 text-white/90 text-2xl px-4 p-2 rounded-lg font-semibold w-fit">
          work forward.
        </article>
        <div
          className={cn(
            "text-slate-500 text-center max-w-3xl mx-auto",
            poppins.className
          )}
        >
          &quot;Experience seamless project management with TASKIFY. Streamline
          tasks, collaborate effortlessly, and boost productivity. Your
          projects, simplified and organized, all in one place.&quot;
        </div>
        <Button
          variant={"default"}
          className="hover:bg-gray-700 font-semibold mt-10"
        >
          <Link href={"/sign-in"}>Get Taskify for free</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;

export const merriweather = Merriweather({
  subsets: ["latin"],
  display: "auto",
  weight: ["300", "400", "700", "900"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
