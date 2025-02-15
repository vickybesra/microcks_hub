// src/routes/imports/upload/+server.js
import { error, json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    // Parse form data
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      throw error(400, 'No file uploaded');
    }

    // If you need the file contents, you can do:
    // const fileContents = await file.text();   // if it's text-based
    // const arrayBuffer = await file.arrayBuffer(); // if it's binary

    // Example: log file details
    console.log('Received file:', file.name, file.size);

    // TODO: pass file to Microcks, or store it, etc.

    // Return success JSON
    return json({ success: true });
  } catch (err) {
    console.error(err);
    throw error(500, 'File upload failed');
  }
}
// src/routes/importers/upload/+server.js
import { error, json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      throw error(400, 'No file uploaded');
    }

    console.log('Received file:', file.name, file.size);

    // (Optional) Process the file, e.g., read contents or store it

    return json({ success: true });
  } catch (err) {
    console.error(err);
    throw error(500, 'File upload failed');
  }
}
