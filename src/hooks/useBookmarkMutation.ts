import { ICreateBookmark } from "@/modules/bookmarks.module";
import { remoteStorage } from "@/utils/remoteStorage";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateBookmarkMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newBookmark: ICreateBookmark) => {
      return remoteStorage.bookmarks
        .add(newBookmark)
        .then(() => {
          console.log("stored bookmark successfully");
        })
        .catch((err: any) => {
          console.error("validation error:", err);
        });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });
};
export const useRemoveBookmarkMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id?: string) => {
      return remoteStorage.bookmarks
        .remove(id)
        .then(() => {
          console.log("removed bookmark successfully");
        })
        .catch((err: any) => {
          console.error("validation error:", err);
        });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });
};
