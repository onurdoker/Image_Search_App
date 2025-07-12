export function searchImages(q) {
  const params = new URLSearchParams({
    key: '51289001-701d2fcdb5357aeffdf8b918c',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
