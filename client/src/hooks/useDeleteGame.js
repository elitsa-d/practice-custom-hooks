import { useNavigate } from "react-router";
import { useParams } from "react-router";

export default function useDeleteGame(game) {
  const { gameId } = useParams();
  const navigate = useNavigate();

  const deleteGameHandler = async () => {
    const isConfirmed = confirm(
      `Are you sure you want to delete game: ${game.title}`,
    );

    if (!isConfirmed) {
      return;
    }

    try {
      await fetch(`${baseUrl}/${gameId}`, {
        method: "DELETE",
      });

      navigate("/games");
    } catch (error) {
      alert("Unable to delete game: ", error.message);
    }
  };

  return { deleteGameHandler };
}
