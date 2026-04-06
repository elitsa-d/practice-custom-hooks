import { useState } from "react";
import { useEffect } from "react";
import request from "../utils/request";

export default function useCatalog() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setGames(Object.values(await request("games")));
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  return { games };
}
