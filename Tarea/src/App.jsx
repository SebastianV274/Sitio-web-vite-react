import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'; 
import Personajes from './Personajes'; 
import Historia from './Historia';
import Inicio from './Inicio';
import './styles.css';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        
        <Route path="/Personajes" element={<Personajes />} />
        <Route path="/Historia" element={<Historia />} />
        
        <Route path="*" element={<h1>404 | No Encontrado</h1>} />
      </Routes>
    </>
  )
}

export default App