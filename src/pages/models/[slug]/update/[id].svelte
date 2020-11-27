<script>
  import { onMount } from "svelte";
  import seeds from "../../../../database/seeds";
  import { schema, inputs } from "../../../../stores";
  import { params } from "@roxi/routify";

  // Components
  import CrudComponent from "../_components/CRUDComponent.svelte";

  $: model = $schema[$params.slug];

  onMount(async () => {
    $inputs = seeds[model.settings.collection].find(row => row._id == $params.id);
    console.log('inputs from store: ', $inputs);
  });

  export let id;
</script>

<h2>{model.settings.name} update</h2>

<CrudComponent {model} />
