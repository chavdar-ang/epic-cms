<script>
  import { schema, list } from "../../../stores";
  import models from "../../../models";
  import { params } from "@roxi/routify";
  import api from "../../../lib/api";
  import { beforeUrlChange } from "@roxi/routify";

  // Components
  import IndexComponent from "./_components/IndexComponent.svelte";
  import { beforeUpdate, onMount } from "svelte";

  $: model = models[$params.slug];

  $beforeUrlChange(async (event, store) => {
    let response = await api("http://localhost:3000/" + model.collection);

    $list = response.data;

    // here
    console.log('url change');

    return true;
  });

  onMount(async () => {
    let response = await api("http://localhost:3000/" + model.collection);
    $list = response.data;
  });

  // beforeUpdate(async () => {
  //   let response = await api("http://localhost:3000/" + model.collection);
  //   $list = response.data;
  //   console.log('test');
  // });

  export let slug;
</script>

<h1>{model.name}</h1>

<div>
  <IndexComponent {model} />
  <a href={`./${slug}/create`}>Create new {model.name}</a>
</div>
