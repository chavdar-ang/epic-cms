<script>
  import models from "../../../database/schema";
  import seeds from "../../../database/seeds";
  import { params } from "@roxi/routify";

  // Components
  import IndexComponent from "./_components/IndexComponent.svelte";

  $: model = models[$params.slug];
  $: items = seeds[$params.slug];

  export let slug;
</script>

<h1>{model.settings.name}</h1>

<div>
  <IndexComponent {items} {model} />
  <a href={`./${slug}/create`}>Create new {model.settings.name}</a>
</div>
