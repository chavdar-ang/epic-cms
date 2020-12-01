<script>
  import { errors } from "../../../../stores";
  import formComponents from "../../../../components/form";
  import validate from "../../../../lib/validator";
  import { mergeFields } from "../../../../lib/crud";

  export let model;

  let submit = () => {
    validate(model.settings.slug);
  };

  let onFocus = slug => {
    delete $errors[slug];
    // Trigger rerendering
    $errors = $errors;
  };

  // Adding relations to the fields
  let fields = mergeFields(model);
</script>

<div>
  {#each fields as field}
    <div>
      <svelte:component
        this={formComponents[field.type][field.style]}
        {field}
        on:focus={() => onFocus(field.slug)} />

      {#if [field.slug] in $errors}
        <p class="error-message">{$errors[field.slug][0]}</p>
      {/if}
    </div>
  {/each}
  <button on:click={() => submit()}> Submit</button>
</div>
