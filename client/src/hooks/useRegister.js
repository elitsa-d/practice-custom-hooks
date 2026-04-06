import { useNavigate } from "react-router";

export default function useRegister() {
  const navigate = useNavigate();

  const registerSubmit = (formData, onRegister) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    //Validation
    if (!email || !password) {
      return alert("Email and password are required.");
    }

    if (password !== confirmPassword) {
      return alert("Password mismatch");
    }

    try {
      //Register User
      onRegister(email, password);

      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return { registerSubmit };
}
