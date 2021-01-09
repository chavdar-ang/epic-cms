import pluralize, { singular } from "pluralize";

class Model {

    get modelClass() {
        return this.constructor;
    }

    // temp
    get modelName() {
        return this.modelClass.name;
    }

    get primaryKey() {
        return '_id';
    }

    get timestamps() {
        return true;
    }

    get type() {
        return 'document';
    }

    static get collection() {
        return pluralize((new this).constructor.slug);
    }

    static get slug() {
        return (new this).modelName.toLowerCase();
    }

    get schema() {
        return {};
    }

    create() {
        // If timestamps are true set created_at and updated_at
        console.log(`New ${this.modelName.toLowerCase()} is created.`);
    }

    update() {
        console.log(`${this.modelName} is updated.`);
        // If timestamps are true update the updated_at field
        console.log(`Timestams are: ${this.timestamps ? 'on' : 'off'}`);
    }

    delete() {
        // Soft deletes and/or revisions here somewhere
        console.log(`${this.modelName} with ${this.primaryKey}: <key> is deleted.`);
    }
}

export default Model;