import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import "./App.css";
import Header from "./components/Header";
import RestaurantInfos from "./components/RestaurantInfos";
import CategoriesNav from "./components/CategoriesNav";
import Categories from "./components/Categories.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/restaurant");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {isLoading ? (
        <div className="loader-container">
          <Oval
            height={80}
            width={80}
            color="#00BFFF"
            secondaryColor="#808080"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <main>
          <RestaurantInfos restaurant={data.restaurant} />
          <CategoriesNav categories={data.categories} />
          <div className="content">
            <Categories
              categories={data.categories}
              cart={cart}
              setCart={setCart}
            />
            <Cart cart={cart} setCart={setCart} />
          </div>
        </main>
      )}
    </div>
  );
}

export default App;