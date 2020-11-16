<script>
    export let model, item;
</script>

<style>
</style>

<h3>CRUD update component</h3>

<div>
  {#each Object.keys(model.attributes) as attribute}
    <div>
      <label for={attribute}>{attribute}</label>
      <input type="text" id={attribute} name={attribute} value="{item[attribute]}" />
    </div>
  {/each}
</div>
