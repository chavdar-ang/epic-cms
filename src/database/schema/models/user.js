let settings = {
    url: "https://jsonplaceholder.typicode.com/users",
    name: "User",
    slug: "user",
    type: "document", // document or edge?
    collection: "users",
    uid: "_id",
    description: "A description about the model.",
    increments: true,
    timestamps: true,
};

let schema = {
    name: 'name',
    email: 'email',
    username: 'username',
    address: {
        city: 'city',
        street: 'street',
        zipcode: 'zipcode',
        geo: {
            lat: 'lat',
            lng: 'lng'
        }
    },
    phone: 'phone',
    website: 'website'
};

let list = {
    name: 'name',
    email: 'email',
    username: 'username',
    address: ':address.city and :address.street'
};

let fields = {
    name: {
        name: "Name",
        type: "input",
        style: "text",
        rules: {
            required: true,
            min: 3,
            max: 32
        }
    },
    email: {
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
    },
    address: {
        name: "Address",
    },
    city: {
        name: "City",
        type: "input",
        style: "text",
        rules: {
            required: true,
            min: 8,
            max: 64,
        }
    },
    street: {
        name: "Street",
        type: "input",
        style: "text",
        rules: {
            required: true,
            min: 8,
            max: 64,
        }
    }
}

export default {
    settings: settings,
    schema: schema,
    list: list,
    fields: fields
}