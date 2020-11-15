<script>
  export let item, attributes;
</script>

<tr>
  {#each attributes as td}
    <td>{item[td]}</td>
  {/each}
</tr>
