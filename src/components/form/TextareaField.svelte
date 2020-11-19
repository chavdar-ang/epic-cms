<script>
  export let field;
  export let value = "";
</script>

<div class="form-control">
  <label for={field}>{field.name}</label>
  <textarea name={field} id={field} cols="30" rows="10" {value} />
</div>
