import { useState, useEffect } from "react";
import Game from "../game-card/GameCard";
import request from "../../utils/request";
import useLatestGames from "../../hooks/useLatestGames";

export default function Home() {
  const [latestGames] = useLatestGames();

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in </h3>
        <img id="logo-left" src="./images/logo.png" alt="logo" />
      </div>

      <div id="home-page">
        <h1>Latest Games</h1>

        <div id="latest-wrap">
          {/* Display div: with information about every game */}
          <div className="home-container">
            {latestGames.length === 0 && (
              <p className="no-articles">No games yet</p>
            )}
            {latestGames.map((game) => (
              <Game key={game._id} {...game} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
