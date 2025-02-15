// src/routes/mocks/[id]/+page.server.js
import { fetchMockDetail } from '$lib/api';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const { id } = params;
  try {
    const mock = await fetchMockDetail(id);
    return { mock };
  } catch (err) {
    throw error(500, 'Failed to load mock detail');
  }
}
