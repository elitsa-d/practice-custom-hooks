import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function useCreateGame() {
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const imageUploadClickHandler = () => {
    setImageUpload((state) => !state);
  };

  const imageChangeHandler = (e) => {
    const image = e.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    setImagePreview(imageUrl);
  };

  const createGameHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { image, ...data } = Object.fromEntries(formData);

    if (imageUpload) {
      //TODO updaload image
    } else {
      data.imageUrl = image;
    }
    data.players = Number(data.players);
    data._createdOn = Date.now();

    await request("games", "POST", data);

    navigate("/games");
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imagePreview);
      setImagePreview(null);
    };
  }, [imageUpload]);

  return {
    createGameHandler,
    imageUploadClickHandler,
    imageChangeHandler,
    setImagePreview,
    imageUpload,
    imagePreview,
  };
}
