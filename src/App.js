import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsDisplayed, setCartIsDisplayed] = useState(false);

  const closeCartHandler = () => {
    setCartIsDisplayed(false);
  };

  const showCartHandler = () => {
    setCartIsDisplayed(true);
  };

  return (
    <CartProvider>
      {cartIsDisplayed && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
