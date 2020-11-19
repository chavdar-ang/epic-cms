<script>
  import models from "../../../../database/schema";
  import seeds from "../../../../database/seeds";
  import { params } from "@roxi/routify";

  $: model = models[$params.slug];
  $: slug = $params.slug;

  $: data = seeds[$params.slug].find(row => row._id == $params.id);

  // Components
  import UpdateComponent from "./_components/UpdateComponent.svelte";

  export let id;
</script>

<h2>{slug} update</h2>

<h3>ID: {id}</h3>

<UpdateComponent {model} {data} />

<button>Submit</button>
