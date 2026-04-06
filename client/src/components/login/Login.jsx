import useLogin from "../../hooks/useLogin";

export default function Login({ onLogin }) {
  const { submitHandler } = useLogin();

  return (
    <section id="login-page">
      <form id="login" onSubmit={(e) => submitHandler(e, onLogin)}>
        <div className="container">
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />

          <label htmlFor="login-pass">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            placeholder="Password"
          />
          <input type="submit" className="btn submit" value="Login" />
        </div>
      </form>
    </section>
  );
}
