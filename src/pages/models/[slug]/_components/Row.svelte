<script>
  import _ from "lodash";
  export let item, model;

  let list = model.list;
</script>

<tr>
  {#each Object.keys(list) as field}
    <td>{_.get(item, list[field])}</td>
  {/each}
  <td>
    <a href="/models/{model.collection}/update/{item['id']}"> Edit</a>
  </td>
  <td>Delete</td>
</tr>
