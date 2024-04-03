import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import ContactMe from "./Components/ContactMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar userName="Kritesh" />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contactme" element={<ContactMe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;