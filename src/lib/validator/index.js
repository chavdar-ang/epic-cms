import { get } from "svelte/store";
import { schema, inputs, errors } from "../../stores";



let validate = (model) => {
    
    let fields = get(schema)[model].fields;
    // console.log('test', fields);

    Object.keys(fields).map(key => {
        checkRules(fields[key], key);
    });

    // for (const key in fields) {

    //     console.log('field', field);

    //     checkRules(fields[key])
    // }
    
}

let checkRules = (field, key) => {
    // console.log('check rules', field);

    console.log('field: ', field, 'key: ', key);

    let input = get(inputs)[field];

    // Change field validation to field.rules maybe
    let rules = field.validation;

    let fieldMessages = [];

    Object.keys(rules).map((rule, val) => {
        if (!eval(rule)(input, val)) {
            fieldMessages.push(`Some ${rule} error.`);
        }
    });

    errors.update(err => Object.assign(err, {[key]: fieldMessages}));
    console.log(get(errors));
}

// let checkSingleRule = () => {

// }

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