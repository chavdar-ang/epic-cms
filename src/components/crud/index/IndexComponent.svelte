<script>
  import Row from "./Row.svelte";

  export let items, model;
</script>

<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>

<h3>CRUD index component</h3>

<hr />
<h4>Table</h4>
<hr />
<table>
  <tr>
    {#each Object.keys(model.attributes) as th}
      <th>{th}</th>
    {/each}
    <th>Edit</th>
    <th>Delete</th>
  </tr>

  {#each items as item}
    <Row {model} {item} />
  {/each}
</table>
<hr />
<!-- <pre>
    {JSON.stringify(model, true, '\t')}
</pre> -->
