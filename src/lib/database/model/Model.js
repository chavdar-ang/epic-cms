import pluralize, { singular } from "pluralize";

class Model {

    get _class() {
        return this.constructor;
    }

    // temp
    get _name() {
        return this._class.name;
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
        return pluralize(this.slug);
    }

    static get slug() {
        return this.name.toLowerCase();
    }

    get schema() {
        return {};
    }

    create() {
        // If timestamps are true set created_at and updated_at
        console.log(`New ${this._name.toLowerCase()} is created.`);
    }

    update() {
        console.log(`${this._name} is updated.`);
        // If timestamps are true update the updated_at field
        console.log(`Timestams are: ${this.timestamps ? 'on' : 'off'}`);
    }

    delete() {
        // Soft deletes and/or revisions here somewhere
        console.log(`${this._name} with ${this.primaryKey}: <key> is deleted.`);
    }
}

export default Model;