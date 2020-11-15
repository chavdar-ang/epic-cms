<script>
  import models from "../../../database/schema";
  import { params } from "@roxi/routify";

  $: model = models[$params.slug];

  // export let model;
  export let slug;
</script>

<h1>{model.info.name}</h1>

<pre>
    {JSON.stringify(model, true, '\t')}
</pre>
