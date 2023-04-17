

import './App.css';
import {Routes , Route } from 'react-router-dom'
import Home from './components/Home';
import Contect from './Contect';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
<Route path='/' element={<Home />} />
<Route path='contect' element={<Contect/>}/>

    </Routes>
    </>
  );
}

export default App;
