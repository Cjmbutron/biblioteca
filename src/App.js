import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Menu from './componentes/menu';
import Inicio from "./paginas/Inicio"

function App() {
  return (
    <Router>
      <Menu/>

      <Routes>
        <Route path ='/' element={<Inicio/>} />
      </Routes>
    </Router>
  );
}

export default App;
