import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
  const [cartIsVisible, setIsCartVisible] = useState(false);

  const visibleCartHandler = () => {
    setIsCartVisible(true);
  }
  const invisibleCartHandler = () => {
    setIsCartVisible(false);
  }
  return (
    <Fragment>
      {cartIsVisible && <Cart onClose={invisibleCartHandler}/>}
      <Header onShowCart={visibleCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
