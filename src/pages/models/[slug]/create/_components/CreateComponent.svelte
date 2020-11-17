<script>
  export let model;
</script>

<style>
</style>

<h3>CRUD create component</h3>

<div>
  {#each Object.keys(model.attributes) as attribute}
    <div>
      <label for={attribute}>{attribute}</label>
      <input type="text" id={attribute} name={attribute} />
    </div>
  {/each}
</div>
