<script>
  import { model, list } from "../../../../stores";
  import Row from "./Row.svelte";

  $: listed = $model.list;
</script>

<h3>CRUD index component</h3>

<hr />
<h4>Table</h4>
<hr />

<table>
  <!-- Table heading -->
  <tr>
    {#each Object.keys(listed) as field}
      <th>{field}</th>
    {/each}
    <th>Edit</th>
    <th>Delete</th>
  </tr>

  <!-- Items -->
  {#each $list as item}
    <Row {item} />
  {/each}
</table>
