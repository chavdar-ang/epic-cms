<script>
  export let item, model;
</script>

<tr>
  {#each Object.keys(model.schema) as field}
    <td>{item[field]}</td>
  {/each}
  <td>
    <a href="/models/{model.settings.slug}/update/{item['_id']}"> Edit</a>
  </td>
  <td>Delete</td>
</tr>
