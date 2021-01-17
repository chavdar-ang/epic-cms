<script>
  import { errors } from "../../../../stores";
  import formComponents from "../../../../components/form";

  import { renderFields, flatten } from "../../../../lib/crud";
  import { inputs, model } from "../../../../stores";

  export let schema;

  let onFocus = slug => {
    delete $errors[slug];
    // Trigger rerendering
    $errors = $errors;
  };

  // Return the related component
  let component = field => {
    return formComponents[schema[field].type][schema[field].style];
  };

  let renderField = field => {
    return { slug: field, ...schema[field] };
  };

  // fix this!
  // let schema = flatten(model.schema, {});
  // let fields = model.fields;
</script>

<div>
  {#each Object.keys(schema) as field}
    {#if schema[field].type == "folder"}
      <div class="sub">
        <h4>{schema[field].name}</h4>
        <svelte:self schema={schema[field].fields} />
      </div>
    {:else}
      <svelte:component
        this={component(field)}
        field={renderField(field)}
        on:focus={() => onFocus(field)}
        bind:value={$inputs[field]}
      />
    {/if}

    {#if [field] in $errors}
      {@debug $errors}
      <p class="error-message">{$errors[field][0]}</p>
    {/if}
  {/each}
</div>

<style>
  .sub {
    background-color: snow;
    margin: 4px;
    padding: 10px;
    border-radius: 7px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
</style>
