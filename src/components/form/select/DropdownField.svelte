<script>
  import { inputs } from "../../../stores";

  export let field;
</script>

<div class="form-control">
  <label for={field.slug}>{field.name}</label>
  <select name={field.slug} bind:value={$inputs[field.slug]} on:focus>
    <option value="" selected disabled hidden>Choose here</option>
    {#each Object.entries(field.options) as [value, option]}
      <option {value}>{option}</option>
    {/each}
  </select>
</div>
