export default {
    settings: {
        name: "Article",
        slug: "article",
        collection: "articles",
        uid: "_id",
        description: "A description about the model.",
        increments: true,
        timestamps: true,
    },
    fields: {
        title: {
            name: "Title",
            type: "input",
            rules: {
                required: true,
                min: 3,
                max: 32
            }
        },
        body: {
            name: "Body",
            type: "textarea",
            rules: {
                required: true,
                min: 20,
                max: 1000
            }
        }
    }
}