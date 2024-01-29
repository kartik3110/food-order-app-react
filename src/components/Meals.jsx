import { useEffect, useState } from "react";
import Mealitem from "./Mealitem";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch("http://localhost:3000/meals");
        if (!res.ok) {
          throw new Error("fetching failed");
        }
        const mealsData = await res.json();
        setMeals(mealsData);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {meals.map((meal) => {
        return <Mealitem key={meal.id} mealData={meal} />;
      })}
    </ul>
  );
}
