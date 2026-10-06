
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const savedUser = localStorage.getItem("artGalleryUser");

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (email === user.email && password === user.password) {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");

      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;