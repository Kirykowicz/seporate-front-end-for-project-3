import { useState, useEffect } from "react";
export default function Meal({ days }) {
  const [meal, setMeal] = useState(0);
  const [dayMeal, setDayMeal] = useState([]);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:9292/meals`)
      .then((res) => res.json())
      .then((res) => {
        setDayMeal(res);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/items`)
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newMealItem = {
      meal_id: meal,
      item_id: item,
    };

    fetch(`http://localhost:9292/meal-items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMealItem),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div className="meal-form">
      <h2>ADD A MEAL ITEM</h2>
      <form onSubmit={handleSubmit}>
        <select value={meal} onChange={(e) => setMeal(e.target.value)}>
          <option>Choose a day and meal</option>
          {dayMeal.map((res) => (
            <option value={res.id}>
              Day id:
              {res.day_id} meal number:
              {res.meal_number}
            </option>
          ))}
        </select>
        <select value={item} onChange={(e) => setItem(e.target.value)}>
          <option>choose an item</option>
          {items.map((individual_item) => (
            <option value={individual_item.id}>{individual_item.name}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
