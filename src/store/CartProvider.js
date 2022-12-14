import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM_TO_CART") {
    const updatedItem = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    console.log(updatedTotalAmount);
    return {
        items: updatedItem,
        totalAmount: updatedTotalAmount
    };
  };
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM_TO_CART", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE_ITEM_FROM_CART", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
