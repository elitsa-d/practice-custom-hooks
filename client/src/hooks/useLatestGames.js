import { useEffect } from "react";
import { useState } from "react";
import request from "../utils/request";

export default function useLatestGames() {
  const [latestGames, setLatestGames] = useState([]);

  useEffect(() => {
    request("games")
      .then((result) => {
        const resultGames = Object.values(result)
          .sort((a, b) => b._createdOn - a._createdOn)
          .slice(0, 3);
        setLatestGames(resultGames);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return { latestGames };
}
