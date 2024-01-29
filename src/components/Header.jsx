import logoImg from "../assets/logo.jpg";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import { ProgressContext } from "../context/ProgressContext";
export default function Header() {
  const cart = useContext(cartContext);
  const progressCtx = useContext(ProgressContext);

  //imperative code
  // let totalItems = 0;
  // for (let item of cart.cartItems) {
  //   totalItems += item.quantity;
  // }

  //declarative code (considered better and more readable)
  const totalItems = cart.cartItems.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  return (
    <nav id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>FOOD</h1>
      </div>
      <button
        className="text-button"
        onClick={() => progressCtx.showCart()}
      >{`Cart (${totalItems})`}</button>
    </nav>
  );
}
