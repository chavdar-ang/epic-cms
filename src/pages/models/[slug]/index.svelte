<script>
  import models from "../../../database/schema";
  import seeds from "../../../database/seeds";
  import { params } from "@roxi/routify";

  // Components
  import CrudIndex from "../../../components/crud/index/IndexComponent.svelte";

  $: model = models[$params.slug];
  $: items = seeds[$params.slug];

  export let slug;
</script>

<h1>{model.info.name}</h1>

<div>
  <CrudIndex {items} {model}/>
  <a href="{`./${slug}/create`}">Create new {slug}</a>
</div>
