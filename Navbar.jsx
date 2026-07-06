import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h2>🍳 Cooking Pro</h2>

      <div>

        <Link to="/">Home</Link>

        <Link to="/recipes">Recipes</Link>

        <Link to="/favorites">Favorites</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

      </div>

    </nav>
  );
}
