import React from "react";

function Cart({ cart, setCart }) {
  // Function to add one unit
  const handleAdd = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to remove one unit
  const handleRemove = (id) => {
    const found = cart.find((item) => item.id === id);
    if (found.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  // Calculate total
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <aside className="cart">
      <h2>Votre panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span>{item.title}</span>
              <button onClick={() => handleRemove(item.id)}><span className="icon-minus"></span></button>
              <span>{item.quantity}</span>
              <button onClick={() => handleAdd(item.id)}><span className="icon-plus"></span></button>
              <span>{(item.price * item.quantity).toFixed(2)} €</span>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <strong>Total : {total.toFixed(2)} €</strong>
      </div>
    </aside>
  );
}

export default Cart;