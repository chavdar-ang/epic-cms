<script>
  // import models from "../../../../database/schema";
  import seeds from "../../../../database/seeds";
  import { schema, inputs } from "../../../../stores";
  import { params } from "@roxi/routify";

  // Components
  import CrudComponent from "../_components/CRUDComponent.svelte";

  $: model = $schema[$params.slug];
  $: slug = $params.slug;

  $inputs = seeds[$params.slug].find(row => row._id == $params.id);

  export let id;
</script>

<h2>{slug} update</h2>

<CrudComponent {model} />
