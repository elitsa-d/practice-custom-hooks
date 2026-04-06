import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function useLogout(onLogout) {
  const navigate = useNavigate();

  useEffect(() => {
    onLogout();
    navigate("/");
  }, []);
}
