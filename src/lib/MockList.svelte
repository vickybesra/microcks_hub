<!-- src/lib/MockList.svelte -->
<script>
  export let mocks = [];
</script>

<ul>
  {#each mocks as mock}
    <li>
      <a href="/mocks/{mock.id}">{mock.name}</a>
    </li>
  {/each}
</ul>
