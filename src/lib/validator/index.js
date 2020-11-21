import { get } from "svelte/store";
import { schema, inputs, errors } from "../../stores";



let validate = (model) => {
    
    let fields = get(schema)[model].fields;
    // console.log('test', fields);

    Object.keys(fields).map(key => {
        checkRules(fields[key]);
    });

    // for (const key in fields) {

    //     console.log('field', field);

    //     checkRules(fields[key])
    // }
    
}

let checkRules = (field) => {
    // console.log('check rules', field);

    let input = get(inputs)[field];

    let rules = field.validation;

    Object.keys(rules).map((rule, val) => {
        // console.log('rule: ', rule, 'value:', val);
        if (!eval(rule)(input, val)) {
            errors.update(err => [...err, err['test']]);
            console.log(get(errors));
        }
        // console.log('Valid? ', eval(rule)(input, val));
    });

    // console.log(rules);
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

export default validate;