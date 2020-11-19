<script>
  export let item, model;
</script>

<tr>
  {#each Object.keys(model.fields) as td}
    <td>{item[td]}</td>
  {/each}
  <td><a href="/models/{model.settings.slug}/update/{item['_id']}"> Edit</a></td>
  <td>Delete</td>
</tr>
