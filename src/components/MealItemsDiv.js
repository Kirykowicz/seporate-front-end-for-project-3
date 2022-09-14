import { useState, useEffect } from "react";

export default function MealItemsDiv({ id, item_id }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/items/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setItem(res);
      });
  }, [item_id]);

  const handleDelete = function () {
    fetch(`http://localhost:9292/meal-items/${item_id}`, {
      method: "DELETE",
    });
  };

  return (
    <div onClick={handleDelete}>
      <h4 className="foodItems">{item.name}</h4>
    </div>
  );
}
