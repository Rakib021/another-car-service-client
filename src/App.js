import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Home from './components/Home/Home/Home';
import Navbar from './components/Home/shared/Navbar/Navbar';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
       <Route path ="/home" element={<Home></Home>}></Route>
       <Route path ="/about" element={<About></About>}></Route>
       <Route path ="/login" element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
