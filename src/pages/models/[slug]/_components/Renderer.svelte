<script>
  import { errors } from "../../../../stores";
  import formComponents from "../../../../components/form";
  import validate from "../../../../lib/validator";
  import { renderFields, flatten } from "../../../../lib/crud";
  import { inputs } from "../../../../stores";

  export let schema, fields;

  let submit = () => {
    validate(model.settings.slug);
  };

  let onFocus = (slug) => {
    delete $errors[slug];
    // Trigger rerendering
    $errors = $errors;
  };

  // Return the related component
  let component = (field) => {
    return formComponents[fields[field].type][fields[field].style];
  };

  let renderField = (field) => {
    return { slug: field, ...fields[field] };
  };

  console.log("123", fields);

  // fix this!
  // let schema = flatten(model.schema, {});
  // let fields = model.fields;
</script>

<div>
  {#each Object.keys(schema) as field}
    {#if typeof schema[field] === 'object'}
      <div>{JSON.stringify(schema[field])}</div>
      <svelte:self schema={schema[field]} {fields} />
    {:else}
      <svelte:component
        this={component(field)}
        field={renderField(field)}
        on:focus={() => onFocus(field)}
        bind:value={$inputs[field]} />
    {/if}

    {#if [field] in $errors}
      <p class="error-message">{$errors[field][0]}</p>
    {/if}
  {/each}
  <button on:click={() => submit()}> Submit</button>
</div>
