<script>
  import formComponents from "../../../../../components/form";

  export let model;

  const fields = model.fields;
</script>

<div>
  {#each Object.keys(fields) as item}
    <div>
      <!-- Possible name of the thing -> Vanguard -->
      <svelte:component
        this={formComponents[fields[item].type]}
        field={fields[item]} />
    </div>
  {/each}
</div>
