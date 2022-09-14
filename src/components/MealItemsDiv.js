import { useState, useEffect } from "react";

export default function MealItemsDiv({ id, item_id, deleteButton }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/items/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setItem(res);
      });
  }, [item_id]);

  return (
    <div onClick={() => deleteButton(item_id)}>
      <h4 className="foodItems title">{item.name}</h4>
    </div>
  );
}
