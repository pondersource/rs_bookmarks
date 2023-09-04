import { Bookmarks } from "@/modules/bookmarks.module";
import RemoteStorage from "remotestoragejs";
// @ts-expect-error
import Widget from 'remotestorage-widget';

type AppRemoteStorage = RemoteStorage & {
    bookmarks: any
}
export const remoteStorage: AppRemoteStorage = new RemoteStorage({
    logging: true,
    modules: [Bookmarks]
}) as AppRemoteStorage;
export const widget = new Widget(remoteStorage);