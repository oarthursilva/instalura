export async function HttpClient(url, { headers, body, ...options }, fetchModule = fetch) {
  return fetchModule(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Fail to login with credentials provided.');
    });
}
