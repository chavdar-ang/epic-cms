<script>
  import formComponents from "../../../../../components/form";
  import { errors } from "../../../../../stores";
  import validate from "../../../../../lib/validator";

  export let model;

  const fields = model.fields;

  let submit = () => {
    console.log("errors", $errors);
    validate(model.settings.slug);
  };

  let onFocus = key => {
    delete $errors[key];
    $errors = $errors; // Trigger rerendering
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

      {#if [key] in $errors}
        <p class="error-message">{JSON.stringify($errors[key])}</p>
      {/if}
    </div>
  {/each}
  <button on:click={() => submit()}> Submit</button>
</div>
