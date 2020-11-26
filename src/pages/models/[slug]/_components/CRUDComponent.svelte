<script>
  
  import { errors } from "../../../../stores";
  import formComponents from "../../../../components/form";
  import validate from "../../../../lib/validator";

  export let model;

  let submit = () => {
    validate(model.settings.slug);
  };

  let onFocus = slug => {
    delete $errors[slug];
    // Trigger rerendering
    $errors = $errors;
  };

  let fields = model.related ? [...model.fields, ...model.related] : model.fields;

  
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
