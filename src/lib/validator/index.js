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
    return message.replace(`:${rule}`, value)
}

let validate = (model) => {
    let fields = get(schema)[model].fields;

    Object.keys(fields).map(key => {
        checkRules(fields[key], key);
    });    
}

let checkRules = (field, key) => {
    let input = get(inputs)[field];

    console.log('field input', input);

    // Change field validation to field.rules maybe
    let rules = field.validation;

    let fieldMessages = [];

    Object.entries(rules).map(([rule, value]) => {
        // console.log('rule: ', rule, 'val: ', value);
        if (!eval(rule)(input, value)) {
            fieldMessages.push(renderMessage(key, rule, value));
        }
    });

    errors.update(err => Object.assign(err, {[key]: fieldMessages}));
    console.log(get(errors));
}

// Rules methods
let required = (input) => {
    return input ? true : false;
}

let max = (input, max) => {
    return input <= max;
}

let min = (input, min) => {
    return input >= min;
}

let unique = (input) => {
    return false;
    // return input >= min;
}

export default validate;