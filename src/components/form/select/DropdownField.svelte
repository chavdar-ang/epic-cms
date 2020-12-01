<script>
  export let field, value;
</script>

<div class="form-control">
  <label for={field.slug}>{field.name}</label>
  <select name={field.slug} bind:value on:focus>
    <option value="" selected disabled hidden>Choose here</option>
    {#each Object.entries(field.options) as [value, option]}
      <option {value}>{option}</option>
    {/each}
  </select>
</div>
