export default {
    settings: {
        name: "User",
        slug: "user",
        collection: "users",
        description: "A description about the model.",
        increments: true,
        timestamps: true,
    },
    options: {
        // maybe
        increments: true,
        timestamps: true,
    },
    fields: {
        _id: {
            name: "ID",
            type: "ID"
        },
        name: {
            name: "Name",
            type: "input"
        },
        email: {
            name: "Email",
            type: "email"
        }
    }
}