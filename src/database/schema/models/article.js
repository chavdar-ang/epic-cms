export default {
    // "kind": "collectionType",
    collection: "articles",
    slug: "article",
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
            type: "input"
        },
        body: {
            type: "textarea"
        }
    }
}