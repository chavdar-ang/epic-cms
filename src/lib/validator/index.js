import { get } from "svelte/store";
import { inputs, errors } from "../../stores";
import models from "../../models";

const messages = {
    required: 'The :attribute field is required.',
    min: 'The :attribute must be at least :min.',
    max: 'The :attribute may not be greater than :max.',
    unique: 'The :attribute has already been taken.',
    email: 'The :attribute must be a valid email address.'
}

// ??
let renderMessage = (slug, rule, value) => {
    let message = messages[rule].replace(':attribute', slug);

    // Replace values if present -> :min, :max, etc.
    return message.replace(`:${rule}`, value);
}

let getFields = (schema) => {
    let res = {}

    Object.entries(schema).filter(([key, val]) => {
        // console.log(val);
        if (val.type !== "folder") {
            res[key] = val.rules;
        } else {
            res = { ...res, ...getFields(val.fields) }
        }
    });

    return res;
}

let validate = (model) => {

    // clean up errors
    errors.update(err => []);
    
    const schema = models[model].schema;
    const fields = getFields(schema);

    Object.entries(fields).map(([field, rules]) => {
        checkRules(field, rules);
    });
}

// Rules methods - can be moved to rules.js
let checkRules = (field, rules) => {
    let input = get(inputs)[field];

    let fieldMessages = [];

    Object.entries(rules).map(([rule, value]) => {
        if (!callRule(rule)(input, value)) {
            fieldMessages.push(renderMessage(field, rule, value));
        }
    });

    if (fieldMessages.length > 0) {
        errors.update(err => Object.assign(err, { [field]: fieldMessages }));
    }
}

let callRule = (rule) => {
    switch (rule) {
        case 'required':
            return required;
        case 'min':
            return min;
        case 'max':
            return max;
        case 'email':
            return email;
        case 'unique':
            return unique;
        default:
            throw new Error(`Validation rule "${rule}" does not exist.`)
    }
}

// Rule methods
let required = (input = '') => input ? true : false;

let min = (input = '', min) => input.length >= min;

let max = (input = '', max) => input.length <= max;

let email = (input = '') => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
}

let unique = (input) => {
    // this is a little more complicated
    return true;
}

export default validate;