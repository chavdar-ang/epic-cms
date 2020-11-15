<script>
  import models from "../../../database/schema";
  import { params } from "@roxi/routify";

  console.log('params', $params);

  $: slug = $params.slug;
  $: model = models[slug];

  export let model;
  export let slug;
</script>

<h1>{model.info.name}</h1>

<pre>
    {JSON.stringify(model)}
</pre>
