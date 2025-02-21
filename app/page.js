```javascript
// app/page.js

export default async function Page({ params }) {
  const res = await fetch(`https://api.example.com/data/${params.id}`, {
    next: {
      revalidate: 60 // Regenerate every 60 seconds
    }
  });
  const data = await res.json();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const res = await fetch(`https://api.example.com/data/${params.id}`);
  const data = await res.json();
  return {
    title: data.title
  };
}
```