<script>
  import { inputs } from "../../stores";

  export let field;
</script>

<div class="form-control">
  <label for={field.slug}>{field.name}</label>
  <input
    type="text"
    name={field.slug}
    placeholder={'test' ?? ''}
    bind:value={$inputs[field.slug]}
    on:focus />
</div>
