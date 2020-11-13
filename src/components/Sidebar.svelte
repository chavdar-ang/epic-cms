<script>
    import { url, isActive } from "@roxi/routify";
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
      <li><a href="/crud/{item}" class:current={$isActive(`/crud/${item}`)}>{item}</a></li>
    {/each}
  </ul>
</nav>
