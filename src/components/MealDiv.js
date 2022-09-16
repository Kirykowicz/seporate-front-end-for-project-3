import { useState, useEffect } from "react";
import MealItemsDiv from "./MealItemsDiv";

export default function MealDiv({ mealNumber, mealId }) {
  const [meal_items, setItems] = useState([]);

  let mealName = "";
  if (mealNumber === 1) mealName = "Breakfast";
  if (mealNumber === 2) mealName = "Lunch";
  if (mealNumber === 3) mealName = "Dinner";


  useEffect(() => {
    fetch(`http://localhost:9292/meals/${mealId}/items`)
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);

  const handleDelete = function (item_id) {
    fetch(`http://localhost:9292/meal-items/${item_id}`, {
      method: "DELETE",
    });
    let newArray = meal_items.filter((item) => item.id !== item_id);
    setItems(newArray);
  };

  return (
    <div className="single">
      <h3 className="mealName-title">{mealName}</h3>
      <div className="single-info">
        {meal_items.map((item) => (
          <div>
            <MealItemsDiv
              id={item.item_id}
              key={item.id}
              item_id={item.id}
            />
            <button onClick={ () => handleDelete(item.id)}>Delete?</button>
          </div>
        ))}
      </div>
    </div>
  );
}
