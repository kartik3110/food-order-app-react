import { useContext } from "react";
import Modal from "./UI/Modal";
import { ProgressContext } from "../context/ProgressContext";
import cartContext from "../context/cartContext";
export default function Cart() {
  const progressCtx = useContext(ProgressContext);
  const cartCtx = useContext(cartContext);
  const totalPrice = cartCtx.cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  return (
    <Modal isOpen={progressCtx.progress === "cart"}>
      <h2>Cart</h2>
      <ul>
        {cartCtx.cartItems.map((meal) => (
          <li key={meal.id} className="cart-item">
            <p>
              {meal.name} - {meal.quantity} X ${meal.price}
            </p>
            <p className="cart-item-actions">
              <button onClick={() => cartCtx.removeItem(meal.id)}>-</button>
              <span>{meal.quantity}</span>
              <button onClick={() => cartCtx.addItem(meal)}>+</button>
            </p>
          </li>
        ))}
      </ul>
      <p className="cart-total">${totalPrice}</p>
      <p className="modal-actions">
        <button onClick={() => progressCtx.hide()} className="text-button">
          Close
        </button>
        <button onClick={() => progressCtx.showCheckout()} className="button">
          Go To Checkout
        </button>
      </p>
    </Modal>
  );
}
