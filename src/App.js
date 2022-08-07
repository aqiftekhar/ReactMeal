import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
