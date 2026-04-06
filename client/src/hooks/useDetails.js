import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const baseUrl = `http://localhost:3030/jsonstore/games/`;

export default function useDetails() {
  const [game, setGame] = useState({});
  const { gameId } = useParams();

  useEffect(() => {
    fetch(`${baseUrl}/${gameId}`)
      .then((response) => response.json())
      .then((result) => setGame(result))
      .catch((error) => alert(error.message));
  }, [gameId]);

  return { game };
}
