import DayDiv from "./DayDiv";

export default function Home({ days }) {
  return (
    <div className="planner">
      <h1 className="title-plan">HERE IS THE GAME PLAN FOR THE WEEK</h1>
      <div>
        {days.map((day) => (
          <DayDiv name={day.name} id={day.id} key={day.id} />
        ))}
      </div>
    </div>
  );
}
