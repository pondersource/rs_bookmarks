export interface ICreateBookmark {
    title: string
    url: string
    tags: string[]
}
export interface IBookmark {
    id?: string
    title: string
    url: string
    tags: string[]
}

export var Bookmarks = {
    name: "bookmarks",
    builder: function (privateClient: any, _: any) {
        privateClient.declareType('archive-bookmark', {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri"
                },
                "tags": {
                    "type": "array",
                    "default": []
                },
            },
            "required": ["title", "url"]
        });
        return {
            exports: {
                all: (path?: string) => {
                    return privateClient.getAll(path)
                },
                add: (bookmark: IBookmark) => {
                    bookmark.id = Date.now().toString();
                    const path = `archive/${bookmark.id}`;
                    return privateClient.storeObject("archive-bookmark", path, bookmark).then(() => bookmark);
                },
                remove: (id: string) => {
                    return privateClient.remove(`archive/${id}`).then(() => console.log('item successfully deleted'));
                }
            },
        };
    },
};
