<script>
  import models from "../../../../database/schema";
  import { params } from "@roxi/routify";

  $: model = models[$params.slug];

  // Components
  import CreateComponent from "./_components/CreateComponent.svelte";
  export let slug;
</script>

<h2>{slug} create</h2>

<CreateComponent {model} />

<button>Submit</button>
