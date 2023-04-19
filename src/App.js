import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Pages/Home/Header";
import About from "./components/Pages/About/About";
import Project from "./components/Pages/Projects/Project";
import Contact from "./components/Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Header/>} />
        <Route path="About" element={<About />} />
        <Route path="Project" element={<Project />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
