<script>
  import { inputs } from "../../stores";

  export let field;
</script>

<div class="form-control">
  <label for={field.slug}>{field.name}</label>
  <select name={field.slug} bind:value={$inputs[field.slug]} on:focus>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
  </select>
</div>
