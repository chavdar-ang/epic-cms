<script>
  import { model } from "../../../../stores";
  import _ from "lodash";
  export let item;

  // let list = model.list;
</script>

<tr>
  {#each Object.keys($model.list) as field}
    <td>{_.get(item, $model.list[field])}</td>
  {/each}
  <td>
    <a href="/models/{$model.collection}/update/{item['id']}"> Edit</a>
  </td>
  <td>Delete</td>
</tr>
