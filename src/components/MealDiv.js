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

  // const handleDelete = function (id) {
  //   fetch(`http://localhost:9292/meal-items/${id}`, {
  //     method: "DELETE",
  //   });
  // };

  const handleDelete = function (item_id) {
    fetch(`http://localhost:9292/meal-items/${item_id}`, {
      method: "DELETE",
    });
    let newArray = meal_items.filter((item) => item.id !== item_id);
    setItems(newArray);
  };

  return (
    <div>
      <h3 className="mealName">{mealName}</h3>
      <div>
        {meal_items.map((item) => (
          <MealItemsDiv
            id={item.item_id}
            key={item.id}
            item_id={item.id}
            deleteButton={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
