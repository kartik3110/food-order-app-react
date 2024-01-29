import { createContext, useState } from "react";

export const ProgressContext = createContext({
  progress: null,
  showCart: () => {},
  showCheckout: () => {},
  hide: () => {},
});

export const ProgressContextProvider = (props) => {
  const [progress, setProgress] = useState("");
  const showCart = () => setProgress("cart");
  const showCheckout = () => setProgress("checkout");
  const hide = () => setProgress("");

  return (
    <ProgressContext.Provider
      value={{ progress, showCart, showCheckout, hide }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
};
