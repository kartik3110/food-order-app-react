import { useContext } from "react";
import cartContext from "../context/cartContext";
export default function Mealitem({ mealData }) {
  const { name, price, description, image } = mealData;
  const imgSrc = `http://localhost:3000/${image}`;
  const cart = useContext(cartContext);
  return (
    <li className="meal-item">
      <article>
        <div>
          <img src={imgSrc} />
          <h3>{name}</h3>
          <p className="meal-item-price">${price}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button" onClick={() => cart.addItem(mealData)}>
            Add to cart
          </button>
        </p>
      </article>
    </li>
  );
}
