<script>
  import { schema } from "../../../../stores";
  import { params } from "@roxi/routify";

  $: model = $schema[$params.slug];

  // Components
  import CrudComponent from "../_components/CRUDComponent.svelte";
  export let slug;
</script>

<h2>{slug} create</h2>

<CrudComponent {model} />
