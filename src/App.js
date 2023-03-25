
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Project from './components/Pages/Project';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Project" element={<Project/>}/>
                <Route path="Contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
