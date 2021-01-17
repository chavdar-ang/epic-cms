<script>
  import { onMount } from "svelte";
  import { model, inputs } from "../../../stores";
  import models from "../../../models";
  import { params } from "@roxi/routify";
  import validate from "../../../lib/validator";

  // Components
  import Renderer from "./_components/Renderer.svelte";

  $: model = models[$params.slug];

  onMount(async () => {
    $inputs = [];
    console.log('inputs from store: ', $inputs);
  });

  let submit = () => {
    validate(model.slug);
  };

  // export let slug;
</script>
<div>
  Create
</div>

<h2>{model.name} create</h2>

<Renderer schema={model.schema} />

<button on:click={() => submit()}> Submit</button>
