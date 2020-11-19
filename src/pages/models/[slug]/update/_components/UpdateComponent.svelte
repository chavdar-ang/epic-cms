<script>
  import formComponents from "../../../../../components/form";

  export let model, data;
  const fields = model.fields;
</script>

<div>
  {#each Object.keys(fields) as item}
    <div>
      <!-- Possible name of the thing -> Vanguard -->
      <svelte:component
        this={formComponents[fields[item].type]}
        field={fields[item]}
        value={data[item]} />
    </div>
  {/each}
</div>
