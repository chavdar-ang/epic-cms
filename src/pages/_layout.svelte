<!-- routify:options preload="proximity" -->
<script>
  import Nav from "../components/Nav.svelte";
  import Sidebar from "../components/Sidebar.svelte";
</script>

<div>
    <Sidebar />
    <Nav />
</div>
<slot />