<script>
  import { list } from "../../../../stores";
  // import { mergeFields } from "../../../../lib/crud";
  // import { renderFields } from "../../../../lib/crud";
  import Row from "./Row.svelte";

  export let model;
</script>

<h3>CRUD index component</h3>

<hr />
<h4>Table</h4>
<hr />
<table>
  <!-- Table heading -->
  <tr>
    {#each Object.keys(model.list) as field}
      <th>{field}</th>
    {/each}
    <th>Edit</th>
    <th>Delete</th>
  </tr>

  <!-- Items -->
  {#each $list as item}
    <Row {model} {item} />
  {/each}
</table>