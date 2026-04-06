import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import request from "../utils/request";

export default function useEdit(initialValues) {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    request(`games/${gameId}`)
      .then((result) => {
        setValues(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [gameId]);

  const editGameHandler = async () => {
    try {
      await request(`games/${gameId}`, "PUT", values);
      navigate(`/games/${gameId}/details`);
    } catch (err) {
      alert(err.message);
    }
  };

  return { values, changeHandler, editGameHandler };
}
