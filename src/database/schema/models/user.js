export default {
    settings: {
        name: "User",
        slug: "user",
        type: "document", // document or edge?
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
            style: "text",
            rules: {
                required: true,
                min: 3,
                max: 32
            }
        },
        {
            slug: "email",
            name: "Email",
            type: "input",
            style: "email",
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