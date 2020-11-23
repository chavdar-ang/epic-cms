<script>
  import { inputs } from "../../stores";

  export let key, field;
</script>

<div class="form-control">
  <label for={field}>{field.name}</label>
  <textarea
    name={field}
    id={field}
    cols="30"
    rows="10"
    bind:value={$inputs[key]}
    on:focus />
</div>
