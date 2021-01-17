<script>
  import { onMount } from "svelte";
  import api from "../../../../lib/api";
  import { schema, inputs } from "../../../../stores";
  import { params } from "@roxi/routify";

  // Components
  import Renderer from "../_components/Renderer.svelte";

  $: model = $schema[$params.slug];

  onMount(async () => {
    let url = `${model.settings.url}/${$params.id}`;
    let response = await api(url);
    $inputs = response.data; //seeds[model.settings.collection].find(row => row._id == $params.id);
  });

  export let slug, id;
</script>

<h2>{model.settings.name} update</h2>

<Renderer {model} />
