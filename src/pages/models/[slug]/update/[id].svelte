<script>
  // import models from "../../../../database/schema";
  import seeds from "../../../../database/seeds";
  import { schema, inputs } from "../../../../stores";
  import { params } from "@roxi/routify";

  // Components
  import UpdateComponent from "./_components/UpdateComponent.svelte";

  $: model = $schema[$params.slug];
  $: slug = $params.slug;

  $inputs = seeds[$params.slug].find(row => row._id == $params.id);

  export let id;
</script>

<h2>{slug} update</h2>

<UpdateComponent {model} />
