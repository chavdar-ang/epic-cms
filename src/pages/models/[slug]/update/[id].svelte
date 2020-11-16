<script>
  import models from "../../../../database/schema";
  import seeds from "../../../../database/seeds";
  import { params } from "@roxi/routify";

  $: model = models[$params.slug];
  $: slug = $params.slug;

  $: item = seeds[$params.slug][$params.id];

  // Components
  import UpdateComponent from "../../../../components/crud/update/UpdateComponent.svelte";

  export let id;
</script>

<h2>{slug} update</h2>

<UpdateComponent {model} {item} />

<button>Submit</button>
