<script>
  import TileGrid from '$lib/components/TileGrid.svelte';

  // Example tile data:
  let tiles = [
    {
      title: 'Camara APIs',
      description: 'Camera image capture and streaming APIs.'
    },
    {
      title: 'FINANCE APIs',
      description: 'Payment & Bank integration APIs for microservices.'
    },
    {
      title: 'OpenBanking.org.uk APIs',
      description: 'The OpenBanking spec for the UK.'
    },
    {
      title: 'Microcks Samples APIs',
      description: 'Ready-to-use mocks and test suites for Microcks.'
    }
    // ... Add more as needed
  ];
</script>

<h1>Welcome to Hub Microcks.io</h1>
<p>Explore & test APIs, mocks, and more.</p>

<TileGrid {tiles} />
