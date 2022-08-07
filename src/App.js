import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsVisible, setIsCartVisible] = useState(false);

  const visibleCartHandler = () => {
    setIsCartVisible(true);
  }
  const invisibleCartHandler = () => {
    setIsCartVisible(false);
  }
  return (
    <CartProvider>
      {cartIsVisible && <Cart onClose={invisibleCartHandler}/>}
      <Header onShowCart={visibleCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
