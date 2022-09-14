import { useState } from "react";
export default function Meal({ days }) {
  return (
    <div className="meal-form">
      <h2>New Meal</h2>
      <select name="" id="">
        <option>Choose a day</option>
        {days.map((day) => (
          <option value={day.id}>{day.name}</option>
        ))}
      </select>
    </div>
  );
}
