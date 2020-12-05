<script>
  import _ from 'lodash';
  export let item, model;

  // check user list -> :address.city :address.street

  // render list function
</script>

<tr>
  {#each Object.keys(model.list) as field}
    <td>{item[field]}</td>
  {/each}
  <td>
    <a href="/models/{model.settings.slug}/update/{item['_id']}"> Edit</a>
  </td>
  <td>Delete</td>
</tr>
