<script>
  import formComponents from "../../../../../components/form";
  import { errors } from "../../../../../stores";
  import validate from "../../../../../lib/validator";

  export let model;

  // console.log('model', model);

  const fields = model.fields;

  let submit = () => {
    validate(model.settings.slug);
    console.log($errors);
  };

  let onFocus = key => {
    delete $errors[key];
    // Trigger rerendering
    $errors = $errors;
  };
</script>

<style>
  .error-message {
    font-size: 0.8em;
    color: rgb(255, 87, 87);
  }
</style>

<div>
  {#each Object.keys(fields) as key}
    <div>
      <svelte:component
        this={formComponents[fields[key].type]}
        field={fields[key]}
        {key}
        on:focus={() => onFocus(key)} />

      {#if $errors[key]}
        <p class="error-message">{$errors[key][0]}</p>
      {/if}
    </div>
  {/each}
  <button on:click={() => submit()}> Submit</button>
</div>
