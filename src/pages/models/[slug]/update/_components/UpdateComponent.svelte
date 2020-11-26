<script>
  import formComponents from "../../../../../components/form";
  import { errors } from "../../../../../stores";
  // import validate from "../../../../../lib/validator";
  import validate from "../../../../../lib/validator";

  export let model;

  const fields = model.fields;

  let submit = () => {
    validate(model.settings.slug);
  };

  let onFocus = slug => {
    delete $errors[slug];
    // Trigger rerendering
    $errors = $errors;
  };
</script>

<div>
  {#each fields as field}
    <div>
      <svelte:component
        this={formComponents[field.type]}
        {field}
        on:focus={() => onFocus(field.slug)} />

      {#if [field.slug] in $errors}
        <p class="error-message">{$errors[field.slug][0]}</p>
      {/if}
    </div>
  {/each}
  <button on:click={() => submit()}> Submit</button>
</div>
