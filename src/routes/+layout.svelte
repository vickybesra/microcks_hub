<script>
  import '$lib/styles/global.css';
  import '$lib/styles/layout.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="layout">
  <Navbar />
  <div class="content">
    <Sidebar />
    <main>
      <slot />
    </main>
  </div>
</div>
