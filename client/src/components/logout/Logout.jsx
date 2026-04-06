import useLogout from "../../hooks/useLogout";

export default function Logout({ onLogout }) {
  useLogout(onLogout);

  return null;
}
