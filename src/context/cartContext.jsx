import { createContext, useState } from "react";
// inital value is not mandatory. it just provides better autoComplete
const cartContext = createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
}); // can not export default a const upon initialisation

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const itemIndex = cartItems.findIndex((el) => el.id === item.id);
    const newItems = [...cartItems];
    if (itemIndex > -1) {
      // already in cartItems
      const oldItem = cartItems[itemIndex];
      const updatedItem = { ...oldItem, quantity: oldItem.quantity + 1 };
      newItems[itemIndex] = updatedItem;
    } else {
      // new item
      newItems.push({ ...item, quantity: 1 });
    }
    setCartItems(newItems);
  };

  // check logic it might fail later
  const removeItem = (id) => {
    const newItems = [...cartItems];
    const itemIndex = cartItems.findIndex((el) => el.id === id);
    if (cartItems[itemIndex].quantity > 1) {
      newItems[itemIndex].quantity--;
    } else {
      newItems.splice(itemIndex, 1); // delete one element starting from itemIndex.
    }
    setCartItems(newItems);
  };

  return (
    <cartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </cartContext.Provider>
  );
};

export default cartContext;
