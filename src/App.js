import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsDisplayed, setCartIsDisplayed] = useState(false);

  const closeCartHandler = () => {
    setCartIsDisplayed(false);
  };

  const showCartHandler = () => {
    setCartIsDisplayed(true);
  };

  return (
    <Fragment>
      {cartIsDisplayed && <Cart onClick={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
