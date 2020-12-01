<script>
  import { inputs } from "../../../stores";

  export let field;
</script>

<div class="form-control">
  <label for={field.slug}>{field.name}</label>
  <textarea
    name={field.slug}
    id={field.slug}
    cols="30"
    rows="10"
    bind:value={$inputs[field.slug]}
    on:focus />
</div>
