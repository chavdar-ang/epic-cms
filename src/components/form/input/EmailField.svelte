<script>
  import { inputs } from "../../../stores";

  export let field;
</script>

<div class="form-control">
  <label for={field.slug}>{field.name}</label>
  <input type="email" name={field.slug} bind:value={$inputs[field.slug]} on:focus />
</div>
