import { useNavigate } from "react-router";

export default function useLogin() {
  const navigate = useNavigate();
  const submitHandler = (e, onLogin) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return alert("Email and password are required!");
    }

    try {
      onLogin(email, password);
    } catch (err) {
      alert(err.message);
    }

    navigate("/");
  };

  return { submitHandler };
}
