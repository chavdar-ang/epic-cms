export default {
    settings: {
        name: "User",
        slug: "user",
        collection: "users",
        uid: "_id",
        description: "A description about the model.",
        increments: true,
        timestamps: true,
    },
    fields: [
        {
            slug: "name",
            name: "Name",
            type: "input",
            rules: {
                required: true,
                min: 3,
                max: 32
            }
        },
        {
            slug: "email",
            name: "Email",
            type: "email",
            rules: {
                required: true,
                email: true,
                min: 8,
                max: 64,
                unique: true
            }
        }
    ]
}