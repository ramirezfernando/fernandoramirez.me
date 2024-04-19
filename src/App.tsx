import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header"
import About from './components/About';
import Projects from './components/Projects';
//import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
  <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path='' element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
