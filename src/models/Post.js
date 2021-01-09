import Model from "../lib/database/model/Model";

class Post extends Model {

    get timestamps() {
        return false;
    }

    static get schema() {
        return {
            title: {
                //name: "Name", // By default shoud be capitalized key
                type: "input",
                style: "text",
                rules: {
                    required: true,
                    min: 3,
                    max: 32
                }
            },
            body: {
                name: "Body",
                type: "input",
                style: "text",
                rules: {
                    required: true,
                    min: 8,
                    max: 1000
                }
            }
        };
    }

    static get list() {
        return {
            title: 'title',
            body: 'body'
        };
    }
}

export default Post;