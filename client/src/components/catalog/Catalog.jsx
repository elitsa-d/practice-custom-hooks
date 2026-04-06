import Game from "../game-card/GameCard";
import useCatalog from "../../hooks/useCatalog";

export default function Catalog() {
  const { games } = useCatalog();

  return (
    <section id="catalog-page">
      <h1>Catalog</h1>

      {games.length === 0 && (
        <h3 className="no-articles">No Added Games Yet</h3>
      )}

      <div className="catalog-container">
        {games.map((game) => (
          <Game key={game._id} {...game} />
        ))}
      </div>
    </section>
  );
}
