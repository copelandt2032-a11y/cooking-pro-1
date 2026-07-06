export default function RecipeCard({ recipe }) {
  return (
    <div className="card">

      <img src={recipe.image} alt={recipe.title} />

      <h2>{recipe.title}</h2>

      <p>{recipe.description}</p>

      <button>View Recipe</button>

    </div>
  );
}
