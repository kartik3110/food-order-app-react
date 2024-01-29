import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./context/cartContext";
import { ProgressContextProvider } from "./context/ProgressContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <ProgressContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </ProgressContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
