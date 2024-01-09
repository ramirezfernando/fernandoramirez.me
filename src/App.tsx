import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
  <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<>Contact</>} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
