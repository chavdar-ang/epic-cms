export default {
    collection: "articles",
    info: {
        name: "user",
        description: "A description about the model."
    },
    options: {
        // maybe
        increments: true,
        timestamps: true,
    },
    attributes: {
        name: {
            type: "string"
        },
        email: {
            type: "email"
        }
    }
}