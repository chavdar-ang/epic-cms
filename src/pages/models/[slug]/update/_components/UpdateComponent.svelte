<script>
  import formComponents from "../../../../../components/form";
  import { inputs } from "../../../../../stores";

  export let model;
  const fields = model.fields;
</script>

<div>
  {#each Object.keys(fields) as key}
    <div>
      <svelte:component
        this={formComponents[fields[key].type]}
        field={fields[key]}
        {key} />
    </div>
  {/each}
</div>
