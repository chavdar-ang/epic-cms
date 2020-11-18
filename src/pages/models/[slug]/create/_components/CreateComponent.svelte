<script>
  import fields from "../../../../../components/form";

  export let model;
  console.log(model);
</script>

<style>
</style>

<h3>CRUD create component</h3>

<div>
  {#each Object.keys(model.attributes) as attribute}
    <div>
      <label for={attribute}>{attribute}</label>
      <!-- Use this here -> https://svelte.dev/examples#spread-props -->
      <svelte:component this={fields[model.attributes[attribute].type]} attribute={model.attributes[attribute]}/>
      <!-- <input type="text" id={attribute} name={attribute} /> -->
    </div>
  {/each}
</div>
