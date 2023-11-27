import * as z from "zod";

export const DeleteCard = z.object({
  id: z.string(),
  boardId: z.string(),
});
