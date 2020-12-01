<script>
  import { beforeUpdate } from "svelte";
  import { list } from "../../../../stores";
  import seeds from "../../../../database/seeds";
  // import { mergeFields } from "../../../../lib/crud";
  import { mergeFields } from "../../../../lib/crud";

  import Row from "./Row.svelte";

  export let model;

  let fields = mergeFields(model);

  // fix list when has related data
  
  beforeUpdate(async () => {
    $list = seeds[model.settings.collection];
  });
</script>

<h3>CRUD index component</h3>

<hr />
<h4>Table</h4>
<hr />
<table>
  <!-- Table heading -->
  <tr>
    {#each fields as field}
      <th>{field.name}</th>
    {/each}
    <th>Edit</th>
    <th>Delete</th>
  </tr>

  <!-- Items -->
  {#each $list as item}
    <Row {model} {item} />
  {/each}
</table>
