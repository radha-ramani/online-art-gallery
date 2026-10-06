import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("adminLoggedIn", "true");

      alert("Admin Login Successful!");

      navigate("/admin");
    } else {
      alert("Invalid Admin Email or Password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>Admin Login</h1>

        <form onSubmit={handleAdminLogin}>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Login as Admin
          </button>

        </form>

      </div>
    </div>
  );
}

export default AdminLogin;