<script>
  import models from "../../../database/schema";
  import { params } from "@roxi/routify";

  $: slug = $params.slug;
  $: model = models[slug];

  export let model;
  export let slug;
</script>

<h1>{model.info.name}</h1>

<pre>
    {JSON.stringify(model)}
</pre>
