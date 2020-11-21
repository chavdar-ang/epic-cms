<script>
  import { inputs } from "../../stores";

  export let key, field;
</script>

<div class="form-control">
  <label for={key}>{field.name}</label>
  <input
    type="text"
    name={key}
    placeholder={'test' ?? ''}
    bind:value={$inputs[key]} />
</div>
