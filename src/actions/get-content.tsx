// app/page.tsx
export default async function getContent() {
  const res = await fetch("http://localhost:3000/api/content", {
    cache: "no-store",
  });
  return res.json();
}