<script>
    import { url, isActive } from "@roxi/routify";
    // import models from "../database/schema";
    import models from "../database/schema";
</script>

<style>
    .current {
        color: salmon;
    }
</style>

<nav>
  <ul>
    {#each Object.keys(models) as item}
      <li><a href="/models/{item}" class:current={$isActive(`/models/${item}`)}>{item}</a></li>
    {/each}
  </ul>
</nav>
