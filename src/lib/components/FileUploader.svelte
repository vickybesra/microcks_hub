<script>
  import { createEventDispatcher } from 'svelte';
  let file; // We'll bind this to the file input
  const dispatch = createEventDispatcher();

  async function handleSubmit() {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    // Build the FormData
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/Imports/upload', {
        method: 'POST',
        body: formData
      });
      if (!res.ok) {
        throw new Error('Upload failed');
      }
      dispatch('uploadSuccess');
      alert('File uploaded successfully!');
    } catch (err) {
      console.error(err);
      dispatch('uploadError', { error: err.message });
      alert('File upload error: ' + err.message);
    }
  }

  function handleFileChange(event) {
    // This example expects a single file, so we take the first one
    file = event.target.files?.[0];
  }
</script>

<div class="uploader">
  <label>Select an API definition:</label>
  <input type="file" on:change={handleFileChange} />
  <button on:click={handleSubmit}>Upload</button>
</div>

<style>
.uploader {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.uploader label {
  font-weight: 500;
}
</style>
