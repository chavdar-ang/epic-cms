<script>
  import { onMount } from "svelte";
  import { schema, inputs } from "../../../../stores";
  import { params } from "@roxi/routify";
  import validate from "../../../../lib/validator";

  // Components
  import Renderer from "../_components/Renderer.svelte";

  $: model = $schema[$params.slug];

  onMount(async () => {
    $inputs = [];
    console.log('inputs from store: ', $inputs);
  });

  let submit = () => {
    validate(model.settings.slug);
  };

  // export let slug;
</script>

<h2>{model.settings.name} create</h2>

<Renderer schema={model.schema} fields={model.fields} />

<button on:click={() => submit()}> Submit</button>
