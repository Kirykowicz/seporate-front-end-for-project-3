import { useState, useEffect } from "react";
import MealDiv from "./MealDiv";

export default function DayDiv({ name, id }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/days/${id}/meals`)
      .then((res) => res.json())
      .then((res) => {
        setMeals(res);
      });
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <div>
        {meals.map((meal) => (
          <MealDiv
            mealNumber={meal.meal_number}
            key={meal.id}
            mealId={meal.id}
          />
        ))}
      </div>
    </div>
  );
}
