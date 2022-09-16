// import Meal from "./Meal"
export default function PlanMealDisplay({ mealId, meals }) {

    const meal = mealId ? meals.find(meal => meal.id == mealId) : {}
    return (
        <div className="sub-grid">
            <div className="top-information">
                <div className="show-name">
                    <h2>
                        {mealId == 0 ? " " : meal.name}
                    </h2>
                </div>

                <div className="show-nutrients">
                    <p>
                        {mealId == 0 ? " " : meal.nutrients}
                    </p>
                </div>
            </div>

            <div className="show-image">
                <img src={mealId == 0 ? "https://cdn-icons-png.flaticon.com/128/857/857681.png" : meal.image} />
            </div>

            <div className="show-url">
                <h3>{mealId == 0 ? " " : meal.url} </h3>
            </div>

            <div className="instructions">
                <div className="show-ingredients">
                <div dangerouslySetInnerHTML={{__html: meal.ingredients}} />
                </div>

                <div className="show-recipe">
                    {/* <p>{mealId == 0 ? " " : meal.recipe}</p> */}
                    <div dangerouslySetInnerHTML={{__html: meal.recipe}} />
                </div>
            </div>
        </div>
    )
}
