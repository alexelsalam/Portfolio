import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navigation";
function App() {
  return (
    <div className="h-screen overflow-hidden ">
      <Header />
      <div id="bubble" className="bubble -z-10"></div>
      <div className="mt-16">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
