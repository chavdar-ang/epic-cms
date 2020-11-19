<script>
  export let field;
  export let value = "";
</script>

<div class="form-control">
  <label for={field}>{field.name}</label>
  <input type="email" name={field} {value} />
</div>
