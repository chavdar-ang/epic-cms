export default {
    settings: {
        url: "https://jsonplaceholder.typicode.com/users",
        name: "User",
        slug: "user",
        type: "document", // document or edge?
        collection: "users",
        uid: "_id",
        description: "A description about the model.",
        increments: true,
        timestamps: true,
    },
    schema: {
        name: 'name',
        email: 'email',
        username: 'username',
        address: {
            city: 'city',
            street: 'street',
            zipcode: "zipcode",
            geo: {
                lat: 'lat',
                lng: 'lng'
            }
        },
        phone: 'phone',
        website: 'website'
    },
    list: {
        name: 'name',
        email: 'email',
        username: 'username',
        address: ':address.city :address.street'
    },
    fields: [
        {
            slug: "name",
            name: "Name",
            type: "group",
            fields: [
                {
                    slug: "firstname",
                    name: "First name",
                    type: "input",
                    style: "text",
                    rules: {
                        required: true,
                        min: 3,
                        max: 32
                    }
                },
                {
                    slug: "lastname",
                    name: "Last name",
                    type: "input",
                    style: "text",
                    rules: {
                        required: true,
                        min: 3,
                        max: 32
                    }
                },
            ]
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