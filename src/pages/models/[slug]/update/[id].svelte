<script>
  import models from "../../../../database/schema";
  import seeds from "../../../../database/seeds";
  import { params } from "@roxi/routify";

  // Components
  import UpdateComponent from "./_components/UpdateComponent.svelte";

  $: model = models[$params.slug];
  $: slug = $params.slug;

  $: data = seeds[$params.slug].find(row => row._id == $params.id);

  export let id;
</script>

<h2>{slug} update</h2>

<UpdateComponent {model} {data} />

<button>Submit</button>
