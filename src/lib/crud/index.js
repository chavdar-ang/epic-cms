import { get } from "svelte/store";
import { schema } from "../../stores";
import seeds from "../../database/seeds";

export let mergeFields = (model) => {
    if (!model.related) {
        return model.fields;
    }
    
    let relatedFields = model.related.map(relation => {
        // console.log('related field', relation);
        eval(relation.type)(relation)
        return relation;
    });
    return [...model.fields, ...relatedFields];
}

let selectDropdown = (params) => {
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