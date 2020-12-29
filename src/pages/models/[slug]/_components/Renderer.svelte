<script>
  import { errors } from "../../../../stores";
  import formComponents from "../../../../components/form";
  
  import { renderFields, flatten } from "../../../../lib/crud";
  import { inputs } from "../../../../stores";

  export let schema, fields;

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

  // fix this!
  // let schema = flatten(model.schema, {});
  // let fields = model.fields;
</script>

<style>
  .sub {
    background-color: snow;
    margin: 4px;
    padding: 10px;
    border-radius: 7px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
</style>

<div>
  {#each Object.keys(schema) as field}
    {#if typeof schema[field] === 'object'}
      <div class="sub">
        <h4>Some model</h4>
        <svelte:self schema={schema[field]} {fields} />
      </div>
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
</div>
