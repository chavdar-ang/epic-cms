<script>
  import { model, list } from "../../../../stores";
  import Row from "./Row.svelte";

  const listedFields = $model.list;
  // console.log("list", $list);
</script>

<h3>CRUD index component</h3>

<hr />
<h4>Table</h4>
<hr />
<table>
  <!-- Table heading -->
  <tr>
    {#each Object.keys(listedFields) as field}
      <th>{field}</th>
    {/each}
    <th>Edit</th>
    <th>Delete</th>
  </tr>

  <!-- Items -->
  {#each $list as item}
    <Row {$model} {item} />
  {/each}
</table>
