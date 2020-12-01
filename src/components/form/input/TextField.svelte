<script>
  export let field, value;
</script>

<div class="form-control">
  <label for={field.slug}>{field.name}</label>
  <input
    type="text"
    name={field.slug}
    placeholder={'test' ?? ''}
    bind:value
    on:focus />
</div>
