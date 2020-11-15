<!-- routify:options preload="proximity" -->
<script>
  import Nav from "../components/Nav.svelte";
</script>

<header>
  <div class="container">
    <Nav />
  </div>
</header>

<main>
  <div class="container">  
    <slot />
  </div>
</main>
