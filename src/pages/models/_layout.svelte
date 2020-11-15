<!-- routify:options preload="proximity" -->
<script>
  import Sidebar from "../../components/Sidebar.svelte";
</script>

<style>
  .models {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
  }

  aside {
    flex: 1;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.12);
    /* box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); */
    border-radius: 0.8rem;
    padding: 20px;
  }

  .content {
    flex: 3;
  }
</style>

<section class="models">
  <aside>
    <Sidebar />
  </aside>
  <div class="content">
    <h2>Models</h2>

    <div class="flex">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</section>
