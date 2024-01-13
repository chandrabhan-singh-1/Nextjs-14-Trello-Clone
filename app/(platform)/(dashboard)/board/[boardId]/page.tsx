import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ListContainer } from "./_components/list-container";
import { toast } from "sonner";
import { SwipeToast } from "@/components/swipe-toast";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const lists = await db.list.findMany({
    where: {
      boardId: params.boardId,
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });

  return (
    <div className="p-5 h-full space-y-2 overflow-x-auto">
      <SwipeToast />
      <ListContainer boardId={params.boardId} data={lists} />
    </div>
  );
};

export default BoardIdPage;
