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
                min: 3,
                max: 32,
                required: true
            }
        },
        {
            slug: "email",
            name: "Email",
            type: "email",
            rules: {
                min: 8,
                max: 64,
                required: true,
                email: true,
                unique: true
            }
        }
    ]
}