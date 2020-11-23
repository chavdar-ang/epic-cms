<script>
  import { inputs } from "../../stores";

  export let key, field;
</script>

<div class="form-control">
  <label for={field}>{field.name}</label>
  <input type="email" name={field} bind:value={$inputs[key]} on:focus />
</div>
