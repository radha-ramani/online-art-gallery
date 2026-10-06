import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Artists from "./pages/Artists";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* NAVBAR */}
        <nav className="navbar">

          <div className="logo">
            Art<span>Gallery</span>
          </div>

          <div className="nav-links">

            <Link to="/">Home</Link>

            <Link to="/gallery">Gallery</Link>

            <Link to="/artists">Artists</Link>

          </div>

          <div className="nav-buttons">

            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>

            <Link to="/signup">
              <button className="signup-btn">Sign Up</button>
            </Link>

            <Link to="/admin-login">
              <button className="login-btn">Admin</button>
            </Link>

          </div>

        </nav>

        {/* PAGES */}
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/artists" element={<Artists />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/admin-login" element={<AdminLogin />} />

          <Route path="/admin" element={<AdminDashboard />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
