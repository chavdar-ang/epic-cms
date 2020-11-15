<script>
  import { url, isActive } from "@roxi/routify";
  import models from "../database/schema";

  // console.log($url('/test'));
</script>

<style>
  .side-nav {
    /** */
  }

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
