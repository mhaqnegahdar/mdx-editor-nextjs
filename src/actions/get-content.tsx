export default async function getContent() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/content`, {
    cache: "no-store",
  });
  return res.json();
}
