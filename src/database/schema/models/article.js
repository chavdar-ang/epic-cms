export default {
    // "kind": "collectionType",
    collection: "articles",
    info: {
        name: "article",
        description: "A description about the model."
    },
    options: {
        // maybe
        increments: true,
        timestamps: true,
    },
    attributes: {
        _id: {
            type: "ID"
        },
        title: {
            type: "string"
        },
        body: {
            type: "richtext"
        }
    }
}