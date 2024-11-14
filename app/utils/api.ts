const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function fetchData() {
  const res = await fetch(`${baseUrl}/api/your-endpoint`);
  return res.json();
}
