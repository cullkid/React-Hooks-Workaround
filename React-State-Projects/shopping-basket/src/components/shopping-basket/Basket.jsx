// Basket.js
import React, { useEffect } from 'react'

export default function Basket({ basket, total, onCalculateTotal, onRemoveFromBasket, onClearBasket }) {

  useEffect(() => {
    onCalculateTotal();
  }, [basket]);

  return (
    <div>
      <h2>Basket</h2>

      {basket.length === 0 && <p>Your basket is empty</p>}

      {basket.length !== 0 && (
        <>
          <table width={500}>
            <thead>
              <tr style={{ textAlign:"left" }}>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => onRemoveFromBasket(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>&nbsp;</td>
              </tr>
              <tr style={{ fontWeight:"bold", marginTop: "20px" }}>
                <td colSpan={3} style={{textAlign: "right", paddingRight: "20px"}}>Total</td>
                <td>£{total}</td>
              </tr>
              <tr>
                <td colSpan={4}>&nbsp;</td>
              </tr>
            </tfoot>
          </table>
        
          <button onClick={onClearBasket}>Clear Basket</button>
        </>
      )}
    </div>
  );
}