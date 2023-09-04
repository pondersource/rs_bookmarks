import { IBookmark } from "@/modules/bookmarks.module";
import { remoteStorage } from "@/utils/remoteStorage";
import {
    useQuery
} from "@tanstack/react-query";

export const useGetBookmarks = () => {
    return useQuery({ queryKey: ["bookmarks"], queryFn: getBookmarks });
};

const getBookmarks = async (): Promise<IBookmark[]> => {
    return await remoteStorage.bookmarks
        .all("archive/")
        .then((res: any) => Object.values(res));
};
