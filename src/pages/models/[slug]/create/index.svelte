<script>
  import models from "../../../../database/schema";
  import { params } from "@roxi/routify";

  $: model = models[$params.slug];

  // Components
  import CreateComponent from "../../../../components/crud/create/CreateComponent.svelte";
  export let slug;
</script>

<h2>{slug} create</h2>
<CreateComponent {model}/>
<button>Submit</button>
