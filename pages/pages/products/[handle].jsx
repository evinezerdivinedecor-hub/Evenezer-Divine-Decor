// pages/products/[handle].jsx
import { useRouter } from 'next/router';
import products from '../../../data/evinezer_products_module';
import { useCart } from '../../../context/CartContext';

export default function ProductDetail() {
  const router = useRouter();
  const { handle } = router.query;
  const product = products.find(p => p.handle === handle);
  const { addItem } = useCart();

  if (!product) return <div style={{padding:40}}>Product not found.</div>;

  const variant = product.variants?.[0] || {};

  return (
    <main style={{ maxWidth:900, margin:'2rem auto', padding:'0 1rem' }}>
      <h1>{product.title}</h1>
      <img src={product.images?.[0] || '/images/placeholder.png'} alt={product.images_alt?.[0] || product.title} style={{maxWidth:'100%', borderRadius:8}} />
      <p>{product.description}</p>
      <div style={{fontSize:22, fontWeight:700}}>{variant.price ? `$${variant.price}` : 'Price TBA'}</div>
      <div style={{marginTop:12}}>
        <button onClick={() => addItem({ id: `${product.handle}-v1`, title: product.title, price: variant.price || 0, quantity: 1, image: product.images?.[0] })}>Add to cart</button>
      </div>
    </main>
  );
}
