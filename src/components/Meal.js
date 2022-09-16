import { useState, useEffect } from "react";
import PlanMealDisplay from "./PlanMealDisplay";
export default function Meal({ days }) {
  const [meal, setMeal] = useState(0);
  const [dayMeal, setDayMeal] = useState([]);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(0);

  const [searchInput, setSearchInput] = useState("");

  const daysMap = {}
  days.forEach(day => {
    daysMap[day.id] = day.name
  })

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

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    items.filter((item) => {
      return item.name.match(searchInput);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newMealItem = {
      meal_id: meal,
      item_id: item,
    };

    fetch(`http://localhost:9292/meal-items`, { //For adding a meal to the planner
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMealItem),
    })
      .then((res) => res.json())
      .then();
  };

  const dayName = function (num) {
    return daysMap[num]
  };

  const mealName = function (num) {
    if (num === 1) return "Breakfast";
    if (num === 2) return "Lunch";
    if (num === 3) return "Dinner";
  };

  return (
    <div className='main-grid'>
      <div className="meal-form">
        <h2>PLAN YOUR MEALS</h2>
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
            <option>Food</option>
            {items.map((individual_item) => (
              <option value={individual_item.id}>{individual_item.name}</option>
            ))}
          </select>
          <button type="submit">Add</button>
        </form>


      </div>
      <PlanMealDisplay mealId={item} meals={items} />
    </div>
  );
}
