<script>
  export let model;
</script>

<style>
</style>

<h3>CRUD create component</h3>

<div>
  {#each Object.keys(model.attributes) as item}
    <div>
      <label for={item}>{item}</label>
      <input type="text" id={item} name={item} />
    </div>
  {/each}
</div>
