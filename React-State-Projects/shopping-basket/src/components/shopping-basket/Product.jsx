// Product.js
export default function Product({ product, onAddToBasket }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>£{product.price}</p>
      <button onClick={() => onAddToBasket(product)}>Add to Basket</button>
    </div>
  );
}
