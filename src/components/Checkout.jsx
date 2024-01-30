import Modal from "./UI/Modal";
import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";
import cartContext from "../context/cartContext";
import { useForm } from "react-hook-form";

const Star = <span style={{ color: "red" }}>*</span>;

export default function Checkout() {
  const progressCtx = useContext(ProgressContext);
  const cartCtx = useContext(cartContext);
  const { register, handleSubmit } = useForm();

  const totalPrice = cartCtx.cartItems.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const mySubmitHandler = (data) => {
    for (let key in data) {
      if (data[key] === "") {
        alert("Please fill out all fields.");
        return;
      }
    }
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <Modal
      isOpen={progressCtx.progress === "checkout"}
      onClose={() => progressCtx.hide()}
    >
      <h2>Checkout</h2>
      <p>Total Price: ${totalPrice}</p>
      <form onSubmit={handleSubmit(mySubmitHandler)}>
        <div className="control">
          <label htmlFor="fullName">{Star}Full Name: </label>
          <input
            {...register("fullName")}
            id="fullName"
            placeholder="Full name"
          />
        </div>
        <div className="control">
          <label htmlFor="email">{Star}Email Id: </label>

          <input {...register("email")} id="email" placeholder="Email" />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postalCode">{Star}Postal Code: </label>
            <input
              {...register("postalCode")}
              id="postalCode"
              placeholder="Postal Code"
            />
          </div>
          <div className="control">
            <label htmlFor="city">{Star}City: </label>
            <input {...register("city")} id="city" placeholder="City" />
          </div>
        </div>

        <div className="control">
          <label htmlFor="address">{Star}Address: </label>

          <input {...register("address")} id="address" placeholder="Address" />
        </div>

        <p className="modal-actions">
          <button
            type="button"
            onClick={() => progressCtx.hide()}
            className="text-button"
          >
            Close
          </button>
          <button type="submit" className="button">
            Submit
          </button>
        </p>
      </form>
    </Modal>
  );
}
