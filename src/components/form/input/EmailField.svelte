<script>
  export let field, value;
</script>

<div class="form-control">
  <label for={Object.keys(field)}>{field.name}</label>
  <input type="email" name={Object.keys(field)} bind:value on:focus />
</div>
