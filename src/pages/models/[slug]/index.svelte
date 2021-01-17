<script>
  import { list, model } from "../../../stores";
  import models from "../../../models";
  import { params } from "@roxi/routify";
  import api from "../../../lib/api";

  // Components
  import IndexComponent from "./_components/IndexComponent.svelte";

  $: $params.slug && load($params.slug);

  let load = async slug => {
    $model = models[$params.slug];
    const response = await api("http://localhost:3000/" + $model.collection);

    $list = response.data;
  };

  export let slug;
</script>

<h1>{$model.name}</h1>

<IndexComponent />

<a href={`./${slug}/create`}>Create new {$model.name}</a>
