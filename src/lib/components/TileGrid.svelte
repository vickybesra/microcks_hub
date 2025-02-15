<script>
  import '../styles/tilegrid.css';
  export let tiles = [];
</script>

<div class="tile-grid">
  {#each tiles as tile}
    <div class="tile">
      <h2>{tile.title}</h2>
      <p>{tile.description}</p>
    </div>
  {/each}
</div>
