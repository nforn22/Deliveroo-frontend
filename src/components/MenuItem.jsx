import React from "react";

function MenuItem({ meal, cart, setCart }) {
  // default image if no picture
  const defaultImage = "https://via.placeholder.com/100x100?text=Plat";

  // function to add one unit to the cart
  const handleAddToCart = () => {
    const found = cart.find((item) => item.id === meal.id); // check if the meal is already in the cart
    if (found) { // if the meal is already in the cart, increment the quantity
      setCart(
        cart.map((item) =>
          item.id === meal.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // if !meal in the cart, add it with quantity 1
      setCart([
        ...cart,
        {
          id: meal.id,
          title: meal.title,
          price: Number(meal.price),
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <div className="menu-item">
      <img src={meal.picture || defaultImage} alt={meal.title} />
      <div>
        <h3>{meal.title}</h3>
        {meal.description && <p>{meal.description}</p>}
        <span>{meal.price} €</span>
      </div>
      <button onClick={handleAddToCart}>+</button>
    </div>
  );
}

export default MenuItem;