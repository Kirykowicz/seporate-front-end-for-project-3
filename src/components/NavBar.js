import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <header className="site-title">What Am I Eating?</header>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/meal">ADD-MEAL-ITEM</Link>
        </li>
        <li>
          <Link to="/item">ADD-FOOD-ITEM</Link>
        </li>
      </ul>
    </nav>
  );
}
