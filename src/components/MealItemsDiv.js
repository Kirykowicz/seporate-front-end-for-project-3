import { useState, useEffect } from "react";

export default function MealItemsDiv({ id }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/items/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setItem(res);
      });
  }, []);
  return (
    <div>
      <h4 className="foodItems">{item.name}</h4>
    </div>
  );
}
