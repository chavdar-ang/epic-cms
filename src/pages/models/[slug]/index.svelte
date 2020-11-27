<script>
  import { schema } from "../../../stores";
  import { params } from "@roxi/routify";

  // Components
  import IndexComponent from "./_components/IndexComponent.svelte";

  $: model = $schema[$params.slug];

  export let slug;
</script>

<h1>{model.settings.name}</h1>

<div>
  <IndexComponent {model} />
  <a href={`./${slug}/create`}>Create new {model.settings.name}</a>
</div>
