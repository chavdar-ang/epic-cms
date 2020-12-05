<script>
  import { beforeUpdate, onMount } from "svelte";
  import { list } from "../../../../stores";
  // import { mergeFields } from "../../../../lib/crud";
  import { renderFields } from "../../../../lib/crud";

  import api from "../../../../lib/api";

  import Row from "./Row.svelte";

  export let model;

  // let fields = renderFields(model);

  // fix list when has related data

  beforeUpdate(async () => {
    let response = await api(model.settings.url);

    $list = response.data;
  });

  // console.log("list", $list);
  // $list = seeds[model.settings.collection];
</script>

<h3>CRUD index component</h3>

<hr />
<h4>Table</h4>
<hr />
<table>
  <!-- Table heading -->
  <tr>
    {#each Object.keys(model.schema) as field}
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
