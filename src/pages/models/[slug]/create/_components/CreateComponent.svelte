<script>
  import formComponents from "../../../../../components/form";
  import { errors } from "../../../../../stores";
  import validate from "../../../../../lib/validator";

  export let model;

  const fields = model.fields;

  let submit = () => {
    errors = validate();
    console.log("submit");
  };

  // let errors = (input) => {
  //   return validate()
  // }
  // get errors from store!
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
        {key} />

      {#if $errors[key]}
        <p class="error-message">{$errors[0]}</p>
      {/if}
    </div>
  {/each}
  <button on:click={() => submit()}> Submit</button>
</div>
