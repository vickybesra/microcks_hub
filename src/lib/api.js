// src/lib/api.js
export async function fetchMocks() {
    const apiUrl = import.meta.env.VITE_MICROCKS_API_URL || 'http://localhost:8080/api/mocks';
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error('Failed to fetch mocks');
    }
    return res.json();
  }
  
  export async function fetchMockDetail(id) {
    const apiUrl = import.meta.env.VITE_MICROCKS_API_URL || 'http://localhost:8080/api/mocks';
    const res = await fetch(`${apiUrl}/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch mock detail');
    }
    return res.json();
  }
  