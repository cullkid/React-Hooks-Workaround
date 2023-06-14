import { useState } from 'react';
import ProductList from './ProductList';
import Basket from './Basket';
import './Style.scss';

const products = [
  { id: 1, name: 'T-Shirt', price: 10 },
  { id: 2, name: 'Skirt', price: 20 },
  { id: 3, name: 'Watch', price: 350 },
];

function ShoppingBasket() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const addToBasket = (item) => {
    setBasket((prevBasket) => {
      const itemIndex = prevBasket.findIndex((i) => i.id === item.id);

      if (itemIndex !== -1) {
        const newBasket = [...prevBasket];
        newBasket[itemIndex] = {
          ...newBasket[itemIndex],
          qty: newBasket[itemIndex].qty + 1,
        };
        return newBasket;
      } else {
        return [...prevBasket, { ...item, qty: 1 }];
      }
    });
  };

  const removeFromBasket = (itemId) => {
    setBasket((prevBasket) =>
      prevBasket
        .map((item) => {
          if (item.id === itemId && item.qty > 0) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        })
        .filter((item) => item.qty !== 0)
    );
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const calculateTotal = () => {
    setTotal(basket.reduce((acc, item) => acc + item.price * item.qty, 0));
  };

  return (
    <>
      <Basket
        basket={basket}
        total={total}
        onCalculateTotal={calculateTotal}
        onRemoveFromBasket={removeFromBasket}
        onClearBasket={clearBasket}
      />
      <hr />
      <ProductList products={products} onAddToBasket={addToBasket} />
    </>
  );
}

export default ShoppingBasket;
