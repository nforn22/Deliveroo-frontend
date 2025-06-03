import React from "react";

function CategoriesNav({ categories }) {
  if (!categories) return null;
  return (
    <nav className="categories-nav">
      {categories.map((category) => (
        <button key={category.name}>{category.name}</button>
      ))}
    </nav>
  );
}

export default CategoriesNav;