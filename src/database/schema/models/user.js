let settings = {
    url: "http://localhost:3000/users",
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
        // zipcode: 'zipcode',
        geo: {
            lat: 'lat',
            lng: 'lng'
        }
    },
    phones: [],
    websites: [
        {
            title: 'title',
            url: 'url'
        }
    ]
};

const list = {
    name: 'name',
    email: 'email',
    username: 'username',
    city: 'address.city',
    address: 'address.street'
};

const fields = {
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
    username: {
        name: "Username",
        type: "input",
        style: "text",
        rules: {
            required: true,
            min: 3,
            max: 32
        }
    },
    address: {
        name: "Address",
        type: "input", // related!
        style: "text"
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
    },
    geo: {
        name: "Geo Localtion",
        type: "input",
        style: "text",
    },
    lat: {
        name: "Latitude",
        type: "input",
        style: "text",
        rules: {
            required: true,
            min: 8,
            max: 64,
        }
    },
    lng: {
        name: "Longitude",
        type: "input",
        style: "text",
        rules: {
            required: true,
            min: 8,
            max: 64,
        }
    },
    phones: {
        name: "Phones",
        type: "input",
        // here
        // add type folder?
        style: "list",
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