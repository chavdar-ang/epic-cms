<script>
  export let item, model;
</script>

<tr>
  {#each model.fields as field}
    <td>{item[field.slug]}</td>
  {/each}
  <td>
    <a href="/models/{model.settings.slug}/update/{item['_id']}"> Edit</a>
  </td>
  <td>Delete</td>
</tr>
