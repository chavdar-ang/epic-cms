<!-- routify:options preload="proximity" -->
<script>
  import Sidebar from "../../components/Sidebar.svelte";
</script>

<style>
    .container {
        background-color: peachpuff;
    }
    .flex {
        display: flex;
    }

    .sidebar {
        flex: 1;
        background-color:palegoldenrod;
    }

    .content {
        flex: 3;
    }
</style>

<div class="container">
    <h2>Models</h2>
    
    <div class="flex">
      <div class="sidebar">
        <Sidebar />
      </div>
    
      <div class="content">
        <slot />
      </div>
    </div>
</div>
