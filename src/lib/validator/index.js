import { get } from "svelte/store";
import { schema, inputs, errors } from "../../stores";

const messages = {
    required: 'The :attribute field is required.',
    min: 'The :attribute must be at least :min.',
    max: 'The :attribute may not be greater than :max.',
    unique: 'The :attribute has already been taken.'
}

let renderMessage = (key, rule, value) => {
    let message = messages[rule].replace(':attribute', key);
    
    // Replace values if present -> :min, :max, etc.
    return message.replace(`:${rule}`, value);
}

let validate = (model) => {
    // clean up errors
    errors.update(err => ({}));
    let fields = get(schema)[model].fields;

    Object.keys(fields).map(key => {
        checkRules(fields[key], key);
    });    
}

let checkRules = (field, key) => {
    let input = get(inputs)[key];

    // Change field validation to field.rules maybe
    let rules = field.validation;

    let fieldMessages = [];

    Object.entries(rules).map(([rule, value]) => {
        if (!eval(rule)(input, value)) {
            fieldMessages.push(renderMessage(key, rule, value));
        }
    });

    if (fieldMessages.length > 0) {
        errors.update(err => Object.assign(err, {[key]: fieldMessages}));
    }
}

// Rules methods
let required = (input = '') => {
    return input ? true : false;
}

let min = (input = '', min) => {
    return input.length >= min;
}

let max = (input = '', max) => {
    return input.length <= max;
}

let unique = (input) => {
    // this is a little more complicated
    return false;
}

export default validate;