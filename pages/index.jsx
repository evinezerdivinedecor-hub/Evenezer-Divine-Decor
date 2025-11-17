// pages/index.jsx
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ maxWidth:900, margin:'3rem auto', padding:'0 1rem' }}>
      <h1>Evinezer Divine Devor</h1>
      <p>Toys & Christmas Décor for Families</p>
      <p><Link href="/products"><a>Browse products →</a></Link></p>
    </main>
  );
}
