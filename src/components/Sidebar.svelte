<script>
  import { url, isActive } from "@roxi/routify";
  import models from "../models";
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

<nav class="side-nav">
  <ul>
    {#each Object.keys(models) as item}
      <li>
        <a
          href="/models/{item}"
          class:current={$isActive(`/models/${item}`)}>{item}</a>
      </li>
    {/each}
  </ul>
</nav>
