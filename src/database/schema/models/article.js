export default {
    settings: {
        name: "Article",
        slug: "article",
        collection: "articles",
        description: "A description about the model.",
        increments: true,
        timestamps: true,
    },
    fields: {
        _id: {
            name: "ID",
            type: "id"
        },
        title: {
            name: "Title",
            type: "input"
        },
        body: {
            name: "Body",
            type: "textarea"
        }
    }
}