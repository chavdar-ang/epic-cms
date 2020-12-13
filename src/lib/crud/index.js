import { get } from "svelte/store";
import { schema } from "../../stores";
import seeds from "../../database/seeds";

// Generate basic fields from related fields 
export let renderFields = (model) => {
    return model.schema; //[...model.fields, ...renderRelations(model.related)];
}

let renderRelations = (related) => {
    if (!related) return;
    
    return related.map(relation => {
        // console.log('related field', relation);
        eval(`${relation.type}_${relation.style}`)(relation)
        return relation;
    });
}

let select_dropdown = (params) => {
    // console.log('params', params);
    eval(params.reference.type)(params.reference)
}

let belongsTo = (ref) => {
    let model = get(schema)[ref.to];
    // console.log('schema', schema);
    let collection = model.settings.collection;
    // console.log('colletion', collection);
    let data = seeds[collection]
    console.log('data', data);
    // console.log('seeds', seeds);
    // console.log('ref', ref);
}

let nestFields = () => {

}

// fix list when related values are present
let mergeRelated = (model, list) => {
    if (!model.related) {
        return list;
    }
}

export const flatten = (obj, out) => {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] == 'object') {
            out = flatten(obj[key], out) //recursively call for nesteds
        } else {
            out[key] = obj[key] //direct assign for values
        }

    })
    return out
}