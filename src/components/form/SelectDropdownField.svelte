<script>
  import { inputs } from "../../stores";

  export let field;
</script>

<div class="form-control">
  <label for={field.slug}>{field.name}</label>
  <select name={field.slug} bind:value={$inputs[field.slug]} on:focus>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
</div>
