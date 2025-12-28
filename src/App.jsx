import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import "./styles.css";

function App() {
  return (
    <Router>
      <header className="topbar">
        <div className="topbar-content">
          <span className="logo">Booklog</span>

          <nav className="nav-links">
            <Link to="/">Hjem</Link>
            <Link to="/library">Bibliotek</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
