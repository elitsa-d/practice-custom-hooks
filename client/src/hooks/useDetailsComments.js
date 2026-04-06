import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import request from "../utils/request";

export default function useDetailsComments(refresh) {
  const [comments, setComments] = useState([]);
  const { gameId } = useParams();

  useEffect(() => {
    request("comments").then((result) => {
      const gameComments = Object.values(result).filter(
        (comment) => comment.gameId === gameId,
      );
      setComments(gameComments);
    });
  }, [gameId, refresh]);

  return { comments };
}
