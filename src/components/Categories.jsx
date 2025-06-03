import React from "react";
import MenuItem from "./MenuItem.jsx";

function Categories({ categories, cart, setCart }) {
  // early return if no categories data
  if (!categories) return null;
  
  return (
    <section className="categories">
      {categories.map((category) =>
        // only render categories that have meals
        category.meals && category.meals.length > 0 ? (
          <div key={category.name} className="category">
            <h2>{category.name}</h2>
            {/* render all meals for this category */}
            <div className="meals">
              {category.meals.map((meal) => (
                <MenuItem
                  key={meal.id}
                  meal={meal}
                  cart={cart}
                  setCart={setCart}
                />
              ))}
            </div>
          </div>
        ) : null
      )}
    </section>
  );
}

export default Categories;