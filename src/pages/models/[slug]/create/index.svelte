<script>
  import { schema } from "../../../../stores";
  import { params } from "@roxi/routify";

  $: model = $schema[$params.slug];

  // Components
  import CreateComponent from "./_components/CreateComponent.svelte";
  export let slug;
</script>

<h2>{slug} create</h2>

<CreateComponent {model} />
