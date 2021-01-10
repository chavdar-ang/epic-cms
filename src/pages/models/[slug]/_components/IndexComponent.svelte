<script>
  import { beforeUpdate, onMount } from "svelte";
  import { beforeUrlChange } from "@roxi/routify";
  // import { list } from "../../../../stores";
  // import { mergeFields } from "../../../../lib/crud";
  // import { renderFields } from "../../../../lib/crud";
  import api from "../../../../lib/api";
  import Row from "./Row.svelte";

  export let model;

  // let fields = renderFields(model);

  // fix list when has related data

  let tempList = [];

  $beforeUrlChange(async (event, store) => {
    let response = await api("http://localhost:3001/" + model.collection);

    console.log(store);

    tempList = response.data;

    // here
    console.log('url change');

    return true;
  });

  $: list = tempList;

  // onMount(async () => {
  //   let response = await api("http://localhost:3001/" + model.collection);
  //   console.log(model.collection, response.data);
  //   $list = response.data;
  // });
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
  {#each list as item}
    <Row {model} {item} />
  {/each}
</table>
