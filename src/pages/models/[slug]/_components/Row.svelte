<script>
  export let item, model;

  console.log(item);
</script>

<tr>
  {#each Object.keys(model.attributes) as td}
    <td>{item[td]}</td>
  {/each}
  <td><a href="/models/{model.slug}/update/{item['_id']}"> Edit</a></td>
  <td>Delete</td>
</tr>
