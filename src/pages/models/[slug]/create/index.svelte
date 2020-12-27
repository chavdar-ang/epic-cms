<script>
  import { onMount } from "svelte";
  import { schema, inputs } from "../../../../stores";
  import { params } from "@roxi/routify";

  // Components
  import Renderer from "../_components/Renderer.svelte";

  $: model = $schema[$params.slug];

  onMount(async () => {
    $inputs = [];
    console.log('inputs from store: ', $inputs);
  });

  export let slug;
</script>

<h2>{model.settings.name} create</h2>

<Renderer schema={model.schema} fields={model.fields} />
