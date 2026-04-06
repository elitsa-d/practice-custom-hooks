import { useNavigate } from "react-router";
import { useEffect } from "react";
import useLogout from "../../hooks/useLogout";

export default function Logout({ onLogout }) {
  useLogout(onLogout);

  return null;
}
