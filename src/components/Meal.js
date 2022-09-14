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

  const dayName = function (num) {
    if (num === 8) return "Monday";
    if (num === 9) return "Tuesday";
    if (num === 10) return "Wednesday";
    if (num === 11) return "Thursday";
    if (num === 12) return "Friday";
    if (num === 13) return "Saturday";
    if (num === 14) return "Sunday";
  };

  const mealName = function (num) {
    if (num === 1) return "Breakfast";
    if (num === 2) return "Lunch";
    if (num === 3) return "Dinner";
  };

  return (
    <div className="meal-form">
      <h2>ADD A MEAL ITEM</h2>
      <form onSubmit={handleSubmit}>
        <select value={meal} onChange={(e) => setMeal(e.target.value)}>
          <option>Choose a day and meal</option>
          {dayMeal.map((res) => (
            <option value={res.id}>
              {dayName(res.day_id)} - {mealName(res.meal_number)}
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
