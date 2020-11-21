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
    fields: {
        name: {
            name: "Name",
            type: "input",
            validation: {
                min: 3,
                max: 32,
                required: true
            }
        },
        email: {
            name: "Email",
            type: "email",
            validation: {
                min: 8,
                max: 64,
                required: true,
                unique: true
            }
        }
    }
}