<script>
  import { beforeUpdate, onMount } from "svelte";
  import { beforeUrlChange } from "@roxi/routify";
  import { list } from "../../../../stores";
  // import { mergeFields } from "../../../../lib/crud";
  // import { renderFields } from "../../../../lib/crud";
  import api from "../../../../lib/api";
  import Row from "./Row.svelte";

  export let model;

  // let fields = renderFields(model);

  // fix list when has related data

  // $beforeUrlChange(async (event, store) => {
  //   let response = await api("http://localhost:3000/" + model.collection);
  //   // if (formIsDirty) {
  //   //   alert("Please save your changes before leaving.");
  //   //   return false;
  //   // } else return true;
  //   $list = response.data;
  // });

  // onMount(async () => {
  //   let response = await api("http://localhost:3000/" + model.collection);

  // });

  // console.log("list", $list);
  // $list = seeds[model.collection];
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
