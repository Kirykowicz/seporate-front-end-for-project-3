import { useState, useEffect } from "react";
import DayDiv from "./DayDiv";

export default function Home() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/days`)
      .then((res) => res.json())
      .then((res) => {
        setDays(res);
      });
  }, []);

  return (
    <div>
      <h1>HERE IS THE GAME PLAN FOR THE WEEK</h1>
      <div>
        {days.map((day) => (
          <DayDiv name={day.name} id={day.id} key={day.id} />
        ))}
      </div>
    </div>
  );
}
