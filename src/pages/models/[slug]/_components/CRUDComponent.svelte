<script>
  import { errors } from "../../../../stores";
  import formComponents from "../../../../components/form";
  import validate from "../../../../lib/validator";
  import { renderFields } from "../../../../lib/crud";
  import { inputs } from "../../../../stores";

  export let model;

  // console.log("inputs: ", $inputs);

  let submit = () => {
    validate(model.settings.slug);
  };

  let onFocus = slug => {
    delete $errors[slug];
    // Trigger rerendering
    $errors = $errors;
  };

  // Return the related component
  let component = (field) => {
    return formComponents[fields[field].type][fields[field].style];
  }

  let renderField = (field) => {
    return {slug: field, ...fields[field] }
  }

  let schema = model.schema;
  let fields = model.fields;
</script>

<div>
  {#each Object.keys(schema) as field}
    <div>
      <svelte:component
        this={component(field)}
        field={renderField(field)}
        on:focus={() => onFocus(field)}
        bind:value={$inputs[field]} />

      {#if [field] in $errors}
        <p class="error-message">{$errors[field][0]}</p>
      {/if}
    </div>
  {/each}
  <button on:click={() => submit()}> Submit</button>
</div>
