<script>
  export let field, value;
</script>

<div class="form-control">
  <label for={field.slug}>{field.name}</label>
  <input type="email" name={field.slug} bind:value on:focus />
</div>
