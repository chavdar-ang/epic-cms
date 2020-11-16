export default {
    collection: "users",
    slug: "user",
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
        _id: {
            type: "ID"
        },
        name: {
            type: "string"
        },
        email: {
            type: "email"
        }
    }
}