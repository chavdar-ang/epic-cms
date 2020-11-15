<script>
  import { url, isActive } from "@roxi/routify";
  // import { route, layout, page } from "@roxi/routify";
  import { page } from "@roxi/routify";

  $: path = $page.path;
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    list-style: none;
    padding: 10px;
    display: flex;
  }

  ul li {
    margin: 0 5px;
  }
</style>

<nav>
  <ul>
    <li>
      <a href={$url('./index')} class:current={$isActive('./index')}>Home</a>
    </li>

    <li>
      <a href={$url('./about')} class:current={$isActive('/about')}>About</a>
    </li>

    <li>
      <a href={$url('./models')} class:current={$isActive('/models')}>Models</a>
    </li>
  </ul>
  <code>Path: {path}</code>
</nav>
