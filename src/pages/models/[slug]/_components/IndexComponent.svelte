<script>
  import { beforeUpdate } from "svelte";
  import { list } from "../../../../stores";
  import seeds from "../../../../database/seeds";

  import Row from "./Row.svelte";

  export let model;

  $: fields = model.related
    ? [...model.fields, ...model.related]
    : model.fields;

  beforeUpdate(() => {
    $list = seeds[model.settings.slug];
  });
</script>

<h3>CRUD index component</h3>

<hr />
<h4>Table</h4>
<hr />
<table>
  <tr>
    {#each fields as field}
      <th>{field.name}</th>
    {/each}
    <th>Edit</th>
    <th>Delete</th>
  </tr>

  {#each $list as item}
    <Row {model} {item} />
  {/each}
</table>
