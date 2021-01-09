import Model from "../lib/database/model/Model";

class User extends Model {

    get timestamps() {
        return false;
    }

    static get schema() {
        return {
            name: {
                //name: "Name", // By default shoud be capitalized key
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
            }
        };
    }

    static get list() {
        return {
            name: 'name',
            email: 'email',
            username: 'username',
            city: 'address.city',
            address: 'address.street'
        };
    }
}

export default User;