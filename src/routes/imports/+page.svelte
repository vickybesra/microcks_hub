<script>
  import FileUploader from '$lib/components/FileUploader.svelte';
  import '$lib/styles/Imports.css';
</script>

<div class="imports-page">
  <h1>Import Jobs</h1>
  <p>
    Imports periodically scan source repositories for new or updated API definitions.
    You can also manually upload files here to create or update mocks.
  </p>

  <!-- The file uploader component -->
  <FileUploader />
</div>

<style>
.imports-page {
  padding: 1rem;
}

.imports-page h1 {
  margin-bottom: 0.5rem;
}

.imports-page p {
  margin-bottom: 1rem;
}
</style>
