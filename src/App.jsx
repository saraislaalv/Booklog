import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/library">Mitt bibliotek</Link>
        <Link to="/">Søk</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
